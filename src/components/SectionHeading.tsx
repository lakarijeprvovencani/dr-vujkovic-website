"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
            light ? "text-accent-light" : "text-primary-light"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-light"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
