import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Share2, MessageCircle, ArrowUpRight,Target, Activity , Users,TrendingUp, Megaphone, Smartphone, Heart, BarChart, Zap } from "lucide-react";
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

export default function SocialMediaMarketing() {
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
    "name": "Social Media Marketing (SMM)",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "Strategic social media marketing services designed to build engaged communities, amplify brand voice, and drive measurable ROI through organic and paid campaigns."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans selection:bg-[#FBB040]/30">
      <SEO
        title="Social Media Marketing Strategy | Say It Social"
        description="Discover the What, Why, and Impact of Social Media Marketing. We build engaged global communities that turn followers into brand advocates."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
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
              Strategic Community <br />
              <span className="bg-gradient-to-r from-[#FBB040] via-white to-[#04AAA5] bg-clip-text text-transparent italic">
                Building & Dominance
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We don't just chase likes; we build movements. Transform your social platforms into dynamic, revenue-generating ecosystems that foster deep loyalty and massive brand awareness.
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
                <span className="text-[#FBB040]">01.</span> What is SMM?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Social Media Marketing (SMM) is the strategic utilization of platforms like Instagram, LinkedIn, Meta, and TikTok to connect directly with your audience, amplify your brand voice, and accelerate sales.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                It goes far beyond posting updates. We architect comprehensive, data-driven ecosystems that combine organic community building with highly targeted paid amplification. Our methodology is built on four core pillars:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Smartphone, text: 'Content Creation & Strategy' },
                  { icon: MessageCircle, text: 'Proactive Community Management' },
                  { icon: Megaphone, text: 'Paid Social Advertising' },
                  { icon: BarChart, text: 'Social Listening & Analytics' }
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
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5">
    
    {/* Background Decorative Gradients inside the card */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FBB040]/10 rounded-full blur-2xl pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#04AAA5]/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header / Profile Area */}
    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FBB040] to-[#04AAA5] p-[2px]">
          <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg leading-tight">Brand Reach</h4>
          <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-[#04AAA5]" /> +124% Engagement
          </p>
        </div>
      </div>
      <div className="bg-[#04AAA5]/10 text-[#04AAA5] px-3 py-1 rounded-full text-[10px] font-bold border border-[#04AAA5]/20 uppercase tracking-wider">
        Live Stats
      </div>
    </div>

    {/* Animated Bar Chart Area */}
    <div className="h-32 flex items-end justify-between gap-2 mb-8 relative z-10">
      {[40, 65, 45, 80, 55, 100, 75].map((height, i) => (
        <div key={i} className="w-full bg-white/5 rounded-t-sm relative group cursor-pointer h-full flex items-end">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            className={`w-full rounded-t-sm transition-colors duration-300 ${
              i === 5 
                ? 'bg-gradient-to-t from-[#FBB040] to-[#04AAA5]' 
                : 'bg-white/20 group-hover:bg-white/40'
            }`}
          />
        </div>
      ))}
    </div>

    {/* Bottom Metrics Grid */}
    <div className="grid grid-cols-3 gap-3 relative z-10">
      {[
        { icon: Heart, label: "Likes", val: "14.2K", color: "text-[#FBB040]" },
        { icon: MessageCircle, label: "Comments", val: "3.4K", color: "text-white" },
        { icon: Share2, label: "Shares", val: "8.1K", color: "text-[#04AAA5]" },
      ].map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
            <Icon className={`w-5 h-5 mb-2 ${stat.color}`} />
            <div className="text-white font-bold text-lg">{stat.val}</div>
            <div className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        );
      })}
    </div>

    {/* Floating Animated Reaction Bubbles (adds movement) */}
    <motion.div 
      animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 right-4 bg-black/40 p-3 rounded-full border border-white/10 backdrop-blur-md z-20 shadow-lg"
    >
      <Heart className="w-5 h-5 text-[#FBB040] fill-[#FBB040]/20" />
    </motion.div>
    
    <motion.div 
      animate={{ y: [10, -10, 10], rotate: [0, -10, 10, 0] }} 
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[40%] left-2 bg-black/40 p-2 rounded-full border border-white/10 backdrop-blur-md z-20 shadow-lg"
    >
      <MessageCircle className="w-4 h-4 text-[#04AAA5] fill-[#04AAA5]/20" />
    </motion.div>

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
              Your customers are spending hours every day on social platforms. If you aren't controlling your narrative there, your competitors are doing it for you.
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
              { icon: Users, title: "Unmatched Reach", desc: "Access billions of active users globally. We place your brand directly in the pockets of your ideal demographic." },
              { icon: Heart, title: "Deep Engagement", desc: "Break the corporate wall. Social media allows for two-way conversations that humanize your brand and build trust." },
              { icon: Share2, title: "Social Proof", desc: "User-generated content, reviews, and influencer validation serve as powerful psychological triggers for new buyers." },
              { icon: Zap, title: "Viral Potential", desc: "One culturally relevant, highly shareable piece of content can generate millions of impressions in a matter of hours." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, borderColor: "rgba(4, 170, 165, 0.4)" }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#04AAA5]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#04AAA5]" />
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
  className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-[#04AAA5]/20 shadow-[0_0_50px_rgba(4,170,165,0.1)] p-2 bg-black/50 backdrop-blur-md"
>
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-[#0a0a0a] rounded-2xl p-6 md:p-8 overflow-hidden border border-white/5 h-full">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#04AAA5]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FBB040]/10 rounded-full blur-3xl pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <Activity className="w-5 h-5 text-[#04AAA5]" />
          Compound Growth
        </h4>
        <p className="text-gray-400 text-xs mt-1">Social-Driven Revenue (Last 90 Days)</p>
      </div>
      <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold border border-green-500/20">
        <ArrowUpRight className="w-3 h-3" /> +342%
      </div>
    </div>

    {/* Animated SVG Line Chart */}
    <div className="relative h-32 w-full mb-8 z-10">
      {/* Chart Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-white/10 pb-1 pl-1">
        <div className="w-full border-t border-white/5 h-px" />
        <div className="w-full border-t border-white/5 h-px" />
        <div className="w-full border-t border-white/5 h-px" />
      </div>

      <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04AAA5" />
            <stop offset="100%" stopColor="#FBB040" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBB040" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#04AAA5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Fill Area */}
        <motion.path
          d="M0 40 L0 35 C 20 30, 40 35, 50 20 C 60 5, 80 10, 100 2 L 100 40 Z"
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Animated Line */}
        <motion.path
          d="M0 35 C 20 30, 40 35, 50 20 C 60 5, 80 10, 100 2"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Animated End Dot */}
        <motion.circle
          cx="100"
          cy="2"
          r="2.5"
          fill="#FBB040"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="drop-shadow-[0_0_8px_rgba(251,176,64,0.8)]"
        />
      </svg>
    </div>

    {/* Bottom Metric Cards */}
    <div className="grid grid-cols-2 gap-4 relative z-10">
      <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#04AAA5]/30 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-[#04AAA5]" />
          <span className="text-gray-400 text-xs uppercase tracking-wider">Brand Advocates</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">12,450</div>
        <div className="text-[#04AAA5] text-[10px] font-bold tracking-widest">+8.4% THIS MONTH</div>
      </div>
      
      <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#FBB040]/30 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-[#FBB040]" />
          <span className="text-gray-400 text-xs uppercase tracking-wider">Avg. LTV</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">$4,280</div>
        <div className="text-[#FBB040] text-[10px] font-bold tracking-widest">3X HIGHER RETENTION</div>
      </div>
    </div>

    {/* Floating Notification */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl z-20 w-max"
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#04AAA5] to-[#FBB040] flex items-center justify-center">
        <span className="text-black text-[10px] font-black">✓</span>
      </div>
      <span className="text-white text-xs font-medium">New Conversion via Instagram</span>
    </motion.div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">03.</span> The Effect
              </h2>
              <p className="text-[#FBB040] text-xl font-semibold mb-6">
                Fierce Loyalty & Cult-Like Brand Advocacy.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The ultimate effect of a masterfully executed social strategy is <strong>conversion through connection</strong>. By continuously delivering value, aesthetic excellence, and community interaction, we transform passive scrollers into highly engaged buyers who enthusiastically defend and promote your brand to their own networks.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-[#FBB040] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">71%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">More likely to buy <br/>based on social referrals</div>
                </div>
                <div className="border-l-2 border-[#04AAA5] pl-4">
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Higher LTV for <br/>social-engaged customers</div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to spark a movement?</h2>
            <p className="text-gray-400 mb-10">Stop posting into the void. Let our strategists craft a social media playbook that commands attention and drives real revenue.</p>
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
                Ignite Your Social Strategy
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}