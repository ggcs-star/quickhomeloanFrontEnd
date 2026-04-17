import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Firebase FCM
import { generateFCMToken } from "../../../firebase";

// API Helper
import { saveFCMTokenToBackend } from "../../../api";

export default function AuthPage() {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Correct Base URL
  const BASE_URL = "https://backend.quickhomeloan.in/public/api";

  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [fcmToken, setFcmToken] = useState(null);
  const [isFCMInitialized, setIsFCMInitialized] = useState(false);
  const [fcmPermission, setFcmPermission] = useState("default");
  const [fcmDebugInfo, setFcmDebugInfo] = useState("");

  // Generate FCM token on component mount with detailed logging
  useEffect(() => {
    const initializeFCM = async () => {
      try {
        console.log("🚀 ========== INITIALIZING FCM (Compat Version) ==========");
        setFcmDebugInfo("Initializing FCM...");

        console.log("📍 Location:", window.location.href);
        console.log("📱 Service Worker Support:", 'serviceWorker' in navigator);
        console.log("🔔 Notification Support:", "Notification" in window);

        if ("Notification" in window) {
          const currentPermission = Notification.permission;
          setFcmPermission(currentPermission);
          console.log("🔔 Current Notification Permission:", currentPermission);

          if (currentPermission === "granted") {
            console.log("✅ Permission already granted, generating FCM token...");
            setFcmDebugInfo("Permission granted, generating token...");

            const token = await generateFCMToken();

            if (token) {
              setFcmToken(token);
              setIsFCMInitialized(true);

              // ✅ IMPORTANT: Console log the token clearly
              console.log("🎉 ========== FCM TOKEN GENERATED SUCCESSFULLY ==========");
              console.log("📱 Full Token:", token);
              console.log("📏 Token Length:", token.length);
              console.log("🔍 First 50 chars:", token.substring(0, 50) + "...");
              console.log("🔍 Last 50 chars:", "..." + token.substring(token.length - 50));
              console.log("🎉 ========== END FCM TOKEN ==========");

              setFcmDebugInfo(`✅ FCM Token generated! Length: ${token.length} chars`);

              // Also store in localStorage for debugging
              localStorage.setItem("debug_fcm_token", token);
              localStorage.setItem("debug_fcm_token_time", new Date().toISOString());

            } else {
              console.warn("❌ FCM token generation returned null/undefined");
              console.log("💡 This could be because:");
              console.log("   1. User hasn't granted permission yet");
              console.log("   2. Service worker registration issue");
              console.log("   3. Firebase project not configured for Cloud Messaging");
              setFcmDebugInfo("❌ Token generation returned null");
              setIsFCMInitialized(false);
            }
          } else if (currentPermission === "denied") {
            console.warn("❌ Notification permission denied by user");
            setFcmDebugInfo("❌ Permission denied by user");
            console.log("💡 User needs to manually enable notifications in browser settings");
            setIsFCMInitialized(false);
          } else {
            console.log("⚠️ Notification permission not requested yet (default state)");
            setFcmDebugInfo("⚠️ Permission not requested yet");
            console.log("💡 Will request permission when user tries to login");
            setIsFCMInitialized(false);
          }
        } else {
          console.warn("❌ Browser doesn't support notifications");
          setFcmDebugInfo("❌ Browser doesn't support notifications");
          setIsFCMInitialized(false);
        }

        console.log("✅ ========== FCM INITIALIZATION COMPLETE ==========");
      } catch (error) {
        console.error("❌ ========== FCM TOKEN GENERATION FAILED ==========");
        setFcmDebugInfo(`❌ FCM Error: ${error.message}`);
        console.error("Error details:", error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);

        setIsFCMInitialized(false);
      }
    };

    initializeFCM();
  }, []);

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuth, navigate]);

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/signup";

  /* ===================== LOGIN STATES ===================== */
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  /* ===================== REGISTER STATES ===================== */
  const [regData, setRegData] = useState({
    full_name: "",
    channel_name: "",
    channel_url: "",
    email: "",
    address: "",
    mobile_number: "",
    password: "",
    password_confirmation: "",
  });

  const [showRegPass1, setShowRegPass1] = useState(false);
  const [showRegPass2, setShowRegPass2] = useState(false);
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const updateRegField = (field, value) =>
    setRegData((prev) => ({ ...prev, [field]: value }));

  /* ===================== REQUEST FCM PERMISSION ===================== */
  const requestFCMNotification = async () => {
    try {
      console.log("🔔 ========== REQUESTING NOTIFICATION PERMISSION ==========");
      setFcmDebugInfo("Requesting notification permission...");

      if (!("Notification" in window)) {
        console.warn("❌ This browser does not support notifications");
        setFcmDebugInfo("❌ Browser doesn't support notifications");
        return null;
      }

      console.log("📝 Requesting notification permission from user...");
      const permission = await Notification.requestPermission();
      setFcmPermission(permission);
      console.log("✅ Permission result:", permission);
      setFcmDebugInfo(`Permission result: ${permission}`);

      if (permission === "granted") {
        console.log("🎉 Permission granted! Generating FCM token...");
        setFcmDebugInfo("Permission granted! Generating token...");
        const token = await generateFCMToken();

        if (token) {
          setFcmToken(token);
          setIsFCMInitialized(true);

          // ✅ Log the generated token
          console.log("🎉 ========== FCM TOKEN GENERATED AFTER PERMISSION ==========");
          console.log("📱 Full Token:", token);
          console.log("📏 Token Length:", token.length);
          console.log("🔍 Token Preview:", token.substring(0, 50) + "...");
          console.log("🎉 ========== END TOKEN ==========");

          setFcmDebugInfo(`✅ Token generated! Length: ${token.length} chars`);

          localStorage.setItem("debug_fcm_token", token);
          localStorage.setItem("debug_fcm_token_time", new Date().toISOString());

          return token;
        } else {
          console.warn("❌ Token generation returned null after permission granted");
          setFcmDebugInfo("❌ Token generation failed after permission");
          return null;
        }
      } else {
        console.warn(`❌ Permission not granted: ${permission}`);
        setFcmDebugInfo(`❌ Permission not granted: ${permission}`);
        return null;
      }
    } catch (error) {
      console.error("❌ Error requesting notification permission:", error);
      setFcmDebugInfo(`❌ Permission error: ${error.message}`);
      return null;
    }
  };

  const manuallyGenerateFCMToken = async () => {
    try {
      console.log("🔧 ========== MANUAL FCM TOKEN GENERATION ==========");
      setFcmDebugInfo("Manual token generation started...");

      // Clear any existing token
      setFcmToken(null);
      setIsFCMInitialized(false);

      // Request permission first
      const permission = await Notification.requestPermission();
      console.log("🔔 Manual permission result:", permission);

      if (permission !== "granted") {
        toast.error("Please allow notifications to generate FCM token");
        setFcmDebugInfo("❌ Permission not granted");
        return;
      }

      // Generate token
      console.log("🔄 Calling generateFCMToken()...");
      const token = await generateFCMToken();

      if (token) {
        setFcmToken(token);
        setIsFCMInitialized(true);

        console.log("🎉 MANUAL GENERATION SUCCESS!");
        console.log("📱 Token:", token);
        console.log("📏 Length:", token.length);

        setFcmDebugInfo(`✅ Manual generation successful! Length: ${token.length}`);

        // Store for debugging
        localStorage.setItem("debug_fcm_token", token);
        localStorage.setItem("debug_fcm_token_time", new Date().toISOString());

        toast.success(`FCM Token generated (${token.length} chars)`);
      } else {
        console.error("❌ Manual generation returned null");
        setFcmDebugInfo("❌ Manual generation failed - returned null");
        toast.error("Failed to generate FCM token");
      }
    } catch (error) {
      console.error("❌ Manual generation error:", error);
      setFcmDebugInfo(`❌ Manual error: ${error.message}`);
      toast.error("Error generating token: " + error.message);
    }
  };

  /* ===================== EXTRACT USER DATA FROM RESPONSE ===================== */
  const extractAndStoreUserData = (response) => {
    try {
      const token = response?.data?.token;
      const userData = response?.data?.user || {};

      console.log("📦 ========== EXTRACTING USER DATA ==========");
      console.log("🔑 Auth Token exists:", !!token);
      console.log("👤 User data:", userData);

      if (!token) {
        console.warn("❌ No token found in response");
        return null;
      }

      // Store token and authentication status
      localStorage.setItem("token", token);
      localStorage.setItem("isAuthenticated", "true");

      // Store user data from API response
      if (userData.id) {
        localStorage.setItem("user_id", userData.id.toString());
        console.log("✅ User ID stored:", userData.id);
      }

      if (userData.email) {
        localStorage.setItem("user_email", userData.email);
        console.log("✅ Email stored:", userData.email);
      }

      if (userData.full_name) {
        localStorage.setItem("user_name", userData.full_name);
        console.log("✅ Name stored:", userData.full_name);
      }

      if (userData.mobile_number) {
        localStorage.setItem("user_mobile", userData.mobile_number);
      }

      // Store additional user data if available
      if (userData.channel_name) {
        localStorage.setItem("user_channel_name", userData.channel_name);
      }

      if (userData.channel_url) {
        localStorage.setItem("user_channel_url", userData.channel_url);
      }

      if (userData.address) {
        localStorage.setItem("user_address", userData.address);
      }

      console.log("✅ ========== USER DATA STORED SUCCESSFULLY ==========");

      return userData;
    } catch (error) {
      console.error("❌ Error storing user data:", error);
      return null;
    }
  };

  /* ===================== SAVE FCM TOKEN ===================== */
  const saveFCMTokenForUser = async (userId) => {
    console.log("💾 ========== ATTEMPTING TO SAVE FCM TOKEN ==========");
    console.log("👤 User ID:", userId);
    console.log("🔑 Current FCM Token in state:", fcmToken ? "Yes" : "No");
    console.log("🔑 Current FCM Token value:", fcmToken);

    if (!userId) {
      console.error("❌ Cannot save FCM token: No user ID provided");
      setFcmDebugInfo("❌ No user ID for saving FCM token");
      return false;
    }

    try {
      let tokenToSave = fcmToken;

      // If no FCM token in state, try to generate one
      if (!tokenToSave) {
        console.log("⚠️ No FCM token in state, requesting notification permission...");
        setFcmDebugInfo("No token, requesting permission...");
        try {
          tokenToSave = await requestFCMNotification();
          if (tokenToSave) {
            setFcmToken(tokenToSave);
            setIsFCMInitialized(true);
            console.log("✅ Generated new token for saving");
            setFcmDebugInfo("✅ Generated new token");
          } else {
            console.warn("❌ Failed to generate FCM token");
            setFcmDebugInfo("❌ Failed to generate token");
            return false;
          }
        } catch (genError) {
          console.error("❌ Failed to generate FCM token:", genError);
          setFcmDebugInfo(`❌ Token generation error: ${genError.message}`);
          return false;
        }
      }

      console.log("💾 Token to save:", tokenToSave);
      console.log("📏 Token length:", tokenToSave.length);
      console.log("🔗 Calling saveFCMTokenToBackend API...");
      setFcmDebugInfo(`Saving token (${tokenToSave.length} chars) to backend...`);

      // Call your API to save the FCM token
      const result = await saveFCMTokenToBackend(userId, tokenToSave);

      if (result) {
        console.log("✅ ========== FCM TOKEN SAVED SUCCESSFULLY ==========");
        console.log("👤 User ID:", userId);
        console.log("🔑 Token (first 50 chars):", tokenToSave.substring(0, 50) + "...");
        console.log("🔑 Token (full):", tokenToSave);
        setFcmDebugInfo(`✅ FCM token saved for user ${userId}`);
        toast.success("Notifications enabled successfully!");
        return true;
      } else {
        console.warn("❌ Failed to save FCM token via API");
        setFcmDebugInfo("❌ Failed to save token via API");
        return false;
      }

    } catch (error) {
      console.error("❌ ========== ERROR SAVING FCM TOKEN ==========");
      console.error("Error:", error);
      console.error("Error message:", error.message);
      setFcmDebugInfo(`❌ Save error: ${error.message}`);
      return false;
    }
  };

  /* ===================== LOGIN HANDLER ===================== */
