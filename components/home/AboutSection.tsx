'use client';
import {motion} from 'framer-motion';
export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <motion.h2
            animate = {{
              x: 20,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
             className="text-3xl md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white"
             >
              The team behind your next big win
            </motion.h2>
            <p className="mt-3 text-[16px] md:text-[17px] text-gray-600 dark:text-gray-400">
              Designers, engineers, and product folks worksing in lockstep to ship
              quality software. Pragmatic, fast, and user‑obsessed.
            </p>
          </div>
          <motion.div 
          animate = {{
              y: 20,
              x:[0, 10, 0, -10, 0]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
             
            }}
          className="grid grid-cols-3 gap-3 md:gap-4"
          >
            {/* Stat Card 1 */}
            <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
              <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                groups
              </span>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">10+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
              <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                track_changes
              </span>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">100%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gray-50 dark:bg-white/5 p-5 rounded-2xl border border-gray-200/70 dark:border-white/10 text-center">
              <span className="material-symbols-rounded text-gblue dark:text-gblue-dark text-[28px] mb-1 inline-block">
                domain
              </span>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">3+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Years</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}