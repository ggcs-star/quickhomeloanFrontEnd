import { useRef, useState, useMemo, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import CompareBar from "./CompareBar"
import CompareModal from "./CompareModal"
import TableShimmer from "../../../../components/TableShimmer"
import { getLenders } from "../../../../api"

export default function InterestRatesSnapshot() {
  /* ---------------- TANSTACK QUERY ---------------- */
  const {
    data: banks = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["lenders"],

    queryFn: async () => {
      const lendersData = await getLenders()

      return lendersData.map((b) => ({
        id: b.id,
        name: b.name,
        type: b.type,
        logo: b.logo,
        rate: b.rate,
        emi: b.emi,
        amount: b.loan,
        tenure: b.tenure,
        applyLink: "/apply-loan",
      }))
    },

    // API WILL NOT REFETCH FOR 10 MINUTES
    staleTime: 1000 * 60 * 10,

    // CACHE STORED FOR 30 MINUTES
    gcTime: 1000 * 60 * 30,

    // PREVENT UNNECESSARY REFETCH
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  /* ---------------- LOCAL UI STATES ---------------- */
  const [selected, setSelected] = useState([])
  const [showCompare, setShowCompare] = useState(false)
  const [activeFilter, setActiveFilter] = useState("ALL")

  const selectAllRef = useRef(null)

  /* ---------------- DYNAMIC FILTERS ---------------- */
  const filters = useMemo(() => {
    const types = Array.from(new Set(banks.map((b) => b.type)))

    return [{ label: "All", value: "ALL" }].concat(
      types.map((t) => ({
        label: t,
        value: t,
      }))
    )
  }, [banks])

  /* ---------------- FILTERING ---------------- */
  const filteredBanks =
    activeFilter === "ALL"
      ? banks
      : banks.filter((b) => b.type === activeFilter)

  const allSelected =
    filteredBanks.length > 0 &&
    filteredBanks.every((b) =>
      selected.some((s) => s.id === b.id)
    )

  const partiallySelected =
    selected.some((s) =>
      filteredBanks.some((b) => b.id === s.id)
    ) && !allSelected

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
        prev.filter(
          (b) =>
            !filteredBanks.some(
              (fb) => fb.id === b.id
            )
        )
      )
    } else {
      setSelected((prev) => {
        const next = [...prev]

        filteredBanks.forEach((b) => {
          if (!next.some((s) => s.id === b.id)) {
            next.push(b)
          }
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
Bank-Wise Home Loan Interest Rates (Updated {new Date().getFullYear()})        </h2>

        <div className="bg-light-card rounded-lg shadow-md p-6">
          <TableShimmer rows={6} />
        </div>
      </section>
    )
  }

  /* ---------------- ERROR STATE ---------------- */
  if (error) {
    return (
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 border-gray-800/50 pb-2 mb-6">
Bank-Wise Home Loan Interest Rates (Updated {new Date().getFullYear()})        </h2>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600">
            Failed to load interest rates.
            Please try again later.
          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </section>
    )
  }

  /* ---------------- SUCCESS UI ---------------- */
  return (
    <>
      {banks.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 border-gray-800/50 pb-2 mb-6">
Bank-Wise Home Loan Interest Rates (Updated {new Date().getFullYear()})          </h2>

          <div className="bg-light-card rounded-lg shadow-md p-6">
            {/* FILTERS */}
            <div className="mb-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() =>
                    setActiveFilter(f.value)
                  }
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

                    <th className="px-6 py-3">
                      Name
                    </th>

                    <th className="px-6 py-3">
                      Type
                    </th>

                    <th className="px-6 py-3">
                      Rate
                    </th>

                    <th className="px-6 py-3">
                      EMI
                    </th>

                    <th className="px-6 py-3">
                      Loan
                    </th>

                    <th className="px-6 py-3">
                      Tenure
                    </th>

                    <th className="px-6 py-3 text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBanks.map((bank) => {
                    const isChecked =
                      selected.some(
                        (b) => b.id === bank.id
                      )

                    return (
                      <tr
                        key={bank.id}
                        className={`border-b ${
                          isChecked
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() =>
                              toggleSelect(bank)
                            }
                            className="w-4 h-4"
                          />
                        </td>

                        <td className="px-6 py-4 flex items-center gap-3">
                          {bank.logo && (
                            <img
                              src={bank.logo}
                              alt={bank.name}
                              className="w-6 h-6 rounded-full"
                            />
                          )}

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

                        <td className="px-6 py-4">
                          {bank.emi}
                        </td>

                        <td className="px-6 py-4">
                          {bank.amount}
                        </td>

                        <td className="px-6 py-4">
                          {bank.tenure}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <a
                            href={bank.applyLink}
                            className="inline-flex px-5 py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                          >
                            Apply Now
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {/* EMPTY STATE */}
              {filteredBanks.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No lenders found for this
                  category.
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* COMPARE BAR */}
      {selected.length >= 2 && (
        <CompareBar
          count={selected.length}
          onCompare={() =>
            setShowCompare(true)
          }
          onClear={() => setSelected([])}
        />
      )}

      {/* COMPARE MODAL */}
      {showCompare && (
        <CompareModal
          banks={selected}
          onClose={() =>
            setShowCompare(false)
          }
        />
      )}
    </>
  )
}