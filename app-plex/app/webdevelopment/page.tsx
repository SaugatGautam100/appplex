// app/page.tsx
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Star,
  Facebook,
  Linkedin,
  Instagram,
  Quote,
  MessageSquare,
  LayoutGrid,
  PenTool,
  Settings2,
} from "lucide-react";
import React from 'react';

// Reusable DottedGrid component
const DottedGrid = ({ className }: { className?: string }) => (
  <div className={`absolute hidden lg:grid grid-cols-7 gap-x-3 gap-y-2 opacity-50 ${className}`}>
    {Array.from({ length: 56 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-violet-300 rounded-full" />
    ))}
  </div>
);

// --- Header Component (Active State on Services) ---
const Header = () => {
  const serviceLinks = [
    { name: "Web Development", href: "#" },
    { name: "Frontend Development", href: "#" },
    { name: "Backend Development", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "Product Design", href: "#" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="font-bold text-2xl text-brand-dark">
            <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <div className="relative group">
              <button className="flex items-center gap-1 text-brand-purple font-semibold transition-colors">
                SERVICES <ChevronDown size={16} />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56 ring-1 ring-black ring-opacity-5 z-20">
                <div className="py-1">
                  {serviceLinks.map((link) => (
                    <a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-purple">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-brand-purple">PROJECTS</a>
            <a href="#" className="hover:text-brand-purple">ABOUT</a>
            <a href="#" className="flex items-center gap-1 hover:text-brand-purple">HOW WE WORK <ChevronDown size={16} /></a>
            <a href="#" className="flex items-center gap-1 hover:text-brand-purple">BLOG & MORE <ChevronDown size={16} /></a>
            <a href="#" className="hover:text-brand-purple">CAREERS</a>
          </nav>
        </div>
        <a href="#" className="hidden md:inline-block border border-gray-300 rounded-md px-6 py-2 text-sm font-semibold text-brand-dark hover:bg-gray-100 transition-colors">LET'S TALK</a>
      </div>
    </header>
  );
};

// --- Web Dev Hero Section ---
const WebDevHero = () => (
  <section className="bg-white py-20 relative">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold text-brand-dark leading-tight">
          Web Development Services
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Launch bespoke web applications quickly with our product design and software delivery services—without sacrificing on performance, quality or security. We develop web applications using the most reliable methodologies and the best practices for continuous and highly maintainable software delivery.
        </p>
        <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">
          START YOUR PROJECT
        </button>
      </div>
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-brand-purple opacity-70 z-20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <Image src="/web-dev-hero.png" alt="Developer at a multi-monitor setup" layout="fill" objectFit="cover" className="z-10" />
      </div>
    </div>
  </section>
);

// --- Tech Stack Section ---
const TechCard = ({ name, logoSrc }: { name: string, logoSrc: string }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
        <Image src={logoSrc} alt={`${name} logo`} width={32} height={32} />
        <span className="font-semibold text-gray-800">{name}</span>
    </div>
);

const TechStack = ({ title, description, buttonText, techs, reversed = false }: { title: string, description: string, buttonText: string, techs: {name: string, logoSrc: string}[], reversed?: boolean }) => (
    <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${reversed ? 'md:col-start-2' : ''}`}>
                    <h2 className="text-4xl font-bold text-brand-dark">{title}</h2>
                    <p className="mt-6 text-gray-600">{description}</p>
                    <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">
                        {buttonText}
                    </button>
                </div>
                <div className={`grid ${techs.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 ${reversed ? 'md:col-start-1' : ''}`}>
                    {techs.map(tech => <TechCard key={tech.name} {...tech} />)}
                </div>
            </div>
        </div>
    </section>
);


// --- Value Proposition Section ---
const ValueProps = () => (
    <section className="bg-brand-purple text-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl font-bold leading-tight">Access experts who champion the right tools and frameworks for your web development project</h2>
                <p className="mt-6 text-violet-200">The web moves forward quickly, and your business should be right there with it. Polcode runs the technical keep-up for you—consultation, advice, design and delivery—so you can focus more on business outcomes.</p>
            </div>
            <div className="space-y-10">
                <div className="flex gap-6">
                    <LayoutGrid size={40} className="text-violet-300 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold">Pair with best-in-class technologies</h3>
                        <p className="mt-2 text-violet-200">We match your unique business requirements with the latest web technologies out there.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <PenTool size={40} className="text-violet-300 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold">Deliver better user experiences</h3>
                        <p className="mt-2 text-violet-200">Design the best web experiences possible with platforms built to improve productivity, or serve customers better.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Settings2 size={40} className="text-violet-300 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold">Worry less about scale and maintenance</h3>
                        <p className="mt-2 text-violet-200">Pivot with agility, and scale even the most demanding needs effectively with flexible and stable web app development.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- Process Section (Reused) ---
const ProcessDiagram = () => (
    <div className="relative w-[450px] h-[450px] mx-auto">
        <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
            <p className="mt-2 font-semibold text-brand-dark">Workshops</p>
        </div>
        <div className="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/2 text-center">
             <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
            <p className="mt-2 font-semibold text-brand-dark">Kick-off</p>
        </div>
         <div className="absolute bottom-1/4 right-0 translate-x-1/4 translate-y-1/2 text-center">
            <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
            <p className="mt-2 font-semibold text-brand-dark">UX/UI Design</p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center">
            <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18-6-6 6-6"/><path d="M8 6h10"/></svg></div>
            <p className="mt-2 font-semibold text-brand-dark">Development</p>
        </div>
        <div className="absolute bottom-1/4 left-0 -translate-x-1/4 translate-y-1/2 text-center">
            <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 1-3-3V8a3 3 0 0 1-3-3H2a7 7 0 0 0 7 7 3 3 0 0 1 3 3v4Z"/><path d="M21 21c-1.5-1.5-2-4-3-6"/><path d="m18 13-1.5-1.5"/><circle cx="8" cy="8" r="2"/></svg></div>
            <p className="mt-2 font-semibold text-brand-dark">Delivery & Support</p>
        </div>
    </div>
);
const Process = () => (
    <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">Our Web Development Process</h2>
                <p className="mt-6 text-gray-600">We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">SEE HOW WE WORK <ArrowRight /></a>
            </div>
            <div><ProcessDiagram /></div>
        </div>
    </section>
);


// --- Latest Projects Section ---
const WebDevProjectCard = ({ imgSrc, tags, title, industry, region, clientLogoSrc, clientName }: any) => (
    <a href="#" className="group block">
        <div className="bg-gray-100 rounded-lg overflow-hidden p-4">
            <Image src={imgSrc} width={600} height={400} alt={title} className="transform group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="bg-white p-6 shadow-sm group-hover:shadow-xl transition-shadow rounded-b-lg -mt-4 relative z-10">
            <p className="text-xs font-bold text-gray-400 tracking-wider">{tags}</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark leading-tight">{title}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div><p className="text-gray-400 text-xs uppercase">Industry</p><p className="font-medium text-gray-700">{industry}</p></div>
                <div><p className="text-gray-400 text-xs uppercase">Region</p><p className="font-medium text-gray-700">{region}</p></div>
            </div>
            <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <div><p className="text-gray-400 text-xs uppercase">Client</p><Image src={clientLogoSrc} width={100} height={30} alt={clientName} className="mt-1"/></div>
                <ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors"/>
            </div>
        </div>
    </a>
);

const WebDevProjects = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold text-brand-dark text-left">Our latest web development projects:</h2>
              <div className="flex items-center gap-4">
                <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100"><ArrowLeft size={20}/></button>
                <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100"><ArrowRight size={20}/></button>
              </div>
            </div>
            <div className="mt-16 grid md:grid-cols-2 gap-12">
                <WebDevProjectCard
                    imgSrc="/project-fitness.png"
                    tags="PHP SYMFONY REACT NATIVE REACT PWA"
                    title="Rebuilding a Powerful Online Fitness Appointment Booking Platform"
                    industry="Booking platforms" region="Netherlands"
                    clientLogoSrc="/appybee-logo-grey.svg" clientName="AppyBee"
                />
                <WebDevProjectCard
                    imgSrc="/project-gaming.png"
                    tags="RUBY NODE.JS REDUX TWITCH RUBY ON RAILS"
                    title="Digital Marketing Agency Levels Up Their Gaming Influencer Platform"
                    industry="Digital agencies" region="Germany"
                    clientLogoSrc="/partner-combo-strike.svg" clientName="Combo Strike"
                />
                 <WebDevProjectCard
                    imgSrc="/project-firm.png"
                    tags="REACT PYTHON DJANGO WORDPRESS POSTGRESQL"
                    title="Canadian Firm Trusts Polcode With Their Core Product Development"
                    industry="Finance" region="Canada"
                    clientLogoSrc="/partner-impak.svg" clientName="Impak"
                />
                 <WebDevProjectCard
                    imgSrc="/project-mentoring.png"
                    tags="PHP MYSQL REDIS LARAVEL"
                    title="Delivering Online Mentoring to Over 15,000 Users"
                    industry="eLearning" region="United Kingdom"
                    clientLogoSrc="/partner-mk.svg" clientName="My Consulting Coach"
                />
            </div>
            <div className="text-center mt-16">
                <button className="border border-brand-purple text-brand-purple font-semibold py-3 px-10 rounded-md hover:bg-brand-purple hover:text-white transition-colors">
                    SEE MORE
                </button>
            </div>
        </div>
    </section>
);


// --- Stats Section (Reused) ---
const Stats = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 relative">
             <DottedGrid className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            <div className="bg-white shadow-lg rounded-lg p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div><p className="text-4xl font-bold text-brand-purple">99%</p><p className="mt-2 text-gray-500">Job Success on Upwork</p></div>
                <div><p className="text-4xl font-bold text-brand-purple">150+</p><p className="mt-2 text-gray-500">Team Members</p></div>
                <div><p className="text-4xl font-bold text-brand-purple">19 years</p><p className="mt-2 text-gray-500">On the market</p></div>
                <div><p className="text-4xl font-bold text-brand-purple">1400+</p><p className="mt-2 text-gray-500">Completed Projects</p></div>
            </div>
        </div>
    </section>
);


// --- Testimonials Section (Reused) ---
const Testimonials = () => (
  <section className="bg-brand-purple text-white py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">Don't take it from us. Hear from our clients:</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Quote className="text-violet-400 -ml-4" size={60} fill="currentColor"/>
          <blockquote className="mt-4 text-lg leading-relaxed text-violet-100">
            We moved from another agency to Polcode. They have a good track record and reviews, their sales process was great, and the audit was impressive. There's no doubt that Polcode saved the project. We continue to be really pleased with our results. The project is really big, and there's a lot of technology inside. We make progress easily and new features keep coming so the code quality is really satisfying.
          </blockquote>
          <div className="mt-8 flex justify-between items-center">
             <div className="flex items-center gap-4"><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button></div>
             <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="w-2 h-2 bg-violet-400 rounded-full"></span>))}</div>
          </div>
        </div>
        <div className="flex justify-end">
           <div className="text-right"><p className="text-xl font-semibold">Jan Donmez</p><p className="text-violet-200">Founder & CEO at AppyBee</p></div>
           <div className="ml-6 flex items-center justify-center bg-white rounded-full w-20 h-20"><Image src="/appybee-logo-color.svg" width={60} height={60} alt="AppyBee Logo"/></div>
        </div>
      </div>
    </div>
  </section>
);


// --- Blog Section (Reused) ---
const Blog = () => {
    const blogPosts = [
        "Magento 2.4.5 End of Support: What It Means and How to Decide What Comes Next",
        "Why We Said Goodbye to Time & Material in Managed Delivery and What It Means for You",
        "The Versatility of Python - What Makes It Stand Out?",
        "Is Your E-commerce Business Ready for the European Accessibility Act?",
        "Legacy Software and Security Risks: Why Regular Audits Are Your Best Defense",
        "Magento Enters the SaaS Arena: What Adobe Commerce as a Service Means for Your Business"
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
                <div className="relative">
                    <DottedGrid className="top-0 left-0 -translate-x-1/2" />
                    <h2 className="text-4xl font-bold text-brand-dark">Get the latest news from our blog</h2>
                    <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">SEE ALL POSTS <ArrowRight /></a>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    {blogPosts.map((title, i) => (<a key={i} href="#" className="font-semibold text-gray-700 hover:text-brand-purple">{title}</a>))}
                </div>
            </div>
        </section>
    );
};


// --- Contact CTA (Reused with updated title) ---
const ContactCTA = () => (
    <section className="bg-white">
        <div className="container mx-auto grid lg:grid-cols-2">
            <div className="bg-gray-50 p-16">
                <h2 className="text-4xl font-bold text-brand-dark">Ready to talk about your next big web project?</h2>
                <div className="mt-12 space-y-10">
                    <div className="flex gap-6">
                        <p className="text-6xl font-bold text-gray-300">1.</p>
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-dark">Tell us more</h3>
                            <p className="mt-2 text-gray-600">Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p>
                            <button className="mt-4 bg-brand-purple text-white font-semibold py-2 px-6 rounded-md">CONTACT US</button>
                        </div>
                    </div>
                    <div className="flex gap-6"><p className="text-6xl font-bold text-gray-300">2.</p><div><h3 className="text-2xl font-semibold text-brand-dark">Strategic Planning</h3><p className="mt-2 text-gray-600">We go through recommended tools, technologies and frameworks that best fit the challenges you face.</p></div></div>
                    <div className="flex gap-6"><p className="text-6xl font-bold text-gray-300">3.</p><div><h3 className="text-2xl font-semibold text-brand-dark">Workshop Kickoff</h3><p className="mt-2 text-gray-600">Once we arrange the formalities, you can meet your Polcode team members and we’ll begin developing your next project.</p></div></div>
                </div>
            </div>
            <div className="hidden lg:block relative"><Image src="/contact-cta-image.png" alt="Team brainstorming on a whiteboard" layout="fill" objectFit="cover" /></div>
        </div>
    </section>
);


// --- All Services Section (Reused from first page) ---
const ServiceCard = ({ title, items }: { title: string; items: string[] }) => (
  <a href="#" className="group bg-white p-8 border border-gray-200 hover:border-brand-purple hover:shadow-xl transition-all rounded-lg flex flex-col">
    <h3 className="text-2xl font-semibold text-brand-dark">{title}</h3>
    <div className="mt-4 text-gray-500 space-y-1 flex-grow">{items.map(item => <p key={item}>{item}</p>)}</div>
    <div className="mt-6 self-end"><ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors" /></div>
  </a>
);

const AllServices = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6 text-center relative">
      <DottedGrid className="bottom-0 left-0 -translate-x-1/2 translate-y-1/4" />
      <h2 className="text-4xl font-bold text-brand-dark">Our custom software development services</h2>
      <p className="mt-6 max-w-4xl mx-auto text-gray-600">Polcode is home to full-service design and development experts. Our teams cover an extensive range of end-to-end services to help you build, grow and scale your internet business.</p>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <ServiceCard title="Web Development" items={["Frontend", "Backend"]} />
        <ServiceCard title="Frontend Development" items={["React", "Vue.js", "Angular"]} />
        <ServiceCard title="Backend Development" items={["Symfony Laravel PHP", "Python Node.js", "Ruby on Rails Golang"]} />
        <ServiceCard title="eCommerce Development" items={["Shopify", "WooCommerce", "Magento"]} />
        <ServiceCard title="Mobile Development" items={["Hybrid Apps", "React Native"]} />
        <ServiceCard title="Product Design" items={["UI", "UX"]} />
      </div>
    </div>
  </section>
);


// --- Footer (Reused) ---
const Footer = () => (
    <footer className="bg-white pt-20">
        <div className="container mx-auto px-6 relative">
            <DottedGrid className="top-0 right-0" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <div className="xl:col-span-2">
                     <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg>
                    <div className="mt-4 space-y-2 text-gray-600 text-sm"><p>Polcode Sp. z o.o.</p><p>Al. Jerozolimskie 94</p><p>00-807 Warszawa</p><p>Poland</p><p>VAT-ID: PL7010440690</p></div><a href="mailto:sales@polcode.com" className="mt-4 inline-block text-brand-purple font-semibold text-sm">sales@polcode.com</a>
                </div>
                <div><h4 className="font-bold text-gray-800">Company</h4><div className="mt-4 flex flex-col space-y-2 text-sm"><a href="#" className="text-gray-600 hover:text-brand-purple">About</a><a href="#" className="text-gray-600 hover:text-brand-purple">Our process</a><a href="#" className="text-gray-600 hover:text-brand-purple">Workshops</a><a href="#" className="text-gray-600 hover:text-brand-purple">Projects</a><a href="#" className="text-gray-600 hover:text-brand-purple">Blog</a><a href="#" className="text-gray-600 hover:text-brand-purple">Careers</a><a href="#" className="text-gray-600 hover:text-brand-purple">Contact Us</a><a href="#" className="text-gray-600 hover:text-brand-purple">Privacy Policy</a><a href="#" className="text-gray-600 hover:text-brand-purple">Tech Radar</a></div></div>
                <div><h4 className="font-bold text-gray-800">Services</h4><div className="mt-4 flex flex-col space-y-2 text-sm"><a href="#" className="text-gray-600 hover:text-brand-purple">Web Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Mobile Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Product Design</a><a href="#" className="text-gray-600 hover:text-brand-purple">Software Audit</a><a href="#" className="text-gray-600 hover:text-brand-purple">Team Extension</a><a href="#" className="text-gray-600 hover:text-brand-purple">Frontend Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Backend Development</a></div></div>
                <div className="md:col-span-2 lg:col-span-1 space-y-6 text-sm">
                     <div><p className="font-bold text-gray-800 text-lg">Clutch</p><div className="flex items-center gap-1 mt-1">{Array.from({length: 5}).map((_, i) => <Star key={i} size={20} className="text-red-500 fill-current" />)}<span className="font-bold text-gray-800 ml-1">5</span></div></div>
                     <div><p className="font-bold text-gray-800 text-lg">Upwork</p><p className="text-gray-600 mt-1">1MLN+ Logged Hours</p><p className="text-gray-600">99% Job Success</p></div>
                     <div className="flex items-center gap-4"><div className="font-semibold text-gray-800">Twilio</div><p className="text-gray-600">Technology Partner</p></div>
                     <div className="flex items-center gap-4"><div className="font-semibold text-gray-800">Adobe <span className="block font-normal">Solution Partner <span className="text-xs">BRONZE</span></span></div><p className="text-gray-600">Technology Partner</p></div>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t"><div className="container mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500"><p>2025 Polcode Sp. z o.o. All rights reserved.</p><div className="flex items-center gap-4"><a href="#" className="hover:text-brand-purple"><Facebook size={20}/></a><a href="#" className="hover:text-brand-purple"><Linkedin size={20}/></a><a href="#" className="hover:text-brand-purple"><Instagram size={20}/></a></div></div></div>
    </footer>
);

// --- Floating Chat Icon ---
const ChatWidget = () => (
  <button className="fixed bottom-6 right-6 bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-violet-700 transition-colors z-40">
    <MessageSquare size={32} />
  </button>
);


// --- Main Page ---
export default function Home() {
    const frontendTechs = [
      { name: 'Angular', logoSrc: '/logos/angular.svg' },
      { name: 'React', logoSrc: '/logos/react.svg' },
      { name: 'Vue.js', logoSrc: '/logos/vue.svg' },
    ];

    const backendTechs = [
      { name: 'PHP', logoSrc: '/logos/php.svg' },
      { name: 'Symfony', logoSrc: '/logos/symfony.svg' },
      { name: 'Laravel', logoSrc: '/logos/laravel.svg' },
      { name: 'Python', logoSrc: '/logos/python.svg' },
      { name: 'Ruby on Rails', logoSrc: '/logos/rails.svg' },
      { name: 'Golang', logoSrc: '/logos/go.svg' },
    ];

  return (
    <div className="bg-white">
      <Header />
      <main>
        <WebDevHero />
        <div className="bg-gray-50/70 border-y border-gray-200/80">
          <DottedGrid className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />
          <TechStack 
            title="Our frontend technology stack"
            description="Build or rescue your outdated frontend with ultra-responsive interfaces that can handle modern user interactions without losing out on performance. We work exclusively with mature and open-source frontend technologies that flex based on whatever is best for your particular project."
            buttonText="FRONTEND DEVELOPMENT"
            techs={frontendTechs}
          />
          <DottedGrid className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
          <TechStack 
            title="Our backend technology stack"
            description="Choosing the perfect backend technology is crucial to your business's success. We build extensible cloud-based backend solutions for mobile and web apps that scale together with your growing business needs—so you can ship software quickly and within budget."
            buttonText="BACKEND DEVELOPMENT"
            techs={backendTechs}
            reversed={true}
          />
        </div>
        <ValueProps />
        <Process />
        <WebDevProjects />
        <Stats />
        <Testimonials />
        <Blog />
        <ContactCTA />
        <AllServices />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}