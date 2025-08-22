import { servicesData } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="pt-10 md:pt-14">
        <div className="container py-6 text-center">
          <div className="mb-2 animate-float">
            <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[36px]">{service.icon}</span>
          </div>
          <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-gray-900 dark:text-white">{service.title}</h1>
          <p className="mt-2 text-[16px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </div>
      <div className="py-10 bg-gray-50 dark:bg-[#111318]">
        <div className="container max-w-3xl">
          <div className="prose dark:prose-invert">
            <p>{service.details}</p>
             <p>
                We collaborate closely to refine scope, user journeys, and technical architecture.
                Expect pragmatic decisions, fast iteration, and meticulous attention to quality.
            </p>
            <h3>Our process</h3>
            <ol>
                <li>Discovery & Strategy</li>
                <li>UX/UI Design</li>
                <li>Development & QA</li>
                <li>Launch & Support</li>
            </ol>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gblue hover:bg-gblue-hover text-white font-medium py-2.5 px-5 rounded-pill mt-8 shadow-google">
            <span className="material-symbols-rounded text-[20px]">chat</span> Discuss your project
          </Link>
        </div>
      </div>
    </>
  );
}