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

export default function Contact() {
  const CONTACT_INFO = [
    { icon: "📞", label: "Phone", val: "+91 84607 32085", link: "tel:+918460732085" },
    { icon: "✉️", label: "Email", val: "info@sayitsocial.digital", link: "mailto:info@sayitsocial.digital" },
  ];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-40 z-0" />
      <FloatingParticles />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact Details */}
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
              Get In Touch
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] to-[#10b981]">
                Great Together
              </span>
            </h2>
            
            <p 
              className="text-gray-400 text-[16px] md:text-[18px] leading-loose font-light mb-10 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ready to dominate the digital landscape? Our experts are here to lead the way.
              Book a free strategy call and let’s turn your business goals into reality
            </p>
            
            <div className="space-y-4">
              {CONTACT_INFO.map((c, i) => {
                const CardWrapper = c.link ? motion.a : motion.div;
                return (
                  <CardWrapper
                    href={c.link}
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#04AAA5]/30 transition-all duration-300 cursor-pointer w-full max-w-md"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#04AAA5]/20 to-transparent border border-[#04AAA5]/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {c.icon}
                    </div>
                    <div>
                      <div 
                        className="text-gray-500 text-xs uppercase tracking-[0.15em] mb-1 font-semibold"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {c.label}
                      </div>
                      <div 
                        className="text-white text-[15px] font-medium group-hover:text-[#04AAA5] transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {c.val}
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Soft background glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#04AAA5]/20 to-[#FBB040]/10 blur-[80px] -z-10 rounded-full" />
            
            <div className="rounded-3xl border border-white/10 bg-[#060a0d]/80 backdrop-blur-xl p-8 lg:p-10 shadow-2xl shadow-black/50">
              <h3 
                className="text-white font-bold text-2xl mb-8 tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Get Your Free Strategy Session
              </h3>
              
              <form className="space-y-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>First Name</label>
                    <input type="text" placeholder="Rahul" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Last Name</label>
                    <input type="text" placeholder="Patel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Email Address</label>
                  <input type="email" placeholder="rahul@business.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                </div>
                
                <div>
                  <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                </div>
                
                <div>
                  <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Service Needed</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-gray-300 text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-[#060a0d]">Select a service...</option>
                    <option className="bg-[#060a0d]">Social Media Marketing</option>
                    <option className="bg-[#060a0d]">SEO Services</option>
                    <option className="bg-[#060a0d]">Web Development</option>
                    <option className="bg-[#060a0d]">Brand Identity</option>
                    <option className="bg-[#060a0d]">Digital Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-gray-400 text-xs mb-2 block uppercase tracking-wider font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all resize-none" />
                </div>
                
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, borderColor: "#fbaf40", boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl transition-all duration-300 overflow-hidden bg-transparent cursor-pointer tracking-wide"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-xl" />
                    <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-xl" />
                    <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}