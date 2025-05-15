import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface FadeInSectionVariantsProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  variants?: Variants;
  viewport?: boolean;
}

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  viewport?: boolean;
}

export default function FadeInSectionVariants({
  children,
  delay = 0,
  yOffset = 20,
  duration = 0.6,
  viewport = true,
  variants,
}: FadeInSectionVariantsProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={variants ? undefined : { duration, delay }}
      viewport={{ once: viewport }}
      {...(!variants && {
        initial: { opacity: 0, y: yOffset },
        whileInView: { opacity: 1, y: 0 },
      })}
    >
      {children}
    </motion.div>
  );
}

export function FadeInSection({
  children,
  duration = 0.6,
  delay = 0,
  viewport = true,
  y = 300,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, delay }}
      viewport={{ once: viewport }}
    >
      {children}
    </motion.div>
  );
}
