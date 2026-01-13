// Site configuration
export const SITE = {
  title: 'VLM&F Asociados SAC',
  description: 'iNGENIERIA DE PRESICIÓN Y SOLUCIONES INDUSTRIALES',
  url: 'https://yourdomain.com',
  author: 'AstroFlow',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Request Quote', href: '/rfq' },
  { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

