import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', colorClass = 'text-teal' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const motionVal = useMotionValue(0);

    const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
    const displayValue = useTransform(motionVal, (v) => {
        const rounded = numericValue % 1 === 0 ? Math.round(v) : v.toFixed(1);
        return rounded + suffix;
    });

    useEffect(() => {
        if (isInView) {
            animate(motionVal, numericValue, { duration: 2, ease: 'easeOut' });
        }
    }, [isInView, numericValue, motionVal]);

    return (
        <motion.span ref={ref} className={`font-display font-bold ${colorClass}`}>
            {displayValue}
        </motion.span>
    );
}
