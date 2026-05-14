"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Vanity Fair", logo: "/images/brands/vanityfair.svg", width: 120, height: 40 },
  { name: "Vogue", logo: "/images/brands/vogue.svg", width: 100, height: 40 },
  { name: "Elle", logo: "/images/brands/elle.svg", width: 80, height: 40 },
  { name: "GQ", logo: "/images/brands/gq.svg", width: 60, height: 40 },
  { name: "Glamour", logo: "/images/brands/glamour.svg", width: 120, height: 40 },
  { name: "Forbes", logo: "/images/brands/forbes.svg", width: 100, height: 40 },
];

export function BrandsSection() {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Ils nous font confiance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}