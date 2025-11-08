import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 md:py-16 bg-gray-50 dark:bg-[#111318]">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
            Recent works
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of products we’ve shipped.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Project Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="/projectlogos/vibe-music.png"
              alt="Vibe Music App"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">Mobile Development</p>
              <h3 className="text-xl font-medium text-white mt-0.5">Vibe Music</h3>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="/projectlogos/sajilo-interior.jpeg"
              alt="Sajilo Interior Dashboard"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">Web Development</p>
              <h3 className="text-xl font-medium text-white mt-0.5">Sajilo Interior Nepal</h3>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
            <Image
              src="projectlogos/plexify.png"
              alt="Plexify"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-sm text-gray-200 dark:text-gray-300">E-Commerce Development</p>
              <h3 className="text-xl font-medium text-white mt-0.5">Plexify</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}