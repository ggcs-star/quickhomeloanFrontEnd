// src/api.js
import axios from "axios";

const BASE_URL = "https://backend.quickhomeloan.in/public/api";

// ⭐ Fully dynamic FCM Token Saver
export const saveFCMTokenToBackend = async (userId, fcmToken) => {
  try {
    const token = localStorage.getItem("token");

    const body = {
      user_id: userId,
      fcm_token: fcmToken,
      device: "web",
    };

    console.log("Sending FCM Token Body:", body);

    const res = await axios.post(`${BASE_URL}/fcm/save-token`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("FCM token saved successfully:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error saving FCM token:", error);
    throw error;
  }
};
