import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, User, Building2, Briefcase, Warehouse, Factory, Truck, Network, Wrench, Cpu, Calendar, Package } from 'lucide-react';

export default function RFQForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this to your backend
    console.log('Form submitted:', data);
    
    // Show success message
    alert('¡Gracias por su solicitud! Nos pondremos en contacto con usted dentro de 24 horas.');
    form.reset();
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit} name="rfq-form">
      {/* Contact Information */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-red-600 to-teal-600 flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Información de Contacto
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Apellido <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Dirección de Correo Electrónico <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Número de Teléfono <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Información de la Empresa
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre de la Empresa <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <Label.Root
              htmlFor="industry"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Industria <span className="text-red-500">*</span>
            </Label.Root>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            >
              <option value="">Selecciona una industria</option>
              <option value="ecommerce">E-Commerce y Retail</option>
              <option value="healthcare">Salud y Farmacéuticos</option>
              <option value="automotive">Automotriz y Manufactura</option>
              <option value="technology">Tecnología y Electrónicos</option>
              <option value="consumer-goods">Bienes de Consumo</option>
              <option value="food-beverage">Alimentos y Bebidas</option>
              <option value="other">Otro</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Requirements */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-3">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Requisitos de Servicio
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <Label.Root className="block text-sm font-medium text-gray-700 mb-3">
              Servicios Necesarios <span className="text-red-500">*</span>
            </Label.Root>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'warehousing', label: 'Almacenamiento y Depósito', icon: Warehouse },
                { id: 'manufacturing', label: 'Servicios de Manufactura', icon: Factory },
                { id: 'transportation', label: 'Transporte y Distribución', icon: Truck },
                { id: 'supply-chain', label: 'Gestión de Cadena de Suministro', icon: Network },
                { id: 'value-added', label: 'Servicios de Valor Agregado', icon: Wrench },
                { id: 'technology', label: 'Integración Tecnológica', icon: Cpu },
              ].map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-all cursor-pointer group"
                  >
                    <Checkbox.Root
                      id={service.id}
                      name="services"
                      value={service.id}
                      className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 transition-colors shrink-0"
                    >
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-red-100 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
                    </div>
                    <Label.Root
                      htmlFor={service.id}
                      className="text-sm font-medium text-gray-700 cursor-pointer flex-1 group-hover:text-gray-900 transition-colors"
                    >
                      {service.label}
                    </Label.Root>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label.Root
                htmlFor="timeline"
                className="flex items-center text-sm font-medium text-gray-700 mb-2"
              >
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                Cronograma <span className="text-red-500 ml-1">*</span>
              </Label.Root>
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  required
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition appearance-none bg-white"
                >
                  <option value="">Selecciona un cronograma</option>
                  <option value="immediate">Inmediato (Dentro de 1 mes)</option>
                  <option value="1-3-months">1-3 meses</option>
                  <option value="3-6-months">3-6 meses</option>
                  <option value="6-plus-months">6+ meses</option>
                  <option value="flexible">Flexible</option>
                </select>
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <Label.Root
                htmlFor="volume"
                className="flex items-center text-sm font-medium text-gray-700 mb-2"
              >
                <Package className="w-4 h-4 mr-2 text-gray-500" />
                Volumen Mensual Estimado
              </Label.Root>
              <div className="relative">
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  placeholder="ej., 10,000 unidades"
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <Label.Root
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Detalles del Proyecto <span className="text-red-500">*</span>
            </Label.Root>
            <textarea
              id="details"
              name="details"
              rows={6}
              required
              placeholder="Por favor proporcione detalles sobre sus requisitos, incluyendo especificaciones del producto, necesidades de almacenamiento, destinos de envío, u otra información relevante..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-linear-to-r from-red-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-red-700 hover:to-teal-700 transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>Enviar Solicitud</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          Al enviar este formulario, acepta nuestra Política de Privacidad y Términos de
          Servicio.
        </p>
      </div>
    </form>
  );
}


