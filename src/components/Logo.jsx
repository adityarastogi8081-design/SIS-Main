import { motion } from 'framer-motion';

export default function Logo({ size = 'md', className = '' }) {
    const sizes = {
        sm: 'text-lg',
        md: 'text-xl sm:text-2xl',
        lg: 'text-2xl sm:text-3xl',
    };

    return (
        <motion.div
            className={`font-display font-bold tracking-tight select-none ${sizes[size]} ${className}`}
            whileHover={{ scale: 1.02 }}
        >
            <span className="text-white">Say It</span>
            <span className="text-gradient ml-1.5">Social</span>
        </motion.div>
    );
}
