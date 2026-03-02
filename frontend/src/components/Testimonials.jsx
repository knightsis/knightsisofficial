import { useInView } from "../hooks";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" data-nav="testimonials" className="relative bg-[#0b0016] py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(76,29,149,0.12)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            ◆ Client Voices
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            What Clients <span className="text-violet-400">Say</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`group relative bg-[#07000f] border border-violet-900/30 p-8 hover:border-violet-600/50 transition-all duration-500 overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms`, transitionProperty: "opacity, transform, border-color" }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote mark */}
              <div
                className="text-6xl leading-none text-violet-800/60 group-hover:text-violet-700/80 mb-4 transition-colors duration-300 relative"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "
              </div>

              <p className="text-white/65 text-[14px] leading-[1.9] mb-8 italic relative group-hover:text-white/75 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-violet-400 text-sm">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 relative border-t border-violet-900/30 pt-6">
                <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center font-black text-sm shadow-lg shadow-violet-500/20" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]" style={{ fontFamily: "'Syne', sans-serif" }}>{t.name}</div>
                  <div className="text-white/35 text-[12px]" style={{ fontFamily: "'Syne', sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 border border-violet-900/30 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[["50+", "Projects Completed"], ["12+", "Service Domains"], ["100%", "Client Satisfaction"], ["Global", "Service Reach"]].map(([n, l], i) => (
            <div
              key={l}
              className={`py-8 px-6 text-center ${i < 3 ? "border-r border-violet-900/30" : ""} hover:bg-violet-500/5 transition-colors duration-300`}
            >
              <div className="text-3xl font-black text-violet-300 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{n}</div>
              <div className="text-white/35 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
