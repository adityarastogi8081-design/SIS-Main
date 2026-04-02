import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { clients, clientCategories, categoryColors } from "../data/clients";
import SectionHeading from "../components/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

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
    [],
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

export default function OurClients() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredClients =
    activeCategory === "All"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  return (
    <section
      id="clients"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black"
    >
      <FloatingParticles />
      <div className="max-w-7xl mx-auto">
        <SectionHeading highlight="Clients">Our</SectionHeading>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {clientCategories.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                // Added constant border-2 and removed solid bg-colors
                className={`group relative px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-500 border-2 outline-none
          ${
            isActive
              ? "text-white border-[#fbaf40] shadow-[0_0_15px_rgba(251,175,64,0.4)]"
              : "text-gray-500 border-transparent hover:text-gray-300 hover:border-white/10"
          }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* The sliding gold highlight */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryHighlight" // Unique ID separate from the social toggle
                    className="absolute inset-0 bg-[#fbaf40]/10 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 1,
                    }}
                  />
                )}

                <span className="relative z-10 whitespace-nowrap">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Client Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => {
              const colors = categoryColors[client.category] || {};
              const isHovered = hoveredId === client.id;

              return (
                <motion.div
                  key={client.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredId(client.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`relative h-full rounded-2xl glass-card border border-white/10 p-6 transition-all duration-500 ${
                      isHovered
                        ? "scale-[1.02] border-teal/40 shadow-[0_0_40px_rgba(4,170,165,0.2)]"
                        : ""
                    }`}
                  >
                    {/* Glow effect */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-teal/15 to-gold/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

                    {/* Top row: category + instagram */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${colors.bg || "bg-white/10"} ${colors.text || "text-gray-300"} ${colors.border || "border-white/10"}`}
                      >
                        {client.category}
                      </span>
                      {client.instagramHandle && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          href={`https://www.instagram.com/${client.instagramHandle}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gold transition-colors p-1.5 rounded-lg bg-white/[0.04]"
                        >
                          <Instagram className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>

                    {/* Brand name */}
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10 font-display">
                      {client.brand}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed relative z-10">
                      {client.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-end justify-between relative z-10">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-0.5 font-bold">
                          Core Impact
                        </p>
                        <span className="text-gold font-bold text-lg">
                          {client.metric}
                        </span>
                      </div>
                      {/* <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-gold flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "rotate-0 scale-110 opacity-100"
                            : "-rotate-45 scale-75 opacity-0"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </div> */}
                      <div
                        className={`group relative w-10 h-10 rounded-xl 
                        border-2 border-transparent 
                        flex items-center justify-center
                        transition-all duration-500
                        hover:border-[#fbaf40] 
                        hover:shadow-[0_0_15px_rgba(251,175,64,0.6)]
                        ${isHovered ? "rotate-0 scale-110 opacity-100" : "-rotate-45 scale-75 opacity-0"}
                        `}
                                            >
                                              {/* animated glow layer */}
                                              <span className="absolute inset-0 rounded-xl border-2 border-[#fbaf40] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                       

                        <ArrowUpRight className="w-5 h-5 text-[#fbaf40] relative z-10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
