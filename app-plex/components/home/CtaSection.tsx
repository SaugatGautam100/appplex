import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-14 md:py-16 bg-gblue dark:bg-[#1b63c3]">
      <div className="container text-center">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-white">
          Ready to build something great?
        </h2>
        <p className="mt-2 text-white/90 text-[16px]">
          Tell us about your idea — we’ll help make it real.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-gblue font-medium py-2.5 px-5 rounded-pill mt-6 shadow-google hover:bg-white/95"
        >
          <span className="material-symbols-rounded text-[20px]">send</span>
          Get in touch
        </Link>
      </div>
    </section>
  );
}