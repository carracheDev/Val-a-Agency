"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "fr" | "en"

export const translations = {
  fr: {
    // Navigation
    nav: {
      services: "Services",
      results: "Résultats",
      advantages: "Avantages",
      testimonials: "Témoignages",
      calculator: "Simulateur",
      faq: "FAQ",
      contact: "Contact",
      apply: "Postuler",
    },
    // Hero
    hero: {
      badge: "Agence N°1 en France",
      title: "Valéa Agency",
      subtitle: "Agence Premium de Gestion OnlyFans pour Créatrices Ambitieuses",
      description: "Boostez vos revenus, développez votre audience et bénéficiez de l'accompagnement d'une agence experte dans la croissance de talents internationaux.",
      cta1: "Rejoindre l'agence",
      cta2: "Découvrir nos services",
      scroll: "Défiler",
    },
    // Services
    services: {
      title: "Nos Services",
      subtitle: "Une prise en charge complète pour maximiser votre potentiel",
      items: [
        {
          title: "Gestion 360°",
          description: "Nous gérons l'intégralité de votre compte : publications, planification, optimisation du profil et stratégie de contenu personnalisée.",
        },
        {
          title: "Chat Management",
          description: "Notre équipe experte gère vos conversations 24/7, maximise les ventes de PPV et crée une relation de confiance avec vos abonnés.",
        },
        {
          title: "Growth & Marketing",
          description: "Stratégies de croissance sur mesure : réseaux sociaux, collaborations, promotions ciblées pour attirer des abonnés qualifiés.",
        },
        {
          title: "Analyse & Performance",
          description: "Tableaux de bord détaillés, rapports hebdomadaires et optimisation continue basée sur les données pour maximiser vos revenus.",
        },
      ],
    },
    // Stats
    stats: {
      title: "Nos Résultats",
      subtitle: "Des chiffres qui parlent d'eux-mêmes",
      revenue: "Revenus générés",
      growth: "Croissance moyenne",
      followers: "Abonnés gagnés",
      satisfaction: "Satisfaction",
      reviews: "basé sur 50+ avis",
      beforeAfter: {
        title: "Avant / Après Valéa",
        before: {
          title: "Avant Valéa",
          items: [
            "Revenus instables et imprévisibles",
            "Gestion chronophage du chat",
            "Stratégie marketing inexistante",
            "Croissance stagnante",
          ],
        },
        after: {
          title: "Avec Valéa",
          items: [
            "Revenus multipliés par 3 à 10",
            "Chat géré 24/7 par des experts",
            "Stratégie sur-mesure et efficace",
            "Croissance explosive et durable",
          ],
        },
      },
    },
    // Advantages
    advantages: {
      title: "Pourquoi Nous Choisir",
      subtitle: "Les avantages exclusifs de notre agence",
      items: [
        {
          title: "Équipe 100% Féminine",
          description: "Une équipe qui comprend vos besoins et vous accompagne avec bienveillance et professionnalisme.",
        },
        {
          title: "Confidentialité Absolue",
          description: "Vos données et votre identité sont protégées. Discrétion totale garantie par contrat.",
        },
        {
          title: "Revenus Optimisés",
          description: "Nos stratégies éprouvées maximisent vos gains. Commission uniquement sur les résultats.",
        },
        {
          title: "Support Premium 24/7",
          description: "Un manager dédié disponible à tout moment pour répondre à vos questions et besoins.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que nos créatrices disent de nous",
      items: [
        {
          name: "Emma L.",
          role: "Créatrice depuis 8 mois",
          content: "Valéa a transformé mon compte. Je suis passée de 2000€ à 15000€ par mois en seulement 4 mois. L'équipe est incroyable !",
          rating: 5,
        },
        {
          name: "Sofia M.",
          role: "Créatrice depuis 1 an",
          content: "Le chat management est exceptionnel. Mes abonnés sont plus engagés et mes ventes de PPV ont explosé. Je recommande à 100%.",
          rating: 5,
        },
        {
          name: "Léa D.",
          role: "Créatrice depuis 6 mois",
          content: "Enfin une agence professionnelle et à l'écoute. Ils ont compris mes limites et m'ont aidée à développer mon image de marque.",
          rating: 5,
        },
        {
          name: "Chloé R.",
          role: "Créatrice depuis 1 an",
          content: "Grâce à Valéa, j'ai pu me concentrer sur la création de contenu pendant qu'ils gèrent tout le reste. Mes revenus ont triplé !",
          rating: 5,
        },
      ],
    },
    // Calculator
    calculator: {
      title: "Simulateur de Revenus",
      subtitle: "Estimez vos gains potentiels avec Valéa Agency",
      currentRevenue: "Revenus actuels (€/mois)",
      placeholder: "Ex: 2000",
      estimate: "Estimation avec Valéa",
      min: "Minimum estimé",
      max: "Maximum estimé",
      monthly: "/mois",
      disclaimer: "Ces estimations sont basées sur les résultats moyens de nos créatrices. Les résultats réels peuvent varier.",
      cta: "Atteindre ces résultats",
    },
    // FAQ
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir",
      items: [
        {
          question: "Comment fonctionne votre agence ?",
          answer: "Nous prenons en charge la gestion complète de votre compte OnlyFans : chat management 24/7, stratégie marketing, optimisation du profil et analyse des performances. Vous vous concentrez sur la création de contenu, nous gérons le reste.",
        },
        {
          question: "Quelle est votre commission ?",
          answer: "Notre commission varie entre 30% et 50% selon le niveau de service choisi et vos revenus actuels. Nous ne gagnons que lorsque vous gagnez - notre succès est lié au vôtre.",
        },
        {
          question: "Combien de temps pour voir des résultats ?",
          answer: "La plupart de nos créatrices voient une augmentation significative de leurs revenus dès le premier mois. En moyenne, nos clientes triplent leurs revenus en 3 à 6 mois.",
        },
        {
          question: "Ma confidentialité est-elle garantie ?",
          answer: "Absolument. La confidentialité est notre priorité. Toutes nos collaborations sont encadrées par des accords de non-divulgation stricts. Votre identité et vos données restent 100% protégées.",
        },
        {
          question: "Puis-je garder le contrôle de mon contenu ?",
          answer: "Bien sûr ! Vous gardez un contrôle total sur votre contenu et votre image. Nous ne publions jamais rien sans votre approbation préalable.",
        },
        {
          question: "Comment postuler ?",
          answer: "Remplissez simplement notre formulaire de contact ou envoyez-nous un message sur WhatsApp. Notre équipe vous recontactera sous 24h pour un premier échange.",
        },
      ],
    },
    // Referral
    referral: {
      title: "Programme de Parrainage",
      subtitle: "Gagnez jusqu'à 1000€ par créatrice parrainée",
      description: "Recommandez Valéa Agency à vos amies créatrices et recevez une commission sur leurs revenus pendant 6 mois.",
      step1: {
        title: "Partagez",
        description: "Envoyez votre lien de parrainage à une créatrice",
      },
      step2: {
        title: "Elle rejoint",
        description: "Votre amie signe avec Valéa Agency",
      },
      step3: {
        title: "Vous gagnez",
        description: "Recevez 5% de ses revenus pendant 6 mois",
      },
      cta: "Obtenir mon lien de parrainage",
      bonus: "Bonus : 200€ immédiat si elle atteint 5000€/mois",
    },
    // Contact
    contact: {
      title: "Rejoignez Valéa Agency",
      subtitle: "Prête à transformer votre carrière ? Contactez-nous",
      form: {
        name: "Votre nom",
        email: "Votre email",
        instagram: "Votre Instagram",
        revenue: "Revenus actuels (optionnel)",
        message: "Parlez-nous de vous",
        submit: "Envoyer ma candidature",
        sending: "Envoi en cours...",
        success: "Candidature envoyée avec succès !",
        successDesc: "Nous vous recontacterons sous 24h.",
        error: "Une erreur est survenue",
        errorDesc: "Veuillez réessayer ou nous contacter sur WhatsApp.",
      },
    },
    // Footer
    footer: {
      description: "Agence premium de gestion OnlyFans. Nous accompagnons les créatrices ambitieuses vers le succès.",
      navigation: "Navigation",
      legal: "Légal",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    // Navigation
    nav: {
      services: "Services",
      results: "Results",
      advantages: "Advantages",
      testimonials: "Testimonials",
      calculator: "Calculator",
      faq: "FAQ",
      contact: "Contact",
      apply: "Apply",
    },
    // Hero
    hero: {
      badge: "#1 Agency in France",
      title: "Valéa Agency",
      subtitle: "Premium OnlyFans Management Agency for Ambitious Creators",
      description: "Boost your income, grow your audience and benefit from the support of an expert agency in developing international talents.",
      cta1: "Join the agency",
      cta2: "Discover our services",
      scroll: "Scroll",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Complete support to maximize your potential",
      items: [
        {
          title: "360° Management",
          description: "We manage your entire account: publications, scheduling, profile optimization and personalized content strategy.",
        },
        {
          title: "Chat Management",
          description: "Our expert team manages your conversations 24/7, maximizes PPV sales and builds trust with your subscribers.",
        },
        {
          title: "Growth & Marketing",
          description: "Custom growth strategies: social media, collaborations, targeted promotions to attract qualified subscribers.",
        },
        {
          title: "Analytics & Performance",
          description: "Detailed dashboards, weekly reports and continuous optimization based on data to maximize your revenue.",
        },
      ],
    },
    // Stats
    stats: {
      title: "Our Results",
      subtitle: "Numbers that speak for themselves",
      revenue: "Revenue generated",
      growth: "Average growth",
      followers: "Followers gained",
      satisfaction: "Satisfaction",
      reviews: "based on 50+ reviews",
      beforeAfter: {
        title: "Before / After Valéa",
        before: {
          title: "Before Valéa",
          items: [
            "Unstable and unpredictable income",
            "Time-consuming chat management",
            "No marketing strategy",
            "Stagnant growth",
          ],
        },
        after: {
          title: "With Valéa",
          items: [
            "Revenue multiplied by 3 to 10",
            "Chat managed 24/7 by experts",
            "Custom and effective strategy",
            "Explosive and sustainable growth",
          ],
        },
      },
    },
    // Advantages
    advantages: {
      title: "Why Choose Us",
      subtitle: "Exclusive benefits of our agency",
      items: [
        {
          title: "100% Female Team",
          description: "A team that understands your needs and supports you with care and professionalism.",
        },
        {
          title: "Absolute Confidentiality",
          description: "Your data and identity are protected. Total discretion guaranteed by contract.",
        },
        {
          title: "Optimized Revenue",
          description: "Our proven strategies maximize your earnings. Commission only on results.",
        },
        {
          title: "Premium 24/7 Support",
          description: "A dedicated manager available at all times to answer your questions and needs.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: "Testimonials",
      subtitle: "What our creators say about us",
      items: [
        {
          name: "Emma L.",
          role: "Creator for 8 months",
          content: "Valéa transformed my account. I went from €2000 to €15000 per month in just 4 months. The team is amazing!",
          rating: 5,
        },
        {
          name: "Sofia M.",
          role: "Creator for 1 year",
          content: "The chat management is exceptional. My subscribers are more engaged and my PPV sales have exploded. I recommend 100%.",
          rating: 5,
        },
        {
          name: "Léa D.",
          role: "Creator for 6 months",
          content: "Finally a professional and attentive agency. They understood my limits and helped me develop my brand image.",
          rating: 5,
        },
        {
          name: "Chloé R.",
          role: "Creator for 1 year",
          content: "Thanks to Valéa, I was able to focus on content creation while they manage everything else. My income tripled!",
          rating: 5,
        },
      ],
    },
    // Calculator
    calculator: {
      title: "Revenue Calculator",
      subtitle: "Estimate your potential earnings with Valéa Agency",
      currentRevenue: "Current revenue (€/month)",
      placeholder: "Ex: 2000",
      estimate: "Estimate with Valéa",
      min: "Minimum estimate",
      max: "Maximum estimate",
      monthly: "/month",
      disclaimer: "These estimates are based on the average results of our creators. Actual results may vary.",
      cta: "Achieve these results",
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      items: [
        {
          question: "How does your agency work?",
          answer: "We handle the complete management of your OnlyFans account: 24/7 chat management, marketing strategy, profile optimization and performance analysis. You focus on content creation, we handle the rest.",
        },
        {
          question: "What is your commission?",
          answer: "Our commission varies between 30% and 50% depending on the service level chosen and your current revenue. We only earn when you earn - our success is tied to yours.",
        },
        {
          question: "How long to see results?",
          answer: "Most of our creators see a significant increase in their income from the first month. On average, our clients triple their income in 3 to 6 months.",
        },
        {
          question: "Is my confidentiality guaranteed?",
          answer: "Absolutely. Confidentiality is our priority. All our collaborations are governed by strict non-disclosure agreements. Your identity and data remain 100% protected.",
        },
        {
          question: "Can I keep control of my content?",
          answer: "Of course! You keep total control over your content and image. We never post anything without your prior approval.",
        },
        {
          question: "How to apply?",
          answer: "Simply fill out our contact form or send us a message on WhatsApp. Our team will contact you within 24 hours for an initial discussion.",
        },
      ],
    },
    // Referral
    referral: {
      title: "Referral Program",
      subtitle: "Earn up to €1000 per referred creator",
      description: "Recommend Valéa Agency to your creator friends and receive a commission on their revenue for 6 months.",
      step1: {
        title: "Share",
        description: "Send your referral link to a creator",
      },
      step2: {
        title: "She joins",
        description: "Your friend signs with Valéa Agency",
      },
      step3: {
        title: "You earn",
        description: "Receive 5% of her revenue for 6 months",
      },
      cta: "Get my referral link",
      bonus: "Bonus: €200 immediate if she reaches €5000/month",
    },
    // Contact
    contact: {
      title: "Join Valéa Agency",
      subtitle: "Ready to transform your career? Contact us",
      form: {
        name: "Your name",
        email: "Your email",
        instagram: "Your Instagram",
        revenue: "Current revenue (optional)",
        message: "Tell us about yourself",
        submit: "Send my application",
        sending: "Sending...",
        success: "Application sent successfully!",
        successDesc: "We will contact you within 24 hours.",
        error: "An error occurred",
        errorDesc: "Please try again or contact us on WhatsApp.",
      },
    },
    // Footer
    footer: {
      description: "Premium OnlyFans management agency. We support ambitious creators towards success.",
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      followUs: "Follow us",
      rights: "All rights reserved.",
    },
  },
} as const

type TranslationType = typeof translations.fr

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationType
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }, [])

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
