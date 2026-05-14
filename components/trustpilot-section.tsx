"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TrustpilotSection() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8</span>
          </div>
          <p className="text-muted-foreground mb-2">
            Basé sur 50+ avis vérifiés
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Trustpilot</span>
            <div className="w-16 h-px bg-accent/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}