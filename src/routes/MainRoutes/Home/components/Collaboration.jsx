import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from "../../../../components/Layout";
import contact from '../../../../assets/contact-us.jpeg';

const Collaboration = () => {
    useEffect(() => {
        const savedFormData = localStorage.getItem("collaborationForm");
        if (savedFormData) {
            formik.setValues(JSON.parse(savedFormData));
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            solution: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            solution: Yup.string().required('Please select a solution'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log("Form Submitted:", values);
            localStorage.removeItem("collaborationForm");
            formik.setFieldValue('solution', '');
            resetForm();
        }
    });

    useEffect(() => {
        localStorage.setItem("collaborationForm", JSON.stringify(formik.values));
    }, [formik.values]);

    return (
        <Container>
            <div className="bg-gray-100 rounded-2xl my-20 font-helvetica tracking-wide flex flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-1/2 p-6">
                    <div className="md:px-8">
                        <div className="lg:px-10">
                            <h2 className="text-3xl lg:text-5xl text-black mb-4">Let’s collaborate</h2>
                            <p className="mb-6 leading-8 text-md md:text-md text-primary">
                                If you are seeking a growth partner eager to explore endless possibilities and drive mutual success, we would love to connect with you. Together, we can create innovative solutions, cultivate growth, and shape a brighter future for the industry.
                            </p>

                            <form onSubmit={formik.handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="!text-black w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-gray-500"
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="text-primary text-sm px-2 py-2">{formik.errors.name}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="!text-black w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-gray-500"
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-primary text-sm px-2 py-2">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <select
                                            name="solution"
                                            value={formik.values.solution}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full p-3 mr-8 border border-gray-300 rounded-md focus:ring-0 focus:border-gray-500 
                                            ${formik.values.solution === "" ? "text-gray-500" : "text-black"}`}
                                        >
                                            <option className='' value="" disabled>Select</option>
                                            <option value="pharmconnect" className='text-black'>Pharmconnect</option>
                                            <option value="pharmretail" className='text-black'>Pharmretail</option>
                                            <option value="pharmanalytics" className='text-black'>Pharmanalytics</option>
                                            <option value="publichealth" className='text-black'>Public Health</option>
                                        </select>

                                        {formik.touched.solution && formik.errors.solution ? (
                                            <div className="text-primary text-sm px-2 py-2">{formik.errors.solution}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-gray-500"
                                    ></textarea>
                                    {formik.touched.message && formik.errors.message ? (
                                        <div className="text-primary text-sm px-2 py-2">{formik.errors.message}</div>
                                    ) : null}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary cursor-pointer text-white py-3 rounded-md hover:bg-darkprimary transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
    <img
        src={contact}
        alt="Collaboration"
        className="rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl lg:rounded-br-2xl shadow-lg w-full  md:max-h-[700px] max-h-[300px] object-cover"
    />
</div>

            </div>
        </Container>
    );
};

export default Collaboration;
