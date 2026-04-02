// import React, { useState } from "react";
// import { getLoanVsFd } from "../../../../api";

// const LoanVsFd = () => {
//   const [formData, setFormData] = useState({
//     principal: "",
//     loan_rate: "",
//     fd_rate: "",
//     inflation_rate: "",
//     term_value: "",
//     term_type: "years", 
//     asset_growth_rate: "",
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await getLoanVsFd(formData); 
//       setResult(res.data);
//     } catch (error) {
//       console.error("Error fetching Loan vs FD:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h2 className="text-2xl font-bold pt-6 my-6 text-center">
//         Loan vs FD Calculator
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-4"
//       >
//         {Object.keys(formData).map((key) => (
//           <div key={key} className="flex flex-col">
//             <label className="font-semibold capitalize">
//               {key.replace("_", " ")}
//             </label>
//             <input
//               type={key === "term_type" ? "text" : "number"}
//               name={key}
//               value={formData[key]}
//               onChange={handleChange}
//               className="mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
//               placeholder={`Enter ${key.replace("_", " ")}`}
//             />
//           </div>
//         ))}

//         <button
//           type="submit"
//           disabled={loading}
//           className="col-span-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           {loading ? "Calculating..." : "Calculate"}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <h3 className="text-lg font-bold mb-2">Loan Details</h3>
//             <p>Monthly EMI: ₹{result.data.loan_details.monthly_emi}</p>
//             <p>Total Interest Paid: ₹{result.data.loan_details.total_interest_paid}</p>
//             <p>Total Amount Paid: ₹{result.data.loan_details.total_amount_paid}</p>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <h3 className="text-lg font-bold mb-2">FD Details</h3>
//             <p>Total Interest Earned: ₹{result.data.fd_details.total_interest_earned}</p>
//             <p>FD Maturity: ₹{result.data.fd_details.fd_maturity}</p>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <h3 className="text-lg font-bold mb-2">Real Values</h3>
//             <p>Real Value of FD: ₹{result.data.real_values.real_value_of_fd}</p>
//             <p>Real Value of EMI: ₹{result.data.real_values.real_value_of_emi}</p>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <h3 className="text-lg font-bold mb-2">Asset Growth</h3>
//             <p>Future Value: ₹{result.data.asset.future_value}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanVsFd;
