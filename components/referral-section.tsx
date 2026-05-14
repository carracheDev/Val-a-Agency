"use client";

import { motion } from "framer-motion";
import { Gift, Share2, UserPlus, Coins, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const steps = [
  { icon: Share2, key: "step1" },
  { icon: UserPlus, key: "step2" },
  { icon: Coins, key: "step3" },
] as const;

export function ReferralSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-24 h-24 border border-accent/20 rounded-full"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-32 h-32 border border-accent/20 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 border border-accent/40 rounded-2xl mb-6"
          >
            <Gift className="w-8 h-8 text-accent" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {t.referral.title}
          </h2>
          <p className="text-xl text-accent font-medium mb-4">
            {t.referral.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.referral.description}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepData = t.referral[step.key as keyof typeof t.referral] as { title: string; description: string };
            
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                    className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/50 to-accent/10 origin-left"
                  />
                )}

                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(212, 175, 55, 0.3)" }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card/80 border border-border hover:border-accent/40 rounded-2xl p-8 text-center h-full transition-all"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6"
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3">{stepData.title}</h3>
                  <p className="text-muted-foreground">{stepData.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bonus banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 rounded-2xl p-6 md:p-8 mb-8"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
          />
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Sparkles className="w-8 h-8 text-accent flex-shrink-0" />
            <p className="text-lg font-medium">
              {t.referral.bonus}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="group px-8 py-6 text-base bg-accent text-background hover:bg-accent/90 font-semibold"
            >
              <a href="#contact">
                {t.referral.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
