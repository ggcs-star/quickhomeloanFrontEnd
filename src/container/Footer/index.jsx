import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  House,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Container } from "../../components/Layout";
import { Link } from "react-router-dom";



const Footer = () => {
  return (

    <footer className="bg-slate-900 text-slate-200 mt-auto">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <House className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-medium text-lg">
                  Quick Home Loan
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Making home ownership dreams come true with fast, reliable, and
                transparent loan services across India.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Instagram, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
          <div>
  <h3 className="text-white mb-4 font-semibold">Quick Links</h3>
  <ul className="space-y-2">
    {[
      { label: "Home", slug: "/" },
      { label: "Apply for Loan", slug: "/apply-loan" },
      { label: "About Us", slug: "/about-us" },
      { label: "FAQ", slug: "/faq" },
      { label: "Contact", slug: "/contact-us" },
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.slug}
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>


            {/* Loan Services */}
            {/* Loan Services */}
            <div>
              <h3 className="text-white mb-4 font-semibold">Loan Services</h3>
              <ul className="space-y-2 text-sm">
                {[
                  {
                    label: "Top-Up Home Loan",
                    slug: "top-up-home-loan",
                  },
                  {
                    label: "Transfer Home Loan",
                    slug: "transfer-home-loan",
                  },
                  {
                    label: "SBI Home Loan",
                    slug: "/home-loan/details/sbi",
                  },
                  {
                    label: "Home Loan for Doctors",
                    slug: "/home-loan/profession/doctor",
                  },
                  {
                    label: "20 Lakh Home Loan EMI",
                    slug: "/home-loan/amount/20-lakh-emi",
                  },
                  {
                    label: "Home Loan for Apartment",
                    slug: "/home-loan/property/apartment",
                  },

                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.slug}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact Section */}
            <div>
              <h3 className="text-white mb-4 font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    4th Floor, The Grand Emporio, Motera Stadium Rd, Motera, Ahmedabad, Gujarat 380005
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>support@quickhomeloan.in</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-xs text-slate-400">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Quick Home Loan. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
