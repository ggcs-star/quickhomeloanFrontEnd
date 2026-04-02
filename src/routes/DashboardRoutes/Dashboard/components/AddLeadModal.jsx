export default function AddLeadModal({ hide }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Add New Lead</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={hide}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input className="border rounded-lg p-3" placeholder="First Name" required />
            <input className="border rounded-lg p-3" placeholder="Last Name" required />
            <input className="border rounded-lg p-3" placeholder="Email" required />
            <input className="border rounded-lg p-3" placeholder="Phone" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select className="border rounded-lg p-3" required>
              <option>Select Loan Type</option>
              <option>Home Loan</option>
              <option>LAP</option>
              <option>Balance Transfer</option>
              <option>Personal Loan</option>
            </select>

            <input className="border rounded-lg p-3" placeholder="Loan Amount (₹)" required />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Add Lead
          </button>
        </form>
      </div>
    </div>
  );
}
