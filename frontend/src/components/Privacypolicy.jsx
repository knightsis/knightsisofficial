export default function PrivacyPolicy({ onClose }) {
  const sections = [
    {
      num: "01", title: "Introduction",
      content: `Knight Software & IoT Solutions is committed to protecting the privacy and personal information of our clients and website visitors. This Privacy Policy explains how we collect, use, store, and protect your data when you interact with us through knightsoftware.in or any of our services.`
    },
    {
      num: "02", title: "Information We Collect",
      bullets: [
        "Full name, email address, phone number, and company name (via contact forms or WhatsApp).",
        "Project requirements, budget preferences, and timeline details.",
        "IP address, browser type, device information, and pages visited.",
        "Cookies and similar tracking technologies.",
        "Communications sent to us via email, WhatsApp, or social media."
      ]
    },
    {
      num: "03", title: "How We Use Your Information",
      bullets: [
        "Respond to project inquiries and provide quotes.",
        "Execute and manage project agreements.",
        "Send project updates, invoices, and support communications.",
        "Improve our website, services, and user experience.",
        "Send occasional marketing communications (only with your consent).",
        "Comply with legal obligations and resolve disputes."
      ]
    },
    {
      num: "04", title: "WhatsApp Communication",
      content: `Our website uses WhatsApp as a primary communication channel. When you submit our contact form, your details are formatted and sent via WhatsApp to our team. WhatsApp's own Privacy Policy applies to messages sent through their platform. We do NOT store your WhatsApp messages on our servers.`
    },
    {
      num: "05", title: "Cookies",
      bullets: [
        "Essential Cookies: Required for the website to function properly.",
        "Analytics Cookies: Help us understand how visitors use our website (e.g., Google Analytics).",
        "Marketing Cookies: Used to track visitors for retargeting advertisements.",
        "You can control or disable cookies through your browser settings."
      ]
    },
    {
      num: "06", title: "Data Storage & Security",
      bullets: [
        "Your data is stored securely on trusted servers in India and/or internationally.",
        "We implement SSL encryption, access controls, and regular security audits.",
        "We retain your personal data only as long as necessary to fulfil stated purposes.",
        "We do NOT sell, rent, or trade your personal information to third parties."
      ]
    },
    {
      num: "07", title: "Data Sharing",
      content: `We may share your information with trusted service providers who assist in delivering our services (hosting, payment processing, analytics), legal authorities when required by law, and business partners only with your explicit consent. All third parties are required to maintain confidentiality.`
    },
    {
      num: "08", title: "Your Rights",
      bullets: [
        "Access the personal data we hold about you.",
        "Request correction of inaccurate or incomplete data.",
        "Request deletion of your personal data (subject to legal obligations).",
        "Withdraw consent for marketing communications at any time.",
        "Lodge a complaint with the relevant data protection authority."
      ]
    },
    {
      num: "09", title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have collected such data, please contact us immediately.`
    },
    {
      num: "10", title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. Changes will be posted on knightsoftware.in with a revised effective date. Continued use of our services constitutes acceptance of the updated policy.`
    },
    {
      num: "11", title: "Contact Us",
      content: `For any questions or requests regarding this Privacy Policy, contact us at: kalaimani@knightsoftware.in | www.knightsoftware.in | Tamil Nadu, India`
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
            Privacy Policy
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
            At <strong className="text-white">Knight Software & IoT Solutions</strong>, your privacy is important to us.
            This policy explains what data we collect, why we collect it, and how we keep it safe.
            We do <strong className="text-white">NOT sell your data</strong> to anyone.
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
              <div className="pl-5 border-l border-violet-900/30" style={{ marginLeft: "52px" }}>
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