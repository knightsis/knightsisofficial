import { useState } from "react";
import { useInView } from "../hooks";
import { PORTFOLIO } from "../data";

const FILTERS = ["All", "IoT", "BIM", "Software", "PCB", "Web", "Video"];

export default function Portfolio() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" data-nav="portfolio" className="relative bg-[#0b0016] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(109,40,217,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            ◆ Our Work
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Featured <span className="text-violet-400">Projects</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mb-6" />
          <p className="text-white/50 text-[15px] leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
            A curated selection of projects spanning IoT, BIM, software, and digital media.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 border transition-all duration-300 ${
                filter === f
                  ? "bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "bg-transparent border-violet-800/40 text-white/40 hover:border-violet-500/60 hover:text-white/80"
              }`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`group relative bg-[#07000f] border border-violet-900/30 p-7 hover:border-violet-500/50 transition-all duration-500 overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionProperty: "opacity, transform, border-color" }}
            >
              {/* BG glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top row */}
              <div className="flex items-center justify-between mb-5 relative">
                <span className="text-[10px] font-bold tracking-[3px] text-violet-600 group-hover:text-violet-400 uppercase transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Project {p.id}
                </span>
                <span className="text-[10px] font-bold tracking-[2px] uppercase px-2 py-1 bg-violet-500/15 border border-violet-600/30 text-violet-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {p.category}
                </span>
              </div>

              <h3
                className="font-bold text-white text-lg mb-3 group-hover:text-violet-200 transition-colors duration-300 relative"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {p.title}
              </h3>

              <p className="text-white/45 text-[13px] leading-relaxed mb-6 relative" style={{ fontFamily: "'Syne', sans-serif" }}>
                {p.desc}
              </p>

              {/* Tech stack */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
