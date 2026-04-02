import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyATLAZGN51WiP_QtD4ERUFKp1qN_FcKvsk",
  authDomain: "quickhomeloan-72586.firebaseapp.com",
  projectId: "quickhomeloan-72586",
  storageBucket: "quickhomeloan-72586.firebasestorage.app",
  messagingSenderId: "377879974606",
  appId: "1:377879974606:web:0434d2b0ddd5643307f69f",
  measurementId: "G-PB88D9N45G",
};

// Initialize Firebase safely
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("✅ Firebase initialized (compat version)");
}

const messaging = firebase.messaging();

// ------------------------------------------------------
// ⭐ Register Service Worker (FIXED - compat version)
// ------------------------------------------------------
async function registerServiceWorker() {
  try {
    if (!("serviceWorker" in navigator)) {
      console.error("❌ Service Worker not supported");
      return null;
    }

    console.log("👷 Registering service worker...");
    
    // Register service worker - Firebase compat automatically detects it
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      { 
        scope: "/",
        updateViaCache: 'none'
      }
    );

    console.log("✅ Service Worker Registered:", registration.scope);
    console.log("📱 Service Worker state:", registration.active?.state);

    // ⚠️ IMPORTANT: In Firebase COMPAT version, DO NOT use messaging.useServiceWorker()
    // The SDK automatically detects the registered service worker
    
    // Wait for service worker to be ready
    if (registration.installing) {
      console.log("⏳ Waiting for service worker activation...");
      await new Promise((resolve) => {
        const worker = registration.installing;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'activated') {
            console.log("✅ Service Worker activated");
            resolve();
          }
        });
      });
    }

    return registration;
  } catch (err) {
    console.error("❌ Service Worker Registration Failed:", err);
    console.error("Error details:", err.message);
    
    // Try alternative approach
    try {
      console.log("🔄 Trying to get existing service worker...");
      const existingRegistration = await navigator.serviceWorker.ready;
      if (existingRegistration) {
        console.log("✅ Using existing service worker registration");
        return existingRegistration;
      }
    } catch (swError) {
      console.error("❌ Could not get existing service worker:", swError);
    }
    
    return null;
  }
}

// ------------------------------------------------------
// ⭐ Generate FCM Token (UPDATED for compat version)
// ------------------------------------------------------
export const generateFCMToken = async () => {
  try {
    console.log("🔑 ========== GENERATING FCM TOKEN ==========");
    
    // Check service worker support
    if (!("serviceWorker" in navigator)) {
      console.error("❌ Browser does not support service workers");
      return null;
    }

    // Request notification permission
    console.log("🔔 Checking notification permission...");
    let permission = Notification.permission;
    
    if (permission === "default") {
      console.log("📝 Requesting notification permission from user...");
      permission = await Notification.requestPermission();
      console.log("🔔 Permission result:", permission);
    }
    
    if (permission !== "granted") {
      console.warn(`❌ Notification permission not granted: ${permission}`);
      return null;
    }

    console.log("✅ Notification permission granted");
    
    // Get or register service worker
    let registration;
    try {
      // Try to get existing registration first
      registration = await navigator.serviceWorker.ready;
      console.log("✅ Using existing service worker registration");
    } catch {
      // Register new service worker if none exists
      console.log("👷 No existing service worker, registering new...");
      registration = await registerServiceWorker();
    }
    
    if (!registration) {
      console.error("❌ Failed to get service worker registration");
      return null;
    }

    console.log("🔧 Getting FCM token with VAPID key...");
    
    // Your VAPID key from Firebase Console
    const vapidKey = "BOT844U_IdDiKXTDVk0dkbNbQBF7vXu0dnUvtzW3fZmuAq9Y6icP6-Vi6agPXh-tIQ_UF5IPPmtse-UHdMW7cB4";
    
    // For Firebase compat version, getToken automatically uses the active service worker
    const token = await messaging.getToken({
      vapidKey: vapidKey,
      // In compat version, serviceWorkerRegistration is optional
      // Firebase automatically uses the registered service worker
    });

    if (token) {
      console.log("🎉 ========== FCM TOKEN GENERATED SUCCESSFULLY ==========");
      console.log("📱 Token:", token);
      console.log("📏 Token length:", token.length);
      console.log("✅ Token generation successful!");
      return token;
    } else {
      console.warn("⚠️ No token returned from getToken()");
      
      // Try alternative approach
      try {
        console.log("🔄 Trying alternative token generation without extra params...");
        const altToken = await messaging.getToken();
        
        if (altToken) {
          console.log("✅ Alternative token generation successful:", altToken);
          return altToken;
        }
      } catch (altError) {
        console.error("❌ Alternative token generation failed:", altError);
      }
      
      return null;
    }
  } catch (error) {
    console.error("❌ FCM Token Generation Error:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    
    // Check for specific Firebase errors
    if (error.code === 'messaging/permission-blocked') {
      console.error("📵 Notifications blocked by browser or user");
    } else if (error.code === 'messaging/permission-default') {
      console.error("🤔 Notification permission not yet requested");
    } else if (error.code === 'messaging/invalid-vapid-key') {
      console.error("🔑 INVALID VAPID KEY!");
      console.error("Please verify your VAPID key in Firebase Console");
    }
    
    return null;
  }
};

// ------------------------------------------------------
// ⭐ Foreground Notifications Listener
// ------------------------------------------------------
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("📩 Foreground Message:", payload);
      resolve(payload);
    });
  });