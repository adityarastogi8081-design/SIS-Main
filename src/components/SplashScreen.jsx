import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Wireframe grid lines configuration
const GRID_LINES = {
    horizontal: [
        { x1: 0, y1: '20%', x2: '100%', y2: '20%', delay: 0 },
        { x1: 0, y1: '40%', x2: '100%', y2: '40%', delay: 0.15 },
        { x1: 0, y1: '60%', x2: '100%', y2: '60%', delay: 0.3 },
        { x1: 0, y1: '80%', x2: '100%', y2: '80%', delay: 0.45 },
    ],
    vertical: [
        { x1: '20%', y1: 0, x2: '20%', y2: '100%', delay: 0.1 },
        { x1: '40%', y1: 0, x2: '40%', y2: '100%', delay: 0.25 },
        { x1: '60%', y1: 0, x2: '60%', y2: '100%', delay: 0.4 },
        { x1: '80%', y1: 0, x2: '80%', y2: '100%', delay: 0.55 },
    ],
};

// Floating orb data
const ORBS = [
    { size: 180, color: 'rgba(4, 170, 165, 0.25)', x: '15%', y: '25%', duration: 6 },
    { size: 120, color: 'rgba(251, 176, 64, 0.2)', x: '75%', y: '65%', duration: 8 },
    { size: 90, color: 'rgba(4, 170, 165, 0.15)', x: '60%', y: '20%', duration: 7 },
    { size: 140, color: 'rgba(251, 176, 64, 0.15)', x: '30%', y: '70%', duration: 9 },
];

function WireframeGrid() {
    return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...GRID_LINES.horizontal, ...GRID_LINES.vertical].map((line, i) => (
                <motion.line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="rgba(4, 170, 165, 0.08)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        pathLength: { duration: 1.2, ease: 'easeInOut', delay: line.delay },
                        opacity: { duration: 0.3, delay: line.delay },
                    }}
                />
            ))}
            {/* Intersection dots */}
            {[20, 40, 60, 80].map((x) =>
                [20, 40, 60, 80].map((y) => (
                    <motion.circle
                        key={`${x}-${y}`}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="2"
                        fill="rgba(4, 170, 165, 0.3)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + (x + y) * 0.003 }}
                    />
                ))
            )}
        </svg>
    );
}

function FloatingOrbs() {
    return (
        <>
            {ORBS.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        left: orb.x,
                        top: orb.y,
                        filter: 'blur(40px)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1.2, 1, 1.1, 1],
                        opacity: [0, 0.8, 0.6, 0.8, 0.6],
                        x: [0, 20, -15, 10, 0],
                        y: [0, -15, 20, -10, 0],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                    }}
                />
            ))}
        </>
    );
}

function LogoReveal() {
    const text1 = 'Say It';
    const text2 = 'Social';

    return (
        <motion.div
            className="relative z-10 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            {/* Main logo text */}
            <div className="flex items-baseline gap-3 sm:gap-4">
                <div className="flex overflow-hidden">
                    {text1.split('').map((char, i) => (
                        <motion.span
                            key={`t1-${i}`}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-display"
                            initial={{ y: 60, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.7 + i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </div>
                <div className="flex overflow-hidden">
                    {text2.split('').map((char, i) => (
                        <motion.span
                            key={`t2-${i}`}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold font-display splash-logo-gradient"
                            initial={{ y: 60, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.1 + i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Tagline */}
            <motion.p
                className="text-sm sm:text-base text-gray-500 tracking-[0.3em] uppercase font-medium"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
            >
                Strategic Social Media Agency
            </motion.p>
        </motion.div>
    );
}

function ProgressBar() {
    return (
        <motion.div
            className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-48 sm:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: 'linear-gradient(90deg, #04AAA5, #FBB040)',
                    }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                />
            </div>
            <motion.div
                className="flex justify-between mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <span className="text-[10px] text-gray-600 tracking-widest uppercase">Loading</span>
                <motion.span
                    className="text-[10px] text-gray-500 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <ProgressCounter />
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

function ProgressCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2500;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
            setCount(progress);
            if (progress >= 100) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return `${count}%`;
}

export default function SplashScreen({ onComplete }) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onComplete(), 600);
        }, 3200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                    exit={{
                        scale: 1.1,
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Wireframe grid */}
                    <WireframeGrid />

                    {/* Floating orbs */}
                    <FloatingOrbs />

                    {/* Corner accents */}
                    <motion.div
                        className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-teal/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-teal/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    />

                    {/* Logo Reveal */}
                    <LogoReveal />

                    {/* Progress bar */}
                    <ProgressBar />

                    {/* Scan line effect */}
                    <motion.div
                        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-teal/40 to-transparent pointer-events-none"
                        initial={{ top: '0%' }}
                        animate={{ top: '100%' }}
                        transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
