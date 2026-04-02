import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../SEO Component/SEO";
import Navbar from "../common-components/Navbar";
import Footer from "../common-components/Footer";
import FloatingParticles from "../common-components/FloatingParticles";

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CONTACT_INFO = [
    { icon: "📞", label: "Phone", val: "+91 84607 32085", link: "tel:+918460732085" },
    { icon: "✉️", label: "Email", val: "info@sayitsocial.digital", link: "mailto:info@sayitsocial.digital" },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://sayitsocial.digital/contact-us/#webpage",
        "url": "https://sayitsocial.digital/contact-us/",
        "name": "Contact Us | Say It Social",
        "description": "Contact Say It Social, a digital marketing agency based in Ahmedabad, Gujarat, India.",
        "isPartOf": {
          "@id": "https://sayitsocial.digital/#website"
        }
      },
      {
        "@type": ["LocalBusiness", "MarketingAgency", "Organization"],
        "@id": "https://sayitsocial.digital/#organization",
        "name": "Say It Social",
        "url": "https://sayitsocial.digital",
        "email": "info@sayitsocial.digital",
        "telephone": "+91 8460732085",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 8460732085",
          "email": "info@sayitsocial.digital",
          "contactType": "Customer Service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.instagram.com/sayitsociall",
          "https://www.youtube.com/@SayltSociall",
          "https://www.linkedin.com/company/say-it-social", 
          "https://www.facebook.com/" 
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Contact Us | Say It Social Digital Marketing Agency"
        description="Ready to scale your brand? Contact Say It Social today. Expert Digital Marketing, SEO, Web Dev & Branding. Book your Free Consultation!"
        schemaMarkup={contactSchema} 
      />
      
      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />
      
      <section className="relative pt-32 pb-24 px-6 min-h-screen flex items-center justify-center overflow-hidden" id="contact">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh opacity-40 z-0" />
        
        <div className="max-w-[90rem] mx-auto relative z-10 w-full">
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
              >
                Get In Touch
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Let's Build Something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AAA5] via-[#10b981] to-[#FBB040]">
                  Great Together
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-10 max-w-lg border-l-2 border-[#04AAA5] pl-6">
                Ready to dominate the digital landscape? Our experts are here to lead the way.
                Book a free strategy call and let’s turn your business goals into reality.
              </p>
              
              <div className="space-y-5">
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
                      whileHover={{ scale: 1.02, x: 5, borderColor: "rgba(4, 170, 165, 0.3)" }}
                      className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 cursor-pointer w-full max-w-md"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#04AAA5]/20 to-transparent border border-[#04AAA5]/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-[0.15em] mb-1 font-bold">
                          {c.label}
                        </div>
                        <div className="text-white text-lg font-medium group-hover:text-[#04AAA5] transition-colors">
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
                <h3 className="text-white font-bold text-3xl mb-8 tracking-tight">
                  Get Your Free Strategy Session
                </h3>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">First Name</label>
                      <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                    </div>
                    <div>
                      <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">Last Name</label>
                      <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">Email Address</label>
                    <input type="email" placeholder="name@business.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">Phone Number</label>
                    <input type="tel" placeholder="Enter Your Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all" />
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">Service Needed</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-gray-300 text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-[#060a0d]">Select a service...</option>
                        <option className="bg-[#060a0d]">Social Media Marketing</option>
                        <option className="bg-[#060a0d]">SEO Services</option>
                        <option className="bg-[#060a0d]">Web Development</option>
                        <option className="bg-[#060a0d]">Brand Identity</option>
                        <option className="bg-[#060a0d]">Digital Marketing</option>
                      </select>
                      {/* Custom dropdown arrow to replace native styling */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-[10px] mb-2 block uppercase tracking-widest font-bold">Message</label>
                    <textarea rows={4} placeholder="Tell us about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-[#04AAA5] focus:bg-[#04AAA5]/5 focus:ring-1 focus:ring-[#04AAA5] placeholder-gray-600 transition-all resize-none" />
                  </div>
                  
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, borderColor: "#fbaf40", boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl transition-all duration-300 overflow-hidden bg-transparent cursor-pointer tracking-wide"
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
      
      <Footer />
    </div>
  );
}