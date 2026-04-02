import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Footer from "../common-components/Footer";
import Navbar from "../common-components/Navbar";
import SEO from "../SEO Component/SEO";

// Imports from your new modular setup
import BlogCard from "../blog-components/BlogCard";
import FeaturedPost from "../blog-components/FeaturedPost"; // <-- Added missing import
import BlogModal from "../blog-components/BlogModal"; // <-- Added BlogModal import
import { BLOG_POSTS } from "../data/blogPosts";
import FloatingParticles from "../common-components/FloatingParticles";

export default function BlogHub() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal handlers
  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = "unset";
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://sayitsocial.digital/blog/#webpage",
    "url": "https://sayitsocial.digital/blog/",
    "name": "Say It Social Insights | Digital Marketing Blog",
    "description": "Expert insights on social media marketing, SEO, web development, and brand strategy for scaling businesses.",
    "publisher": {
      "@id": "https://sayitsocial.digital/#organization"
    }
  };

  // Fixed: Renamed variables to avoid conflict with the component names
  const featuredPostData = BLOG_POSTS.find(post => post.featured);
  const regularPostsData = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#04AAA5]/30">
      <SEO
        title="Digital Marketing Insights & Strategies | Say It Social Blog"
        description="Master your digital presence. Read expert guides on SEO, Social Media Marketing, Brand Identity, and Growth Strategies from Say It Social."
        schemaMarkup={blogSchema}
      />

      {/* Blog Modal */}
      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#04AAA5]/5 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FBB040]/5 blur-[120px]" />
      </div>

      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 lg:pt-48 lg:pb-24 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ y: yParallax }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#04AAA5] font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBB040] animate-pulse" />
              Insights & Strategies
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Growth <br />
              <span className="bg-gradient-to-r from-[#04AAA5] via-white to-[#FBB040] bg-clip-text text-transparent italic">
                Playbook
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Actionable intelligence, industry trends, and deep-dive guides to help you dominate the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="relative py-12 px-6 z-10 mb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Featured Post (Latest) */}
          {featuredPostData && <FeaturedPost post={featuredPostData} onOpenModal={handleOpenModal} />}

          {/* Grid of Older Posts */}
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white">Latest Articles</h3>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Showing {regularPostsData.length} posts</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {regularPostsData.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} onOpenModal={handleOpenModal} />
            ))}
          </div>

          {/* Load More Button (UI Only) */}
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#04AAA5", boxShadow: "0 0 20px rgba(4, 170, 165, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-widest uppercase text-white transition-all hover:bg-[#04AAA5]/5"
            >
              Load More Articles
            </motion.button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}