"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  title: string;
  emoji: string;
  description: string;
  image: string;
  index: number;
}

export function ServiceCard({
  id,
  title,
  emoji,
  description,
  image,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/usluge/${id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
      >
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-4 left-4 text-3xl">{emoji}</span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            Saznaj više
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
