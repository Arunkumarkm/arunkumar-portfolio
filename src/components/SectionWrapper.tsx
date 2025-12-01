import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, title, id, className = "" }) => {
  return (
    <section id={id} className={`py-16 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 inline-block border-b-4 border-slate-900/10 pb-2">
            {title}
          </h2>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};