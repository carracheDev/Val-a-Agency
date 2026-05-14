"use client"

import { useI18n, type Locale } from "@/lib/i18n"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
      {(["fr", "en"] as Locale[]).map((lang) => (
        <motion.button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
            locale === lang ? "text-background" : "text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {locale === lang && (
            <motion.div
              layoutId="activeLocale"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 uppercase">{lang}</span>
        </motion.button>
      ))}
    </div>
  )
}
