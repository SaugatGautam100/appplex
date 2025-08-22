import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 md:py-16 bg-gray-50 dark:bg-[#111318]">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
            Recent work
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of products we’ve shipped.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Project Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="https://placehold.co/800x600/1a73e8/ffffff?text=Fintech+App"
              alt="Fintech Mobile App"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">Mobile Development</p>
              <h3 className="text-xl font-medium text-white mt-0.5">Fintech Mobile App</h3>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="https://placehold.co/800x600/10b981/ffffff?text=SaaS+Dashboard"
              alt="SaaS Platform Dashboard"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">Web Development</p>
              <h3 className="text-xl font-medium text-white mt-0.5">SaaS Platform Dashboard</h3>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="https://placehold.co/800x600/f59e0b/ffffff?text=Marketplace"
              alt="eCommerce Marketplace"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">eCommerce</p>
              <h3 className="text-xl font-medium text-white mt-0.5">eCommerce Marketplace</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}