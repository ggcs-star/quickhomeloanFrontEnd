import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../api'; // Adjust path as needed

export const useProAccess = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

  const checkProAccess = async () => {
    setIsCheckingAccess(true);
    try {
      const token = localStorage.getItem("token");
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      
      if (isProLocal) {
        setIsProUser(true);
        setIsCheckingAccess(false);
        return;
      }
      
      if (!token) {
        setIsProUser(false);
        setIsCheckingAccess(false);
        return;
      }
      
      // Using BASE_URL from api.js
      const response = await axios.get(
        `${BASE_URL}/check-access`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.data && response.data.access === true) {
        setIsProUser(true);
        localStorage.setItem("is_pro_user", "true");
      } else {
        setIsProUser(false);
        localStorage.setItem("is_pro_user", "false");
      }
    } catch (error) {
      console.error("Error checking pro access:", error);
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      setIsProUser(isProLocal);
    } finally {
      setIsCheckingAccess(false);
    }
  };

  useEffect(() => {
    checkProAccess();
    
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.isPro === true) {
        checkProAccess();
      }
    };
    
    window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    
    return () => {
      window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    };
  }, []);

  return { isProUser, isCheckingAccess, checkProAccess };
};