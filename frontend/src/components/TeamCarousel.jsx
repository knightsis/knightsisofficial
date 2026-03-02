import { useState, useEffect, useRef } from "react";
import kalaimani from "../assets/team/kalaimani.png";

const TEAM = [
  {
    id: 1,
    name: "Kalaimani L",
    designation: "Software Engineer",
    dept: "Leadership",
    img: kalaimani,
    skills: ["Software", "Web", "IoT", "PCB", "Strategy"],
    color: "#7c3aed",
  },
  
 
 
];

function TeamCard({ member, position }) {
  // position: -2, -1, 0 (center), 1, 2
  const isCenter = position === 0;
  const isAdjacent = Math.abs(position) === 1;
  const isFar = Math.abs(position) >= 2;

  const translateX = position * 260;
  const scale = isCenter ? 1 : isAdjacent ? 0.82 : 0.68;
  const zIndex = isCenter ? 30 : isAdjacent ? 20 : 10;
  const opacity = isCenter ? 1 : isAdjacent ? 0.7 : 0.35;
  const rotateY = position * -8;
  const blur = isCenter ? 0 : isAdjacent ? 0 : 2;

  return (
    <div
      className="absolute top-0 left-1/2"
      style={{
        transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
        zIndex,
        opacity,
        filter: blur ? `blur(${blur}px)` : "none",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: isCenter ? "auto" : "none",
        width: 280,
      }}
    >
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: isCenter
            ? "linear-gradient(145deg, #1a0030, #0f001f)"
            : "linear-gradient(145deg, #120020, #09000f)",
          border: isCenter
            ? `1px solid ${member.color}80`
            : "1px solid rgba(124,58,237,0.15)",
          boxShadow: isCenter
            ? `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${member.color}30, inset 0 1px 0 rgba(255,255,255,0.05)`
            : "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top glow */}
        {isCenter && (
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: `linear-gradient(to right, ${member.color}, #a78bfa)` }}
          />
        )}

        {/* Avatar area */}
        <div
          className="relative flex items-center justify-center pt-10 pb-6"
          style={{
            background: isCenter
              ? `radial-gradient(ellipse 80% 80% at 50% 0%, ${member.color}20, transparent 70%)`
              : "transparent",
          }}
        >
          {/* Glow ring behind avatar */}
          {isCenter && (
            <div
              className="absolute rounded-full blur-2xl"
              style={{
                width: 140,
                height: 140,
                background: `${member.color}30`,
              }}
            />
          )}

          {/* Avatar */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: isCenter ? 120 : 96,
              height: isCenter ? 120 : 96,
              border: isCenter
                ? `3px solid ${member.color}90`
                : "2px solid rgba(124,58,237,0.3)",
              boxShadow: isCenter ? `0 0 30px ${member.color}40` : "none",
              transition: "all 0.6s ease",
              background: "#1a0030",
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dept badge */}
          {isCenter && (
            <div
              className="absolute bottom-4 right-8 text-[10px] font-bold tracking-[2px] uppercase px-3 py-1"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: `${member.color}25`,
                border: `1px solid ${member.color}50`,
                color: "#c4b5fd",
              }}
            >
              {member.dept}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-7 pb-8 text-center">
          <h3
            className="font-black text-white mb-1 leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isCenter ? "1.25rem" : "1rem",
              transition: "font-size 0.4s ease",
            }}
          >
            {member.name}
          </h3>

          <p
            className="mb-5"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isCenter ? "0.8rem" : "0.72rem",
              color: isCenter ? "#a78bfa" : "rgba(167,139,250,0.6)",
              fontWeight: 600,
              letterSpacing: "0.5px",
              transition: "all 0.4s ease",
            }}
          >
            {member.designation}
          </p>

          {/* Skills — only show on center */}
          {/* {isCenter && (
            <div className="flex justify-center gap-2 flex-wrap">
              {member.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-bold tracking-[1px] uppercase px-2 py-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "#c4b5fd",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = TEAM.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(next, 1800);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, current]);

  // Get position of each card relative to center
  const getPosition = (index) => {
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#07000f" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Syne:wght@400;600;700;800&display=swap');`}</style>

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(109,40,217,0.1)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="text-violet-400 text-[11px] font-bold tracking-[4px] uppercase mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ◆ The People
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            }}
          >
            Meet Our <span style={{ color: "#a78bfa" }}>Team</span>
          </h2>
          <div
            className="mx-auto mb-5"
            style={{
              width: 64,
              height: 3,
              background: "linear-gradient(to right, #7c3aed, #a78bfa)",
            }}
          />
          <p
            className="text-white/50 text-[15px] max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The brilliant minds behind Knight Software & IoT Solutions.
          </p>
        </div>

        {/* Carousel track */}
        <div className="relative" style={{ height: 420 }}>
          {TEAM.map((member, i) => {
            const pos = getPosition(i);
            if (Math.abs(pos) > 2) return null;
            return <TeamCard key={member.id} member={member} position={pos} />;
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center border border-violet-700/40 text-violet-400 hover:bg-violet-500/15 hover:border-violet-500 transition-all duration-300 hover:scale-110"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TEAM.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    i === current
                      ? "linear-gradient(to right, #7c3aed, #a78bfa)"
                      : "rgba(124,58,237,0.25)",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center border border-violet-700/40 text-violet-400 hover:bg-violet-500/15 hover:border-violet-500 transition-all duration-300 hover:scale-110"
          >
            →
          </button>
        </div>

        {/* Member name indicator */}
        <div className="text-center mt-6">
          <p
            className="text-white/30 text-[12px] tracking-[2px] uppercase"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {current + 1} / {total} — {TEAM[current].name}
          </p>
        </div>
      </div>
    </section>
  );
}