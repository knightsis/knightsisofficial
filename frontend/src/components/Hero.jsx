import { useEffect, useState } from "react";

const WORDS = ["SOFTWARE", "IoT", "BIM", "PCB", "DESIGN"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" data-nav="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#07000f]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_40%,rgba(109,40,217,0.22)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_15%_85%,rgba(76,29,149,0.18)_0%,transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" style={{ right: "20%" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className={`inline-flex items-center gap-2 border border-violet-500/40 bg-violet-500/10 px-4 py-2 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-violet-300 text-[11px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                Knight Software & IoT Solutions
              </span>
            </div>

            <h1
              className={`font-black leading-none mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              <span className="block text-white">WE BUILD</span>
              <span className="block" style={{ WebkitTextStroke: "1px rgba(167,139,250,0.5)", color: "transparent" }}>
                WORLD-CLASS
              </span>
              <span
                className={`block text-violet-400 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                style={{ transition: "opacity 0.3s, transform 0.3s" }}
              >
                {WORDS[wordIndex]}
              </span>
            </h1>

            <p
              className={`text-white/55 text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              From IoT hardware to enterprise software, BIM models to brand videos — Knight Software is your end-to-end technology partner, delivering excellence across every domain.
            </p>

            <div
              className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <button
                onClick={() => scrollTo("services")}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-[12px] font-bold tracking-[2px] uppercase px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Explore Services →
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 text-[12px] font-bold tracking-[2px] uppercase px-8 py-4 transition-all duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-10 flex-wrap transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* {[["50+", "Projects"], ["12+", "Domains"], ["5★", "Rating"], ["Global", "Reach"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-black text-violet-300 leading-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{n}</div>
                  <div className="text-white/40 text-[10px] font-bold tracking-[2px] uppercase mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>{l}</div>
                </div>
              ))} */}
            </div>
          </div>

          {/* Right — visual panel */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/20 border border-violet-700/30 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {["IoT Systems", "PCB Design", "BIM Dev", "Web Apps", "Construction", "Video Edit"].map((s, i) => (
                    <div
                      key={s}
                      className="bg-white/5 hover:bg-violet-500/15 border border-white/10 hover:border-violet-500/40 p-4 transition-all duration-300 cursor-default group"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="text-xs text-violet-300/70 group-hover:text-violet-300 font-bold tracking-widest uppercase transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {s}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-violet-700/30 flex items-center justify-between">
                  <span className="text-violet-400 text-xs font-bold tracking-widest" style={{ fontFamily: "'Syne', sans-serif" }}>Tamil Nadu, India</span>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-violet-400" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-violet-400" />
              {/* Glow */}
              <div className="absolute inset-0 bg-violet-600/5 blur-2xl -z-10 scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[3px] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-violet-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
