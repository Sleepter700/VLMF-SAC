// Site configuration
export const SITE = {
  title: 'VLM&F Asociados SAC',
  description: 'INGENIERIA DE PRESICIÓN Y SOLUCIONES INDUSTRIALES',
  url: 'https://sleepter700.github.io',
  author: 'VLM&F Asociados SAC',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  //{ name: 'Metodología', href: '/capabilities' },
  //{ name: 'Soluciones', href: '/use-cases' },
  //{ name: 'Resultados', href: '/facilities' },
  { name: 'Metodología', href: '/documentation' },
  { name: 'Soluciones', href: '/documentation' },
  { name: 'Resultados', href: '/documentation' },
  { name: 'Presupuesto', href: '/rfq' },
  //{ name: 'Recursos', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

