import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Step() {
  // ⭐ Load saved step OR default to 1
  const savedStep = Number(localStorage.getItem("loan_step")) || 1;

  // ⭐ Load saved formData OR fallback to empty form
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

  // ⭐ Save step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("loan_step", step);
  }, [step]);

  // ⭐ Save form data to localStorage whenever it changes
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
