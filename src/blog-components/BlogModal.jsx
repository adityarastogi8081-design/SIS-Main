import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, Share2, BookOpen } from "lucide-react";

export default function BlogModal({ post, isOpen, onClose }) {
  if (!post) return null;

  // Add styles to hide scrollbar
  const scrollbarHideStyles = `
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  // Convert markdown to HTML
  const convertMarkdownToHtml = (markdown) => {
    if (!markdown) return '';
    
    let html = markdown
      // Headers
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-[#04AAA5] mt-6 mb-4">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-[#FBB040] mt-4 mb-3">$1</h3>')
      .replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-white mt-3 mb-2">$1</h4>')
      // Bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      // Lists - handle bullet points
      .split('\n')
      .map((line) => {
        if (line.match(/^- /)) {
          return '<li class="ml-6 flex items-start gap-2"><span class="text-[#FBB040] mr-2">•</span><span>' + line.replace(/^- /, '') + '</span></li>';
        }
        return line;
      })
      .join('\n')
      // Wrap consecutive list items in ul
      .replace(/(<li[^>]*>.*?<\/li>\n)+/gs, (match) => '<ul class="space-y-2 my-3">' + match + '</ul>')
      // Paragraphs
      .split('\n\n')
      .filter(para => para.trim())
      .map((para) => {
        if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li')) {
          return para;
        }
        return '<p class="text-gray-300 leading-relaxed">' + para + '</p>';
      })
      .join('\n\n');
    
    return html;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      <style>{scrollbarHideStyles}</style>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-22 px-4 overflow-y-auto hide-scrollbar"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl md:rounded-3xl w-[95vw] md:w-full max-w-2xl lg:max-w-3xl max-h-[85vh] overflow-y-auto backdrop-blur-xl shadow-2xl scroll-smooth hide-scrollbar"
          >
            {/* Header with Gradient Background */}
            <div className="relative h-36 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-[#04AAA5]/20 via-white/5 to-[#FBB040]/10 overflow-hidden border-b border-white/10">
              {/* Animated background elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#04AAA5]/20 to-transparent rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#FBB040]/20 to-transparent rounded-full blur-3xl"
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-md"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold text-white bg-gradient-to-r from-[#FBB040] to-[#FBB040]/60 shadow-lg"
                >
                  {post.category}
                </motion.span>
              </div>

              {/* Gradient overlay text placement area */}
              <div className="absolute inset-0 flex items-end p-3 sm:p-4 md:p-6 lg:p-8 z-5">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    {post.title}
                  </h2>
                </motion.div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Meta Information */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#04AAA5]/20 border border-[#04AAA5]/40 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-[#04AAA5]" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Published
                    </p>
                    <p className="text-white font-semibold text-xs sm:text-sm">{post.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#FBB040]/20 border border-[#FBB040]/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#FBB040]" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Read Time
                    </p>
                    <p className="text-white font-semibold text-xs sm:text-sm">{post.readTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">
                      Article
                    </p>
                    <p className="text-white font-semibold text-xs sm:text-sm">Full Guide</p>
                  </div>
                </div>
              </motion.div>

              {/* Full Article Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="mb-8 prose prose-invert max-w-none"
              >
                <div className="text-gray-300 leading-8 text-sm sm:text-base space-y-6">
                  {post.content ? (
                    <div 
                      className="prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content) }} 
                    />
                  ) : (
                    <p>{post.excerpt}</p>
                  )}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-[#FBB040]/50 hover:border-[#FBB040] text-[#FBB040] font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#FBB040]/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Share Article</span>
                </motion.button>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.35 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <p className="text-gray-500 text-xs sm:text-sm text-center">
                  Thanks for reading! Share this article with your network.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
