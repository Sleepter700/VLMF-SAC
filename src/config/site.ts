// Site configuration
export const SITE = {
  title: 'VLM&F Asociados SAC',
  description: 'INGENIERIA DE PRESICIÓN Y SOLUCIONES INDUSTRIALES',
  url: 'https://sleepter700.github.io',
  author: 'VLM&F Asociados SAC',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/capabilities' },
  { name: 'Casos de Éxito', href: '/use-cases' },
  { name: 'Especialidades', href: '/facilities' },
  { name: 'Presupuesto', href: '/rfq' },
  { name: 'Contacto', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

