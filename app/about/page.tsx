export default function AboutPage() {
  return (
    <>
      {/* Page Header Section */}
      <div className="pt-10 md:pt-14 bg-gray-50 dark:bg-[#111318]">
        <div className="container py-6 text-center">
          <h1 className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
            About App Plex
          </h1>
          <p className="mt-2 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are a team of designers, engineers, and product folks worksing in
            lockstep to ship quality software.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-14 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left Side: Text Content */}
            <div>
              <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
                The team behind your next big win
              </h2>
              <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400">
                Pragmatic, fast, and user‑obsessed. We partner with startups and
                enterprises to design and build delightful digital products. Our
                process is transparent, collaborative, and tailored to deliver
                results that move business metrics.
              </p>
              <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400">
                From initial strategy to final launch and support, we focus on
                creating scalable, high-performance solutions that users love.
              </p>
            </div>

            {/* Right Side: Stat Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Stat Card 1: Projects */}
              <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
                <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                  groups
                </span>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  10+
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Projects Shipped
                </p>
              </div>

              {/* Stat Card 2: Satisfaction */}
              <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
                <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                  track_changes
                </span>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  100%
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </p>
              </div>

              {/* Stat Card 3: Years */}
              <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
                <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                  domain
                </span>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  10+
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}