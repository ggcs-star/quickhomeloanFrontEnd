export default function CompareModal({ banks, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col">

        {/* HEADER */}
        <header className="flex items-center justify-between p-4 border-b border-gray-300">
          <h2 className="text-xl font-bold text-gray-900">
            Compare Home Loans
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl"
          >
            ×
          </button>
        </header>

        {/* TABLE */}
        <div className="overflow-auto">
          <table className="border-separate border-spacing-0 table-fixed min-w-max">

            {/* TABLE HEADER */}
            <thead>
              <tr className="h-[88px]">

                {/* FEATURE HEADER (TOP + LEFT STICKY) */}
                <th
                  className="
                    sticky top-0 left-0
                    z-[60]
                    bg-white
                    w-[220px] min-w-[220px]
                    px-4 py-3
                    text-left text-sm font-semibold
                    border-b border-r border-gray-300
                  "
                >
                  Feature
                </th>

                {banks.map((bank) => (
                  <th
                    key={bank.id}
                    className="
                      sticky top-0
                      z-[40]
                      bg-white
                      w-[180px] min-w-[180px]
                      px-3 py-3
                      border-b border-gray-300
                      text-center
                    "
                  >
                    <div className="flex flex-col items-center gap-2 overflow-hidden">
                      <img
                        src={bank.logo}
                        alt={bank.name}
                        className="w-8 h-8 rounded-full bg-white object-contain"
                      />
                      <span
                        className="text-sm font-semibold text-gray-900 truncate w-full"
                        title={bank.name}
                      >
                        {bank.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {[
                ["Interest Rate", "rate"],
                ["EMI per Lakh", "emi"],
                ["Bank Type", "type"],
                ["Max Loan Amount", "amount"],
                ["Max Tenure", "tenure"],
              ].map(([label, key]) => (
                <tr key={key} className="border-b border-gray-200">

                  {/* FEATURE COLUMN BODY */}
                  <th
                    className="
                      sticky left-0
                      z-[50]
                      bg-white
                      w-[220px] min-w-[220px]
                      px-4 py-3
                      text-left text-sm font-semibold
                      border-r border-gray-300
                      whitespace-nowrap
                    "
                  >
                    {label}
                  </th>

                  {banks.map((bank) => (
                    <td
                      key={bank.id}
                      className="
                        w-[180px] min-w-[180px]
                        px-3 py-3
                        text-center text-gray-700
                        whitespace-nowrap
                      "
                    >
                      {bank[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
