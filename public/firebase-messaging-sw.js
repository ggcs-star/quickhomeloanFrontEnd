// Use Firebase COMPAT for SW support
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyATLAZGN51WiP_QtD4ERUFKp1qN_FcKvsk",
  authDomain: "quickhomeloan-72586.firebaseapp.com",
  projectId: "quickhomeloan-72586",
  storageBucket: "quickhomeloan-72586.firebasestorage.app",
  messagingSenderId: "377879974606",
  appId: "1:377879974606:web:0434d2b0ddd5643307f69f",
  measurementId: "G-PB88D9N45G"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo192.png"
  });
});
