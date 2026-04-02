import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";
import FloatingParticles from "../common-components/FloatingParticles";

const STATS = [
  { label: "Years of Expertise", val: "5+", sub: "In Digital Marketing" },
  { label: "Industries Served", val: "10+", sub: "Global Reach" },
  { label: "Campaigns Launched", val: "1K+", sub: "Across Platforms" },
  { label: "Total Reach", val: "2M+", sub: "Organic & Paid" },
  { label: "Happy Clients", val: "100+", sub: "World Wide" },
  { label: "Client Retention", val: "98%", sub: "Satisfaction Rate" },
  { label: "Revenue Driven", val: "$50M+", sub: "For Our Clients" },
  { label: "Projects Delivered", val: "500+", sub: "Web & Branding" },
];

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://sayitsocial.digital/about-us/#webpage",
        "url": "https://sayitsocial.digital/about-us/",
        "name": "About Us | Say It Social Digital Marketing Agency",
        "description": "Say It Social is a digital marketing agency based in Ahmedabad, Gujarat, India.",
        "isPartOf": { "@id": "https://sayitsocial.digital/#website" },
        "about": { "@id": "https://sayitsocial.digital/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://sayitsocial.digital/#organization",
        "name": "Say It Social",
        "url": "https://sayitsocial.digital",
        "logo": "https://sayitsocial.digital/logo.png",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Say It Social | Digital Marketing Agency | SEO & SMM"
        description="Scale your brand with a premier Global Digital Marketing Agency."
        schemaMarkup={aboutSchema}
      />
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#04AAA5]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FBB040]/10 blur-[120px]" />
      </div>

      <Navbar isScrolled={isScrolled} />

      <section className="relative py-32 px-6" id="about-us">
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              style={{ y: yParallax, opacity: opacityFade }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-8">
                <span className="w-2 h-2 rounded-full bg-[#04AAA5] animate-pulse" />
                About Say It Social
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Engineering Growth<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB040] via-white to-[#FBB040] animate-gradient-x">
                  Without Borders
                </span>
              </h2>

              <div className="space-y-6 max-w-xl">
                <p className="text-gray-400 leading-relaxed text-lg italic border-l-2 border-[#04AAA5] pl-6">
                  "We don't just run campaigns; we engineer growth."
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-white font-semibold">Say It Social</span> is a premier growth agency. We transform brands into industry leaders by turning raw engagement into measurable revenue.
                </p>

                <div className="flex flex-wrap gap-5 pt-6">
                  {[
                    { label: "Meet Our Team", link: "#contact", primary: true },
                    { label: "Our Services", link: "#services", primary: false }
                  ].map((btn) => (
                    <motion.a
                      key={btn.label}
                      href={btn.link}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-bold transition-all ${
                        btn.primary 
                        ? "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                        : "border border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {btn.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Infinite Vertical Slider for Stats */}
            <div 
              className="relative h-[500px] lg:h-[650px] w-full overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
              }}
            >
              <motion.div
                animate={{ y: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 25, // Adjust this value to make it scroll faster or slower
                }}
                className="flex flex-col gap-4"
              >
                {/* We map the array twice to create a seamless infinite loop */}
                {[1, 2].map((set) => (
                  <div key={set} className="grid grid-cols-2 gap-4">
                    {STATS.map((item) => (
                      <motion.div
                        key={`${set}-${item.label}`}
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all hover:border-[#04AAA5]/50 hover:bg-white/[0.05]"
                      >
                        {/* Subtle Card Glow */}
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#04AAA5]/10 blur-2xl group-hover:bg-[#04AAA5]/20 transition-all" />
                        
                        <div className="relative z-10">
                          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 group-hover:from-[#04AAA5] group-hover:to-[#FBB040] transition-all duration-500">
                            {item.val}
                          </div>
                          <div className="text-sm font-medium text-gray-200 mt-2 uppercase tracking-tighter">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
                            {item.sub}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </div>
  );
}