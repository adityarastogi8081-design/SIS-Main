import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";

export default function BlogCard({ post, index, onOpenModal }) {
  return (
    <motion.button
      onClick={() => onOpenModal(post)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] hover:border-[#FBB040]/30 transition-all duration-500 h-full text-left cursor-pointer"
    >
      <div className="h-48 w-full bg-gradient-to-br from-white/5 to-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FBB040]/20 rounded-full blur-[50px] group-hover:bg-[#04AAA5]/30 transition-colors duration-500"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#FBB040] text-[10px] uppercase tracking-widest font-bold">
            {post.category}
          </span>
          <span className="text-gray-500 text-xs">{post.date}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#04AAA5] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-gray-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#FBB040] group-hover:border-[#FBB040] group-hover:text-black transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}