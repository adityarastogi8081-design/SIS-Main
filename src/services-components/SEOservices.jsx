import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";
import { 
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  CheckCircle,
  FileText,
  Globe,
  Link as LinkIcon,
  MapPin,
  MousePointerClick,
  Search,
  Settings,
  Target,
  TrendingUp,
  Wallet 
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

export default function SEOServices() {
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
    "name": "Search Engine Optimization (SEO)",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "Advanced SEO services including technical, on-page, and off-page strategies to secure page-one rankings and drive high-intent organic traffic."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="SEO Services & Strategy | Say It Social"
        description="Discover the What, Why, and Impact of Search Engine Optimization. Dominate search rankings and build long-term organic equity."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
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
              Search Engine <br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Dominance
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Stop paying for every click. We engineer high-performance SEO frameworks that secure page-one rankings, capture high-intent buyers, and build compounding digital equity for your brand.
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
                <span className="text-[#04AAA5]">01.</span> What is SEO?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Search Engine Optimization (SEO) is the scientific process of aligning your website's technical infrastructure and content with the algorithms of major search engines like Google.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                It’s not magic; it’s a systematic approach to proving to search engines that your website is the most relevant, authoritative, and trustworthy answer to a user's specific query. We break this down into four core pillars:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Settings, text: 'Technical SEO & Speed' },
                  { icon: FileText, text: 'On-Page Content Strategy' },
                  { icon: LinkIcon, text: 'Off-Page Authority Building' },
                  { icon: MapPin, text: 'Local & Maps Optimization' }
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
  className="relative rounded-3xl overflow-hidden border border-[#04AAA5]/20 shadow-[0_0_40px_rgba(4,170,165,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col justify-between">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#04AAA5]/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBB040]/10 rounded-full blur-[80px] pointer-events-none" />

    {/* Header: Scanner Input */}
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 relative z-10 shadow-inner">
      <Globe className="w-5 h-5 text-[#04AAA5]" />
      <div className="flex-1 text-gray-300 font-mono text-sm truncate">
        https://yourbrand.com/
      </div>
      <div className="flex items-center gap-2 bg-[#04AAA5]/10 px-3 py-1 rounded-md border border-[#04AAA5]/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#04AAA5] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#04AAA5]"></span>
        </span>
        <span className="text-[#04AAA5] text-[10px] font-bold tracking-widest uppercase">Scanning</span>
      </div>
    </div>

    {/* SERP Snippet Preview */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6 bg-white/5 border border-white/10 p-5 rounded-xl relative z-10 group cursor-pointer hover:border-[#04AAA5]/40 transition-colors"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
          <Search className="w-3 h-3 text-gray-400" />
        </div>
        <div>
          <div className="text-[10px] text-gray-300">Your Brand Name</div>
          <div className="text-[9px] text-gray-500">https://yourbrand.com › solutions</div>
        </div>
      </div>
      <div className="text-[#04AAA5] font-bold text-lg group-hover:underline leading-tight mb-1">
        Industry Leading Solutions | Rank #1
      </div>
      <div className="text-gray-400 text-xs leading-relaxed line-clamp-2">
        Dominate search rankings with our comprehensive SEO frameworks. Capture high-intent buyers and build compounding digital equity for your brand today.
      </div>
    </motion.div>

    {/* Animated Metric Bars */}
    <div className="mt-6 flex flex-col gap-4 relative z-10">
      {[
        { label: "Technical Infrastructure", score: 98, color: "#04AAA5" },
        { label: "On-Page Content Authority", score: 94, color: "#FBB040" }
      ].map((metric, i) => (
        <div key={i} className="w-full">
          <div className="flex justify-between items-end mb-1">
            <span className="text-xs text-white font-medium flex items-center gap-2">
              <CheckCircle className="w-3 h-3" style={{ color: metric.color }} />
              {metric.label}
            </span>
            <span className="text-xs font-bold" style={{ color: metric.color }}>{metric.score}/100</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${metric.score}%` }}
              transition={{ duration: 1.5, delay: 0.6 + (i * 0.2), ease: "easeOut" }}
              className="h-full rounded-full relative"
              style={{ backgroundColor: metric.color }}
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" />
            </motion.div>
          </div>
        </div>
      ))}
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
              Paid ads stop working the second you turn them off. SEO is a long-term investment that builds a sustainable moat around your business.
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
              { icon: Target, title: "High-Intent Traffic", desc: "You aren't interrupting people; you are showing up exactly when they are actively searching for your solution." },
              { icon: TrendingUp, title: "Compound Growth", desc: "Unlike paid media, organic traffic builds on itself. Work done today continues to generate leads years from now." },
              { icon: Award, title: "Brand Authority", desc: "Consumers trust Google. Ranking at the top of organic results instantly validates your brand as an industry leader." },
              { icon: Wallet, title: "Cost-Effective", desc: "Zero cost-per-click. While it requires upfront investment, SEO offers the highest long-term ROI of any channel." }
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
  className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-[#FBB040]/20 shadow-[0_0_50px_rgba(251,176,64,0.15)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full min-h-[380px] flex flex-col justify-between">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#04AAA5]/10 rounded-full blur-[100px] pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-6 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#FBB040]" />
          Organic Traffic
        </h4>
        <p className="text-gray-400 text-xs mt-1">Compounding Growth (12 Months)</p>
      </div>
      <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-[10px] font-bold border border-green-500/20 uppercase tracking-widest">
        <ArrowUpRight className="w-3 h-3" /> Surge
      </div>
    </div>

    {/* Animated Exponential SVG Area Chart */}
    <div className="relative h-32 w-full mb-6 z-10">
      {/* Chart Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-white/10 pb-1 pl-1">
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
      </div>

      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="seoLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04AAA5" />
            <stop offset="100%" stopColor="#FBB040" />
          </linearGradient>
          <linearGradient id="seoArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBB040" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#04AAA5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Fill Area - Exponential Curve */}
        <motion.path
          d="M0 50 L0 48 Q 40 45, 70 30 T 100 0 L 100 50 Z"
          fill="url(#seoArea)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Animated Line - Exponential Curve */}
        <motion.path
          d="M0 48 Q 40 45, 70 30 T 100 0"
          fill="none"
          stroke="url(#seoLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Animated End Dot */}
        <motion.circle
          cx="100"
          cy="0"
          r="3.5"
          fill="#FBB040"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="drop-shadow-[0_0_10px_rgba(251,176,64,1)]"
        />
      </svg>
    </div>

    {/* Bottom Metric Cards highlighting Dominance */}
    <div className="grid grid-cols-2 gap-4 relative z-10">
      
      {/* Rankings Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#04AAA5]/30 transition-all cursor-pointer relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Target Keywords</span>
          <MousePointerClick className="w-3 h-3 text-[#04AAA5]" />
        </div>
        <div className="text-3xl font-bold text-white mb-1 flex items-baseline gap-1">
          #1 <span className="text-green-400 text-sm flex items-center"><ArrowUpRight className="w-3 h-3"/> 4 spots</span>
        </div>
        <div className="text-[#04AAA5] text-[9px] uppercase tracking-widest font-bold">Page One Dominance</div>
      </motion.div>
      
      {/* High Intent Traffic Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-[#FBB040]/10 to-transparent rounded-xl p-4 border border-[#FBB040]/20 hover:border-[#FBB040]/50 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-[#FBB040]" />
          <span className="text-white text-[10px] uppercase tracking-wider font-bold">Monthly Traffic</span>
        </div>
        <div className="text-3xl font-bold text-white mb-1">125<span className="text-xl text-gray-400">K+</span></div>
        <div className="text-[#FBB040] text-[9px] uppercase tracking-widest font-bold">High-Intent Visitors</div>
      </motion.div>

    </div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">03.</span> The Effect
              </h2>
              <p className="text-[#04AAA5] text-xl font-semibold mb-6">
                Unfair Market Advantage & Free Acquisition.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The ultimate effect of a data-backed SEO campaign is establishing your website as a <strong>24/7 digital salesperson</strong>. By capturing non-branded search queries, you intercept competitors' customers, radically decrease your blended customer acquisition cost (CAC), and insulate your business from rising ad costs.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-[#04AAA5] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">53%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Of all web traffic <br/>comes from organic search</div>
                </div>
                <div className="border-l-2 border-[#FBB040] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">14.6%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Close rate for SEO leads <br/>(vs 1.7% for outbound)</div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to own page one?</h2>
            <p className="text-gray-400 mb-10">Stop hiding on the second page of Google. Let our SEO specialists conduct a deep technical audit and build your roadmap to the top.</p>
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
                Get Free SEO Audit
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}