// src/pages/HomeLoan/components/LoanQuoteForm.jsx
import React, { useState } from "react";
import { Container } from "../../../../components/Layout";

export default function LoanQuoteForm({ form }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <Container>
            <section className="bg-gray-50 mt-10 text-center">
                <h2 className="text-xl font-semibold mb-6">{form.heading}</h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-4 gap-4 justify-center"
                >
                    {form.fields.map((field) => (
                        <div key={field.id} className="relative">
                            {field.type === "select" ? (
                                <select
                                    name={field.id}
                                    required={field.required}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-3 text-sm"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        {field.label} *
                                    </option>
                                    {field.options.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    {field.icon && (
                                        <span className="px-3 text-gray-600">{field.icon}</span>
                                    )}
                                    <input
                                        type={field.type}
                                        name={field.id}
                                        required={field.required}
                                        placeholder={`${field.label} *`}
                                        onChange={handleChange}
                                        className="flex-1 p-3 text-sm border-none outline-none"
                                    />
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="col-span-4 text-left mt-3">
                        <label className="flex items-start gap-2 text-sm text-gray-600">
                            <input type="checkbox" required className="mt-1 accent-blue-600" />
                            {form.checkboxText}{" "}
                            <a href="#" className="text-blue-600 hover:underline ml-1">
                                Read More
                            </a>
                        </label>
                    </div>

                    <div className="col-span-4 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800"
                        >
                            {form.buttonText} →
                        </button>
                    </div>
                </form>
            </section>
        </Container>
    );
}
