import Link from 'next/link';
import { servicesData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gsurface-dark border-t border-gray-200/70 dark:border-white/10">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl md:text-[22px] font-semibold tracking-tight text-gray-900 dark:text-white">
              App <span className="text-gblue dark:text-gblue-dark">Plex</span>
            </Link>
            <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-md">
              We design and build delightful digital products for startups and enterprises.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">About</Link></li>
              <li><Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Services</h4>
            <ul className="space-y-1">
              {servicesData.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-gray-200/70 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} App Plex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}