const handleLoginSubmit = async (e) => {
  e.preventDefault();
  setLoginError("");
  setIsLoggingIn(true);

  if (!loginEmail || !loginPassword) {
    setLoginError("Please enter both email and password");
    setIsLoggingIn(false);
    return;
  }

  try {
    const apiClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Add CSRF token if you have one from meta tag
        "X-CSRF-TOKEN": getCsrfTokenFromMeta(),
      },
    });

    console.log("🔐 Attempting Login...");

    const res = await apiClient.post("/login", {
      email: loginEmail,
      password: loginPassword,
    });

    console.log("✅ Login API Response:", res.data);

    if (res.data.success === true) {
      /* ===============================
         🔑 EXTRACT TOKEN SAFELY
      =============================== */

      const token =
        res.data.token ||
        res.data.access_token ||
        res.data.data?.token ||
        res.data.data?.access_token;

      if (!token) {
        console.error("❌ TOKEN NOT FOUND IN RESPONSE:", res.data);
        setLoginError("Authentication failed. Token missing.");
        setIsLoggingIn(false);
        return;
      }

      /* ===============================
         💾 STORE AUTH DATA
      =============================== */

      localStorage.setItem("token", token);
      localStorage.setItem("isAuthenticated", "true");

      console.log("🔑 Token Stored:", token);

      /* ===============================
         👤 STORE USER DATA
      =============================== */

      const user =
        res.data.user ||
        res.data.data?.user ||
        res.data.data ||
        {};

      if (user.id) {
        localStorage.setItem("user_id", user.id);
        console.log("✅ User ID stored:", user.id);
      }

      if (user.full_name) {
        localStorage.setItem("user_name", user.full_name);
        console.log("✅ Name stored:", user.full_name);
      }

      if (user.email) {
        localStorage.setItem("user_email", user.email);
        console.log("✅ Email stored:", user.email);
      }

      /* ===============================
         🔔 DISPATCH AUTH EVENT
      =============================== */

      window.dispatchEvent(new Event("authStateChanged"));

      toast.success("Logged in successfully");

      /* ===============================
         🔄 REDIRECT
      =============================== */

      setIsAuth(true);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 500);

    } else {
      setLoginError(res.data.message || "Invalid credentials");
    }

  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);

    if (err.response?.status === 419) {
      // CSRF token mismatch
      setLoginError("Session expired. Please refresh the page and try again.");
    } else if (err.response?.status === 422) {
      const errors = err.response.data.errors;
      const firstError = errors
        ? Object.values(errors)[0][0]
        : "Validation error";
      setLoginError(firstError);
    } else if (err.response?.status === 401) {
      setLoginError("Invalid email or password");
    } else if (err.response?.status === 404) {
      setLoginError("User not found");
    } else if (err.response?.status === 500) {
      setLoginError("Server error. Please try again later.");
    } else {
      setLoginError(
        err.response?.data?.message ||
        "An error occurred. Please try again."
      );
    }
  } finally {
    setIsLoggingIn(false);
  }
};

