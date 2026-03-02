import { useInView } from "../hooks";
import logo from "../assets/logo.png";

const SKILLS = [
  "IoT Engineering",
  "BIM / CAD",
  "Full Stack Dev",
  "PCB Design",
  "Construction",
  "Brand Design",
  "Video Editing",
  "Marketing",
];

const STATS = [
  { number: "10+", label: "Projects Delivered" },
  { number: "12+", label: "Service Domains" },
  { number: "100%", label: "Client Satisfaction" },
];

const PILLARS = [
  {
    icon: "🚀",
    title: "Innovation First",
    desc: "We push boundaries with cutting-edge technology — from IoT systems to BIM platforms.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Based in Tamil Nadu, India — delivering world-class solutions to clients worldwide.",
  },
  {
    icon: "🔧",
    title: "End-to-End Delivery",
    desc: "From concept to deployment, we handle every phase with precision and care.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    desc: "We don't just build products — we build long-term relationships with our clients.",
  },
];

export default function About() {
  const [ref, inView] = useInView();
  const [statsRef, statsInView] = useInView ? useInView() : [null, true];

  return (
    <section
      id="about"
      data-nav="about"
      className="relative bg-[#0b0016] py-32 overflow-hidden"
    >
      {/* BG Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(109,40,217,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_80%_80%_at_0%_100%,rgba(76,29,149,0.1)_0%,transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── HEADER ── */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div
            className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ◆ Who We Are
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            }}
          >
            About <span className="text-violet-400">Knight Software</span>
            <br />& IoT Solutions
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mx-auto mb-6" />
          <p
            className="text-white/50 text-[15px] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            A globally operating technology company delivering end-to-end solutions across software, hardware, design, and construction — all under one roof.
          </p>
        </div>

        {/* ── STORY + VISUAL SPLIT ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left — Company story */}
          <div className={`transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>

            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/8 px-4 py-2 mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-violet-300 text-[11px] font-bold tracking-[3px] uppercase">
                Est. in Tamil Nadu, India
              </span>
            </div>

            <h3
              className="font-black text-white text-2xl leading-snug mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              One Company.<br />
              <span className="text-violet-400">Every Domain.</span>
            </h3>

            <p
              className="text-white/60 leading-relaxed mb-5 text-[15px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <strong className="text-white">Knight Software & IoT Solutions</strong> was founded with a single mission — to make world-class technology accessible to every business, big or small, local or global.
            </p>
            <p
              className="text-white/60 leading-relaxed mb-5 text-[15px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              We are a multidisciplinary technology company that fuses <strong className="text-white">software engineering</strong>, <strong className="text-white">hardware design</strong>, <strong className="text-white">BIM & construction</strong>, and <strong className="text-white">creative services</strong> — delivering complete, production-ready solutions from a single trusted team.
            </p>
            <p
              className="text-white/60 leading-relaxed mb-10 text-[15px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              From a startup's first website to a factory's IoT monitoring system — we bring the same passion, precision, and commitment to every project we take on.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <span
                  key={s}
                  className="text-[11px] font-bold tracking-[1.5px] uppercase px-3 py-2 border border-violet-600/40 text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400 transition-all duration-300 cursor-default"
                  style={{ fontFamily: "'Syne', sans-serif", transitionDelay: `${i * 40}ms` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <div className="relative">

              {/* Main visual block */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a0030 0%, #0b0016 60%, #12001f 100%)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  padding: "3rem",
                }}
              >
                {/* Company logo area */}
                <div className="text-center mb-8">
                 <img src={logo} alt="Knight Software Logo" className="h-16 w-auto mx-auto" />
                  <div
                    className="text-white font-black text-xl tracking-widest uppercase"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Knight Software
                  </div>
                  <div
                    className="text-violet-400 text-[11px] font-bold tracking-[3px] uppercase mt-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    & IoT Solutions
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent mb-8" />

                {/* Key facts */}
                <div className="space-y-4">
                  {[
                    ["📍", "Headquarters", "Tamil Nadu, India"],
                    ["🌍", "Service Area", "Worldwide"],
                    ["🏢", "Type", "MSME Registered Company"],
                    ["⚡", "Domains", "12+ Service Areas"],
                   
                  ].map(([icon, label, value]) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-base">{icon}</span>
                        <span
                          className="text-white/40 text-[12px] font-bold tracking-[1px] uppercase text-left"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {label}
                        </span>
                      </div>
                      <span
                        className="text-right text-violet-300 text-[12px] font-bold"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-violet-400" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-violet-400" />

              {/* Glow */}
              <div className="absolute inset-0 bg-violet-600/5 blur-3xl -z-10 scale-110" />
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 border border-violet-900/30 mb-24 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-6 text-center hover:bg-violet-500/5 transition-colors duration-300 ${i < 3 ? "border-r border-violet-900/30" : ""}`}
            >
              <div
                className="text-4xl font-black text-violet-300 mb-2 leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.number}
              </div>
              <div
                className="text-white/35 text-[11px] font-bold tracking-[2px] uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── COMPANY PILLARS ── */}
        <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <div
              className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              ◆ Our Core Values
            </div>
            <h3
              className="font-black text-white text-2xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Drives <span className="text-violet-400">Us</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-violet-900/20">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="group bg-[#0b0016] p-8 hover:bg-violet-500/5 transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top hover line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="text-3xl mb-4">{p.icon}</div>
                <h4
                  className="text-white font-bold text-[15px] mb-3 group-hover:text-violet-200 transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-white/45 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}