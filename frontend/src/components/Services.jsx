import { useInView } from "../hooks";
import { SERVICES } from "../data";

function ServiceCard({ service, index, inView }) {
  return (
    <div
      className={`group relative bg-[#07000f] border border-violet-900/30 p-6 hover:border-violet-500/60 hover:bg-violet-500/5 transition-all duration-500 cursor-default overflow-hidden ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms`, transitionProperty: "opacity, transform, background-color, border-color" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Number */}
      <div className="text-[10px] font-bold tracking-[3px] text-violet-800 group-hover:text-violet-600 uppercase mb-4 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="text-3xl mb-4">{service.icon}</div>

      <h3 className="text-white font-bold text-[15px] mb-3 group-hover:text-violet-200 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
        {service.title}
      </h3>

      <p className="text-white/45 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
        {service.desc}
      </p>

      {/* Arrow */}
      <div className="mt-5 text-violet-700 group-hover:text-violet-400 transition-all duration-300 group-hover:translate-x-1 text-sm">
        →
      </div>
    </div>
  );
}

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" data-nav="services" className="relative bg-[#07000f] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(109,40,217,0.1)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-800 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          ref={ref}
        >
          <div className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            ◆ What We Do
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Our <span className="text-violet-400">Services</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mb-6" />
          <p className="text-white/50 leading-relaxed text-[15px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            From hardware to software, construction to content — we cover every domain your business needs to grow and succeed globally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-violet-900/20">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
