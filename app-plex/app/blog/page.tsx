import { blogPostsData } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
  const categories = [...new Set(blogPostsData.map(p => p.category))];

  return (
    <>
      <div className="pt-10 md:pt-14">
        <div className="container py-6 text-center">
          <h1 className="text-[30px] md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">From the blog</h1>
          <p className="mt-2 text-[16px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Insights and notes on building software.</p>
        </div>
      </div>
      <div className="py-8 md:py-10 bg-gray-50 dark:bg-[#111318]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {blogPostsData.map(post => (
                <article key={post.slug} className="rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200/70 dark:border-white/10 hover:shadow-google transition-shadow">
                  {/* In a real app, this link would go to /blog/{post.slug} */}
                  <Link href="/blog" className="block">
                    <div className="overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-[1.02]" />
                    </div>
                    <div className="p-5">
                      <p className="text-gblue dark:text-gblue-dark text-xs font-medium mb-1">{post.category}</p>
                      <h3 className="text-[17px] font-medium text-gray-900 dark:text-white mb-1.5">{post.title}</h3>
                      <p className="text-[13px] text-gray-600 dark:text-gray-400">By {post.author} on {post.date}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
                <ul className="space-y-1">
                  {categories.map(cat => (
                    <li key={cat}><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">{cat}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}