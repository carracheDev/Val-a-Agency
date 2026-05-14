"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Euro, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function CalculatorSection() {
  const { t } = useI18n();
  const [revenue, setRevenue] = useState<string>("");

  const estimates = useMemo(() => {
    const current = parseFloat(revenue) || 0;
    if (current === 0) return { min: 0, max: 0 };
    
    // Multiplier based on current revenue
    let minMultiplier = 3;
    let maxMultiplier = 5;
    
    if (current < 1000) {
      minMultiplier = 4;
      maxMultiplier = 8;
    } else if (current < 5000) {
      minMultiplier = 3;
      maxMultiplier = 6;
    } else if (current < 10000) {
      minMultiplier = 2.5;
      maxMultiplier = 4;
    } else {
      minMultiplier = 2;
      maxMultiplier = 3;
    }

    return {
      min: Math.round(current * minMultiplier),
      max: Math.round(current * maxMultiplier),
    };
  }, [revenue]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR").format(num);
  };

  return (
    <section id="calculateur" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-48 h-48 border border-accent/10 rounded-full"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/30 rounded-2xl mb-6"
          >
            <Calculator className="w-8 h-8 text-accent" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {t.calculator.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Input side */}
              <div className="space-y-6">
                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground mb-2 block">
                    {t.calculator.currentRevenue}
                  </span>
                  <div className="relative">
                    <Euro className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      placeholder={t.calculator.placeholder}
                      className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-xl font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </label>

                <div className="flex gap-2 flex-wrap">
                  {[1000, 2500, 5000, 10000].map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setRevenue(amount.toString())}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        revenue === amount.toString()
                          ? "bg-accent text-background border-accent"
                          : "bg-background border-border hover:border-accent/50"
                      }`}
                    >
                      {formatNumber(amount)}€
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Results side */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">{t.calculator.estimate}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    key={`min-${estimates.min}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-background/50 border border-border rounded-xl p-4"
                  >
                    <span className="text-sm text-muted-foreground block mb-1">
                      {t.calculator.min}
                    </span>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {formatNumber(estimates.min)}€
                      <span className="text-sm font-normal text-muted-foreground">
                        {t.calculator.monthly}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    key={`max-${estimates.max}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-accent/10 border border-accent/30 rounded-xl p-4"
                  >
                    <span className="text-sm text-accent block mb-1">
                      {t.calculator.max}
                    </span>
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {formatNumber(estimates.max)}€
                      <span className="text-sm font-normal text-accent/70">
                        {t.calculator.monthly}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {estimates.max > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>
                      {t.calculator.disclaimer}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-8 border-t border-border flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="group px-8 py-6 text-base bg-accent text-background hover:bg-accent/90 font-semibold"
                >
                  <a href="#contact">
                    {t.calculator.cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
