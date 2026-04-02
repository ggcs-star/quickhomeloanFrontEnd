import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function DuplicateStepper() {
  const savedStep = Number(localStorage.getItem("loan_step")) || 1;

  const savedFormData = JSON.parse(localStorage.getItem("loan_form")) || {
    pan: "",
    name: "",
    dob: "",
    city: "Mumbai",
    employment: "",
    income: 50000,
    emis: 5000,
    loan: 3000000,
  };

  const [step, setStep] = useState(savedStep);
  const [formData, setFormData] = useState(savedFormData);

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
        />
      )}

      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <Step3
          formData={formData}
          setStep={setStep}
        />
      )}
    </div>
  );
}
