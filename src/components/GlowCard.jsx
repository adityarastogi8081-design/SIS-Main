import { motion } from "framer-motion";

export default function GlowCard({ children, className = "" }) {
  return (
    <motion.div
      className={`glass-card border border-white/10 rounded-2xl p-6 hover:border-teal/30 transition-all duration-300 ${className}`}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 0 30px rgba(4, 170, 165, 0.2)",
      }}
    >
      {children}
    </motion.div>
  );
}