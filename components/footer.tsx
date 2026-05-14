"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const footerLinks = [
  { href: "#accueil", labelKey: "nav.services" },
  { href: "#services", labelKey: "nav.services" },
  { href: "#resultats", labelKey: "nav.results" },
  { href: "#avantages", labelKey: "nav.advantages" },
  { href: "#temoignages", labelKey: "nav.testimonials" },
  { href: "#contact", labelKey: "nav.contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/valeaagency", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/valeaagency", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
  { icon: Mail, href: "mailto:valeaagency@gmail.com", label: "Email" },
];

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="font-serif text-2xl mb-4">Valéa Agency</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              {t.footer.description}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:valeaagency@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  valeaagency@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <a href="https://wa.me/1234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">
              {t.footer.navigation}
            </h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t.nav[link.labelKey.split('.')[1]] || link.labelKey}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">
              {t.footer.followUs}
            </h4>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Valéa Agency. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
         