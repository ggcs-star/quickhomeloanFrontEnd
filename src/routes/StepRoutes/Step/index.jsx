// Step.js - Add this debug
import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Step() {
  const savedStep = Number(localStorage.getItem("loan_step")) || 1;
  const savedFormData = JSON.parse(localStorage.getItem("loan_form")) || {
    pan: "",
    name: "",
    dob: "",
    city: "",
    employment: "",
    income: 50000,
    emis: 5000,
    loan: 3000000,
  };

  const [step, setStep] = useState(savedStep);
  const [formData, setFormData] = useState(savedFormData);
  const token = localStorage.getItem("token");

  // Debug token
  useEffect(() => {
    console.log("=== STEP COMPONENT DEBUG ===");
    console.log("Current step:", step);
    console.log("Token exists:", !!token);
    console.log("Token value:", token);
    console.log("Form data:", formData);
    
    if (!token) {
      console.error("⚠️ NO TOKEN FOUND! Please login first.");
    }
  }, [step, token]);

  useEffect(() => {
    localStorage.setItem("loan_step", step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem("loan_form", JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          token={token}
        />
      )}

      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          token={token}
        />
      )}

      {step === 3 && (
        <Step3
          formData={formData}
          setStep={setStep}
          token={token}
        />
      )}
    </div>
  );
}