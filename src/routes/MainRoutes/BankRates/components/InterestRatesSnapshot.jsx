import { useEffect, useRef, useState, useMemo } from "react"
import CompareBar from "./CompareBar"
import CompareModal from "./CompareModal"
import TableShimmer from "../../../../components/TableShimmer"

const API_URL = "https://backend.quickhomeloan.in/public/api/lenders"

export default function InterestRatesSnapshot() {
  const [banks, setBanks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [selected, setSelected] = useState([])
  const [showCompare, setShowCompare] = useState(false)
  const [activeFilter, setActiveFilter] = useState("ALL")
  const selectAllRef = useRef(null)

  /* ---------------- FETCH BANKS ---------------- */
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(API_URL)
        const json = await res.json()

        if (!json.status) {
          throw new Error("Failed to fetch lenders")
        }

        const normalized = json.data.map((b) => ({
          id: b.id,
          name: b.name,
          type: b.type,
          logo: b.logo,
          rate: b.rate,
          emi: b.emi,
          amount: b.loan,
          tenure: b.tenure,
          applyLink: "#",
        }))

        setBanks(normalized)
      } catch (err) {
        setError(err.message || "Something went wrong")
        setBanks([]) // IMPORTANT: clear banks on error
      } finally {
        setLoading(false)
      }
    }

    fetchBanks()
  }, [])

  /* ---------------- DYNAMIC FILTERS ---------------- */
  const filters = useMemo(() => {
    const types = Array.from(new Set(banks.map((b) => b.type)))
    return [{ label: "All", value: "ALL" }].concat(
      types.map((t) => ({ label: t, value: t }))
    )
  }, [banks])

  /* ---------------- FILTERING ---------------- */
  const filteredBanks =
    activeFilter === "ALL"
      ? banks
      : banks.filter((b) => b.type === activeFilter)

  const allSelected =
    filteredBanks.length > 0 &&
    filteredBanks.every((b) => selected.some((s) => s.id === b.id))

  const partiallySelected =
    selected.some((s) => filteredBanks.some((b) => b.id === s.id)) &&
    !allSelected

  /* ---------------- INDETERMINATE STATE ---------------- */
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = partiallySelected
    }
  }, [partiallySelected])

  /* ---------------- SELECTION HANDLERS ---------------- */
  const toggleSelect = (bank) => {
    setSelected((prev) =>
      prev.some((b) => b.id === bank.id)
        ? prev.filter((b) => b.id !== bank.id)
        : [...prev, bank]
    )
  }

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected((prev) =>
        prev.filter((b) => !filteredBanks.some((fb) => fb.id === b.id))
      )
    } else {
      setSelected((prev) => {
        const next = [...prev]
        filteredBanks.forEach((b) => {
          if (!next.some((s) => s.id === b.id)) next.push(b)
        })
        return next
      })
    }
  }

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 border-gray-800/50 pb-2 mb-6">
          Current Interest Rates Snapshot
        </h2>

        <div className="bg-light-card rounded-lg shadow-md p-6">
          <TableShimmer rows={6} />
        </div>
      </section>
    )
  }

  /* ---------------- SUCCESS UI (HIDDEN ON ERROR) ---------------- */
  return (
    <>
      {!error && banks.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 border-gray-800/50 pb-2 mb-6">
            Current Interest Rates Snapshot
          </h2>

          <div className="bg-light-card rounded-lg shadow-md p-6">
            {/* FILTERS */}
            <div className="mb-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeFilter === f.value
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-200 uppercase text-sm">
                  <tr>
                    <th className="p-4">
                      <input
                        ref={selectAllRef}
                        type="checkbox"
                        checked={allSelected}
                        onChange={toggleSelectAll}
                        className="w-4 h-4"
                      />
                    </th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Rate</th>
                    <th className="px-6 py-3">EMI</th>
                    <th className="px-6 py-3">Loan</th>
                    <th className="px-6 py-3">Tenure</th>
                    <th className="px-6 py-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBanks.map((bank) => {
                    const isChecked = selected.some(
                      (b) => b.id === bank.id
                    )

                    return (
                      <tr
                        key={bank.id}
                        className={`border-b ${
                          isChecked ? "bg-gray-100" : ""
                        }`}
                      >
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSelect(bank)}
                            className="w-4 h-4"
                          />
                        </td>

                        <td className="px-6 py-4 flex items-center gap-3">
                          <img
                            src={bank.logo}
                            alt={bank.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="font-medium">
                            {bank.name}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-600">
                          {bank.type}
                        </td>

                        <td className="px-6 py-4 font-bold">
                          {bank.rate}
                        </td>
                        <td className="px-6 py-4">{bank.emi}</td>
                        <td className="px-6 py-4">{bank.amount}</td>
                        <td className="px-6 py-4">{bank.tenure}</td>

                        <td className="px-6 py-4 text-center">
                          <a
                            href="/apply-loan"
                            className="inline-flex px-5 py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-700"
                          >
                            Apply Now
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {selected.length >= 2 && (
        <CompareBar
          count={selected.length}
          onCompare={() => setShowCompare(true)}
          onClear={() => setSelected([])}
        />
      )}

      {showCompare && (
        <CompareModal
          banks={selected}
          onClose={() => setShowCompare(false)}
        />
      )}
    </>
  )
}
