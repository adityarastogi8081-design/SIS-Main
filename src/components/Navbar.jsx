import { motion } from "framer-motion";
import SVGLogo from "../../assets/logo.svg";

export default function Navbar({ currentPage, onPageChange }) {
  const tabs = [
    { id: "smm", label: "SMM" },
    { id: "websites", label: "Websites" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-display font-bold text-xl sm:text-2xl tracking-tight select-none cursor-pointer text-shimmer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onPageChange("smm")}
        >
          <img src={SVGLogo} size="sm" />
          {/* <span className="text-white">Say It</span>
                    <span className="text-gradient ml-1.5">Social</span> */}
        </motion.div>

        {/* Page Toggle */}
        <div className="relative bg-white/[0.03] backdrop-blur-md rounded-full flex items-center p-1 border border-white/5 lg:ml-[100px] gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const isActive = currentPage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onPageChange(tab.id)}
                // 1. Added a constant 'border-2' to prevent layout jumps
                // 2. Used 'duration-500' for smoother color fading
                className={`group relative px-3 sm:px-6 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold transition-all duration-500 border-2 outline-none
          ${
            isActive
              ? "text-white border-[#fbaf40] shadow-[0_0_15px_rgba(251,175,64,0.4)]"
              : "text-gray-500 border-transparent hover:text-gray-300 hover:border-white/10"
          }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabHighlight" // Unique ID to sync the sliding animation
                    className="absolute inset-0 bg-[#fbaf40]/10 rounded-full -z-10"
                    // 3. High stiffness and low damping for a responsive, snappy "spring" feel
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 1,
                    }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <motion.a
          href={`https://wa.me/918460732085?text=${encodeURIComponent("Hello!")}`}
          whileHover={{
            scale: 1.05,
            borderColor: "#fbaf40",
            boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
          }}
          target="_blank"
          whileTap={{ scale: 0.98 }}
          /* Reduced padding and font size below */
          className="hidden md:flex group relative w-full sm:w-auto px-4 sm:px-6 py-1.5 sm:py-2 
             border-2 border-white/20 text-white font-bold rounded-lg 
             transition-all duration-300 text-center text-xs sm:text-sm 
             overflow-hidden bg-transparent cursor-pointer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
          <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
          <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
          <span className="relative z-10">Connect With Our Team</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
