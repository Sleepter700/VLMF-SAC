// Constantes utilizadas en toda la aplicación

export const INDUSTRIES = [
  { id: 'automotive', name: 'Automotriz', icon: 'Car' },
  { id: 'electronics', name: 'Electrónicos', icon: 'Cpu' },
  { id: 'food-beverage', name: 'Alimentos y Bebidas', icon: 'Utensils' },
  { id: 'pharmaceuticals', name: 'Farmacéuticos', icon: 'Pill' },
  { id: 'retail', name: 'Minorista y Comercio Electrónico', icon: 'ShoppingBag' },
  { id: 'industrial', name: 'Manufactura Industrial', icon: 'Factory' },
] as const;

export const CAPABILITIES = [
  {
    id: 'warehousing',
    title: 'Almacenamiento y Distribución',
    description: 'Soluciones de almacenamiento de vanguardia con gestión avanzada de inventario.',
    icon: 'Warehouse',
  },
  {
    id: 'transportation',
    title: 'Transporte y Logística',
    description: 'Redes de transporte eficientes que garantizan entregas puntuales.',
    icon: 'Truck',
  },
  {
    id: 'manufacturing',
    title: 'Soporte de Manufactura',
    description: 'Servicios integrales de soporte de manufactura.',
    icon: 'Cog',
  },
  {
    id: 'supply-chain',
    title: 'Gestión de Cadena de Suministro',
    description: 'Optimización y gestión integral de la cadena de suministro.',
    icon: 'Network',
  },
  {
    id: 'technology',
    title: 'Soluciones Tecnológicas',
    description: 'Tecnología de vanguardia para logística y manufactura.',
    icon: 'Code',
  },
] as const;

