import { motion } from "framer-motion";
import GlowCard from "../components/GlowCard";
import { useMemo } from "react";

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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-5%",
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section className="relative py-24 px-6 bg-black" id="about-us">
      <FloatingParticles />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-400 font-medium tracking-wide mb-4">
              About Say It Social
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-6">
              Engineering Growth<br />
              <span className="text-gradient">Without Borders</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed md:text-lg">
                <strong className="text-white text-xl block mb-2">We don't just run campaigns; we engineer growth.</strong>
                <strong className="text-white">Say It Social </strong> is a premier growth agency specializing in <strong>social media marketing, SEO, and full-stack web development</strong>. We transform brands into industry leaders by turning raw engagement into measurable revenue.
              </p>

              <p className="text-gray-300 leading-relaxed md:text-lg">
                Having scaled businesses across <strong>10+ industries</strong> and reached over <strong>2 million people</strong>, our strategists and developers operate as a seamless extension of your own team. Whether you are a disruptive startup or an established enterprise, we deliver world-class digital dominance.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#fbaf40",
                    boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/20 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Meet Our Team
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#fbaf40",
                    boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/20 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Our Services
                </motion.a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years of Expertise", val: "4+", sub: "In Digital Marketing & Design" },
              { label: "Industries Served", val: "10+", sub: "Across India" },
              { label: "Campaigns Launched", val: "1K+", sub: "Across Platforms" },
              { label: "Total Reach", val: "2M+", sub: "People Reached & Engaged" },
              { label: "Happy Clients", val: "100+", sub: "Repeat & Long-Term Partners" },
              { label: "Client Retention", val: "98%", sub: "Average Satisfaction Rate" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                // Entrance animations
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                // Hover and Tap animations (from your button)
                whileHover={{
                  scale: 1.05,
                  borderColor: "#fbaf40",
                  boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                // Card container classes
                className="group relative w-full p-6 border-2 border-white/20 rounded-lg transition-all duration-300 overflow-hidden bg-transparent cursor-default flex flex-col items-center justify-center text-center"
              >
                {/* 1. Background Gradient overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 2. Top-Left Corner Highlight */}
                <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />

                {/* 3. Bottom-Right Corner Highlight */}
                <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />

                {/* 4. Diagonal Shine Sweep */}
                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />

                {/* Content Layer (Must be z-10 so it stays above the hover effects) */}
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-[#04AAA5] mb-2">{item.val}</div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}