"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Créatrice de contenu",
    content:
      "Grâce à Valéa Agency, j'ai pu multiplier mes revenus par 5 en seulement 6 mois. Leur accompagnement est exceptionnel.",
    avatar: "S",
    rating: 5,
  },
  {
    name: "Lucas D.",
    role: "Influenceur lifestyle",
    content:
      "L'équipe est professionnelle, réactive et toujours à l'écoute. Je recommande à 100% cette agence de confiance.",
    avatar: "L",
    rating: 5,
  },
  {
    name: "Emma R.",
    role: "Créatrice mode",
    content:
      "Le meilleur investissement de ma carrière. Valéa Agency m'a permis de passer au niveau supérieur avec une stratégie sur mesure.",
    avatar: "E",
    rating: 5,
  },
  {
    name: "Thomas B.",
    role: "Coach fitness",
    content:
      "Une agence qui tient ses promesses. Résultats concrets et accompagnement personnalisé du début à la fin.",
    avatar: "T",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)`,
        }}
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
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
          >
            Ce que disent nos talents
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
            Découvrez les expériences de ceux qui nous ont fait confiance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 } 
              }}
              className="group relative p-8 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
                initial={{ opacity: 0, x: -100 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Quote icon with animation */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0.1, rotate: 0 }}
                whileHover={{ opacity: 0.3, rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-10 h-10 text-accent" />
              </motion.div>

              {/* Star rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-foreground/90 mb-8 leading-relaxed relative z-10 text-lg"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                &quot;{testimonial.content}&quot;
              </motion.p>

              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center text-lg font-medium"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <motion.p
                    className="font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Index number */}
              <div className="absolute bottom-4 right-4 text-5xl font-serif text-muted-foreground/5 group-hover:text-accent/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
