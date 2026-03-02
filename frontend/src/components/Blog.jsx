import { useInView } from "../hooks";
import { BLOG_POSTS } from "../data";

const CATEGORY_COLORS = {
  IoT: "text-cyan-400 bg-cyan-500/10 border-cyan-600/30",
  "PCB Design": "text-emerald-400 bg-emerald-500/10 border-emerald-600/30",
  BIM: "text-amber-400 bg-amber-500/10 border-amber-600/30",
  "Web Dev": "text-violet-400 bg-violet-500/10 border-violet-600/30",
};

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section id="blog" data-nav="blog" className="relative bg-[#07000f] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(109,40,217,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-xl">
            <div className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              ◆ Knowledge Hub
            </div>
            <h2
              className="font-black text-white leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              From the <span className="text-violet-400">Blog</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mb-5" />
            <p className="text-white/50 text-[15px] leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
              Insights on IoT, BIM, PCB design, web development, and the future of technology.
            </p>
          </div>
          <button
            className="border border-violet-600/40 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 text-[11px] font-bold tracking-[2px] uppercase px-6 py-3 transition-all duration-300 self-start lg:self-auto flex-shrink-0"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            View All Posts →
          </button>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className={`group flex flex-col border-b border-violet-900/30 hover:border-violet-500/40 pb-6 cursor-pointer transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionProperty: "opacity, transform, border-color" }}
            >
              {/* Category & date */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className={`text-[10px] font-bold tracking-[2px] uppercase px-2 py-1 border ${CATEGORY_COLORS[post.category] || "text-violet-400 bg-violet-500/10 border-violet-600/30"}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {post.category}
                </span>
                <span className="text-white/30 text-[11px]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {post.date}
                </span>
              </div>

              <h3
                className="font-bold text-white text-[16px] leading-snug mb-3 group-hover:text-violet-300 transition-colors duration-300 flex-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {post.title}
              </h3>

              <p className="text-white/40 text-[13px] leading-relaxed mb-5 group-hover:text-white/55 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                {post.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/30 text-[11px] font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  📖 {post.readTime} read
                </span>
                <span className="text-violet-600 group-hover:text-violet-400 transition-colors text-sm group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
