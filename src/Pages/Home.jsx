import { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../common-components/Navbar";
import HeroSection from "../HomeComponent/HeroSection";
import About from "../HomeComponent/About";
import Showreel from "../HomeComponent/Showreel";
import Process from "../HomeComponent/Process";
import WhyUs from "../HomeComponent/WhyUs";
import Testimonials from "../HomeComponent/Testimonials";
import CTA from "../HomeComponent/CTA";
import Contact from "../HomeComponent/Contact";
import Footer from "../common-components/Footer";
import SEO from "../SEO Component/SEO";
import FAQ from "../HomeComponent/FAQ";
import Service from "../HomeComponent/Service";
import FloatingParticles from "../common-components/FloatingParticles";

export default function SayItSocialHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  // 1. Define the comprehensive schema for the Home Page - OPTIMIZED
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sayitsocial.in/#organization",
        "name": "Say It Social Digital",
        "url": "https://sayitsocial.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sayitsocial.in/logo.png",
          "width": 250,
          "height": 250
        },
        "description": "Award-Winning Digital Marketing Agency in Ahmedabad, Gujarat specializing in Social Media Marketing, SEO, Web Development, and Brand Identity.",
        "sameAs": [
          "https://www.facebook.com/sayitsocial",
          "https://www.instagram.com/sayitsocial",
          "https://www.linkedin.com/company/sayitsocial",
          "https://www.youtube.com/c/sayitsocial"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-98989-89898",
          "contactType": "Customer Service",
          "email": "hello@sayitsocial.in"
        }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService", "MarketingAgency"],
        "@id": "https://sayitsocial.in/#localbusiness",
        "name": "Say It Social Digital",
        "description": "Scale your brand with a premier Global Growth Agency. Expert SMM, SEO, Web Development & Branding. Trusted by 100+ brands with 2M+ reach. Get your free audit!",
        "url": "https://sayitsocial.in",
        "telephone": "+91-98989-89898",
        "email": "hello@sayitsocial.in",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "380001",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "image": "https://sayitsocial.in/office-image.jpg",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "45"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sayitsocial.in/#breadcrumb",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sayitsocial.in"},
          {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://sayitsocial.in/#services"},
          {"@type": "ListItem", "position": 3, "name": "About", "item": "https://sayitsocial.in/#about"},
          {"@type": "ListItem", "position": 4, "name": "Contact", "item": "https://sayitsocial.in/#contact"}
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sayitsocial.in/#faqpage",
        "mainEntity": [
  {
    "@type": "Question",
    "name": "How Much Does Professional Digital Marketing Cost?",
    "acceptedAnswer": {
      "@type": "Answer", 
      "text": "Digital marketing investment varies based on project scope and business goals. We offer flexible, value-driven pricing models—from targeted social media management to comprehensive growth engine packages. Our solutions are designed to be scalable for businesses of all sizes, ensuring maximum ROI."
    }
  },
  {
    "@type": "Question",
    "name": "Why Should I Partner with a Global Social Media Agency?",
    "acceptedAnswer": {
      "@type": "Answer", 
      "text": "A professional agency provides high-level platform expertise, creative edge, advanced analytics, and stays ahead of constant algorithm shifts. We deliver superior, data-backed results compared to in-house teams, allowing you to focus on your core business while we scale your digital presence."
    }
  },
  {
    "@type": "Question",
    "name": "How Long Does it Take to See Measurable SEO Results?",
    "acceptedAnswer": {
      "@type": "Answer", 
      "text": "SEO is a long-term asset that typically shows significant ranking dominance within 3 to 6 months. While technical optimizations like site speed and mobile-friendliness show immediate impact, sustainable organic growth depends on industry competition and consistent authority building."
    }
  }
]
      }
    ]
  }

  return (
    <div className="min-h-screen relative bg-black text-white font-sans overflow-x-hidden">
      {/* 2. SEO Component with OPTIMIZED title and description */}
      <SEO
        title="Say It Social | Digital Marketing Agency | SEO & SMM"
        description="Scale your brand with a premier Global Digital Marketing Agency. Expert SMM, SEO, Web Dev & Branding. 2M+ reach & 5+ years expertise. Book your Free Consultation!"
        schemaMarkup={homeSchema} 
      />
      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <Showreel />
      <Service />
      <Process />
      <WhyUs />
      <Testimonials />
      <CTA />
      <FAQ/>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}