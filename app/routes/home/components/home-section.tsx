import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef, type PropsWithChildren } from 'react';

export type HomeSectionProps = PropsWithChildren;

export default function HomeSection({ children }: HomeSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.98]);
    const scaleSpring = useSpring(scale, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.003,
    });

    return (
        <motion.div ref={ref} style={{ scaleY: scaleSpring, scaleX: scaleSpring }}>
            {children}
        </motion.div>
    );
}
