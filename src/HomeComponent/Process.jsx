import { useMemo } from "react";
import { motion } from "framer-motion";

const PROCESS = [
  { step: "01", title: "Requirement", desc: "We dive deep into your business, target audience, and current digital footprint to understand your exact needs." },
  { step: "02", title: "Strategy", desc: "We audit your brand, research competitors, and define a roadmap aligned with your business goals." },
  { step: "03", title: "Execution", desc: "Our creative and tech teams bring the strategy to life with high-quality content, campaigns, and code." },
  { step: "04", title: "Optimization", desc: "We monitor performance, A/B test creatives, and refine campaigns using real data insights." },
  { step: "05", title: "Growth", desc: "Consistent improvement drives compounding results — more reach, leads, and revenue over time." },
];

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 6 + 6}s`,
        color:
          i % 2 === 0 ? "rgba(4, 170, 165, 0.4)" : "rgba(251, 176, 64, 0.3)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-5%",
            background: p.color,
            animationName: "particle-float",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function Process() {
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="process">
      {/* Inline CSS for the seamless infinite slider */}
      <style>
        {`
          @keyframes slide-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-slider {
            animation: slide-x 25s linear infinite;
            width: max-content;
          }
          .animate-infinite-slider:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-50 z-0" />
      <FloatingParticles />

      <div className="max-w-[100vw] relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-6"
          >
            {/* Ultra-wide tracking for the badge */}
            <span 
              className="text-xs text-[#04AAA5] font-bold uppercase"
              style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "0.2em" }}
            >
              How We Work
            </span>
          </motion.div>
          
          {/* Tight tracking for the massive heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] to-[#10b981]">5-Step Process</span>
          </motion.h2>
        </div>

        {/* X-Axis Auto Slider Container */}
        <div className="relative w-full overflow-hidden py-10">
          
          {/* Left & Right Fade Shadows */}
          <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* The Sliding Track */}
          <div className="flex animate-infinite-slider">
            
            {/* Duplicated array for seamless looping */}
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-6 lg:gap-8 pr-6 lg:pr-8">
                {PROCESS.map((p, i) => (
                  <div
                    key={i}
                    className="w-[280px] sm:w-[320px] lg:w-[380px] shrink-0 group relative rounded-2xl border border-white/10 bg-[#060a0d]/80 backdrop-blur-md p-8 transition-all duration-300 hover:border-[#04AAA5]/50 hover:shadow-[0_0_30px_rgba(4,170,165,0.15)] overflow-hidden hover:-translate-y-2 cursor-pointer"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#04AAA5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Massive Sora Number */}
                    <div className="relative z-10 mb-6">
                      <span 
                        className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent inline-block transform -skew-x-6 tracking-tighter"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {p.step}
                      </span>
                      <div className="absolute bottom-2 left-0 w-8 h-1 bg-[#FBB040] rounded-full transform group-hover:scale-x-150 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Sora Title */}
                    <h3 
                      className="text-white font-bold text-2xl mb-3 relative z-10 group-hover:text-[#04AAA5] transition-colors duration-300 tracking-tight"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    
                    {/* DM Sans Description (Lighter weight, taller line height) */}
                    <p 
                      className="text-gray-400 text-[15px] leading-loose relative z-10 font-light"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {p.desc}
                    </p>

                    {/* Timeline Line Connector */}
                    <div className="absolute top-1/2 -right-8 w-16 h-[1px] bg-gradient-to-r from-[#04AAA5]/50 to-transparent z-0 hidden lg:block" />
                  </div>
                ))}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}