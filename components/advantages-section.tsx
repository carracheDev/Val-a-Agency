"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, Wallet, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [UserCheck, Shield, Wallet, HeartHandshake];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function AdvantagesSection() {
  const { t } = useI18n();

  return (
    <section id="avantages" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Top border animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block"
          >
            {t.advantages.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
          >
            {t.advantages.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t.advantages.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.advantages.items.map((advantage, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={advantage.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group text-center p-8 relative"
              >
                <div className="relative mb-8">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-card border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/20 rounded-full blur-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10"
                    >
                      <Icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </motion.div>
                  </motion.div>

                  {index < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-y-1/2 origin-left"
                    />
                  )}

                  <motion.div
                    className="absolute inset-0 w-16 h-16 mx-auto rounded-full border border-accent/30"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <motion.h3
                  className="text-lg font-medium mb-3"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {advantage.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>

                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs text-accent/50 group-hover:text-accent group-hover:bg-accent/20 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
    </section>
  );
}
