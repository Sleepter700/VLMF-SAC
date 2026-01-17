import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: '50', label: 'Proyectos de Alta Complejidad', suffix: '+' },
  { value: '100', label: 'Mil m² de Infraestructura', suffix: 'k+' },
  { value: '100', label: 'Precisión Estructural', suffix: '%' },
  { value: '60', label: 'Metros de Luz Libre', suffix: 'm+' },
];

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
            className="text-4xl lg:text-5xl font-bold text-white mb-2"
          >
            {stat.value}{stat.suffix}
          </motion.div>
          <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}


