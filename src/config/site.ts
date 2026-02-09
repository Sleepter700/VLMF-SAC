import type { Instagram } from "lucide-react";

// Site configuration
export const SITE = {
  title: 'VLM&F Asociados SAC',
  description: 'INGENIERIA DE PRESICIÓN Y SOLUCIONES INDUSTRIALES',
  url: 'https://vlmf.com.pe/',
  author: 'VLM&F Asociados SAC',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  //{ name: 'Metodología', href: '/capabilities' },
  //{ name: 'Soluciones', href: '/use-cases' },
  //{ name: 'Resultados', href: '/facilities' },
  { name: 'Resultados', href: '/documentation' },
  { name: 'Presupuesto', href: '/rfq' },
  //{ name: 'Recursos', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: '/',
  Instagram: '/',
  facebook: '/',
} as const;

