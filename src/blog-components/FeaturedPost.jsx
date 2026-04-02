import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export default function FeaturedPost({ post, onOpenModal }) {
  return (
    <motion.button
      onClick={() => onOpenModal(post)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative block w-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:border-[#04AAA5]/40 transition-all duration-500 mb-16 text-left cursor-pointer"
    >
      <div className="grid lg:grid-cols-2 gap-0 lg:gap-8">
        <div className="h-64 lg:h-full w-full bg-gradient-to-br from-[#04AAA5]/20 via-black to-[#FBB040]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
          <motion.div 
            className="absolute -top-32 -right-32 w-64 h-64 bg-[#04AAA5]/30 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-[#04AAA5]/10 text-[#04AAA5] rounded-full border border-[#04AAA5]/20">
              {post.category}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#FBB040] transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-gray-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide group-hover:text-[#04AAA5] transition-colors">
              Read Article 
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}