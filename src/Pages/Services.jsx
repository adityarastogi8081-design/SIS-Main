import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";
import { Smartphone, TrendingUp, Laptop, Palette, Search, Rocket } from "lucide-react";
import FloatingParticles from "../common-components/FloatingParticles";
import {SERVICES} from "../data/services.js"
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sayitsocial.digital/services/#webpage",
        "url": "https://sayitsocial.digital/services/",
        "name": "Digital Marketing Services | Say It Social",
        "description": "Explore our comprehensive digital marketing services including Social Media Marketing, SEO, Web Development, Brand Identity, and Graphic Design tailored for global growth.",
        "isPartOf": {
          "@id": "https://sayitsocial.digital/#website"
        }
      },
      {
        "@type": ["LocalBusiness", "MarketingAgency", "ProfessionalService"],
        "@id": "https://sayitsocial.digital/#localbusiness",
        "name": "Say It Social",
        "url": "https://sayitsocial.digital",
        "logo": "https://sayitsocial.digital/logo.png",
        "telephone": "+91-8460732085",
        "email": "info@sayitsocial.digital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Service",
        "@id": "https://sayitsocial.digital/services/#service",
        "name": "Comprehensive Digital Marketing Services",
        "description": "End-to-end digital marketing, web development, and brand identity solutions to scale your business.",
        "provider": {
          "@id": "https://sayitsocial.digital/#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Service Offerings",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "url": "https://sayitsocial.digital/services/social-media-marketing/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)",
                "url": "https://sayitsocial.digital/services/seo-services/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "url": "https://sayitsocial.digital/services/web-development/"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity",
                "url": "https://sayitsocial.digital/services/brand-identity/"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sayitsocial.digital/services/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem", 
            "position": 1, 
            "name": "Home", 
            "item": "https://sayitsocial.digital/"
          },
          {
            "@type": "ListItem", 
            "position": 2, 
            "name": "Services", 
            "item": "https://sayitsocial.digital/services/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sayitsocial.digital/services/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What digital marketing services does Say It Social offer?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "We offer a full suite of growth-focused services including Social Media Marketing, SEO, Web Design and Development, Brand Identity creation, and comprehensive Digital Marketing strategies."
            }
          },
          {
            "@type": "Question",
            "name": "How much does professional digital marketing cost in India?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Digital marketing investment varies based on project scope and business goals. We offer flexible, value-driven pricing packages customized for your specific scaling needs, ensuring maximum ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I partner with an agency instead of an in-house team?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "A professional agency like Say It Social provides high-level platform expertise, an entire team of creatives, advanced analytics, and stays ahead of constant algorithm shifts, delivering superior, data-backed results."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden">
      <SEO
        title="Our Services | Say It Social Digital Agency"
        description="Scale your brand with expert SMM, SEO, Web Dev & Branding. 2M+ reach & 5+ years expertise."
        schemaMarkup={servicesSchema}
      />
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
      </div>

      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />

      <section className="relative py-32 px-6 lg:py-44" id="services">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#04AAA5] animate-pulse" />
              What We Offer
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Services<br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Tailored for Your Business
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              From social media management to full-stack web development — our team delivers end-to-end digital dominance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -12 }}
                  className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-[#04AAA5]/30 transition-all duration-500"
                >
                  {/* Visual Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#04AAA5]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 inline-block">
                      <Icon className="w-10 h-10 text-white group-hover:text-[#04AAA5] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase text-[#04AAA5] mb-3 opacity-80">{svc.subtitle}</div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-[#FBB040] transition-colors">{svc.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">{svc.desc}</p>
                  </div>

                  <a 
                    href={svc.link} 
                    className="inline-flex items-center gap-3 text-white text-sm font-bold tracking-wide group/link"
                  >
                    <span className="relative overflow-hidden h-6 flex items-center">
                      <span className="block group-hover/link:-translate-y-full transition-transform duration-300">{svc.cta}</span>
                      <span className="absolute top-full block group-hover/link:-translate-y-full transition-transform duration-300 text-[#04AAA5]">{svc.cta}</span>
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-[#04AAA5] group-hover/link:border-[#04AAA5] transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                </motion.div>
              );
            })}

            {/* CTA Final Card converted to Rounded Full Action */}
            <motion.div
              variants={cardVariants}
              className="relative flex flex-col items-center justify-center p-8 rounded-3xl border border-[#04AAA5]/20 bg-gradient-to-br from-[#04AAA5]/10 via-black to-[#FBB040]/5 overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 bg-[#04AAA5]/10 p-4 rounded-full">
                  <Rocket className="w-10 h-10 text-[#04AAA5]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-3xl mb-4 tracking-tight">Ready to Grow?</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-[250px]">
                  Book a free strategy session and get your custom growth plan.
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(4, 170, 165, 0.4)",
                    backgroundColor: "#04AAA5",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-black font-black uppercase tracking-widest text-xs px-10 py-5 rounded-full transition-all duration-300"
                >
                  Get Strategy Call
                </motion.a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}