// Helper function to get CSRF token from meta tag
const getCsrfTokenFromMeta = () => {
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  return metaTag ? metaTag.getAttribute('content') : '';
};

  /* ===================== REGISTER HANDLER ===================== */
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegError("");
    setRegSuccess("");
    setIsRegistering(true);

    // Validation
    if (regData.password !== regData.password_confirmation) {
      setRegError("Passwords do not match");
      setIsRegistering(false);
      return;
    }

    if (regData.password.length < 6) {
      setRegError("Password must be at least 6 characters long");
      setIsRegistering(false);
      return;
    }

    if (!regData.email || !regData.full_name || !regData.mobile_number) {
      setRegError("Please fill in all required fields");
      setIsRegistering(false);
      return;
    }

    try {
      // Create axios instance with CORS headers
      const apiClient = axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Add CSRF token if you have one from meta tag
          "X-CSRF-TOKEN": getCsrfTokenFromMeta(),
        },
      });

      const res = await apiClient.post(`/register`, regData);

      console.log("Registration API Response:", res.data);

      if (res.data.status === true || res.status === 200 || res.status === 201) {
        toast.success("Registration successful!");
        setRegSuccess("Account created successfully! Redirecting to login...");

        // Clear registration form
        setRegData({
          full_name: "",
          channel_name: "",
          channel_url: "",
          email: "",
          address: "",
          mobile_number: "",
          password: "",
          password_confirmation: "",
        });

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } else {
        setRegError(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);

      if (err.response?.status === 419) {
        // CSRF token mismatch
        setRegError("Session expired. Please refresh the page and try again.");
      } else if (err.code === 'ERR_NETWORK') {
        // CORS error
        setRegError("CORS issue: Please contact admin to add 'http://localhost:5173' to allowed origins.");
      } else if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        if (errors && typeof errors === 'object') {
          const firstError = Object.values(errors)[0];
          setRegError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setRegError("Validation error occurred");
        }
      } else if (err.response?.status === 409) {
        setRegError("User already exists with this email");
      } else if (err.message === "Network Error") {
        setRegError("Network error. Please check your connection.");
      } else {
        setRegError(err.response?.data?.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsRegistering(false);
    }
  };

  /* ===================== DEBUG FCM TOKEN ===================== */
  const debugFCMToken = () => {
    console.log("🔍 ========== DEBUG FCM TOKEN INFO ==========");
    console.log("📍 Current URL:", window.location.href);
    console.log("🔔 Notification Permission:", Notification.permission);
    console.log("🔄 isFCMInitialized:", isFCMInitialized);
    console.log("🔑 FCM Token in state:", fcmToken);
    console.log("📏 Token length:", fcmToken ? fcmToken.length : 0);
    console.log("💾 Token in localStorage:", localStorage.getItem("debug_fcm_token"));

    if (fcmToken) {
      console.log("📱 Full Token:", fcmToken);
      console.log("🔍 First 100 chars:", fcmToken.substring(0, 100));
    }

    // Check service worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        console.log("👷 Service Worker Registrations:", registrations.length);
        registrations.forEach((reg, idx) => {
          console.log(`SW ${idx + 1}:`, reg.scope);
          console.log(`SW ${idx + 1} state:`, reg.active?.state);
        });
      });
    }

    console.log("✅ ========== END DEBUG ==========");

    // Update debug info in state
    setFcmDebugInfo(`Debug: Token ${fcmToken ? `present (${fcmToken.length} chars)` : 'missing'}`);
  };

  /* ===================== UI ===================== */
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center p-10 text-white bg-gradient-to-br from-gray-600 via-gray-700 to-gray-600">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80')",
          }}
        />
        <div className="relative z-20 max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Fast & Easy Home Loans</h1>
          <p className="opacity-90 text-lg">
            Apply today with quick approvals.
          </p>

          {!isFCMInitialized && fcmPermission !== "granted" && (
            <div className="mt-4 text-sm text-yellow-300">
              <p>🔔 Enable notifications for loan status updates</p>
              <p className="text-xs mt-1">Click "Manually Generate Token" button above</p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-10 pt-32">
        <div className="w-full max-w-[440px]">
          {/* TABS */}
          <div className="flex bg-gray-200 rounded-full p-1 mb-8">
            <Link
              to="/login"
              className={`w-1/2 text-center py-2 rounded-full font-medium ${isLogin ? "bg-white shadow" : "text-gray-600"
                }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`w-1/2 text-center py-2 rounded-full font-medium ${isRegister ? "bg-white shadow" : "text-gray-600"
                }`}
            >
              Register
            </Link>
          </div>

          {/* LOGIN */}
          {isLogin && (
            <div className="bg-white p-7 rounded-2xl shadow">
              <h2 className="font-semibold text-xl mb-5">Welcome Back</h2>

              {loginError && (
                <p className="text-red-500 text-sm mb-3 p-2 bg-red-50 rounded">{loginError}</p>
              )}

              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    disabled={isLoggingIn}
                  />
                </div>

                <div className="relative mb-6">
                  <input
                    type={showLoginPass ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    disabled={isLoggingIn}
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPass(!showLoginPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isLoggingIn}
                  >
                    {showLoginPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${isLoggingIn
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  {isLoggingIn ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-600 hover:text-black transition"
                >
                  Forgot your password?
                </Link>
              </div>

              <div className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-black font-semibold hover:underline">
                  Register here
                </Link>
              </div>
            </div>
          )}

          {/* REGISTER */}
          {isRegister && (
            <div className="bg-white p-7 rounded-2xl shadow">
              <h2 className="font-semibold text-xl mb-5">Create Account</h2>

              {regError && (
                <p className="text-red-500 text-sm mb-3 p-2 bg-red-50 rounded">{regError}</p>
              )}
              {regSuccess && (
                <p className="text-green-600 text-sm mb-3 p-2 bg-green-50 rounded">{regSuccess}</p>
              )}

              <form onSubmit={handleRegister}>
                {[
                  ["Full Name", "full_name", "text"],
                  ["Email", "email", "email"],
                  ["Mobile Number", "mobile_number", "tel"],
                ].map(([label, field, type]) => (
                  <div key={field} className="mb-3">
                    <input
                      type={type}
                      placeholder={label}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      value={regData[field]}
                      onChange={(e) =>
                        updateRegField(field, e.target.value)
                      }
                      required
                      disabled={isRegistering}
                    />
                  </div>
                ))}

                <div className="relative mb-3">
                  <input
                    type={showRegPass1 ? "text" : "password"}
                    placeholder="Password (min. 6 characters)"
                    className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    value={regData.password}
                    onChange={(e) =>
                      updateRegField("password", e.target.value)
                    }
                    required
                    minLength={6}
                    disabled={isRegistering}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPass1(!showRegPass1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isRegistering}
                  >
                    {showRegPass1 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="relative mb-6">
                  <input
                    type={showRegPass2 ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    value={regData.password_confirmation}
                    onChange={(e) =>
                      updateRegField(
                        "password_confirmation",
                        e.target.value
                      )
                    }
                    required
                    minLength={6}
                    disabled={isRegistering}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPass2(!showRegPass2)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isRegistering}
                  >
                    {showRegPass2 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isRegistering}
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${isRegistering
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  {isRegistering ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-black font-semibold hover:underline">
                  Login here
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}