import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SVGLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/bloghub" }
];

const mobileMenuVariants = {
  hidden: { clipPath: "circle(0% at 92% 5%)", opacity: 0 },
  show: {
    clipPath: "circle(150% at 92% 5%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  exit: {
    clipPath: "circle(0% at 92% 5%)",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  }
};

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[70] flex justify-center pointer-events-none">
        <motion.nav
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${isScrolled
            ? "mt-4 w-[95%] max-w-5xl h-16 px-6 rounded-full border border-white/10 bg-[#060a0d]/80 backdrop-blur-xl"
            : "mt-0 w-full max-w-[90rem] h-24 px-6 md:px-10 bg-transparent"
            }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="relative z-[100]">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src={SVGLogo}
                alt="Say It Social"
                className={`w-auto transition-all duration-500 ${isScrolled ? "h-6" : "h-8"}`}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8" onMouseLeave={() => setHoveredLink(null)}>
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative py-2">
                <Link
                  to={link.path}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className="text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    color: hoveredLink === link.name ? "#FBB040" : "#D1D5DB"
                  }}
                >
                  {link.name}
                </Link>

                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FBB040]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{
                scale: 1.05,
                borderColor: "#FBB040",
                boxShadow: "0 0 20px rgba(251, 176, 64, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative hidden lg:flex"
            >
              <Link
                to="/contact"
                className="relative flex items-center justify-center border-2 border-white/20 text-white font-bold rounded-full px-6 py-2 text-sm overflow-hidden bg-transparent cursor-pointer transition-all duration-300"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-sm" />
                <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#FBB040] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-sm" />
                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
                <span className="relative z-10 flex items-center gap-2">Let's Talk →</span>
              </Link>
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[100] p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-[60] bg-[#060a0d] flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full relative z-10">
              {NAV_LINKS.map((link) => (
                <motion.div 
                  key={link.name} 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white/50 hover:text-white transition-all"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile "Let's Talk" Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative mt-4 px-10 py-4 border-2 border-[#FBB040] text-white font-bold rounded-full overflow-hidden flex items-center gap-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#04AAA5]/10 to-[#FBB040]/10" />
                  <span className="relative z-10">Let's Talk →</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}