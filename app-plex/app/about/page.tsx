import Image from "next/image";
import {
  ChevronDown, ArrowRight, ArrowLeft, Quote, MessageSquare, Star, Linkedin, Mail,
  ThumbsUp, MessageCircle, Rocket, Star as StarIcon, Eye, Shield, BookOpen, Users, Heart, Clock as ClockIcon
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

// --- Header Component (Active State on About) ---
const Header = () => {
  return ( <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50"> <div className="container mx-auto px-6 py-4 flex justify-between items-center"> <div className="flex items-center gap-8"> <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg> <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 uppercase"> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">Services <ChevronDown size={16} /></a> <a href="#" className="hover:text-brand-purple">Projects</a> <a href="#" className="text-brand-purple font-semibold">About</a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">How We Work <ChevronDown size={16} /></a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">Blog & More <ChevronDown size={16} /></a> <a href="#" className="hover:text-brand-purple">Careers</a> </nav> </div> <a href="#" className="hidden md:inline-block border border-gray-300 rounded-md px-6 py-2 text-sm font-semibold text-brand-dark hover:bg-gray-100 transition-colors">LET'S TALK</a> </div> </header> );
};

// --- About Hero Section ---
const AboutHero = () => (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-brand-dark leading-tight">Meet the Polcode Team</h1>
          <p className="mt-6 text-lg text-gray-600">We're an award-winning developer agency, trusted worldwide for our remote services in web, mobile and team extension projects.</p>
        </div>
        <div className="relative h-[400px]">
          <DottedGrid className="bottom-0 left-0" />
          <div className="absolute inset-0 bg-brand-purple opacity-70 z-20"></div>
          <Image src="/about-hero.png" alt="Polcode team looking at a laptop" layout="fill" objectFit="cover" className="z-10" />
        </div>
      </div>
    </section>
);

// --- Rooted in Code Section ---
const RootedSection = () => {
    const awards = [ "/awards/clutch-magento-2024-dark.svg", "/awards/clutch-poland-2024-dark.svg", "/awards/clutch-magento-2024-dark.svg", "/awards/clutch-php-2024-dark.svg", "/awards/clutch-champion-dark.svg", "/awards/clutch-global-dark.svg", ];
    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-brand-dark">Our team is rooted in code and design</h2>
                <p className="mt-4 text-gray-600 max-w-4xl mx-auto">Organizations of every size rely on Polcode to start, run and scale their digital journeys. Our mission is to design, build and deliver your vision through highly usable products, with technology and design trends at the absolute edge of what’s possible.</p>
                <div className="mt-12 flex justify-center items-center flex-wrap gap-8">
                    {awards.map((src, i) => <Image key={i} src={src} alt={`Award badge ${i+1}`} width={100} height={100} />)}
                    <div className="p-4 bg-white shadow-lg rounded-md">
                        <Image src="/awards/upwork-99.svg" alt="Upwork 99% Job Success" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Teamwork Section ---
const TeamworkSection = () => {
    const values = [
        { icon: <ThumbsUp />, title: "Keeping promises", text: "Our expert coders and designers have decades of experience in estimating project deliverables." },
        { icon: <MessageCircle />, title: "Easy communication", text: "Soft skills are a priority in our work ethic, fluent in English and always there for daily stand-ups." },
        { icon: <Rocket />, title: "Personal growth", text: "Our developers regularly learn, train and attend workshops to keep up with the latest technologies." },
        // ** FIX IS HERE: <ClockIcon /> is used instead of <Clock /> **
        { icon: <ClockIcon />, title: "Quick turnarounds", text: "It takes a few weeks to kick off your project with Polcode, instead of costly, lengthy hiring processes." },
        { icon: <StarIcon />, title: "Doing things your way", text: "We are happy to use whichever project management tools or collaboration software you prefer" },
        { icon: <Eye />, title: "Transparency", text: "We retain only mid-to-senior level developers who deliver hourly logs and precise project estimates." },
    ];
    return (
        <section className="bg-brand-purple text-white">
            <div className="container mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-bold">Teamwork is just as important as our talent.</h2>
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {values.map(v => (
                            <div key={v.title}>
                                <div className="text-violet-300">{v.icon}</div>
                                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                                <p className="mt-2 text-violet-200">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-full min-h-[400px]">
                    <DottedGrid className="top-0 right-0 -translate-y-1/4" />
                    <Image src="/teamwork-image.png" alt="Two Polcode team members" layout="fill" objectFit="cover" className="rounded-lg"/>
                </div>
            </div>
        </section>
    );
};

// --- Authentic Section ---
const AuthenticSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px]">
                <DottedGrid className="top-0 left-0 -translate-x-1/4" />
                <Image src="/authentic-team.png" alt="Team collaborating" layout="fill" objectFit="cover" className="rounded-lg" />
                <DottedGrid className="bottom-0 right-0 translate-x-1/4" />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">We are authentic</h2>
                <h3 className="mt-6 text-xl font-semibold text-gray-800">When you know who you’re truly working with, it’s easy to build trust and reliability.</h3>
                <p className="mt-4 text-gray-600">Unlike other remote software development firms, we don’t hide who we are behind a screen or through managers, and we’re not a database of random outsourced agents.</p>
                <p className="mt-4 text-gray-600">You’ll interact with your hired developer teams daily. Get to know them, their work styles, personality and make the Polcode family a natural extension of your company.</p>
            </div>
        </div>
    </section>
);

// --- Journey Timeline ---
const JourneyTimeline = () => {
    const events = [
        { year: "2006", title: "3 developers and a dream", text: "Founded in 2006, a group of 3 passionate and ambitious developers from Poland have a dream to build a world-leading developer house. The first clients are US-based, in need of senior PHP specialists.", image: "/journey-1.png" },
        { year: "2007 - 2009", title: "New frontiers", text: "Magento, Ruby on Rails, Symfony appear on the market as popular tools for the tech industry. A rapidly-growing team means Polcode business development center to handle incoming project requests.", image: null },
        { year: "2010", title: "Polcode officially expands", text: "We finally adopt the ‘Polcode’ brand, and open offices in the cities of Kraków and Łódź, increasing employment by 100% year-on-year, and revenues grow by 211%. Our Project Management services launch to accomodate.", image: "/journey-2.png" },
        { year: "2011 - 2014", title: "Meeting the modern web", text: "A new wave of technologies appear like HTML5 and Laravel, paving the way to powerful web we know today. Polcode becomes a joint-stock company, and moves to a new office headquarters in Warsaw.", image: null },
        { year: "2016", title: "Top-rated Development", text: "Polcode is named a top-rated developer worldwide for the first time, boasting a 99% job success rate on Upwork. Compared to 2015, New Business records 211% increase in requests for proposals.", image: "/journey-3.png" },
        { year: "2018", title: "800+ clients served globally", text: "With over 150 specialists on our team, we’re able to serve the demands for small startups and large-scale enterprise projects. 1200 client projects have been successfully completed.", image: null },
        { year: "TODAY", title: "Rapid growth and Awards", text: "Polcode is listed as Top Developer in Poland on Clutch.co, joining an exclusive group of B2B service providers around the world.", image: null },
    ];
    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-brand-dark text-center">Our journey beyond a decade</h2>
                <div className="mt-16">
                    {events.map((event, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center my-8">
                            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                {event.image && <Image src={event.image} alt={event.title} width={600} height={400} className="rounded-lg shadow-lg"/>}
                            </div>
                            <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <div className="absolute top-0 bottom-0 w-0.5 bg-brand-purple left-[-3rem]"></div>
                                <div className="absolute top-1 w-4 h-4 rounded-full bg-white border-2 border-brand-purple left-[-3rem] -translate-x-1/2"></div>
                                <p className="font-bold text-gray-500">{event.year}</p>
                                <h3 className="mt-2 text-2xl font-bold text-brand-dark">{event.title}</h3>
                                <p className="mt-4 text-gray-600">{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Excellence Section ---
const ExcellenceSection = () => {
    const items = [
        { icon: <Shield />, title: "Bulletproof Code Review", text: "Streamlines the process of our software development and reduces mistakes." },
        { icon: <BookOpen />, title: "Documentation & Transparency", text: "Ensures that developers and stakeholders are all moving in the same direction." },
        { icon: <Users />, title: "Always Agile", text: "Iterative approaches ensure we always deliver value to clients without headaches." },
        { icon: <Heart />, title: "Expert Advice", text: "We aren’t just coders. We provide insights that lead to better business outcomes." },
        { icon: <Users />, title: "High Employee Retention", text: "Developers you know will be there for you down the road, whenever you need them." },
        { icon: <ClockIcon />, title: "Timely Communication", text: "Everything we do is about keeping you well informed about progress and results." },
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 relative">
                <DottedGrid className="top-0 right-0 -translate-y-1/2" />
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-brand-dark">Here's how we deliver excellence</h2>
                    <p className="mt-4 text-gray-600">Realize your digital business ideas, or extend your technical teams with our remote services.</p>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    {items.map(item => (
                        <div key={item.title}>
                            <div className="text-brand-purple inline-block">{item.icon}</div>
                            <h3 className="mt-4 text-xl font-bold text-brand-dark">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Management Team Section ---
const ManagementTeam = () => {
    const team = [
        { name: "Wojciech Hyzopski", role: "CEO", img: "/team/wojciech.png" },
        { name: "Sylwia Maslowska", role: "CSO", img: "/team/sylwia.png" },
        { name: "Karina Przybylek", role: "COO", img: "/team/karina.png" },
        { name: "Jerzy Zawadzki", role: "CTO", img: "/team/jerzy.png" },
    ];
    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6 text-center">
                <DottedGrid className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <h2 className="text-4xl font-bold text-brand-dark">Meet our management team</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {team.map(member => (
                        <div key={member.name} className="text-center">
                            <Image src={member.img} alt={member.name} width={200} height={200} className="rounded-full mx-auto grayscale" />
                            <p className="mt-4 text-sm uppercase text-gray-500">{member.role}</p>
                            <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                            <div className="mt-2 flex justify-center items-center gap-2">
                                <a href="#" className="text-gray-500 hover:text-brand-purple"><Mail size={18} /></a>
                                <a href="#" className="text-gray-500 hover:text-brand-purple"><Linkedin size={18} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Get to Know Better ---
const KnowBetter = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto p-12 bg-gray-50 border border-gray-200 rounded-lg">
                <h2 className="text-4xl font-bold text-brand-dark text-center">Get to know Polcode even better.</h2>
                <div className="mt-10 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-dark">See open roles.</h3>
                        <p className="mt-4 text-gray-600">We’re always looking for talented people with a global mindset. We’d love to hear from you.</p>
                        <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-purple">CHECK OUT MORE <ArrowRight /></a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-brand-dark">Get a project estimate.</h3>
                        <p className="mt-4 text-gray-600">Talk to our planning team so that we can learn more about your business requirements, and how we can help.</p>
                        <button className="mt-6 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md">CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// --- REUSED COMPONENTS ---
const Testimonials = () => ( <section className="bg-brand-purple text-white py-20"> <div className="container mx-auto px-6"> <h2 className="text-4xl font-bold mb-12">Hear from our clients:</h2> <div className="grid md:grid-cols-2 gap-12 items-center"> <div> <Quote className="text-violet-400 -ml-4" size={60} fill="currentColor"/> <blockquote className="mt-4 text-lg leading-relaxed text-violet-100"> We moved from another agency to Polcode. They have a good track record and reviews, their sales process was great, and the audit was impressive. There's no doubt that Polcode saved the project. We continue to be really pleased with our results. The project is really big, and there's a lot of technology inside. We make progress easily and new features keep coming so the code quality is really satisfying. </blockquote> <div className="mt-8 flex justify-between items-center"> <div className="flex items-center gap-4"><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button></div> <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="w-2 h-2 bg-violet-400 rounded-full"></span>))}</div> </div> </div> <div className="flex justify-end"> <div className="text-right"><p className="text-xl font-semibold">Jan Donmez</p><p className="text-violet-200">Founder & CEO at AppyBee</p></div> <div className="ml-6 flex items-center justify-center bg-white rounded-full w-20 h-20"><Image src="/appybee-logo-color.svg" width={60} height={60} alt="AppyBee Logo"/></div> </div> </div> </div> </section> );
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
        <div className="mt-16 border-t">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500">
                <p>2025 Polcode Sp. z o.o. All rights reserved.</p>
                {/* Social icons would go here */}
            </div>
        </div>
    </footer>
);
const ChatWidget = () => ( <button className="fixed bottom-6 right-6 bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-violet-700 transition-colors z-40"> <MessageSquare size={32} /> </button> );


// --- Main Page ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <AboutHero />
        <RootedSection />
        <TeamworkSection />
        <AuthenticSection />
        <JourneyTimeline />
        <ExcellenceSection />
        <ManagementTeam />
        <Testimonials />
        <KnowBetter />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}