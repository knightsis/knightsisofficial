export default function TermsOfService({ onClose }) {
  const sections = [
    {
      num: "01", title: "Acceptance of Terms",
      content: `By accessing or using services provided by Knight Software & IoT Solutions through knightsoftware.in or any associated platforms, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`
    },
    {
      num: "02", title: "Services Provided",
      content: `We provide technology and creative services including: Software Development, Website Development, IoT System Design, PCB Design, BIM Development, Construction Design, Video Editing, Billing Machine Development, Marketing & Graphic Design, Portfolio Development, and UI/UX Design. Scope, timeline, and cost of each service are defined in a separate Project Agreement agreed upon by both parties.`
    },
    {
      num: "03", title: "Payments & Refunds",
      bullets: [
        "50% advance payment required before work begins.",
        "Remaining 50% due upon project completion before final delivery.",
        "Milestone-based payments may apply for long-term projects.",
        "Late payments may incur a 2% monthly fee on overdue balances.",
        "Advance payments are non-refundable once work has commenced."
      ]
    },
    {
      num: "04", title: "Client Responsibilities",
      bullets: [
        "Provide accurate and timely information required for project execution.",
        "Review and provide feedback within agreed review periods.",
        "Ensure all content and materials provided do not infringe third-party rights.",
        "Make payments as per the agreed schedule.",
        "Maintain confidentiality of proprietary processes and project details."
      ]
    },
    {
      num: "05", title: "Intellectual Property",
      content: `Upon receipt of full payment, the client receives full ownership of final deliverables. Knight Software retains the right to display completed work in our portfolio unless confidentiality is requested in writing. Third-party libraries and tools remain subject to their respective licenses.`
    },
    {
      num: "06", title: "Warranty & Support",
      bullets: [
        "30-day bug-fix warranty for all software and web development after delivery.",
        "90-day functional warranty for hardware projects (PCB, IoT).",
        "Warranty does not cover issues from client modifications.",
        "Post-warranty support available at standard hourly rates."
      ]
    },
    {
      num: "07", title: "Limitation of Liability",
      content: `Our total liability for any claim shall not exceed the total amount paid by the client for the specific project. We are not liable for indirect, consequential, or incidental damages.`
    },
    {
      num: "08", title: "Termination",
      content: `Either party may terminate a project with 14 days written notice. Upon termination, the client pays for all work completed to date, and we deliver all completed files. Advance payments for commenced work are non-refundable.`
    },
    {
      num: "09", title: "Governing Law",
      content: `These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tamil Nadu, India.`
    },
    {
      num: "10", title: "Contact",
      content: `For questions about these Terms, contact us at: kalaimani@knightsoftware.in | www.knightsoftware.in`
    },
  ];

  return (
    <div className="fixed inset-0 z-[300] overflow-y-auto bg-[#07000f]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Syne:wght@400;600;700;800&display=swap');`}</style>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#07000f]/95 backdrop-blur-xl border-b border-violet-900/30 px-6 lg:px-10 py-4 flex items-center justify-between">
        <div>
          <span className="text-violet-400 text-[10px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
            Knight Software & IoT Solutions
          </span>
          <h1 className="text-white font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of Service
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/30 text-[11px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            Effective: March 1, 2026
          </span>
          {onClose && (
            <button onClick={onClose}
              className="w-9 h-9 border border-violet-800/40 text-white/40 hover:text-white hover:border-violet-500 transition-all duration-300 flex items-center justify-center">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">

        {/* Intro banner */}
        <div className="bg-violet-500/8 border border-violet-700/30 p-6 mb-12">
          <p className="text-white/60 text-[14px] leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
            These Terms of Service govern your use of services provided by <strong className="text-white">Knight Software & IoT Solutions</strong>.
            By engaging our services, you agree to these terms. Please read them carefully.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.num} className="group">
              <div className="flex items-start gap-5 mb-4">
                <span className="text-[11px] font-black text-violet-600 w-8 h-8 border border-violet-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-violet-500 group-hover:text-violet-400 transition-all duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {s.num}
                </span>
                <h2 className="text-white font-black text-xl pt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h2>
              </div>
              <div className="ml-13 pl-5 border-l border-violet-900/30" style={{ marginLeft: "52px" }}>
                {s.content && (
                  <p className="text-white/55 text-[14px] leading-[1.9]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {s.content}
                  </p>
                )}
                {s.bullets && (
                  <ul className="space-y-2">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/55 text-[14px]" style={{ fontFamily: "'Syne', sans-serif" }}>
                        <span className="text-violet-500 mt-1 flex-shrink-0">◆</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-violet-900/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-white/25 text-[12px]" style={{ fontFamily: "'Syne', sans-serif" }}>
            © 2026 Knight Software & IoT Solutions · Tamil Nadu, India · All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}