import { useState } from "react";
import { Container } from "../../../../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 800);
    }
  };

  return (
    <div className="mt-14 bg-[#f9f9f9]">
      <Container>
        <main className="mx-auto px-0 lg:px-6 py-14 lg:py-28 text-neutral-900">
          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold p-2 mt-3 text-neutral-900">
              We’re Always Here to Help You
            </h1>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Have a question, feedback, or partnership idea? Let’s connect — we’ll get back to you
              within 24 hours.
            </p>
          </section>

          {/* Contact Info */}
          <section className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Phone className="w-7 h-7 text-neutral-900 mx-auto" />,
                title: "Phone Support",
                detail: "+91 98765 43210",
                desc: "Mon - Sat, 9 AM - 7 PM",
              },
              {
                icon: <Mail className="w-7 h-7 text-neutral-900 mx-auto" />,
                title: "Email Us",
                detail: "support@quickhomeloan.in",
                desc: "Usually responds within 24 hours",
              },
              {
                icon: <MapPin className="w-7 h-7 text-neutral-900 mx-auto" />,
                title: "Our Office",
                detail: "3rd Floor, Sunrise Towers, MG Road",
                desc: "Bengaluru, Karnataka 560001",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-md p-6 border border-neutral-300"
              >
                {item.icon}
                <h4 className="font-semibold text-neutral-900 mt-3">{item.title}</h4>
                <p className="mt-2 text-neutral-800 font-medium">{item.detail}</p>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Contact Form */}
          <section className="mt-8 lg:mt-20 bg-white rounded-md p-10 max-w-4xl mx-auto border border-neutral-300">
            <h3 className="text-3xl font-bold text-center text-neutral-900">Send Us a Message</h3>
            <p className="text-center text-neutral-600 mt-2 mb-10">
              Fill out the form below and our support team will reach out soon.
            </p>

            <form onSubmit={handleSubmit} noValidate className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 ${errors.name
                    ? "border-red-500 ring-red-100"
                    : "border-neutral-300 focus:ring-neutral-900"
                    }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 ${errors.email
                    ? "border-red-500 ring-red-100"
                    : "border-neutral-300 focus:ring-neutral-900"
                    }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 ${errors.subject
                    ? "border-red-500 ring-red-100"
                    : "border-neutral-300 focus:ring-neutral-900"
                    }`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 resize-none ${errors.message
                    ? "border-red-500 ring-red-100"
                    : "border-neutral-300 focus:ring-neutral-900"
                    }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`cursor-pointer px-8 py-3 rounded-md font-semibold shadow-sm hover:shadow-md transition-all ${submitted
                    ? "bg-neutral-400 cursor-not-allowed text-white"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                    }`}
                >
                  {submitted ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </section>

          {/* CTA Section */}
          <section className="mt-8 lg:mt-24 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white rounded-md p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <h3 className="text-3xl font-bold relative z-10">
              Let’s Simplify Your Home Loan Journey
            </h3>
            <p className="mt-3 text-neutral-200 relative z-10">
              Ready to take the next step? Our team will help you find the best plan for your dream home.
            </p>
            <div className="mt-8 flex justify-center gap-4 relative z-10 flex-wrap">
              <a
                href="/apply"
                className="px-6 py-3 bg-white text-black rounded-md hover:bg-white transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/faq"
                className="px-6 py-3 border border-neutral-300 rounded-md 
             hover:bg-white hover:text-black hover:border-black 
             transition-colors"
              >
                View FAQs
              </a>

            </div>
          </section>
        </main>
      </Container>
    </div>
  );
};

export default ContactUsPage;
