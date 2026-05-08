import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Container } from "../../../../components/Layout";
import { submitLoanInquiry } from "../../../../api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    loan_purpose: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
    setSuccessMessage("");
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    }
    
    if (!formData.mobile_number.trim()) {
      newErrors.mobile_number = "Mobile number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.mobile_number)) {
      newErrors.mobile_number = "Enter a valid 10-digit mobile number.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    
    if (!formData.loan_purpose) {
      newErrors.loan_purpose = "Please select a loan purpose.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");
    
    if (validateForm()) {
      setSubmitted(true);
      
      try {
        const response = await submitLoanInquiry(formData);
        
        if (response?.success === true) {
          setSuccessMessage("✅ Loan inquiry submitted successfully! Our expert will contact you within 24 hours.");
          setFormData({
            full_name: "",
            mobile_number: "",
            email: "",
            loan_purpose: "",
          });
          setErrors({});
          
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          throw new Error(response?.message || "Failed to submit inquiry");
        }
      } catch (error) {
        console.error("Error submitting loan inquiry:", error);
        
        if (error.response?.status === 422) {
          const validationErrors = error.response?.data?.errors || error.response?.data?.error;
          
          if (validationErrors && typeof validationErrors === 'object') {
            const newErrors = {};
            Object.keys(validationErrors).forEach(key => {
              const errorMsg = Array.isArray(validationErrors[key]) 
                ? validationErrors[key][0] 
                : validationErrors[key];
              newErrors[key] = errorMsg;
            });
            setErrors(newErrors);
            setApiError("Please check the form for errors.");
          } else {
            setApiError(error.response?.data?.message || "Validation failed. Please check your input.");
          }
        } 
        else if (error.response) {
          const errorMessage = error.response.data?.message || 
                              error.response.data?.error || 
                              "Server error. Please try again later.";
          setApiError(errorMessage);
        } else if (error.request) {
          setApiError("Network error. Please check your internet connection.");
        } else {
          setApiError(error.message || "An unexpected error occurred.");
        }
        
        setTimeout(() => {
          setApiError("");
        }, 5000);
      } finally {
        setSubmitted(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <Container className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE TEXT + CONTACT DETAILS */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              Our experts are here to guide you. Fill out the form, and we'll get in touch
              to discuss your home loan needs.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">+91 98765 43210</p>
                  <p className="text-sm text-slate-400">Mon-Sat, 9am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">support@quickhomeloan.in</p>
                  <p className="text-sm text-slate-400">Drop us an email anytime</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">Ahmedabad Office</p>
                  <p className="text-sm text-slate-400">
                    4th Floor, The Grand Emporio, Motera Stadium Rd, Motera,
                    Ahmedabad, Gujarat 380005
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="mt-12 lg:mt-0 bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-700 text-sm">{successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {apiError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 text-sm">{apiError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your full name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg border p-3 text-slate-900 
                  focus:border-slate-900 focus:ring-slate-900 ${
                    errors.full_name ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
                )}
              </div>

              {/* MOBILE + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Mobile number *
                  </label>
                  <input
                    type="tel"
                    name="mobile_number"
                    placeholder="9876543210"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border p-3 text-slate-900 
                    focus:border-slate-900 focus:ring-slate-900 ${
                      errors.mobile_number ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.mobile_number && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile_number}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border p-3 text-slate-900 
                    focus:border-slate-900 focus:ring-slate-900 ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* LOAN PURPOSE */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Loan Purpose *
                </label>
                <select
                  name="loan_purpose"
                  value={formData.loan_purpose}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg border p-3 text-slate-600 
                  focus:border-slate-900 focus:ring-slate-900 ${
                    errors.loan_purpose ? "border-red-500" : "border-slate-300"
                  }`}
                >
                  <option value="">Select Loan Purpose</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="New Home Purchase">New Home Purchase</option>
                  <option value="Resale Property">Resale Property</option>
                  <option value="Home Construction">Home Construction</option>
                  <option value="Balance Transfer">Balance Transfer</option>
                </select>
                {errors.loan_purpose && (
                  <p className="text-red-500 text-xs mt-1">{errors.loan_purpose}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full rounded-lg px-6 py-4 text-lg font-bold 
                text-white transition-colors mt-4 flex items-center 
                justify-center gap-2 ${
                  submitted
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-slate-900 hover:bg-black"
                }`}
              >
                {submitted ? "Submitting..." : "Talk to an Expert"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;