import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, Phone, MessageCircle } from "lucide-react";
import Logo from "../components/Logo";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/sayitsociall", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/19ohoYGi3A/", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@sayitsociall", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/say-it-social-in/", label: "LinkedIn" },
  { icon: Phone, href: "tel:+918460732085", label: "Phone" }
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-10 md:gap-12 mb-10 md:mb-12">

          {/* Contact */}
          <motion.div
            className="flex flex-col items-center text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 font-display">
              Get In Touch
            </h3>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-gold/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,176,64,0.4)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-gold transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Animated Divider */}
        <div className="animated-divider mb-6 sm:mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Say It Social. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}