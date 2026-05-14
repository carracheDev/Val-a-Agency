"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2, CheckCircle, AlertCircle, Mail, User, MessageSquare } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    if (!form.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Top border */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      {/* Animated background elements */}
      <motion.div
        animate={{ y: [-30, 30, -30], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 border border-accent/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ y: [30, -30, 30], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-48 h-48 border border-accent/5 rounded-full pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
          >
            Parlons de votre projet
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
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Prêt à franchir le cap ? Contactez-nous et commençons à construire votre succès ensemble.
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-lg border border-border p-8 md:p-12 relative overflow-hidden"
        >
          {/* Form background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="space-y-8 relative z-10">
            {/* Name field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                Nom
              </label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-background border-border focus:border-accent h-12 pl-4 transition-all duration-300"
                  disabled={status === "loading"}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "name" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Email field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-background border-border focus:border-accent h-12 pl-4 transition-all duration-300"
                  disabled={status === "loading"}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "email" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Message field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Parlez-nous de votre projet..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent resize-none transition-all duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-b-md"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "message" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Error message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md"
              >
                <AlertCircle className="w-4 h-4" />
                {errorMessage}
              </motion.div>
            )}

            {/* Success message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex items-center gap-2 text-green-500 text-sm bg-green-500/10 p-3 rounded-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
                Message envoyé avec succès ! Nous vous répondrons rapidement.
              </motion.div>
            )}

            {/* Submit button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-accent/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Envoyer le message
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
