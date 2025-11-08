import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-10 md:pt-14">
        <div className="container py-6 text-center">
          <h1 className="text-3xl md:text-[34px] font-semibold tracking-tight">Our works</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A snapshot of products we’ve shipped with care and precision.</p>
        </div>
      </div>
      <div className="py-10 bg-gray-50 dark:bg-[#111318]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectsData.map((project) => (
              <div key={project.slug} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-google transition-all hover:shadow-google-lg">
                <Image src={project.imageUrl || `https://placehold.co/800x600?text=${encodeURIComponent(project.title)}`} alt={project.title} width={800} height={600} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm text-gray-200">{project.category}</p>
                  <h3 className="text-xl font-medium text-white mt-0.5">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}