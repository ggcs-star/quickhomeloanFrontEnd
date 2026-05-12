import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../../../components/Layout";
import { getLenders, getLenderBySlug, BASE_URL } from "../../../../api";

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
  
  /* ---------------- LENDERS STATE ---------------- */
  const [lenders, setLenders] = useState([]);
  const [selectedLender, setSelectedLender] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  /* ---------------- DYNAMIC SUBCATEGORIES STATE ---------------- */
  const [dynamicSubcategories, setDynamicSubcategories] = useState([]);
  const [isLoadingSubcategories, setIsLoadingSubcategories] = useState(false);

  /* ---------------- HELPER: CREATE LENDER SLUG ---------------- */
  const createLenderSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  /* ---------------- MERGE STATIC AND DYNAMIC SUBCATEGORIES ---------------- */
  const getMergedSubcategories = (category) => {
    const staticSubs = loanCategoryMap[category] || [];
    let allSubs = [...staticSubs];
    
    // For Home Loan By Banks, also include dynamic lender names
    if (category === "Home Loan By Banks" && dynamicSubcategories.length > 0) {
      // Filter out duplicates (if any lender name matches static subcategory)
      const uniqueDynamicSubs = dynamicSubcategories.filter(
        dynamicItem => !staticSubs.some(staticItem => staticItem === dynamicItem)
      );
      allSubs = [...allSubs, ...uniqueDynamicSubs];
    }
    
    // Remove duplicates (just in case)
    return [...new Set(allSubs)];
  };

  /* ---------------- FETCH LENDERS ON MOUNT ---------------- */
  useEffect(() => {
    const fetchLenders = async () => {
      try {
        setIsLoadingSubcategories(true);
        const lendersData = await getLenders();
        setLenders(lendersData);
        
        // Set dynamic subcategories from lender names
        const lenderNames = lendersData.map(lender => lender.name);
        setDynamicSubcategories(lenderNames);
        
        // Check URL for lender parameters
        const params = new URLSearchParams(window.location.search);
        const lenderSlug = params.get("lender");
        const lenderId = params.get("lender_id");
        
        let selectedLenderData = null;
        
        // Try to find lender by ID first
        if (lenderId) {
          selectedLenderData = lendersData.find(l => l.id === parseInt(lenderId));
        }
        
        // If not found by ID, try by slug
        if (!selectedLenderData && lenderSlug) {
          selectedLenderData = lendersData.find(l => 
            createLenderSlug(l.name) === lenderSlug
          );
        }
        
        // If still not found, try API call by slug
        if (!selectedLenderData && lenderSlug) {
          try {
            selectedLenderData = await getLenderBySlug(lenderSlug);
          } catch (error) {
            console.error("Failed to fetch lender by slug:", error);
          }
        }
        
        if (selectedLenderData) {
          setSelectedLender(selectedLenderData);
          // Auto-select the category and subcategory if lender is selected
          if (selectedLenderData.name) {
            setFormData(prev => ({
              ...prev,
              loan_category_main: "Home Loan By Banks",
              loan_category_sub: selectedLenderData.name
            }));
          }
        }
        
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Failed to fetch lenders:", error);
        setIsDataLoaded(true);
      } finally {
        setIsLoadingSubcategories(false);
      }
    };
    
    fetchLenders();
  }, []);

  /* ---------------- PREFILL FROM URL ---------------- */
  useEffect(() => {
    if (!isDataLoaded) return;
    
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const subcategory = params.get("subcategory");
    const loanAmount = params.get("loan_amount");
    const monthlyIncome = params.get("monthly_income");
    const city = params.get("city");

    const updatedFormData = { ...formData };
    let hasUpdates = false;

    // Set category and subcategory from URL
    if (category && loanCategoryMap[category]) {
      updatedFormData.loan_category_main = category;
      updatedFormData.loan_category_sub = subcategory || "";
      hasUpdates = true;
    }
    
    // Prefill loan amount if provided
    if (loanAmount && !isNaN(loanAmount) && loanAmount > 0) {
      updatedFormData.loan_amount = loanAmount;
      hasUpdates = true;
    }
    
    // Prefill monthly income if provided
    if (monthlyIncome && !isNaN(monthlyIncome) && monthlyIncome > 0) {
      updatedFormData.monthly_income = monthlyIncome;
      hasUpdates = true;
    }
    
    // Prefill city if provided
    if (city && city.trim()) {
      updatedFormData.property_city = city;
      hasUpdates = true;
    }
    
    if (hasUpdates) {
      setFormData(updatedFormData);
    }
  }, [isDataLoaded]);

  /* ---------------- INPUT HANDLER ---------------- */
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "loan_category_main") {
      // Reset subcategory when main category changes
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

    // Prepare data with lender info if selected
    const submitData = {
      ...formData,
      lender_id: selectedLender?.id || null,
      lender_name: selectedLender?.name || null,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/apply-loan/store`,
        submitData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        alert("Application submitted successfully! Our representative will contact you soon.");
        
        // Clear form after successful submission
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
        setSelectedLender(null);
      } else {
        setSubmitError(response.data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.response?.data?.message || "Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- CLEAR LENDER SELECTION ---------------- */
  const clearLenderSelection = () => {
    setSelectedLender(null);
    setFormData(prev => ({
      ...prev,
      loan_category_sub: ""
    }));
    // Remove lender params from URL without reload
    const url = new URL(window.location);
    url.searchParams.delete('lender');
    url.searchParams.delete('lender_id');
    window.history.pushState({}, '', url);
  };

  /* ---------------- CHECK IF SUBCATEGORY IS DYNAMIC ---------------- */
  const isDynamicSubcategory = (subcategory) => {
    return dynamicSubcategories.includes(subcategory) && 
           !loanCategoryMap["Home Loan By Banks"]?.includes(subcategory);
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

        {/* Selected Lender Information */}
        {selectedLender && (
          <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-200 flex justify-between items-center">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Selected Lender:</span> {selectedLender.name}
            </p>
            <button
              type="button"
              onClick={clearLenderSelection}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Change Lender
            </button>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter your full name"
              required
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="you@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              id="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              className={inputClasses}
              placeholder="1234567890"
              required
            />
            {errors.number && (
              <p className="text-red-500 text-xs mt-1">{errors.number}</p>
            )}
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Loan Category *
            </label>
            <select
              id="loan_category_main"
              value={formData.loan_category_main}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="">Select Loan Category</option>
              {mainCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.loan_category_main && (
              <p className="text-red-500 text-xs mt-1">
                {errors.loan_category_main}
              </p>
            )}
          </div>

          {/* SUB CATEGORY - Shows merged static + dynamic */}
          {formData.loan_category_main && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Sub Category *
                {/* {formData.loan_category_main === "Home Loan By Banks" && dynamicSubcategories.length > 0 && (
                  <span className="ml-2 text-xs text-green-600 font-normal">
                    (Static + Dynamic: {getMergedSubcategories(formData.loan_category_main).length} options)
                  </span>
                )} */}
                {formData.loan_category_main !== "Home Loan By Banks" && (
                  <span className="ml-2 text-xs text-gray-500 font-normal">
                    ({loanCategoryMap[formData.loan_category_main]?.length || 0} options)
                  </span>
                )}
              </label>
              
              {isLoadingSubcategories && formData.loan_category_main === "Home Loan By Banks" ? (
                <div className="w-full border border-neutral-300 rounded-md px-3 py-2 bg-gray-50">
                  <span className="text-sm text-gray-500">Loading dynamic subcategories...</span>
                </div>
              ) : (
                <select
                  id="loan_category_sub"
                  value={formData.loan_category_sub}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                >
                  <option value="">Select Sub Category</option>
                  {getMergedSubcategories(formData.loan_category_main).map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                      {/* {isDynamicSubcategory(sub) && (
                        <span className="ml-2 text-xs text-blue-600"> (Lender)</span>
                      )}
                      {!isDynamicSubcategory(sub) && loanCategoryMap[formData.loan_category_main]?.includes(sub) && (
                        <span className="ml-2 text-xs text-gray-500"> (Static)</span>
                      )} */}
                    </option>
                  ))}
                </select>
              )}
              
              {/* Show statistics about subcategories */}
              {/* {formData.loan_category_main === "Home Loan By Banks" && !isLoadingSubcategories && (
                <div className="mt-1 flex gap-3 text-xs">
                  <span className="text-green-600">
                    ✓ Static: {loanCategoryMap["Home Loan By Banks"]?.length || 0} options
                  </span>
                  <span className="text-blue-600">
                    ✓ Dynamic: {dynamicSubcategories.length} lenders
                  </span>
                  <span className="text-gray-600">
                    Total: {getMergedSubcategories(formData.loan_category_main).length} options
                  </span>
                </div>
              )} */}
              
              {errors.loan_category_sub && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.loan_category_sub}
                </p>
              )}
            </div>
          )}

          {/* LOAN AMOUNT */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Loan Amount (₹) *
            </label>
            <input
              id="loan_amount"
              type="number"
              value={formData.loan_amount}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter loan amount"
              required
            />
            {errors.loan_amount && (
              <p className="text-red-500 text-xs mt-1">{errors.loan_amount}</p>
            )}
          </div>

          {/* MONTHLY INCOME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Income (₹) *
            </label>
            <input
              id="monthly_income"
              type="number"
              value={formData.monthly_income}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter monthly income"
              required
            />
            {errors.monthly_income && (
              <p className="text-red-500 text-xs mt-1">
                {errors.monthly_income}
              </p>
            )}
          </div>

          {/* CITY */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Property City *
            </label>
            <input
              id="property_city"
              value={formData.property_city}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter property city"
              required
            />
            {errors.property_city && (
              <p className="text-red-500 text-xs mt-1">
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

        {/* Information about merged subcategories */}
        {/* <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-md text-xs text-gray-700 border border-blue-200">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-lg">📊</span> 
            Dynamic Subcategories Feature
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Static Subcategories:</strong> Predefined loan types (e.g., "SBI Home Loan", "HDFC Home Loan")</li>
            <li><strong>Dynamic Subcategories:</strong> Real-time lender names fetched from API</li>
            <li><strong>Merged Display:</strong> Both static and dynamic options appear together in the dropdown</li>
            <li><strong>Visual Indicators:</strong> 
              <span className="text-blue-600 ml-1">🔵 "Lender"</span> tags show dynamic entries,
              <span className="text-gray-500 ml-1">⚪ "Static"</span> tags show predefined entries
            </li>
            <li><strong>Auto-selection:</strong> When you click "Apply Now" from any bank, it automatically selects the matching lender</li>
            <li><strong>Current Stats:</strong> {dynamicSubcategories.length} lenders available dynamically</li>
          </ul>
        </div> */}
      </div>
    </Container>
  );
};

export default HeroSection;