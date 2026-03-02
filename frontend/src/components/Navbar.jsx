import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import logo from "../assets/logo.png";
import HireUs from "./HireUs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
      const current = sections.find((s) => {
        const rect = s.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActive(current.dataset.nav || current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Nav first */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07000f]/95 backdrop-blur-xl border-b border-violet-900/40 shadow-[0_4px_30px_rgba(109,40,217,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

          {/* Logo + Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <img src={logo} alt="Knight Software Logo" className="h-10 w-auto" />
            <div className="leading-tight">
              <span
                className="block text-white font-black text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                KNIGHT
              </span>
              {/* ✅ Fixed typo: "Snolutions" → "Solutions" */}
              <span
                className="block text-violet-400 text-[10px] font-semibold tracking-[3px] uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                SOFTWARE & IoT Solutions
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className={`relative text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300 pb-1 ${
                    active === link.toLowerCase() || active === link
                      ? "text-violet-300"
                      : "text-white/50 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link}
                  {(active === link.toLowerCase() || active === link) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA — Hire Us */}
          <button
            onClick={() => setHireOpen(true)}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-[11px] font-bold tracking-[2px] uppercase px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
            style={{
              fontFamily: "'Syne', sans-serif",
              clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
            }}
          >
            Hire Us ◆
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#07000f]/98 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            className="border-b border-violet-500 text-xs font-black text-white hover:text-violet-400 transition-colors duration-300 tracking-wider uppercase "
            style={{ fontFamily: "'Syne', sans-serif", transitionDelay: `${i * 50}ms` }}
          >
            {link}
          </button>
        ))}

        {/* Mobile Hire Us */}
        <button
          onClick={() => { setMenuOpen(false); setHireOpen(true); }}
          className="mt-4 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[13px] font-bold tracking-[2px] uppercase px-8 py-4 transition-all duration-300"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Hire Us ◆
        </button>
      </div>

      {/* ✅ Fixed: HireUs modal at bottom, not top */}
      <HireUs isOpen={hireOpen} onClose={() => setHireOpen(false)} />
    </>
  );
}