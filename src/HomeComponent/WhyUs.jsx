import { useMemo } from "react";
import { motion } from "framer-motion";

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

const WHY_US = [
  { icon: "🏆", title: "10+ Industries Served", desc: "Deep cross-industry expertise from fashion to healthcare, retail to real estate." },
  { icon: "📍", title: "Our Team", desc: "Local market knowledge with global digital marketing standards." },
  { icon: "📈", title: "Data-Driven Approach", desc: "Every decision backed by analytics, not guesswork." },
  { icon: "🤝", title: "Dedicated Account Manager", desc: "One point of contact, full accountability, zero confusion." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Agile workflows that respect your deadlines and business timelines." },
  { icon: "🎯", title: "ROI-Focused Results", desc: "We measure success by your growth — leads, revenue, and retention." },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden" id="why-us">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-mesh opacity-40 z-0" />
      <FloatingParticles />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid xl:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="inline-block px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#04AAA5] font-bold uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Why Say It Social
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Your Growth Is Our<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] to-[#10b981]">
                Only Metric
              </span>
            </h2>
            
            <p 
              className="text-gray-400 text-[16px] md:text-[18px] leading-loose font-light mb-10 max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              As a premier digital marketing agency, we combine local market
              intelligence with global best practices. We don't just run campaigns — we
              build long-term growth engines for your brand.
            </p>
            
            {/* CTA Button using the premium hover effect */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                borderColor: "#fbaf40",
                boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden bg-transparent cursor-pointer tracking-wide"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
              <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
              <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
              <span className="relative z-10">Start Your Growth Journey</span>
            </motion.a>
          </motion.div>

          {/* Right Column: Premium Hover Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_US.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#04AAA5",
                  boxShadow: "0 0 30px rgba(4, 170, 165, 0.15)",
                }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-[#060a0d]/80 backdrop-blur-md transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Premium Hover Physics Container */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#04AAA5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle corner highlights (Teal instead of gold to match the card theme) */}
                <span className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-[#04AAA5] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
                <span className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-[#04AAA5] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />
                
                {/* Diagonal Shine Sweep */}
                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 origin-bottom-left">
                    {item.icon}
                  </div>
                  <h3 
                    className="text-white font-bold text-lg mb-2 group-hover:text-[#04AAA5] transition-colors duration-300 tracking-tight"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-gray-400 text-sm leading-relaxed font-light"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}