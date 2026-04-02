import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Container } from "../../../../components/Layout";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <Container className="container mx-auto">

        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT + CONTACT DETAILS */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              Our experts are here to guide you. Fill out the form, and we'll get in touch
              to discuss your home loan needs.
            </p>

            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">+91 1800-123-4567</p>
                  <p className="text-sm text-slate-400">Mon-Sat, 9am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">support@quickhomeloan.in</p>
                  <p className="text-sm text-slate-400">Drop us an email anytime</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl">Ahmedabad Office</p>
                  <p className="text-sm text-slate-400">
                    4th Floor, The Grand Emporio, Motera Stadium Rd, Motera,
                    Ahmedabad, Gujarat 380005
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="mt-12 lg:mt-0 bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
            <form className="space-y-5">

              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border-slate-300 p-3 text-slate-900 
                  focus:border-slate-900 focus:ring-slate-900 border"
                />
              </div>

              {/* MOBILE + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full rounded-lg border-slate-300 p-3 text-slate-900 
                    focus:border-slate-900 focus:ring-slate-900 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-lg border-slate-300 p-3 text-slate-900 
                    focus:border-slate-900 focus:ring-slate-900 border"
                  />
                </div>

              </div>

              {/* LOAN PURPOSE */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Loan Purpose
                </label>

                <select
                  className="w-full rounded-lg border-slate-300 p-3 text-slate-600 
                  focus:border-slate-900 focus:ring-slate-900 border"
                >
                  <option value="">Select Loan Purpose</option>
                  <option value="new">New Home Purchase</option>
                  <option value="resale">Resale Property</option>
                  <option value="construction">Home Construction</option>
                  <option value="transfer">Balance Transfer</option>
                </select>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-6 py-4 text-lg font-bold 
                text-white hover:bg-black transition-colors mt-4 flex items-center 
                justify-center gap-2"
              >
                Talk to an Expert
                <ArrowRight className="h-5 w-5" />
              </button>

            </form>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ContactSection;
