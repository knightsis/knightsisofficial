import { useState } from "react";
import { useInView } from "../hooks";

const WHATSAPP_NUMBER = "919XXXXXXXXX"; // 🔁 Replace: countrycode + number, no spaces or +

const CONTACT_INFO = [
  { icon: "📧", label: "Email", protocol: "mailto:", value: "kalaimani@knightsoftware.com" },
  { icon: "📞", label: "Phone", protocol: "tel:", value: "+91 6380010292" },
  { icon: "💼", label: "LinkedIn", protocol: "https://www.linkedin.com/in/kalaimani14/", value: "kalaimani" },
  { icon: "🌐", label: "Website", protocol: "https://", value: "www.knightsoftware.in" },
  { icon: "📍", label: "Location", protocol: "https://maps.google.com/?q=", value: "Tamil Nadu, India" },
  { icon: "⏱️", label: "Response Time", value: "Within 24 Hours" },
];

const SERVICES = [
  "Software Development",
  "Website Development",
  "IoT Project",
  "PCB Design",
  "BIM Development",
  "Construction Design",
  "Video Editing",
  "Billing Machine",
  "Marketing Poster",
  "Building Construction",
  "Portfolio Development",
  "UI/UX Design",
  "Other",
];




const TIMELINES = [
  "ASAP (Urgent)",
  "Within 1 Month",
  "1 – 3 Months",
  "3 – 6 Months",
  "6+ Months",
  "Flexible",
];

const inputClass =
  "w-full bg-violet-500/5 border border-violet-800/40 focus:border-violet-500 focus:bg-violet-500/10 text-white placeholder-white/25 px-4 py-3.5 text-[13px] outline-none transition-all duration-300";
const selectClass =
  "w-full bg-[#0f0018] border border-violet-800/40 focus:border-violet-500 text-white px-4 py-3.5 text-[13px] outline-none transition-all duration-300 cursor-pointer appearance-none";
const labelClass =
  "text-[10px] font-bold tracking-[2px] uppercase text-violet-400 mb-2 block";

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
  
    timeline: "",
    message: "",
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });

    const msg =
`👋 *New Project Inquiry — Knight Software*

━━━━━━━━━━━━━━━━━━━━
👤 *Client Details*
━━━━━━━━━━━━━━━━━━━━
*Name:*       ${form.name}
*Email:*      ${form.email}
*Phone:*      ${form.phone || "Not provided"}
*Company:*    ${form.company || "Individual"}

━━━━━━━━━━━━━━━━━━━━
📋 *Project Details*
━━━━━━━━━━━━━━━━━━━━
*Service:*    ${form.service || "Not specified"}

*Timeline:*   ${form.timeline || "Not specified"}

━━━━━━━━━━━━━━━━━━━━
💬 *Message*
━━━━━━━━━━━━━━━━━━━━
${form.message}

━━━━━━━━━━━━━━━━━━━━
🌐 Sent via knightsoftware.in
🕐 ${dateStr} — ${timeStr}
━━━━━━━━━━━━━━━━━━━━`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", company: "", service: "", timeline: "", message: "" });
  };

  return (
    <section id="contact" data-nav="contact" className="relative bg-[#07000f] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(109,40,217,0.1)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            ◆ Get In Touch
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Let's Build <span className="text-violet-400">Together</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-violet-500 to-purple-400 mx-auto mb-5" />
          <p className="text-white/50 text-[15px] max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
            Fill in your project details and we'll receive it directly on WhatsApp — guaranteed reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── LEFT INFO PANEL ── */}
          <div className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            {/* Contact info */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/10 border border-violet-800/30 p-8">
              <h3 className="text-white font-bold text-base mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact Information
              </h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-violet-500/15 border border-violet-600/30 flex items-center justify-center text-base flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[2px] uppercase text-violet-400 mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>{c.label}</div>
                      <div onClick={() => window.open(`${c.protocol || "https://"}${c.value}`,)} className="text-white/70 text-[13px] cursor-pointer hover:text-violet-400 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>{c.value}</div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp chat */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("👋 Hi Kalaimani! I'd like to discuss a project with Knight Software.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 font-bold text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20 text-white"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #16a34a, #15803d)",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <WhatsAppIcon />
              Quick Chat on WhatsApp
            </a>

            {/* What happens next */}
            <div className="border border-violet-900/30 p-6">
              <h4 className="text-white text-[12px] font-bold tracking-[2px] uppercase mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
                What Happens Next?
              </h4>
              <div className="space-y-4">
                {[
                  ["01", "Fill & submit the form below"],
                  ["02", "WhatsApp opens with your details"],
                  ["03", "We review & reply within 24 hrs"],
                  ["04", "Free consultation call scheduled"],
                ].map(([n, t]) => (
                  <div key={n} className="flex items-center gap-3">
                    <span
                      className="text-[11px] font-black text-violet-500 w-7 h-7 border border-violet-700/40 flex items-center justify-center flex-shrink-0"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {n}
                    </span>
                    <span className="text-white/50 text-[13px]" style={{ fontFamily: "'Syne', sans-serif" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT FORM ── */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Full Name *</label>
                  <input type="text" required value={form.name} onChange={set("name")}
                    placeholder="Enter your full name" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Email Address *</label>
                  <input type="email" required value={form.email} onChange={set("email")}
                    placeholder="Enter your email address" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Phone / WhatsApp</label>
                  <input type="tel" value={form.phone} onChange={set("phone")}
                    placeholder="+91 **********" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Company / Brand</label>
                  <input type="text" value={form.company} onChange={set("company")}
                    placeholder="Your company name" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Service Required *</label>
                <div className="relative">
                  <select required value={form.service} onChange={set("service")}
                    className={selectClass} style={{ fontFamily: "'Syne', sans-serif" }}>
                    <option value="" disabled>Select a service...</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none text-xs">▼</div>
                </div>
              </div>

              {/*  Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
               
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Project Timeline</label>
                  <div className="relative">
                    <select value={form.timeline} onChange={set("timeline")}
                      className={selectClass} style={{ fontFamily: "'Syne', sans-serif" }}>
                      <option value="">Select timeline...</option>
                      {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none text-xs">▼</div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Project Description *</label>
                <textarea required rows={5} value={form.message} onChange={set("message")}
                  placeholder="Describe your project — goals, key features, technical requirements, and anything else we should know..."
                  className={`${inputClass} resize-none`} style={{ fontFamily: "'Syne', sans-serif" }} />
              </div>

              {/* WhatsApp Submit */}
              <button
                type="submit"
                className={`w-full py-5 font-bold text-[12px] tracking-[3px] uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                  sent
                    ? "bg-emerald-600 text-white"
                    : "hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/20 text-white"
                }`}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: sent ? undefined : "linear-gradient(135deg, #16a34a, #15803d)",
                  border: sent ? "none" : "1px solid rgba(34,197,94,0.3)",
                }}
              >
                {sent ? "✓ Opening WhatsApp..." : <><WhatsAppIcon /> Send via WhatsApp</>}
              </button>

              <p className="text-white/25 text-[11px] text-center leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
                Your details will open in WhatsApp as a pre-formatted message.<br />
                No data is stored on our servers.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}