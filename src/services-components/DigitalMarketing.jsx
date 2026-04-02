import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Filter, MousePointerClick, Users, ShoppingBag, ArrowDown, Target, TrendingUp, Zap, BarChart3, ArrowDownRight, ArrowUpRight, Globe, ShieldCheck, Eye } from "lucide-react";
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

export default function DigitalMarketing() {
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
    "name": "Digital Marketing & Performance Growth",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Say It Social"
    },
    "description": "Full-funnel digital marketing services designed to capture high-intent audiences and drive measurable revenue growth."
  };

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Digital Marketing Services | Say It Social"
        description="Discover the What, Why, and Impact of full-funnel Digital Marketing. We transform raw engagement into measurable, scalable revenue."
        schemaMarkup={pageSchema}
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
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
              Performance-Driven <br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Digital Marketing
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We don't just generate traffic; we engineer scalable growth ecosystems. Discover how our full-funnel approach transforms your digital presence into your most powerful sales engine.
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
                Digital marketing is the strategic deployment of digital channels—such as search engines, social media, email, and websites—to connect with prospective customers where they spend their time.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Unlike traditional advertising, it is a <strong>data-driven ecosystem</strong>. We build custom funnels that capture high-intent users at the top, nurture them through targeted content, and seamlessly convert them into loyal customers at the bottom.
              </p>
              <ul className="space-y-4">
                {['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Management', 'Conversion Rate Optimization (CRO)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-[#04AAA5]/10 flex items-center justify-center text-[#04AAA5]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              {/* Marketing Funnel Cards */}
              <div className="space-y-4">
                {/* Stage 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, width: "100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full"
                >
                  <div className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FBB040]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-xl border border-[#FBB040]/30 bg-gradient-to-r from-[#FBB040]/10 to-transparent backdrop-blur-md">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#FBB040] flex items-center justify-center text-black font-bold text-sm">1</div>
                            <h4 className="text-lg font-bold text-white">Market Evaluation</h4>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed ml-11">Analyzing the market, evaluating the brand's position, and assessing competitors to identify growth opportunities</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-black text-[#FBB040]">100%</div>
                          <div className="text-xs text-gray-400">Market Share</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, width: "85%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-[85%]"
                >
                  <div className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FBB040]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-xl border border-[#FBB040]/30 bg-gradient-to-r from-[#FBB040]/10 to-transparent backdrop-blur-md">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#FBB040] flex items-center justify-center text-black font-bold text-sm">2</div>
                            <h4 className="text-lg font-bold text-white">Sales Analysis</h4>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed ml-11">Evaluating the effectiveness of sales strategies and campaigns to optimize conversion rates</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-black text-[#FBB040]">85%</div>
                          <div className="text-xs text-gray-400">Conversion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, width: "70%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-[70%]"
                >
                  <div className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-xl border border-[#04AAA5]/30 bg-gradient-to-r from-[#04AAA5]/10 to-transparent backdrop-blur-md">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#04AAA5] flex items-center justify-center text-black font-bold text-sm">3</div>
                            <h4 className="text-lg font-bold text-white">Content Utilization</h4>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed ml-11">Ensuring the effectiveness, impact, and efficiency of sales materials used in the sales process</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-black text-[#04AAA5]">68%</div>
                          <div className="text-xs text-gray-400">Engagement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 30, width: "55%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-[55%]"
                >
                  <div className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-xl border border-[#04AAA5]/30 bg-gradient-to-r from-[#04AAA5]/10 to-transparent backdrop-blur-md">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#04AAA5] flex items-center justify-center text-black font-bold text-sm">4</div>
                            <h4 className="text-lg font-bold text-white">Training & Coaching</h4>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed ml-11">Maintaining the relevance of team training and learning resources for operational excellence</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-black text-[#04AAA5]">52%</div>
                          <div className="text-xs text-gray-400">Mastery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* CONVERSION FUNNEL SECTION */}
      <section className="relative py-32 px-6 z-10 border-t border-white/5 bg-gradient-to-b from-transparent via-[#04AAA5]/2 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#04AAA5] via-[#FBB040] to-[#04AAA5] bg-clip-text text-transparent">Customer Journey</span> Conversion Pipeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Watch how we transform awareness into action through strategic digital marketing touchpoints at each stage
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#04AAA5] via-[#FBB040] to-[#04AAA5]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-16 relative z-10">
              
              {/* Step 1: Awareness */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center w-full"
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#04AAA5]/20 to-transparent border-2 border-[#04AAA5] flex items-center justify-center relative z-20 group mb-8 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-[#04AAA5] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#04AAA5] block">Awareness</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#04AAA5]/10 blur-lg group-hover:blur-xl transition-all" />
                </motion.div>
                <div className="text-4xl font-black text-[#04AAA5] mb-2">10K</div>
                <p className="text-sm text-gray-400 mb-3 font-medium">Impressions & Reach</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">Build brand visibility through SEO, PPC, and social campaigns</p>
              </motion.div>

              {/* Step 2: Interest */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center w-full"
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FBB040]/20 to-transparent border-2 border-[#FBB040] flex items-center justify-center relative z-20 group mb-8 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-[#FBB040] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#FBB040] block">Interest</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#FBB040]/10 blur-lg group-hover:blur-xl transition-all" />
                </motion.div>
                <div className="text-4xl font-black text-[#FBB040] mb-2">3.5K</div>
                <p className="text-sm text-gray-400 mb-3 font-medium">Clicks & Engagement</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">Engage interested prospects with compelling content and offers</p>
              </motion.div>

              {/* Step 3: Consideration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center w-full"
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#04AAA5]/20 to-transparent border-2 border-[#04AAA5] flex items-center justify-center relative z-20 group mb-8 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[#04AAA5] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#04AAA5] block">Consider</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#04AAA5]/10 blur-lg group-hover:blur-xl transition-all" />
                </motion.div>
                <div className="text-4xl font-black text-[#04AAA5] mb-2">1.2K</div>
                <p className="text-sm text-gray-400 mb-3 font-medium">Qualified Leads</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">Convert leads with targeted offers and personalized solutions</p>
              </motion.div>

              {/* Step 4: Conversion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FBB040]/20 to-transparent border-2 border-[#FBB040] flex items-center justify-center relative z-20 group mb-8 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <ShoppingBag className="w-8 h-8 text-[#FBB040] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#FBB040] block">Convert</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#FBB040]/10 blur-lg group-hover:blur-xl transition-all" />
                </motion.div>
                <div className="text-4xl font-black text-[#FBB040] mb-2">240</div>
                <p className="text-sm text-gray-400 mb-3 font-medium">New Customers</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">Close deals with optimized pages and frictionless checkout</p>
              </motion.div>

              {/* Step 5: Retention */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center w-full"
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#04AAA5]/20 to-transparent border-2 border-[#04AAA5] flex items-center justify-center relative z-20 group mb-8 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[#04AAA5] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#04AAA5] block">Retain</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#04AAA5]/10 blur-lg group-hover:blur-xl transition-all" />
                </motion.div>
                <div className="text-4xl font-black text-[#04AAA5] mb-2">180+</div>
                <p className="text-sm text-gray-400 mb-3 font-medium">Loyal Advocates</p>
                <p className="text-xs text-gray-500 leading-relaxed text-center">Build lasting relationships through loyalty and engagement</p>
              </motion.div>

            </div>
          </div>

          {/* Bottom Info Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="relative p-8 rounded-2xl border border-[#04AAA5]/30 bg-gradient-to-br from-[#04AAA5]/10 to-transparent backdrop-blur-lg overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#04AAA5]/20 rounded-full blur-3xl group-hover:blur-2xl transition-all" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#04AAA5]" />
                  Conversion Optimization
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">Average conversion rate improvement of 42% through continuous A/B testing and data-driven optimization</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative p-8 rounded-2xl border border-[#FBB040]/30 bg-gradient-to-br from-[#FBB040]/10 to-transparent backdrop-blur-lg overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FBB040]/20 rounded-full blur-3xl group-hover:blur-2xl transition-all" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#FBB040]" />
                  ROI & Growth
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">Clients see 3x-5x average ROI increase with 200%+ traffic growth within 12 months of strategy implementation</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#FBB040]">02.</span> Why Do You Need It?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              In a digital-first world, visibility is currency. Here is why partnering with an agency for digital marketing is non-negotiable for modern businesses.
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
              { icon: Target, title: "Hyper-Targeting", desc: "Stop shouting into the void. We target demographics, behaviors, and precise search intents.", color: "#04AAA5" },
              { icon: BarChart3, title: "Total Measurability", desc: "Every click, impression, and conversion is tracked. You know exactly where your ROI comes from.", color: "#FBB040" },
              { icon: Globe, title: "Global Scalability", desc: "Break geographical borders. Scale your campaigns globally or hyper-locally with the click of a button.", color: "#04AAA5" },
              { icon: Zap, title: "Cost Efficiency", desc: "Optimize spend in real-time. We reallocate budgets to the highest-performing channels instantly.", color: "#FBB040" }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -12, borderColor: feature.color }}
                  className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: feature.color }} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br mb-6 flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundImage: `linear-gradient(135deg, ${feature.color}33, transparent)` }}>
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: feature.color }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE EFFECT */}
      <section className="relative py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent via-[#04AAA5]/3 to-transparent z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">03.</span> The Effect
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">See the measurable impact of strategic digital marketing on revenue growth and market dominance</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-[#FBB040]/30 shadow-[0_0_60px_rgba(251,176,64,0.15)] p-1 bg-black/60 backdrop-blur-xl order-2 lg:order-1"
            >
  {/* Inner Dashboard Mockup */}
  <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-2xl p-8 md:p-10 overflow-hidden border border-white/5 h-full">
    
    {/* Background Decorative Gradients */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#FBB040]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#04AAA5]/10 rounded-full blur-3xl pointer-events-none" />

    {/* Header Section */}
    <div className="flex items-start justify-between mb-8 relative z-10">
      <div>
        <h4 className="text-white font-bold text-xl flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#FBB040]" />
          Revenue Analytics
        </h4>
        <p className="text-gray-400 text-xs mt-1">Compound Growth (YTD)</p>
      </div>
      <div className="flex items-center gap-1 bg-[#FBB040]/10 text-[#FBB040] px-3 py-1.5 rounded-full text-[10px] font-bold border border-[#FBB040]/20 uppercase tracking-widest">
        Live Data
      </div>
    </div>

    {/* Animated SVG Area Chart */}
    <div className="relative h-40 w-full mb-8 z-10">
      {/* Chart Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-white/10 pb-1 pl-1">
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
        <div className="w-full border-t border-white/5 h-px dashed" />
      </div>

      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04AAA5" />
            <stop offset="100%" stopColor="#FBB040" />
          </linearGradient>
          <linearGradient id="revAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBB040" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#04AAA5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Fill Area */}
        <motion.path
          d="M0 50 L0 45 Q 25 45, 45 25 T 100 5 L 100 50 Z"
          fill="url(#revAreaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Animated Line */}
        <motion.path
          d="M0 45 Q 25 45, 45 25 T 100 5"
          fill="none"
          stroke="url(#revLineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Animated End Dots with Pulse effect */}
        <motion.circle
          cx="100"
          cy="5"
          r="3"
          fill="#FBB040"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="drop-shadow-[0_0_10px_rgba(251,176,64,0.8)]"
        />
        <motion.circle
          cx="100"
          cy="5"
          r="6"
          fill="none"
          stroke="#FBB040"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </div>

    {/* Bottom Metric Cards (CAC and LTV to perfectly match the paragraph copy) */}
    <div className="grid grid-cols-2 gap-4 relative z-10">
      
      {/* CAC Card (Showing Decrease) */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#04AAA5]/30 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Avg. CAC</span>
          <div className="flex items-center gap-1 text-[#04AAA5] bg-[#04AAA5]/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <ArrowDownRight className="w-3 h-3" /> 42%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">$24.50</div>
        <div className="text-gray-500 text-[9px] uppercase tracking-widest">Cost Per Acquisition</div>
      </motion.div>
      
      {/* LTV Card (Showing Increase) */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#FBB040]/30 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Client LTV</span>
          <div className="flex items-center gap-1 text-[#FBB040] bg-[#FBB040]/10 px-2 py-0.5 rounded text-[10px] font-bold">
            <ArrowUpRight className="w-3 h-3" /> 3x
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">$4,850</div>
        <div className="text-gray-500 text-[9px] uppercase tracking-widest">Lifetime Value</div>
      </motion.div>

    </div>

  </div>
</motion.div>

            <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-[#04AAA5] text-sm font-bold uppercase tracking-[0.15em] mb-4">
                Compound Growth Strategy
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Predictable Revenue &<br />
                <span className="bg-gradient-to-r from-[#04AAA5] to-[#FBB040] bg-clip-text text-transparent">Market Dominance</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                The ultimate effect of a properly executed digital marketing strategy is <span className="text-white font-semibold">compound growth</span>. By continuously A/B testing, analyzing user data, and refining creative assets, we lower your Customer Acquisition Cost (CAC) while increasing the Lifetime Value (LTV) of your clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 rounded-2xl border border-[#04AAA5]/30 bg-[#04AAA5]/5 backdrop-blur-lg group overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#04AAA5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-[#04AAA5] mb-2">3x - 5x</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Avg ROI Increase</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 rounded-2xl border border-[#FBB040]/30 bg-[#FBB040]/5 backdrop-blur-lg group overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FBB040]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-[#FBB040] mb-2">200%+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Traffic Growth</div>
                  </div>
                </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to see these effects?</h2>
            <p className="text-gray-400 mb-10">Stop leaving money on the table. Let our experts audit your current strategy and build a custom growth roadmap.</p>
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
                Launch Your Campaign
            </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}