import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "916380010292"; // 🔁 Replace with your number

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


const STEPS = ["Your Info", "Project Details", "Message"];

const inputClass =
  "w-full bg-white/5 border border-violet-800/40 focus:border-violet-500 focus:bg-violet-500/10 text-white placeholder-white/25 px-4 py-3.5 text-[13px] outline-none transition-all duration-300 rounded-none";
const selectClass =
  "w-full bg-[#0f0018] border border-violet-800/40 focus:border-violet-500 text-white px-4 py-3.5 text-[13px] outline-none transition-all duration-300 cursor-pointer appearance-none";
const labelClass =
  "text-[10px] font-bold tracking-[2px] uppercase text-violet-400 mb-2 block";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── STEP 1: Your Info ──
function Step1({ form, set }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Full Name *</label>
          <input type="text" required value={form.name} onChange={set("name")}
            placeholder="Enter your full name" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Email *</label>
          <input type="email" required value={form.email} onChange={set("email")}
            placeholder="Enter your email address" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
}

// ── STEP 2: Project Details ──
function Step2({ form, set }) {
  return (
    <div className="space-y-4">
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
      <div className="grid grid-cols-2 gap-4">
      
        <div>
          <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Timeline</label>
          <input type="text" value={form.timeline} onChange={set("timeline")}
            placeholder="e.g. 2–3 months" className={inputClass} style={{ fontFamily: "'Syne', sans-serif" }} />
        </div>
      </div>
    </div>
  );
}

// ── STEP 3: Message ──
function Step3({ form, set }) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelClass} style={{ fontFamily: "'Syne', sans-serif" }}>Project Description *</label>
        <textarea required rows={5} value={form.message} onChange={set("message")}
          placeholder="Describe your project — goals, features, and any specific requirements..."
          className={`${inputClass} resize-none`} style={{ fontFamily: "'Syne', sans-serif" }} />
      </div>
      {/* Summary preview */}
      <div className="bg-violet-500/5 border border-violet-800/30 p-4 space-y-2">
        <div className="text-[10px] font-bold tracking-[2px] uppercase text-violet-400 mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          📋 Summary
        </div>
        {[
          ["Name", form.name],
          ["Email", form.email],
          ["Service", form.service],
         
          ["Timeline", form.timeline],
        ].map(([l, v]) => v ? (
          <div key={l} className="flex justify-between text-[12px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-white/40">{l}</span>
            <span className="text-violet-300 font-semibold">{v}</span>
          </div>
        ) : null)}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ──
export default function HireUs({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "",  timeline: "", message: "",
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Close on ESC key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const canNext = () => {
    if (step === 0) return form.name.trim() && form.email.trim();
    if (step === 1) return form.service.trim();
    if (step === 2) return form.message.trim();
    return true;
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSubmit = () => {
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
*Service:*    ${form.service}

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
    setTimeout(() => {
      setSent(false);
      setStep(0);
      setForm({ name: "", email: "", phone: "", company: "", service: "", timeline: "", message: "" });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto"
        style={{
          background: "linear-gradient(145deg, #0f0020, #07000f)",
          border: "1px solid rgba(124,58,237,0.35)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(109,40,217,0.15)",
          animation: "modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(20px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Top accent */}
        <div className="h-[3px] w-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600" />

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-violet-900/30">
          <div>
            <div className="text-[10px] font-bold tracking-[3px] uppercase text-violet-400 mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              ◆ Knight Software & IoT Solutions
            </div>
            <h2 className="text-white font-black text-xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Start a Project
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-violet-800/40 text-white/40 hover:text-white hover:border-violet-500 transition-all duration-300 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-0 px-8 py-5 border-b border-violet-900/30">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex items-center gap-2 flex-1">
                {/* Circle */}
                <div
                  className="w-7 h-7 flex items-center justify-center text-[11px] font-black transition-all duration-300 flex-shrink-0"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: i < step ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                      : i === step ? "linear-gradient(135deg,#7c3aed,#9333ea)"
                      : "transparent",
                    border: i <= step ? "none" : "1px solid rgba(124,58,237,0.3)",
                    color: i <= step ? "#fff" : "rgba(255,255,255,0.3)",
                    boxShadow: i === step ? "0 0 16px rgba(124,58,237,0.5)" : "none",
                  }}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                {/* Label */}
                <span
                  className="text-[11px] font-bold tracking-[1px] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: i === step ? "#a78bfa" : i < step ? "rgba(167,139,250,0.6)" : "rgba(255,255,255,0.2)",
                  }}
                >
                  {s}
                </span>
              </div>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="h-px flex-1 mx-3 transition-all duration-500"
                  style={{
                    background: i < step
                      ? "linear-gradient(to right,#7c3aed,#6d28d9)"
                      : "rgba(124,58,237,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="px-8 py-6">
          {step === 0 && <Step1 form={form} set={set} />}
          {step === 1 && <Step2 form={form} set={set} />}
          {step === 2 && <Step3 form={form} set={set} />}
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-between px-8 pb-8 gap-4">
          {/* Back */}
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="px-6 py-3 border border-violet-800/40 text-white/40 hover:text-white hover:border-violet-500/60 text-[11px] font-bold tracking-[2px] uppercase transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ← Back
          </button>

          {/* Progress text */}
          <span className="text-white/25 text-[11px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            Step {step + 1} of {STEPS.length}
          </span>

          {/* Next / Submit */}
          {step < 2 ? (
            <button
              onClick={handleNext}
              disabled={!canNext()}
              className="flex items-center gap-2 px-7 py-3 text-white text-[11px] font-bold tracking-[2px] uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
              }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext() || sent}
              className="flex items-center gap-2 px-7 py-3 text-white text-[11px] font-bold tracking-[2px] uppercase transition-all duration-300 disabled:opacity-30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/20"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: sent
                  ? "linear-gradient(135deg,#16a34a,#15803d)"
                  : "linear-gradient(135deg,#16a34a,#15803d)",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              {sent ? (
                "✓ Opening WhatsApp..."
              ) : (
                <><WhatsAppIcon size={15} /> Send via WhatsApp</>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}