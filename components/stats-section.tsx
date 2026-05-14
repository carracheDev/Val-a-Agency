"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { DollarSign, Users, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ value, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = value >= 1000000
          ? `${(latest / 1000000).toFixed(1)}M`
          : value >= 1000
          ? `${Math.floor(latest / 1000)}K`
          : Math.floor(latest).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, value]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const statsData = [
  { icon: DollarSign, value: 2500000, prefix: "", suffix: "+", color: "from-green-500/20" },
  { icon: TrendingUp, value: 450, prefix: "+", suffix: "%", color: "from-blue-500/20" },
  { icon: Users, value: 15000000, prefix: "", suffix: "+", color: "from-purple-500/20" },
  { icon: Star, value: 98, prefix: "", suffix: "%", color: "from-amber-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function StatsSection() {
  const { t } = useI18n();

  const statLabels = [t.stats.revenue, t.stats.growth, t.stats.followers, t.stats.satisfaction];

  return (
    <section id="resultats" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 border border-accent/10 rounded-full"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-24 h-24 border border-accent/10 rounded-full"
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
            {t.stats.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
          >
            {t.stats.subtitle}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-accent mx-auto mb-6"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-accent"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm">4.9 {t.stats.reviews}</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={statLabels[index]}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative text-center p-8 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-500 overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-t ${stat.color} to-transparent`}
                initial={{ opacity: 0, y: 100 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <stat.icon className="w-5 h-5 text-accent" />
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-light mb-2 font-serif"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </motion.div>
                <p className="text-muted-foreground text-sm">{statLabels[index]}</p>

                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -5, y: 5 }}
                  whileHover={{ x: 0, y: 0 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before/After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif text-center mb-12"
          >
            {t.stats.beforeAfter.title}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg border border-border p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h4 className="text-xl font-medium mb-6 flex items-center gap-3 relative z-10">
                <motion.span
                  className="w-3 h-3 rounded-full bg-muted-foreground/50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t.stats.beforeAfter.before.title}
              </h4>
              <ul className="space-y-4 text-muted-foreground relative z-10">
                {t.stats.beforeAfter.before.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg border border-accent/30 p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <h4 className="text-xl font-medium mb-6 flex items-center gap-3">
                  <motion.span
                    className="w-3 h-3 rounded-full bg-accent"
                    animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0 0 rgba(212,175,55,0)", "0 0 0 8px rgba(212,175,55,0.2)", "0 0 0 0 rgba(212,175,55,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {t.stats.beforeAfter.after.title}
                </h4>
                <ul className="space-y-4 text-muted-foreground">
                  {t.stats.beforeAfter.after.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-accent mt-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
