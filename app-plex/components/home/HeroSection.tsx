import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="hero-accent"></div>
      <div className="container relative z-[1] text-center">
        <h1 className="text-[32px] md:text-[46px] leading-[1.12] font-semibold tracking-tight text-gray-900 dark:text-white">
          Build <span className="text-gblue dark:text-gblue-dark">delightful products</span> with a world‑class team
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[17px] md:text-[18px] text-gray-600 dark:text-gray-400">
          Web, mobile, and eCommerce solutions crafted for performance, accessibility, and polish.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gblue hover:bg-gblue-hover text-white font-medium py-2.5 px-5 rounded-pill shadow-google">
            <span className="material-symbols-rounded text-[20px]">mail</span> Get a quote
          </Link>
          <Link href="/#projects" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200/80 dark:hover:bg-white/10 text-gray-900 dark:text-gray-100 font-medium py-2.5 px-5 rounded-pill">
            <span className="material-symbols-rounded text-[20px]">play_circle</span> See our work
          </Link>
        </div>
      </div>
    </section>
  );
}