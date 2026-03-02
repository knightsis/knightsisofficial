import { useState } from "react"; // ✅ Fixed: added missing import
import { NAV_LINKS } from "../data";
import logo from "../assets/logo.png";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import TermsOfService from "./Termsofservice";
import PrivacyPolicy from "./Privacypolicy";

const SERVICES_QUICK = [
  "Software Development",
  "Website Development",
  "IoT Projects",
  "PCB Design",
  "BIM Development",
  "Video Editing",
];

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#050008] border-t border-violet-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Knight Software Logo" className="h-8 w-auto" />
              <div>
                <div className="text-white font-black text-base tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Knight
                </div>
                <div className="text-violet-400 text-[10px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                Software & IoT Solutions
                </div>
              </div>
            </div>

            <p className="text-white/40 text-[13px] leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'Syne', sans-serif" }}>
              Building world-class technology solutions from Tamil Nadu, India — serving clients
              globally across software, hardware, and creative domains.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Linkedin size={16} className="text-white/40 cursor-pointer hover:text-violet-400 transition-colors duration-300"
                onClick={() => window.open("https://www.linkedin.com/company/knight-software-iot-solutions", "_blank")} />
              <Mail size={16} className="text-white/40 cursor-pointer hover:text-violet-400 transition-colors duration-300"
                onClick={() => window.open("mailto:contact@knightsoftware.in", "_blank")} />
              <Youtube size={16} className="text-white/40 cursor-pointer hover:text-violet-400 transition-colors duration-300"
                onClick={() => window.open("https://www.youtube.com/@knightsoftware", "_blank")} />
              <Instagram size={16} className="text-white/40 cursor-pointer hover:text-violet-400 transition-colors duration-300"
                onClick={() => window.open("https://www.instagram.com/knight_software", "_blank")} />
              <Facebook size={16} className="text-white/40 cursor-pointer hover:text-violet-400 transition-colors duration-300"
                onClick={() => window.open("https://www.facebook.com/knightsoftware", "_blank")} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-[11px] tracking-[3px] uppercase mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l.toLowerCase())}
                    className="text-white/35 hover:text-violet-400 text-[13px] transition-colors duration-300 text-left"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-[11px] tracking-[3px] uppercase mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_QUICK.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo("services")}
                    className="text-white/35 hover:text-violet-400 text-[13px] transition-colors duration-300 text-left"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-violet-900/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[12px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            © 2026 Knight Software & IoT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => setShowPrivacy(true)}
              className="text-white/25 hover:text-violet-400 text-[12px] transition-colors duration-300 hover:underline underline-offset-2"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Privacy Policy
            </button>
            <button onClick={() => setShowTerms(true)}
              className="text-white/25 hover:text-violet-400 text-[12px] transition-colors duration-300 hover:underline underline-offset-2"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}