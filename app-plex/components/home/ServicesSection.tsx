import Link from 'next/link';
import { servicesData } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 md:py-16">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
            What we do
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Focused capabilities to ship faster without compromising quality.
          </p>
        </div>
        <div id="servicesGrid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 hover:shadow-google transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-gblue/10 dark:bg-gblue/15 flex items-center justify-center">
                  <span className="material-symbols-rounded text-gblue dark:text-gblue-dark">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <Link
                href={`/service/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-gblue dark:text-gblue-dark font-medium"
              >
                Learn more
                <span className="material-symbols-rounded text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}