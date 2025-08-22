// app/page.tsx
import Image from "next/image";
import {
  ChevronDown, ArrowRight, ArrowLeft, Quote, MessageSquare, Star,
  Zap, BookOpen, Heart, Search, Shuffle,
} from "lucide-react";
import React, { ReactNode } from 'react';

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
                  {serviceLinks.map((link) => (<a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-purple">{link.name}</a>))}
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

// --- Backend Hero Section ---
const BackendHero = () => (
    <section className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <h1 className="text-5xl font-bold text-brand-dark leading-tight">
            Backend Development Services
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Choosing the right backend system can make or break any business. We choose the perfect technology for your needs, then build for seamless delivery.
          </p>
          <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">
            START YOUR PROJECT
          </button>
          <DottedGrid className="bottom-0 left-0 translate-y-full" />
        </div>
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-brand-purple opacity-70 z-20"></div>
          <Image src="/backend-hero.png" alt="Developer with glasses at a computer" layout="fill" objectFit="cover" className="z-10" />
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-brand-purple" style={{ width: '50%' }}></div>
        </div>
      </div>
    </section>
);

// --- Backend Stack Section ---
const TechStackCard = ({ logo, name, description }: {logo: string, name: string, description: string}) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border border-transparent hover:border-brand-purple transition-all text-left">
    <Image src={logo} alt={`${name} logo`} width={32} height={32} />
    <h3 className="mt-4 text-2xl font-semibold text-brand-dark">{name}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);
const BackendStack = () => {
    const techs = [
        { logo: '/logos/php.svg', name: 'PHP', description: 'The popular choice for fast, all-purpose backend solutions, APIs and accessible services.' },
        { logo: '/logos/symfony.svg', name: 'Symfony', description: 'A tried-and-true base for backend architecture.' },
        { logo: '/logos/laravel.svg', name: 'Laravel', description: 'A great pairing with React with amazing integration and beautiful inline template workflows.' },
        { logo: '/logos/python.svg', name: 'Python', description: 'An enormous all-in-one language that comes with endless libraries and add-ons.' },
        { logo: '/logos/rails.svg', name: 'Ruby on Rails', description: 'A mature, open-source framework that makes spinning up a web app really ridiculously fast.' },
        { logo: '/logos/go.svg', name: 'Golang', description: 'The perfect choice for high productivity and modular design, fit for heavy-load websites.' },
    ];
    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-brand-dark">Our backend technology stack</h2>
                <div className="relative mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techs.map(tech => <TechStackCard key={tech.name} {...tech} />)}
                    </div>
                    <DottedGrid className="bottom-0 left-0 -translate-x-1/2" />
                </div>
                <button className="mt-16 bg-brand-purple text-white font-semibold py-3 px-10 rounded-md hover:bg-violet-700 transition-colors">
                    LET'S TALK
                </button>
            </div>
        </section>
    );
};

// --- Backend Strengths Section ---
const BackendStrengths = () => {
    const strengths = ["Multitenancy", "Data processing", "Serverless", "Microservices", "AWS", "Google Cloud", "Refactoring", "SaaS"];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-brand-dark">Our Backend Development Strengths</h2>
                    <p className="mt-6 text-gray-600">Polcode delivers high-quality code for a variety of backend languages. We're comfortable with designing and building services that are configurable and scalable around the globe.</p>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {strengths.map(s => <div key={s} className="bg-gray-100 p-4 rounded-md text-center font-medium text-gray-800">{s}</div>)}
                    </div>
                    <DottedGrid className="bottom-0 right-0 translate-x-1/4 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
};

// --- Start CTA (Backend version) ---
const StartCta = () => (
    <section className="bg-brand-purple text-white">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <h2 className="text-4xl font-bold">Not sure where to start?</h2>
          <p className="mt-4 text-xl text-violet-200">No worries! Get help from Polcode's backend engineers.</p>
          <button className="mt-8 border border-white text-white font-semibold py-3 px-10 rounded-md hover:bg-white/10 transition-colors">
            LET'S TALK
          </button>
        </div>
        <div className="relative h-64 md:h-full -mb-16 -mt-16 md:m-0">
            <Image src="/start-cta-person.png" alt="Smiling business professional" layout="fill" objectFit="contain" objectPosition="bottom" />
        </div>
      </div>
    </section>
);


// --- Backend Case Study ---
const BackendCaseStudy = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/appybee-logo-grey.svg" alt="AppyBee Logo" width={100} height={40} />
          <h3 className="mt-6 text-3xl font-bold text-brand-dark">Rebuilding a Powerful Online Fitness Appointment Booking Platform</h3>
          <a href="#" className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-purple">SEE LIVE PROJECT <ArrowRight /></a>
          <div className="mt-6 grid grid-cols-2 gap-8">
            <div><p className="text-sm uppercase text-gray-500">Industry</p><p className="font-semibold text-gray-800">Booking platforms</p></div>
            <div><p className="text-sm uppercase text-gray-500">Region</p><p className="font-semibold text-gray-800">Netherlands</p></div>
          </div>
          <div className="mt-6"><p className="text-sm uppercase text-gray-500">Technologies</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {['PHP', 'Symfony', 'React Native', 'React', 'PWA'].map(tech => (
                <span key={tech} className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700">{tech}</span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-gray-600">AppyBee is a bespoke online booking platform for personal trainers and athletic entrepreneurs to save 80% of their time spent managing their business. With an ever-growing system of reservations, payments, scheduling, and automated reminders, they reached out to Polcode to overhaul their website, mobile apps and codebase. Polcode extended the AppyBee team with up to 10 specialists to make their online booking platform a relaunch fit for success.</p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">CHECK CASE STUDY <ArrowRight /></a>
        </div>
        <div className="relative h-[500px] bg-brand-purple p-8">
            <DottedGrid className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />
            <Image src="/project-fitness.png" alt="Fitness platform interface" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="border border-brand-purple text-brand-purple font-semibold py-3 px-10 rounded-md hover:bg-brand-purple hover:text-white transition-colors">
            SEE ALL CASE STUDIES
        </button>
      </div>
    </div>
  </section>
);


// --- Hire Backend Developers ---
const HireBackendDevelopers = () => (
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[350px]">
                <div className="absolute inset-0 bg-brand-purple opacity-70 z-20"></div>
                <Image src="/hire-backend-dev.png" alt="A rubber duck with a Polcode sticker" layout="fill" objectFit="cover" className="z-10"/>
                <DottedGrid className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">Hire backend developers you can trust</h2>
                <p className="mt-6 text-gray-600">Your customers and employees deserve the best web experiences from your business. Our team of full-stack web developers, UI/UX designers, project managers and business analysts work with you to create powerful, high-performance applications.</p>
                <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">
                    LEARN MORE ABOUT OUR TEAM
                </button>
            </div>
        </div>
    </section>
);


// --- REUSED COMPONENTS from previous requests ---
const Process = () => { const ProcessDiagram = () => ( <div className="relative w-[450px] h-[450px] mx-auto"> <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div> <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"> <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div> <p className="mt-2 font-semibold text-brand-dark">Workshops</p> </div> <div className="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/2 text-center"> <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div> <p className="mt-2 font-semibold text-brand-dark">Kick-off</p> </div> <div className="absolute bottom-1/4 right-0 translate-x-1/4 translate-y-1/2 text-center"> <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div> <p className="mt-2 font-semibold text-brand-dark">UX/UI Design</p> </div> <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center"> <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18-6-6 6-6"/><path d="M8 6h10"/></svg></div> <p className="mt-2 font-semibold text-brand-dark">Development</p> </div> <div className="absolute bottom-1/4 left-0 -translate-x-1/4 translate-y-1/2 text-center"> <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center"><svg className="text-brand-purple" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 1-3-3V8a3 3 0 0 1-3-3H2a7 7 0 0 0 7 7 3 3 0 0 1 3 3v4Z"/><path d="M21 21c-1.5-1.5-2-4-3-6"/><path d="m18 13-1.5-1.5"/><circle cx="8" cy="8" r="2"/></svg></div> <p className="mt-2 font-semibold text-brand-dark">Delivery & Support</p> </div> </div> ); return ( <section className="bg-gray-50 py-24"> <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"> <div> <h2 className="text-4xl font-bold text-brand-dark">Our Backend Development Process</h2> <p className="mt-6 text-gray-600">We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.</p> <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">SEE HOW WE WORK <ArrowRight /></a> </div> <div><ProcessDiagram /></div> </div> </section> ); };
const Stats = () => ( <section className="py-20 bg-white"> <div className="container mx-auto px-6 relative"> <DottedGrid className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" /> <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> <div><p className="text-4xl font-bold text-brand-purple">99%</p><p className="mt-2 text-gray-500">Job Success on Upwork</p></div> <div><p className="text-4xl font-bold text-brand-purple">150+</p><p className="mt-2 text-gray-500">Team Members</p></div> <div><p className="text-4xl font-bold text-brand-purple">19 years</p><p className="mt-2 text-gray-500">On the market</p></div> <div><p className="text-4xl font-bold text-brand-purple">1400+</p><p className="mt-2 text-gray-500">Completed Projects</p></div> </div> </div> </section> );
const Testimonials = () => ( <section className="bg-brand-purple text-white py-20"> <div className="container mx-auto px-6"> <h2 className="text-4xl font-bold mb-12">What our clients thinks about us?</h2> <div className="grid md:grid-cols-2 gap-12 items-center"> <div> <Quote className="text-violet-400 -ml-4" size={60} fill="currentColor"/> <blockquote className="mt-4 text-lg leading-relaxed text-violet-100"> We moved from another agency to Polcode. They have a good track record and reviews, their sales process was great, and the audit was impressive. There's no doubt that Polcode saved the project. We continue to be really pleased with our results. The project is really big, and there's a lot of technology inside. We make progress easily and new features keep coming so the code quality is really satisfying. </blockquote> <div className="mt-8 flex justify-between items-center"> <div className="flex items-center gap-4"><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button></div> <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="w-2 h-2 bg-violet-400 rounded-full"></span>))}</div> </div> </div> <div className="flex justify-end"> <div className="text-right"><p className="text-xl font-semibold">Jan Donmez</p><p className="text-violet-200">Founder & CEO at AppyBee</p></div> <div className="ml-6 flex items-center justify-center bg-white rounded-full w-20 h-20"><Image src="/appybee-logo-color.svg" width={60} height={60} alt="AppyBee Logo"/></div> </div> </div> </div> </section> );
const Excellence = () => { const ExcellenceCard = ({ icon, title, children }: {icon: ReactNode, title: string, children: ReactNode}) => ( <div> <div className="text-brand-purple">{icon}</div> <h3 className="mt-4 text-xl font-bold text-brand-dark">{title}</h3> <p className="mt-2 text-gray-600">{children}</p> </div> ); return ( <section className="py-24 bg-white"> <div className="container mx-auto px-6 relative"> <DottedGrid className="top-0 right-0 -translate-y-1/2"/> <h2 className="text-4xl font-bold text-brand-dark">Here’s how we deliver excellence</h2> <p className="mt-4 text-gray-600 max-w-2xl">Make your next web project go smoothly with our battle-tested web development services.</p> <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12"> <ExcellenceCard icon={<Zap size={32}/>} title="Agility">Our development teams use an agile approach to deliver continuous, quality results.</ExcellenceCard> <ExcellenceCard icon={<BookOpen size={32}/>} title="Planning">Get roadmaps and technical decisions made with accurate effort, cost and time estimates.</ExcellenceCard> <ExcellenceCard icon={<Star size={32}/>} title="Quality">We perform the latest in automated reviews to ensure we ship only the best quality code.</ExcellenceCard> <ExcellenceCard icon={<Heart size={32}/>} title="Skillset">Polcode developers use the latest trends, best practices and frameworks to get work done.</ExcellenceCard> <ExcellenceCard icon={<Search size={32}/>} title="Transparency">An open book of logged hours and see-through web development lifecycle.</ExcellenceCard> <ExcellenceCard icon={<Shuffle size={32}/>} title="Flexibility">We adapt to your workflow processes, project management tools and chat channels.</ExcellenceCard> </div> </div> </section> ); };
const OnDemandCta = () => ( <section className="py-20 bg-gray-50"> <div className="container mx-auto px-6 text-center"> <h2 className="text-4xl font-bold text-brand-dark">Developers on-demand</h2> <p className="mt-4 text-gray-600 max-w-xl mx-auto">Polcode gives you the flexibility to hire as many developers as you need, or let us run your whole project with a complete agile team.</p> <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors"> SEE TEAM EXTENSION OFFER </button> </div> </section> );
const ContactCTA = () => ( <section className="bg-brand-purple text-white"> <div className="container mx-auto grid lg:grid-cols-2"> <div className="p-16"> <h2 className="text-4xl font-bold">Ready to talk about your backend project?</h2> <div className="mt-12 space-y-10"> <div className="flex gap-6"> <p className="text-6xl font-bold text-violet-400">1.</p> <div> <h3 className="text-2xl font-semibold">Tell us more</h3> <p className="mt-2 text-violet-200">Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p> <button className="mt-4 bg-white text-brand-purple font-semibold py-2 px-6 rounded-md">CONTACT US</button> </div> </div> <div className="flex gap-6"><p className="text-6xl font-bold text-violet-400">2.</p><div><h3 className="text-2xl font-semibold">Strategic Planning</h3><p className="mt-2 text-violet-200">We go through recommended tools, technologies and frameworks that best fit the challenges you face.</p></div></div> <div className="flex gap-6"><p className="text-6xl font-bold text-violet-400">3.</p><div><h3 className="text-2xl font-semibold">Workshop Kickoff</h3><p className="mt-2 text-violet-200">Once we arrange the formalities, you can meet your Polcode team members and we’ll begin developing your next project.</p></div></div> </div> </div> <div className="hidden lg:block relative"><Image src="/contact-cta-image.png" alt="Team brainstorming on a whiteboard" layout="fill" objectFit="cover" /></div> </div> </section> );
const AllServices = () => { const ServiceCard = ({ title, items }: { title: string; items: string[] }) => ( <a href="#" className="group bg-white p-8 border border-gray-200 hover:border-brand-purple hover:shadow-xl transition-all rounded-lg flex flex-col"> <h3 className="text-2xl font-semibold text-brand-dark">{title}</h3> <div className="mt-4 text-gray-500 space-y-1 flex-grow">{items.map(item => <p key={item}>{item}</p>)}</div> <div className="mt-6 self-end"><ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors" /></div> </a> ); return( <section className="py-24 bg-gray-50"> <div className="container mx-auto px-6 text-center"> <h2 className="text-4xl font-bold text-brand-dark">Our custom software development services</h2> <p className="mt-6 max-w-4xl mx-auto text-gray-600">Polcode is home to full-service design and development experts. Our teams cover an extensive range of end-to-end services to help you build, grow and scale your internet business.</p> <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"> <ServiceCard title="Web Development" items={["Frontend", "Backend"]} /> <ServiceCard title="Frontend Development" items={["React", "Vue.js", "Angular"]} /> <ServiceCard title="Backend Development" items={["Symfony Laravel PHP", "Python Node.js", "Ruby on Rails Golang"]} /> <ServiceCard title="eCommerce Development" items={["Shopify", "WooCommerce", "Magento"]} /> <ServiceCard title="Mobile Development" items={["Hybrid Apps", "React Native"]} /> <ServiceCard title="Product Design" items={["UI", "UX"]} /> </div> </div> </section> );};
const Footer = () => ( <footer className="bg-white pt-20"> <div className="container mx-auto px-6 relative"> <DottedGrid className="top-0 right-0" /> <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8"> <div className="xl:col-span-2"> <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg> <div className="mt-4 space-y-2 text-gray-600 text-sm"><p>Polcode Sp. z o.o.</p><p>Al. Jerozolimskie 94</p><p>00-807 Warszawa</p><p>Poland</p><p>VAT-ID: PL7010440690</p></div><a href="mailto:sales@polcode.com" className="mt-4 inline-block text-brand-purple font-semibold text-sm">sales@polcode.com</a> </div> <div><h4 className="font-bold text-gray-800">Company</h4><div className="mt-4 flex flex-col space-y-2 text-sm"><a href="#" className="text-gray-600 hover:text-brand-purple">About</a><a href="#" className="text-gray-600 hover:text-brand-purple">Our process</a><a href="#" className="text-gray-600 hover:text-brand-purple">Workshops</a><a href="#" className="text-gray-600 hover:text-brand-purple">Projects</a><a href="#" className="text-gray-600 hover:text-brand-purple">Blog</a><a href="#" className="text-gray-600 hover:text-brand-purple">Careers</a><a href="#" className="text-gray-600 hover:text-brand-purple">Contact Us</a><a href="#" className="text-gray-600 hover:text-brand-purple">Privacy Policy</a><a href="#" className="text-gray-600 hover:text-brand-purple">Tech Radar</a></div></div> <div><h4 className="font-bold text-gray-800">Services</h4><div className="mt-4 flex flex-col space-y-2 text-sm"><a href="#" className="text-gray-600 hover:text-brand-purple">Web Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Mobile Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Product Design</a><a href="#" className="text-gray-600 hover:text-brand-purple">Software Audit</a><a href="#" className="text-gray-600 hover:text-brand-purple">Team Extension</a><a href="#" className="text-gray-600 hover:text-brand-purple">Frontend Development</a><a href="#" className="text-gray-600 hover:text-brand-purple">Backend Development</a></div></div> <div className="md:col-span-2 lg:col-span-1 space-y-6 text-sm"> <div><p className="font-bold text-gray-800 text-lg">Clutch</p><div className="flex items-center gap-1 mt-1">{Array.from({length: 5}).map((_, i) => <Star key={i} size={20} className="text-red-500 fill-current" />)}<span className="font-bold text-gray-800 ml-1">5</span></div></div> <div><p className="font-bold text-gray-800 text-lg">Upwork</p><p className="text-gray-600 mt-1">1MLN+ Logged Hours</p><p className="text-gray-600">99% Job Success</p></div> <div className="flex items-center gap-4"><div className="font-semibold text-gray-800">Twilio</div><p className="text-gray-600">Technology Partner</p></div> <div className="flex items-center gap-4"><div className="font-semibold text-gray-800">Adobe <span className="block font-normal">Solution Partner <span className="text-xs">BRONZE</span></span></div><p className="text-gray-600">Technology Partner</p></div> </div> </div> </div> <div className="mt-16 border-t"><div className="container mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500"><p>2025 Polcode Sp. z o.o. All rights reserved.</p><div className="flex items-center gap-4">...</div></div></div> </footer> );
const ChatWidget = () => ( <button className="fixed bottom-6 right-6 bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-violet-700 transition-colors z-40"> <MessageSquare size={32} /> </button> );


// --- Main Page ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <BackendHero />
        <BackendStack />
        <BackendStrengths />
        <StartCta />
        <Process />
        <BackendCaseStudy />
        <Stats />
        <HireBackendDevelopers />
        <Testimonials />
        <Excellence />
        <OnDemandCta />
        <ContactCTA />
        <AllServices />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}