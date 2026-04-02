import React, { useState } from "react";
import { Container } from "../../../../components/Layout";

const SixBHKApplySection = ({ data }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    employmentType: "Salaried",
    income: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });

    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.income) {
      newErrors.income = "Monthly income is required.";
    } else if (Number(formData.income) < 10000) {
      newErrors.income = "Income must be at least ₹10,000.";
    }

    if (!formData.agreed) {
      newErrors.agreed = "Please accept the terms to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("");

    if (!validateForm()) return;

    setFormMessage("✅ Thank you! Your eligibility check has been submitted successfully.");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      employmentType: "Salaried",
      income: "",
      agreed: false,
    });
  };

  if (!data) return null;

  return (
    <section id="apply" className="">
      <Container className="max-w-3xl mx-auto">

        {/* Entire Card */}
        <div className="bg-white border border-neutral-300 rounded-md overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300 text-start">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} id="eligibilityForm">

              {/* Row 1: Name + Phone */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {data.fields.fullName.label}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={data.fields.fullName.placeholder}
                    className={`w-full p-3 rounded-md bg-white border ${
                      errors.fullName ? "border-red-500" : "border-neutral-300"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {data.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={data.fields.phone.placeholder}
                    className={`w-full p-3 rounded-md bg-white border ${
                      errors.phone ? "border-red-500" : "border-neutral-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  {data.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={data.fields.email.placeholder}
                  className={`w-full p-3 rounded-md bg-white border ${
                    errors.email ? "border-red-500" : "border-neutral-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Row 2: Employment + Income */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">

                {/* Employment Type */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {data.fields.employmentType.label}
                  </label>
                  <select
                    id="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-white border border-neutral-300"
                  >
                    {data.fields.employmentType.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Monthly Income */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {data.fields.income.label}
                  </label>
                  <input
                    type="number"
                    id="income"
                    value={formData.income}
                    onChange={handleChange}
                    placeholder={data.fields.income.placeholder}
                    className={`w-full p-3 rounded-md bg-white border ${
                      errors.income ? "border-red-500" : "border-neutral-300"
                    }`}
                  />
                  {errors.income && (
                    <p className="text-red-600 text-sm mt-1">{errors.income}</p>
                  )}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mb-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-5 h-5 border-neutral-300 rounded"
                  />
                  <span className="text-sm text-neutral-700">
                    {data.terms.text}{" "}
                    <a href={data.terms.link} className="text-black hover:underline">
                      {data.terms.linkText}
                    </a>.
                  </span>
                </label>
                {errors.agreed && (
                  <p className="text-red-600 text-sm mt-1">{errors.agreed}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold text-lg py-3 rounded-md hover:bg-neutral-800 transition shadow-md"
              >
                {data.buttonText}
              </button>
            </form>

            {/* Success Message */}
            {formMessage && (
              <div className="mt-4 text-center text-sm font-medium text-green-700">
                {formMessage}
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SixBHKApplySection;
