import { servicesData } from '@/lib/data';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <div className="pt-10 md:pt-14">
        <div className="container py-6 text-center">
          <h1 className="text-3xl md:text-[34px] font-semibold tracking-tight">Our Services</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Focused capabilities to ship faster without compromising quality.</p>
        </div>
      </div>
      <div className="py-10 bg-gray-50 dark:bg-[#111318]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicesData.map((service) => (
              <div key={service.slug} className="bg-white dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 hover:shadow-google transition-shadow">
                {/* ... (re-use the service card design from the homepage) ... */}
                <h3 className="text-lg font-medium">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 my-2">{service.description}</p>
                <Link href={`/service/${service.slug}`} className="inline-flex items-center gap-1.5 text-gblue dark:text-gblue-dark font-medium">
                  Learn more <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}