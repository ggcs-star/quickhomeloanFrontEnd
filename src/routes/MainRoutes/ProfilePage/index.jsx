import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CommunicationHistoryTimeline from "./components/CommunicationHistoryTimeline";
import PersonalInfoSkeleton from "./components/PersonalInfoSkeleton";

const BASE_URL = "https://backend.quickhomeloan.in/public/api";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasLoan, setHasLoan] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    city: "",
    employment_type: "",
    annual_income: "",

    bank_name: "",
    loan_type: "home",
    loan_amount: "",
    interest_rate: "",
    tenure: "",
    emi: "",
    loan_start_date: "",
  });

  const [originalData, setOriginalData] = useState(null);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          `${BASE_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        if (response.data?.status === true) {
          const user = response.data.data;

          const mappedData = {
            full_name: user.full_name ?? "",
            email: user.email ?? "",
            mobile_number: user.mobile_number ?? "",
            city: user.city ?? "",
            employment_type: user.employment_type ?? "",
            annual_income: user.annual_income ?? "",

            bank_name: "",
            loan_type: "home",
            loan_amount: "",
            interest_rate: "",
            tenure: "",
            emi: "",
            loan_start_date: "",
          };

          setFormData(mappedData);
          setOriginalData(mappedData);
        }
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SAVE PROFILE ================= */
  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const payload = {
        full_name: formData.full_name.trim(),
        email: formData.email.trim(),
        mobile_number: formData.mobile_number.trim(),
        city: formData.city.trim(),
        employment_type: formData.employment_type,
        annual_income: formData.annual_income
          ? Number(formData.annual_income)
          : 0,
      };

      const response = await axios.post(
        `${BASE_URL}/user/edit-profile`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.status === true) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        setOriginalData(formData);
      } else {
        toast.error(response.data?.message || "Update failed");
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        toast.error(firstError);
      } else {
        toast.error("Update failed");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  // if (loading) {
  //   return <div className="p-10 text-center font-semibold">Loading profile...</div>;
  // }

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="space-y-10 max-w-6xl pb-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Your Profile
            </h1>
            <p className="text-slate-500">
              Manage your personal and loan information.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Profile Status
              </p>
              <p className="text-lg font-black text-indigo-600">
                100% COMPLETE
              </p>
            </div>

            <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
              <svg className="w-14 h-14 transform -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-slate-100"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray="150"
                  strokeDashoffset="0"
                  className="text-indigo-600 transition-all duration-700"
                />
              </svg>

              <span className="absolute text-[10px] font-black text-slate-700">
                100%
              </span>
            </div>
          </div>
        </header>
       
        {/* ================= PERSONAL INFO ================= */}

        
        {/* {isLoading ? (
  <PersonalInfoSkeleton />
) : ( */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
            <h2 className="text-lg font-bold">Personal Information</h2>

            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-5 py-2 text-sm font-semibold bg-black text-white rounded-lg"
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-3">
                <button onClick={handleCancelEdit} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="px-5 py-2 bg-green-600 text-white rounded-lg"
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </div>
            )}
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" name="full_name" value={formData.full_name} onChange={handleChange} disabled={!isEditing} />
            <Input label="Mobile" name="mobile_number" value={formData.mobile_number} onChange={handleChange} disabled={!isEditing} />
            <Input label="Email" name="email" value={formData.email} onChange={handleChange} disabled={!isEditing} />
            <Input label="City" name="city" value={formData.city} onChange={handleChange} disabled={!isEditing} />
            <Input label="Annual Income (₹)" name="annual_income" type="number" value={formData.annual_income} onChange={handleChange} disabled={!isEditing} />
          </div>
        </section>
{/* )} */}



        {/* ================= LOAN TOGGLE ================= */}
        <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white flex justify-between items-center">
          <h3 className="text-xl font-black">Existing Home Loan?</h3>

          <div className="flex bg-white/10 p-1.5 rounded-2xl">
            <button
              onClick={() => setHasLoan(true)}
              className={`px-6 py-2 rounded-xl ${hasLoan ? "bg-white text-indigo-600" : "text-white/70"
                }`}
            >
              YES
            </button>

            <button
              onClick={() => setHasLoan(false)}
              className={`px-6 py-2 rounded-xl ${!hasLoan ? "bg-white text-indigo-600" : "text-white/70"
                }`}
            >
              NO
            </button>
          </div>
        </div>

        {/* ================= LOAN DETAILS ================= */}
        {hasLoan && (
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b bg-slate-50/50">
              <h2 className="text-lg font-bold">Loan Details</h2>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Bank Name" name="bank_name" value={formData.bank_name} onChange={handleChange} />
              <Input label="Loan Amount (₹)" name="loan_amount" type="number" value={formData.loan_amount} onChange={handleChange} />
              <Input label="Interest Rate (%)" name="interest_rate" type="number" value={formData.interest_rate} onChange={handleChange} />
              <Input label="Tenure (Months)" name="tenure" type="number" value={formData.tenure} onChange={handleChange} />
              <Input label="EMI (₹)" name="emi" type="number" value={formData.emi} onChange={handleChange} />
              <Input label="Loan Start Date" name="loan_start_date" type="date" value={formData.loan_start_date} onChange={handleChange} />
            </div>
          </section>
        )}

        <CommunicationHistoryTimeline/>

        {/* ================= SAVE BUTTON ================= */}
        <div className="flex justify-end">
          <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black">
            Save Profile Changes
          </button>
        </div>

      </div>
    </div>
  );
}

/* ================= INPUT COMPONENT ================= */
function Input({ label, name, type = "text", value, onChange, disabled }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black uppercase tracking-widest text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-5 py-4 border rounded-2xl ${disabled
            ? "bg-gray-100 text-gray-500"
            : "bg-white border-slate-300 focus:ring-2 focus:ring-indigo-600"
          }`}
      />
    </div>
  );
}