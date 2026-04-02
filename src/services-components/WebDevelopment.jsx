import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal, Database, Layout, Gauge, Zap, Code2, Code, MonitorSmartphone, Lock, LayoutDashboard, Server, Search, CheckCircle } from "lucide-react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";

// Fade-in animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function WebDevelopment() {
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
    "name": "Web Design & Full-Stack Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "High-performance web development services building secure, fast, and SEO-native digital platforms designed to maximize conversions."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Web Development & Design Services | Say It Social"
        description="Discover the What, Why, and Impact of custom Web Development. We engineer high-performance platforms that convert visitors into revenue."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
      </div>

      <Navbar isScrolled={isScrolled} />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-52 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ y: yParallax }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBB040] animate-pulse" />
              Service Spotlight
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              High-Performance <br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Digital Platforms
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We don't just build websites; we engineer your most powerful business asset. From immersive front-end UI to robust back-end architecture, we create digital experiences built to scale and convert.
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
                <span className="text-[#04AAA5]">01.</span> What is it?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Web Development is the complex architectural process of bringing your brand to life on the internet. It fuses aesthetics with heavy technical engineering to create a seamless user experience.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                A modern website cannot just act as a digital brochure. It must be a living, breathing sales engine. Our full-stack development methodology covers every critical layer of your digital infrastructure:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: LayoutDashboard, text: 'UI/UX Interface Design' },
                  { icon: Code, text: 'Custom Front-End Code' },
                  { icon: Server, text: 'Back-End Infrastructure' },
                  { icon: Search, text: 'SEO-Native Architecture' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-200 bg-white/5 p-3 rounded-lg border border-white/10">
                      <Icon className="w-4 h-4 text-[#04AAA5]" />
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
  className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(4,170,165,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col justify-center">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#04AAA5]/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBB040]/10 rounded-full blur-[80px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-gray-500 text-xs font-mono ml-2">architecture.config.js</span>
      </div>
      <Terminal className="w-4 h-4 text-gray-400" />
    </div>

    {/* Animated Tech Stack Layers */}
    <div className="relative z-10 flex flex-col gap-4">
      
      {/* Top Layer: UI/UX */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full bg-[#04AAA5]/10 border border-[#04AAA5]/30 rounded-xl p-4 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(4,170,165,0.2)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04AAA5]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#04AAA5]/20 flex items-center justify-center">
            <Layout className="w-4 h-4 text-[#04AAA5]" />
          </div>
          <div>
            <div className="text-white text-sm font-bold">Client Interface (UI)</div>
            <div className="text-[#04AAA5] text-[10px] uppercase tracking-widest">React / Next.js</div>
          </div>
        </div>
        <CheckCircle className="w-4 h-4 text-[#04AAA5]" />
      </motion.div>

      {/* Connection Lines */}
      <div className="w-px h-4 bg-gradient-to-b from-[#04AAA5] to-white/20 mx-auto" />

      {/* Middle Layer: Logic */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-lg relative"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <div className="text-white text-sm font-bold">Application Logic</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest">API & Middleware</div>
          </div>
        </div>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse delay-75" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse delay-150" />
        </div>
      </motion.div>

      {/* Connection Lines */}
      <div className="w-px h-4 bg-gradient-to-b from-white/20 to-[#FBB040] mx-auto" />

      {/* Bottom Layer: Database */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full bg-[#FBB040]/10 border border-[#FBB040]/30 rounded-xl p-4 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(251,176,64,0.2)] relative"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FBB040]/20 flex items-center justify-center">
            <Database className="w-4 h-4 text-[#FBB040]" />
          </div>
          <div>
            <div className="text-white text-sm font-bold">Secure Infrastructure</div>
            <div className="text-[#FBB040] text-[10px] uppercase tracking-widest">Database / Servers</div>
          </div>
        </div>
        <Lock className="w-4 h-4 text-[#FBB040]" />
      </motion.div>

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
              <span className="text-[#FBB040]">02.</span> Why Do You Need It?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              You don't own your social media profiles, but you own your website. It is the absolute center of your digital universe and the final destination for every marketing dollar you spend.
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
              { icon: Zap, title: "Speed is Revenue", desc: "A slow site kills conversions. We engineer lightweight, lightning-fast platforms that keep users engaged." },
              { icon: MonitorSmartphone, title: "Mobile-First", desc: "With the majority of web traffic on mobile, we build responsive frameworks that look flawless on any device." },
              { icon: CheckCircle, title: "Conversion Optimized", desc: "Strategic user journeys. We map out precise funnels designed to guide visitors effortlessly to the checkout or contact form." },
              { icon: Lock, title: "Fort Knox Security", desc: "Enterprise-grade security protocols protect your data and your users, building essential consumer trust." }
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
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#04AAA5]/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true }}
  className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-[#04AAA5]/20 shadow-[0_0_50px_rgba(4,170,165,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#04AAA5]/10 rounded-full blur-[100px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <Gauge className="w-5 h-5 text-[#04AAA5]" />
          Performance Metrics
        </h4>
        <p className="text-gray-400 text-xs mt-1">Core Web Vitals Check</p>
      </div>
      <div className="flex items-center gap-1 bg-[#04AAA5]/10 text-[#04AAA5] px-3 py-1.5 rounded-full text-[10px] font-bold border border-[#04AAA5]/20 uppercase tracking-widest">
        Optimized
      </div>
    </div>

    {/* Animated Score Rings */}
    <div className="flex justify-between items-center mb-8 relative z-10 px-2">
      {[
        { label: "Performance", score: 99, color: "#04AAA5" },
        { label: "Accessibility", score: 100, color: "#FBB040" },
        { label: "SEO Score", score: 100, color: "#04AAA5" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="relative w-20 h-20">
            {/* Background Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
              {/* Animated Foreground Ring */}
              <motion.circle 
                cx="50" cy="50" r="45" 
                stroke={item.color} 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                strokeDasharray="283"
                initial={{ strokeDashoffset: 283 }}
                whileInView={{ strokeDashoffset: 283 - (283 * item.score) / 100 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                className="drop-shadow-[0_0_8px_currentColor]"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl">{item.score}</span>
            </div>
          </div>
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">{item.label}</span>
        </div>
      ))}
    </div>

    {/* Bottom Metric Cards highlighting speed & conversions */}
    <div className="grid grid-cols-2 gap-4 relative z-10 mt-auto">
      
      {/* Speed Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-[#04AAA5]/10 to-transparent rounded-xl p-4 border border-[#04AAA5]/20 hover:border-[#04AAA5]/50 transition-all cursor-pointer relative overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-[#04AAA5]" />
          <span className="text-white text-xs uppercase tracking-wider font-bold">Load Time</span>
        </div>
        <div className="text-3xl font-bold text-white mb-1">0.8<span className="text-xl text-gray-400">s</span></div>
        <div className="text-[#04AAA5] text-[9px] uppercase tracking-widest font-bold">Top 1% Worldwide</div>
      </motion.div>
      
      {/* Friction/Conversion Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Bounce Rate</span>
        </div>
        <div className="text-3xl font-bold text-white mb-1">12<span className="text-xl text-gray-400">%</span></div>
        <div className="text-green-400 text-[9px] uppercase tracking-widest font-bold">-76% Friction Drop</div>
      </motion.div>

    </div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">03.</span> The Effect
              </h2>
              <p className="text-[#04AAA5] text-xl font-semibold mb-6">
                Frictionless Conversions & Brand Authority.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The ultimate effect of premium web development is <strong>digital sovereignty</strong>. By removing technical friction, accelerating load times, and providing an intuitive user experience, your website stops being a cost center and becomes your most reliable, 24/7 top-performing salesperson.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-[#04AAA5] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">88%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Less likely to return <br/>after a bad experience</div>
                </div>
                <div className="border-l-2 border-[#FBB040] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">3 Sec</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Maximum load time <br/>before massive drop-off</div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to upgrade your digital footprint?</h2>
            <p className="text-gray-400 mb-10">Don't let an outdated or slow website cost you another client. Let our full-stack engineers build a platform that scales with your ambition.</p>
            <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(4, 170, 165, 0.4)",
                  backgroundColor: "#04AAA5",
                  color: "#000"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full transition-all duration-300"
            >
                Start Your Build
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}