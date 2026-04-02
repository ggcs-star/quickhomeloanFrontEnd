import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../../../components/Layout";

const HeroSection = ({ heroSection }) => {
  /* ---------------- CATEGORY MAP ---------------- */
  const loanCategoryMap = {
    "Home Loan By Banks": [
      "SBI Home Loan",
      "HDFC Ltd Home Loan",
      "LIC Housing Finance Home Loan",
      "Bank of Baroda Home Loan",
      "Axis Bank Home Loan",
      "HDFC Home Loan",
    ],

    "Home Loan By Professions": [
      "Home Loan for Doctors",
      "Home Loan for Chartered Accountants (CA)",
      "Home Loan for Engineers",
      "Home Loan for Teachers",
      "Home Loan for Lawyers",
      "Home Loan for IT Professionals",
    ],

    "Home Loan By Amount": [
      "20 Lakh Home Loan EMI",
      "25 Lakh Home Loan EMI",
      "30 Lakh Home Loan EMI",
      "40 Lakh Home Loan EMI",
      "50 Lakh Home Loan EMI",
      "1 Crore Home Loan EMI",
    ],

    "Home Loan By BHK Types": [
      "Home Loan for Plot",
      "Home Loan for Renovation",
      "Home Loan for Construction",
      "Commercial Property Loan",
    ],

    "Home Loan By Property": [
      "Home Loan for Apartment / Flat",
      "Home Loan for Independent House / Villa",
      "Home Loan for Plot / Land Purchase",
      "Home Loan for Under-Construction Property",
      "Home Loan for Ready-to-Move Property",
    ],

    "Home Loan By Salary": [
      "Salary 50000",
      "Salary 80000",
      "Salary 110000",
      "Salary 150000",
      "Salary 200000",
      "Salary 210000+",
    ],

    "Home Loan By CIBIL Score": [
      "CIBIL Score 650",
      "CIBIL Score 700",
      "CIBIL Score 750",
      "CIBIL Score 800",
    ],
  };

  const mainCategories = Object.keys(loanCategoryMap);

  /* ---------------- FORM STATE ---------------- */
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    number: "",
    loan_amount: "",
    monthly_income: "",
    property_city: "",
    loan_category_main: "",
    loan_category_sub: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  /* ---------------- PREFILL FROM URL ---------------- */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const subcategory = params.get("subcategory");

    if (category && loanCategoryMap[category]) {
      setFormData((prev) => ({
        ...prev,
        loan_category_main: category,
        loan_category_sub: subcategory || "",
      }));
    }
  }, []);

  /* ---------------- INPUT HANDLER ---------------- */
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "loan_category_main") {
      setFormData({
        ...formData,
        loan_category_main: value,
        loan_category_sub: "",
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    setErrors({ ...errors, [id]: "" });
    setSubmitError(null);
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.full_name.trim())
      newErrors.full_name = "Enter full name";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter valid email";

    if (!phoneRegex.test(formData.number))
      newErrors.number = "Enter valid 10-digit number";

    if (!formData.loan_amount || formData.loan_amount <= 0)
      newErrors.loan_amount = "Invalid loan amount";

    if (!formData.monthly_income || formData.monthly_income <= 0)
      newErrors.monthly_income = "Invalid monthly income";

    if (!formData.property_city.trim())
      newErrors.property_city = "Enter property city";

    if (!formData.loan_category_main)
      newErrors.loan_category_main = "Select loan category";

    if (!formData.loan_category_sub)
      newErrors.loan_category_sub = "Select sub-category";

    return newErrors;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "https://backend.quickhomeloan.in/public/api/apply-loan/store",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Form submitted successfully!");

      setFormData({
        full_name: "",
        email: "",
        number: "",
        loan_amount: "",
        monthly_income: "",
        property_city: "",
        loan_category_main: "",
        loan_category_sub: "",
      });

      setErrors({});
    } catch (err) {
      setSubmitError("Network error. Please try again later.");
    }

    setLoading(false);
  };

  const inputClasses =
    "w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0.5 focus:ring-gray-400 focus:border-gray-400";

  /* ---------------- JSX ---------------- */
  return (
    <Container>
      <div className="bg-white mx-auto rounded-md p-6 max-w-4xl border border-neutral-300">
        {heroSection?.title && (
          <h1 className="text-2xl font-bold text-center mb-2">
            {heroSection.title}
          </h1>
        )}

        {heroSection?.description && (
          <p className="text-center text-neutral-600 mb-6">
            {heroSection.description}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs">{errors.full_name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.number && (
              <p className="text-red-500 text-xs">{errors.number}</p>
            )}
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Loan Category
            </label>
            <select
              id="loan_category_main"
              value={formData.loan_category_main}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select Loan Category</option>
              {mainCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.loan_category_main && (
              <p className="text-red-500 text-xs">
                {errors.loan_category_main}
              </p>
            )}
          </div>

          {/* SUB CATEGORY */}
          {formData.loan_category_main && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Sub Category
              </label>
              <select
                id="loan_category_sub"
                value={formData.loan_category_sub}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select Sub Category</option>
                {loanCategoryMap[formData.loan_category_main].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
              {errors.loan_category_sub && (
                <p className="text-red-500 text-xs">
                  {errors.loan_category_sub}
                </p>
              )}
            </div>
          )}

          {/* LOAN AMOUNT */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Loan Amount
            </label>
            <input
              id="loan_amount"
              type="number"
              value={formData.loan_amount}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.loan_amount && (
              <p className="text-red-500 text-xs">{errors.loan_amount}</p>
            )}
          </div>

          {/* MONTHLY INCOME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Income
            </label>
            <input
              id="monthly_income"
              type="number"
              value={formData.monthly_income}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.monthly_income && (
              <p className="text-red-500 text-xs">
                {errors.monthly_income}
              </p>
            )}
          </div>

          {/* CITY */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Property City
            </label>
            <input
              id="property_city"
              value={formData.property_city}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.property_city && (
              <p className="text-red-500 text-xs">
                {errors.property_city}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="bg-neutral-900 text-white w-full py-3 rounded-md font-semibold hover:bg-neutral-800 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Check Eligibility"}
          </button>

          {submitError && (
            <p className="text-red-600 text-sm text-center mt-2">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </Container>
  );
};

export default HeroSection;
