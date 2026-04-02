import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';
import { useMemo } from 'react';

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

export default function ShowreelSection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-teal/[0.03] to-black relative">
            <FloatingParticles/>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
                >
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/25 via-gold/15 to-teal/25 animate-gradient" style={{ backgroundSize: '300% 300%' }} />

                    {/* Content area */}
                    <div className="relative aspect-video bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        {/* Animated grid background */}
                        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-20">
                            {[...Array(9)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-lg bg-gradient-to-br from-teal/20 to-gold/15"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 0.2, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                />
                            ))}
                        </div>

                        {/* Center content */}
                        <div className="relative z-10 text-center px-4">
                            <motion.div
                                className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold animate-pulse" />
                                <span className="text-gold font-bold tracking-widest text-xs sm:text-sm uppercase">
                                    Social Showreel 2024
                                </span>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-teal animate-pulse" />
                            </motion.div>

                            <motion.h3
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight font-display"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                Creativity.{' '}
                                <span className="text-teal">Consistency.</span>{' '}
                                <span className="text-gold">Growth.</span>
                            </motion.h3>

                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Watch how we've transformed social feeds into revenue-generating engines
                            </motion.p>

                            {/* Play button with pulse ring */}
                            <motion.button
                                className="pulse-ring group/btn relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center mx-auto"
                                whileHover={{ scale: 1.15, boxShadow: '0 0 50px rgba(4,170,165,0.8)' }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-teal opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black fill-black relative z-10 ml-0.5 sm:ml-1" />
                            </motion.button>
                        </div>

                        {/* Bottom stats */}
                        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 flex flex-wrap gap-2 sm:gap-3">
                            {['15+ Campaigns', '2M+ Reach', '3 Min Watch'].map((label, i) => (
                                <motion.div
                                    key={label}
                                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                                >
                                    <span className="text-xs sm:text-sm text-gray-300">{label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}

