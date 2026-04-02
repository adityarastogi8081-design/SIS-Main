import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";
import { 
  ArrowDownRight, 
  Award, 
  Eye, 
  Fingerprint, 
  Heart, 
  Hexagon, 
  Layers, 
  Layout, 
  Monitor, 
  Palette, 
  Palette as PaletteIcon, 
  ShieldCheck, 
  Smartphone, 
  Type, 
  Zap 
} from "lucide-react";

// Fade-in animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function BrandIdentity() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brand Identity & Visual Design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "Premium brand identity design services including logo creation, visual systems, and brand guidelines to elevate your market positioning."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#FBB040]/30">
      <SEO
        title="Brand Identity & Design Services | Say It Social"
        description="Discover the What, Why, and Impact of a premium Brand Identity. We build visual systems that command authority and trust."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
      </div>

      <Navbar isScrolled={isScrolled} />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-52 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ y: yParallax }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#FBB040] font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#04AAA5] animate-pulse" />
              Service Spotlight
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Unforgettable <br />
              <span className="bg-gradient-to-r from-[#FBB040] via-white to-[#04AAA5] bg-clip-text text-transparent italic">
                Brand Identities
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Your brand is more than just a logo. It is the visual, emotional, and psychological relationship you share with your audience. We design identities that command authority and inspire trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: THE WHAT */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-white/[0.01] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-[#FBB040]">01.</span> What is it?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Brand Identity is the comprehensive visual system and voice that represents your business to the world. It dictates how you look, how you speak, and how you are perceived.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                A robust identity system ensures that whether a customer is looking at your Instagram feed, your website, or your physical packaging, they experience a unified, premium feel. 
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Fingerprint, text: 'Primary & Secondary Logos' },
                  { icon: PaletteIcon, text: 'Strategic Color Palettes' },
                  { icon: Type, text: 'Typography Systems' },
                  { icon: Layout, text: 'Comprehensive Brand Guidelines' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-200 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Icon className="w-4 h-4 text-[#FBB040]" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
  initial={{ opacity: 0, x: 50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }}
  className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(251,176,64,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col justify-between">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBB040]/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#04AAA5]/10 rounded-full blur-[80px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-center justify-between mb-6 relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <Palette className="w-4 h-4 text-[#FBB040]" />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm">Design System</h4>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">Global Assets</p>
        </div>
      </div>
      <div className="px-2 py-1 bg-white/10 rounded text-[9px] font-mono text-gray-300 border border-white/5">v2.0_Final</div>
    </div>

    {/* Typography & Logo Grid */}
    <div className="grid grid-cols-2 gap-4 relative z-10 mb-4">
      {/* Typography Block */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Type className="w-4 h-4 text-gray-400 mb-2" />
        <div className="text-3xl font-serif text-white leading-none mb-1">Aa</div>
        <div className="text-[10px] text-gray-400 uppercase tracking-widest">Primary Font</div>
        <div className="w-full h-px bg-white/10 mt-3 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} whileInView={{ x: "100%" }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" 
          />
        </div>
      </motion.div>

      {/* Logo Structure Block */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative"
      >
        <Hexagon className="w-4 h-4 text-gray-400 absolute top-4 left-4" />
        <div className="relative w-12 h-12 flex items-center justify-center border border-dashed border-white/20 rounded-full">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-[#04AAA5] absolute rounded-sm"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border border-[#FBB040] absolute rounded-full opacity-50"
          />
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-3">Brand Mark</div>
      </motion.div>
    </div>

    {/* Animated Color Palettes */}
    <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Brand Colors</div>
      <div className="flex justify-between items-center gap-2">
        {[
          { hex: "#FBB040", name: "Gold" },
          { hex: "#04AAA5", name: "Teal" },
          { hex: "#111111", name: "Dark" },
          { hex: "#FFFFFF", name: "Light" }
        ].map((color, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div 
              className="w-10 h-10 rounded-full shadow-lg border border-white/10 transform group-hover:-translate-y-1 transition-transform"
              style={{ backgroundColor: color.hex }}
            />
            <div className="text-[8px] font-mono text-gray-500 group-hover:text-white transition-colors">{color.hex}</div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE WHY */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#04AAA5]">02.</span> Why Do You Need It?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              In a crowded market, aesthetic excellence is not a luxury; it is a baseline requirement for trust. Here is why a premium brand identity is vital.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: ShieldCheck, title: "Instant Trust", desc: "People buy with their eyes. A polished, professional identity instantly communicates reliability and competence." },
              { icon: Award, title: "Premium Positioning", desc: "Strong branding allows you to command higher price points. Customers pay for the perceived value of the brand." },
              { icon: Eye, title: "Market Recognition", desc: "Consistent use of colors, fonts, and logos makes your brand instantly recognizable across all platforms." },
              { icon: Heart, title: "Customer Loyalty", desc: "Great branding creates emotional connections. It turns casual buyers into fierce brand advocates." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, borderColor: "rgba(251, 176, 64, 0.4)" }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FBB040]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#FBB040]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE EFFECT */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#FBB040]/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }}
  className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-[#04AAA5]/20 shadow-[0_0_50px_rgba(4,170,165,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col justify-between">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#04AAA5]/10 rounded-full blur-[100px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#04AAA5]" />
          Brand Equity
        </h4>
        <p className="text-gray-400 text-xs mt-1">Omnichannel Consistency</p>
      </div>
      <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-[10px] font-bold border border-green-500/20 uppercase tracking-widest">
        Synced
      </div>
    </div>

    {/* Animated Omnichannel Sync Visualization */}
    <div className="flex justify-center items-center gap-3 md:gap-6 mb-8 relative z-10">
      {[
        { icon: Monitor, label: "Web", color: "#04AAA5" },
        { icon: Smartphone, label: "Social", color: "#FBB040" },
        { icon: Layers, label: "Print", color: "#04AAA5" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div 
            initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#6b7280", boxShadow: "none" }}
            whileInView={{ 
              borderColor: item.color, 
              color: item.color,
              boxShadow: `0 0 20px ${item.color}30`
            }}
            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
            className="w-12 h-12 rounded-xl border-2 bg-white/5 flex items-center justify-center mb-2"
          >
            <item.icon className="w-5 h-5" />
          </motion.div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">{item.label}</span>
        </div>
      ))}
      
      {/* Connecting animated lines */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-[#04AAA5]/50 via-[#FBB040]/50 to-[#04AAA5]/50 -z-10 origin-left"
      />
    </div>

    {/* Bottom Metric Cards highlighting Friction and Trust */}
    <div className="grid grid-cols-2 gap-4 relative z-10 mt-auto">
      
      {/* Decision Friction Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#04AAA5]/30 transition-all cursor-pointer relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Decision Friction</span>
          <div className="flex items-center gap-1 text-[#04AAA5] bg-[#04AAA5]/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <ArrowDownRight className="w-3 h-3" /> 84%
          </div>
        </div>
        {/* Simple visual dropping bar */}
        <div className="flex items-end gap-1 h-10 mt-3">
          <div className="w-full bg-white/20 h-full rounded-t-sm" />
          <div className="w-full bg-white/20 h-3/4 rounded-t-sm" />
          <div className="w-full bg-white/20 h-1/2 rounded-t-sm" />
          <motion.div 
            initial={{ height: "50%" }} whileInView={{ height: "15%" }} transition={{ duration: 1, delay: 0.5 }}
            className="w-full bg-[#04AAA5] rounded-t-sm shadow-[0_0_10px_#04AAA5]" 
          />
        </div>
      </motion.div>
      
      {/* Brand Trust Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-[#FBB040]/10 to-transparent rounded-xl p-4 border border-[#FBB040]/20 hover:border-[#FBB040]/50 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-[#FBB040]" />
          <span className="text-white text-[10px] uppercase tracking-wider font-bold">Brand Trust</span>
        </div>
        <div className="text-3xl font-bold text-white mb-1">98<span className="text-xl text-gray-400">/100</span></div>
        <div className="text-[#FBB040] text-[9px] uppercase tracking-widest font-bold">Instant Recognition</div>
      </motion.div>

    </div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">03.</span> The Effect
              </h2>
              <p className="text-[#FBB040] text-xl font-semibold mb-6">
                Consistency, Authority, and Increased Valuation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The ultimate effect of a cohesive brand identity is <strong>frictionless decision-making</strong> for your customers. When your brand looks premium, consistent, and intentional, it strips away consumer doubt. It shortens the sales cycle and dramatically increases the overall equity and valuation of your company.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-[#FBB040] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">33%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Revenue Increase <br/> from Brand Consistency</div>
                </div>
                <div className="border-l-2 border-[#04AAA5] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">Seconds</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">To Form a First <br/> Impression Online</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 z-10 flex justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
        >
            <h2 className="text-4xl font-bold mb-6">Ready to stand out?</h2>
            <p className="text-gray-400 mb-10">Stop blending in with the competition. Let our design experts craft a visual identity that demands attention.</p>
            <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(251, 176, 64, 0.4)",
                  backgroundColor: "#FBB040",
                  color: "#000"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full transition-all duration-300"
            >
                Start Your Rebrand
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}