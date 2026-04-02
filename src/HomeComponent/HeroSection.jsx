import { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter"; // Make sure this path is correct
import FloatingParticles from "../common-components/FloatingParticles";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const STATS = [
  { num: 10, suffix: "+", label: "Industries", color: "text-[#04AAA5]" },
  { num: 2, suffix: "M+", label: "Total Reach", color: "text-[#FBB040]" },
  { num: 5, suffix: "×", label: "Avg Velocity", color: "text-[#04AAA5]" },
];

export default function HeroSection({ scrollY = 0 }) {
  const parallax = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      {/* Background orbs with parallax float animation */}
      <motion.div
        className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#04AAA5]/30 rounded-full blur-[90px] mix-blend-screen pointer-events-none z-0"
        animate={{
          y: [parallax * 0.4, parallax * 0.4 - 20, parallax * 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#FBB040]/20 rounded-full blur-[90px] mix-blend-screen pointer-events-none z-0"
        animate={{
          y: [-parallax * 0.4, -parallax * 0.4 + 20, -parallax * 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <FloatingParticles />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge - UPDATED WITH SECONDARY KEYWORD */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FBB040] animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
           Strategic Social Media Agency
          </span>
        </motion.div>

        {/* OPTIMIZED H1 - PRIMARY KEYWORD FOCUSED */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white font-display px-2"
        >
          <div className="overflow-hidden">
            <motion.span variants={wordReveal} className="block">
              Social Media Marketing
            </motion.span>
          </div>
          <div className="">
            <motion.span variants={wordReveal} className="block">
              {/* Primary keyword highlighted */}
              <motion.span
                className="text-[#04aaa5] font-bold italic inline-block cursor-default"
                whileHover={{
                  textShadow: "0 0 20px rgba(4, 170, 165, 0.7)",
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  textShadow: "0 0 8px rgba(4, 170, 165, 0.3)",
                }}
              >
                 Agency
              </motion.span>
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Strategic campaigns that transform brands into digital powerhouses.
          We turn engagement into revenue — with data-driven creativity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                       border-2 border-white/20 text-white font-bold rounded-lg 
                       transition-all duration-300 text-center text-sm sm:text-base 
                       overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Connect With Us</span>
          </motion.a>

          <motion.a
            href="#works"
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                       border-2 border-white/20 text-white font-bold rounded-lg 
                       transition-all duration-300 text-center text-sm sm:text-base 
                       overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Our Works</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12">
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-default text-center"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1`}
                >
                  <AnimatedCounter
                    value={stat.num}
                    suffix={stat.suffix}
                    colorClass={stat.color}
                  />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
              {i < STATS.length - 1 && (
                <motion.div
                  className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + i * 0.2 }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}