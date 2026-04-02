import { useState } from "react";
import AddLeadModal from "./AddLeadModal";
import leadsData from "../../../../db/leads";

export default function Leads() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI-Powered Lead Management</h1>
          <p className="text-gray-600">Smart lead scoring & automated prioritization</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <i className="fas fa-plus"></i>
          <span>Add New Lead</span>
        </button>
      </div>

      {/* Leads Table */}
      <div className="bg-white shadow border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs text-gray-500 uppercase">Lead</th>
              <th className="px-6 py-3 text-xs text-gray-500 uppercase">AI Score</th>
              <th className="px-6 py-3 text-xs text-gray-500 uppercase">Loan</th>
              <th className="px-6 py-3 text-xs text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-xs text-gray-500 uppercase">Next Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {leadsData.map((lead) => (
              <tr key={lead.leadId} className="hover:bg-gray-50">
                {/* Lead Info */}
                <td className="px-6 py-4">
                  <div className="font-medium">{lead.firstName} {lead.lastName}</div>
                  <div className="text-gray-500 text-sm">{lead.leadId}</div>
                </td>

                {/* AI Score */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${lead.aiScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-green-700">
                      {lead.aiScore}
                    </span>
                  </div>
                </td>

                {/* Loan */}
                <td className="px-6 py-4">
                  <div className="font-medium">{lead.loanType}</div>
                  <div className="text-gray-500 text-sm">{lead.loanAmount}</div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                    {lead.status}
                  </span>
                </td>

                {/* Next Action */}
                <td className="px-6 py-4">
                  <div className="text-gray-900 text-sm">{lead.nextAction}</div>
                  <div className="text-gray-400 text-xs">{lead.lastActivity}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && <AddLeadModal hide={() => setShowModal(false)} />}
    </>
  );
}
