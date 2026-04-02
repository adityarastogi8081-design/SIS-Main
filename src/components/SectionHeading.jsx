import { motion } from 'framer-motion';

export default function SectionHeading({ children, highlight, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-center mb-12 sm:mb-16 md:mb-20 ${className}`}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
                {children}{' '}
                {highlight && (
                    <motion.span
                        className="text-gradient inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {highlight}
                    </motion.span>
                )}
            </h2>

            {/* Animated underline */}
            <motion.div
                className="mt-4 sm:mt-6 mx-auto"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="h-[2px] w-full bg-[#04aaa5] rounded-full" />
            </motion.div>
        </motion.div>
    );
}

