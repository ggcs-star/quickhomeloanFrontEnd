// src/api.js
import axios from "axios";

export const BASE_URL = "https://backend.quickhomeloan.in/public/api";

// 🔥 Simple in-memory cache
let lendersCache = null;

// ⭐ Save FCM Token
export const saveFCMTokenToBackend = async (userId, fcmToken) => {
  try {
    const token = localStorage.getItem("token");

    const body = {
      user_id: userId,
      fcm_token: fcmToken,
      device: "web",
    };

    const res = await axios.post(`${BASE_URL}/fcm/save-token`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error saving FCM token:", error);
    throw error;
  }
};

// ⭐ Get all lenders (with caching)
export const getLenders = async () => {
  try {
    // ✅ return cached data if available
    if (lendersCache) {
      return lendersCache;
    }

    const res = await axios.get(`${BASE_URL}/lenders`);

    if (res.data?.status) {
      lendersCache = res.data.data; // 🔥 cache it
      return lendersCache;
    }

    return [];
  } catch (error) {
    console.error("Error fetching lenders:", error);
    throw error;
  }
};

// ⭐ Get lender by slug (helper)
export const getLenderBySlug = async (slug) => {
  const lenders = await getLenders();
  return lenders.find((item) => item.slug === slug);
};

export const submitContactForm = async (formData) => {
  try {
    console.log("Sending contact form data:", formData);
    
    const response = await axios.post(`${BASE_URL}/contact`, {
      full_name: formData.full_name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    console.error("Error response data:", error.response?.data);
    throw error;
  }
};

// ⭐ Submit Loan Inquiry
export const submitLoanInquiry = async (formData) => {
  try {
    console.log("Sending loan inquiry data:", formData);
    
    const response = await axios.post(`${BASE_URL}/loan-inquiries`, {
      full_name: formData.full_name,
      mobile_number: formData.mobile_number,
      email: formData.email,
      loan_purpose: formData.loan_purpose,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Loan inquiry response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting loan inquiry:", error);
    console.error("Error response data:", error.response?.data);
    throw error;
  }
};