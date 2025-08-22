import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '@/lib/data';

export default function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="absolute top-full left-0 mt-2 w-[580px] max-w-[92vw]"
    >
      <div className="surface rounded-2xl shadow-google-lg border border-gray-200/70 dark:border-white/10">
        <div className="grid grid-cols-2 gap-2 p-3">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className="flex gap-3 p-2.5 rounded-xl hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-rounded text-gblue dark:text-gblue-dark">{service.icon}</span>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{service.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}