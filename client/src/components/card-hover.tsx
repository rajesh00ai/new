import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardHoverProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function CardHover({ children, className = "", delay = 0 }: CardHoverProps) {
  return (
    <motion.div
      className={`card-hover ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}