import Image from "next/image";
import {
  ChevronDown, ArrowRight, ArrowLeft, Quote, MessageSquare, Star, Search
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

// --- Header Component (Active State on Projects) ---
const Header = () => {
  return ( <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50"> <div className="container mx-auto px-6 py-4 flex justify-between items-center"> <div className="flex items-center gap-8"> <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg> <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 uppercase"> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">Services <ChevronDown size={16} /></a> <a href="#" className="text-brand-purple font-semibold">Projects</a> <a href="#" className="hover:text-brand-purple">About</a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">How We Work <ChevronDown size={16} /></a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">Blog & More <ChevronDown size={16} /></a> <a href="#" className="hover:text-brand-purple">Careers</a> </nav> </div> <a href="#" className="hidden md:inline-block border border-gray-300 rounded-md px-6 py-2 text-sm font-semibold text-brand-dark hover:bg-gray-100 transition-colors">LET'S TALK</a> </div> </header> );
};

// --- Page Title Section ---
const PageTitle = () => (
    <section className="bg-white pt-16 pb-12">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-5xl font-bold text-brand-dark">Customer Success Stories</h1>
            <div className="relative">
                <input type="text" placeholder="SEARCH" className="border-b-2 border-gray-300 focus:border-brand-purple outline-none pr-8 py-1 uppercase" />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
        </div>
    </section>
);

// --- Featured Story Section ---
const FeaturedStory = () => (
    <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
            <div className="bg-white p-8 lg:p-12 shadow-xl rounded-lg grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <Image src="/partner-impak.svg" alt="Impak Logo" width={100} height={40} />
                    <h2 className="mt-6 text-3xl font-bold text-brand-dark">Canadian Firm Trusts Polcode With Their Core Product Development</h2>
                    <div className="mt-6 grid grid-cols-2 gap-8">
                        <div><p className="text-sm uppercase text-gray-500">Industry</p><p className="font-semibold text-gray-800">Finance</p></div>
                        <div><p className="text-sm uppercase text-gray-500">Region</p><p className="font-semibold text-gray-800">Canada</p></div>
                    </div>
                    <div className="mt-6"><p className="text-sm uppercase text-gray-500">Technologies</p>
                        <div className="mt-2 flex flex-wrap gap-3">
                            {['React', 'Python', 'django', 'WordPress', 'PostgreSQL'].map(tech => (
                                <span key={tech} className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <p className="mt-6 text-gray-600">Impak Finance is a growing fintech company based in Canada that provides digital tools for investors to assess opportunities in parallel with environmental impact. Today’s investors need to meet more sustainable regulatory requirements than ever before, and need easy methods to measure the environmental and societal impact of their portfolios and assets.</p>
                    <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">CHECK CASE STUDY <ArrowRight /></a>
                </div>
                <div className="relative h-[500px]">
                    <DottedGrid className="top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute inset-0 bg-brand-purple opacity-80 z-20 rounded-lg"></div>
                    <Image src="/project-firm.png" alt="Impak project mockup" layout="fill" objectFit="contain" className="z-30 p-8"/>
                    <DottedGrid className="bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10" />
                </div>
            </div>
        </div>
    </section>
);

// --- Stories Grid Section ---
const CaseStudyCard = ({ imgSrc, tags, title, industry, region, clientLogoSrc, clientName }: any) => ( <a href="#" className="group block"> <div className="bg-gray-100 rounded-lg overflow-hidden p-4"> <Image src={imgSrc} width={600} height={400} alt={title} className="transform group-hover:scale-105 transition-transform duration-300"/> </div> <div className="bg-white p-6 shadow-sm group-hover:shadow-xl transition-shadow rounded-b-lg -mt-4 relative z-10"> {tags && <p className="text-xs font-bold text-gray-400 tracking-wider">{tags}</p>} <h3 className="mt-2 text-xl font-semibold text-brand-dark leading-tight">{title}</h3> <div className="mt-4 grid grid-cols-2 gap-4 text-sm"> <div><p className="text-gray-400 text-xs uppercase">Industry</p><p className="font-medium text-gray-700">{industry}</p></div> <div><p className="text-gray-400 text-xs uppercase">Region</p><p className="font-medium text-gray-700">{region}</p></div> </div> <div className="mt-6 border-t pt-4 flex justify-between items-center"> <div><p className="text-gray-400 text-xs uppercase">Client</p><Image src={clientLogoSrc} width={100} height={30} alt={clientName} className="mt-1 grayscale group-hover:grayscale-0 transition"/></div> <ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors"/> </div> </div> </a> );
const StoriesGrid = () => {
    // A sample of the many stories. In a real app, this would come from a CMS.
    const stories = [
        { imgSrc: "/stories/hotlead.png", tags: "OPENAI GPT", title: "How Polcode Cut Content Creation Time by 50% at hotLead Using AI", industry: "Advertising & Marketing", region: "Poland", clientName: "hotLead", clientLogoSrc: "/logos/hotlead.svg" },
        { imgSrc: "/stories/firm-prospects.png", tags: "ELASTICSEARCH AWS PHP", title: "Firm Prospects Out of Legacy Debt With Polcode's Modernization", industry: "Legal", region: "Boston, US", clientName: "Firm Prospects", clientLogoSrc: "/logos/firm-prospects.svg" },
        { imgSrc: "/stories/b2b-client.png", tags: "ANGULAR NODE.JS UX UI", title: "How a B2B Client Simplified Complex Data Processing and Improved Customer Onboarding", industry: "Data analytics", region: "US", clientName: "A B2B Operations Company", clientLogoSrc: "/logos/b2b-company.svg" },
        // ... add all other stories here
        { imgSrc: "/stories/sitevibes.png", tags: "LARAVEL VUE.JS", title: "Building Alongside Digital Marketing CTOs", industry: "Digital agencies", region: "USA", clientName: "Sitevibes", clientLogoSrc: "/partner-sitevibes.svg" },
        { imgSrc: "/stories/avocado.png", tags: "REACT DJANGO", title: "Yes, Avocados Now Have Their Own Website and App", industry: "Retail industry", region: "United States", clientName: "Avocado Online", clientLogoSrc: "/logos/avocado.svg" },
        { imgSrc: "/stories/fitness.png", tags: "PHP SYMFONY REACT", title: "Rebuilding a Powerful Online Fitness Appointment Booking Platform", industry: "Booking platforms", region: "Netherlands", clientName: "AppyBee", clientLogoSrc: "/appybee-logo-grey.svg" },
    ];

    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {stories.map((story, i) => <CaseStudyCard key={i} {...story} />)}
                    {/* In a real app, you would map over the full list of 20+ stories */}
                </div>
            </div>
        </section>
    );
};

// --- Awards Section ---
const Awards = () => {
    const awards = [
        "/awards/clutch-champion-2023.svg", "/awards/clutch-global-2023.svg",
        "/awards/clutch-poland-2024.svg", "/awards/clutch-campaign-2024.svg",
        "/awards/clutch-development-2024.svg", "/awards/clutch-top-dev-2024.svg",
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center flex-wrap gap-8">
                    {awards.map((src, i) => <Image key={i} src={src} alt={`Award badge ${i+1}`} width={120} height={120} />)}
                    <div className="p-4 bg-white shadow-lg rounded-md">
                        <Image src="/awards/upwork-99.svg" alt="Upwork 99% Job Success" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Partners Section ---
const Partners = () => {
    const partners = [
        { name: "engagementlabs", src: "/logos/engagementlabs.svg" },
        { name: "AppyBee", src: "/appybee-logo-color.svg" },
        { name: "My Consulting Coach", src: "/partner-mk.svg" },
        { name: "Combo Strike", src: "/partner-combo-strike.svg" },
        { name: "Bestshop24", src: "/logos/bestshop24.svg" },
        { name: "Avocado Online", src: "/logos/avocado-online.svg" },
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-brand-dark">We work with the best</h2>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Whether you’re a small startup or large enterprise, you need a dependable software partner that helps you scale and adapt to modern challenges. Clients love working with us to take care of their project needs at all stages of development.</p>
                <div className="mt-12 flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                    {partners.map(p => <Image key={p.name} src={p.src} alt={p.name} width={150} height={40} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"/>)}
                </div>
            </div>
        </section>
    );
}

// --- Ready To Talk CTA ---
const ReadyToTalk = () => (
    <section className="bg-gray-50/70">
        <div className="container mx-auto grid lg:grid-cols-2">
            <div className="py-16 pl-16 relative">
                <DottedGrid className="top-1/2 -translate-y-1/2 left-0" />
                <h2 className="text-4xl font-bold text-brand-dark">Ready to talk about your project?</h2>
                <div className="mt-12 space-y-10">
                    <div className="flex gap-6 items-start"><p className="text-6xl font-bold text-gray-300">1.</p><div><h3 className="text-2xl font-semibold text-brand-dark">Tell us more</h3><p className="mt-2 text-gray-600">Fill out a quick form describing your needs. You can always add details later on and we’ll reply within a day!</p></div></div>
                    <div className="flex gap-6 items-start"><p className="text-6xl font-bold text-gray-300">2.</p><div><h3 className="text-2xl font-semibold text-brand-dark">Strategic planning</h3><p className="mt-2 text-gray-600">We go through recommended tools, technologies and frameworks that best fit the challenges you face.</p></div></div>
                    <div className="flex gap-6 items-start"><p className="text-6xl font-bold text-gray-300">3.</p><div><h3 className="text-2xl font-semibold text-brand-dark">Workshop Kickoff</h3><p className="mt-2 text-gray-600">Once we arrange the formalities, you can meet your Polcode team members and you’ll begin developing your next project.</p></div></div>
                    <button className="mt-4 border border-brand-purple text-brand-purple font-semibold py-2 px-6 rounded-md">CONTACT US</button>
                </div>
            </div>
            <div className="hidden lg:block relative"><Image src="/contact-cta-image.png" alt="Team brainstorming on a whiteboard" layout="fill" objectFit="cover" /></div>
        </div>
    </section>
);

// --- Magento Recognition ---
const MagentoRecognition = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
            <DottedGrid className="top-0 right-0" />
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">We are recognized as the Top Magento Company</h2>
                <a href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple">CHECK OUT OUR REVIEWS <ArrowRight /></a>
            </div>
            <div className="flex justify-center">
                <Image src="/awards/clutch-magento-2024.svg" alt="Top Magento Company Clutch 2024" width={250} height={250} />
            </div>
        </div>
    </section>
);

// --- Get Started Form Section ---
const GetStartedForm = () => (
    <section className="py-24 bg-gray-50/70">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
            <div className="relative text-center">
                <Image src="/contact-map.png" alt="World map background" width={600} height={400} className="mx-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Image src="/contact-person.png" alt="Mikolaj Brach" width={150} height={150} className="rounded-full border-4 border-white shadow-lg" />
                    <h3 className="mt-4 text-xl font-bold text-brand-dark">Mikolaj Brach</h3>
                    <p className="text-gray-600">I'd love to know more about your project.</p>
                    <a href="mailto:sales@polcode.com" className="mt-2 text-sm text-brand-purple font-semibold">sales@polcode.com</a>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">Let's get started</h2>
                <p className="mt-4 text-gray-600">Tell us more about your project, needs and timeline. Our sales and delivery teams will be more than happy to answer your questions.</p>
                <form className="mt-8 space-y-6">
                    <div><label htmlFor="email" className="text-xs uppercase text-gray-500">Your E-mail</label><input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-purple"/></div>
                    <div className="grid grid-cols-2 gap-6">
                        <div><label htmlFor="fname" className="text-xs uppercase text-gray-500">First Name</label><input type="text" id="fname" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-purple"/></div>
                        <div><label htmlFor="lname" className="text-xs uppercase text-gray-500">Last Name</label><input type="text" id="lname" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-purple"/></div>
                    </div>
                    <div><label htmlFor="description" className="text-xs uppercase text-gray-500">Description of your project</label><textarea id="description" rows={3} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-purple"></textarea></div>
                    <div className="flex items-start gap-3"><input type="checkbox" id="consent" className="mt-1" /><label htmlFor="consent" className="text-sm text-gray-600">I agree to receive marketing and sales communications from Polcode and to allow Polcode to store and process my personal data as explained in our <a href="#" className="text-brand-purple underline">Privacy policy</a>.</label></div>
                    <button type="submit" className="bg-brand-purple text-white font-semibold py-3 px-10 rounded-md hover:bg-violet-700 transition-colors">SEND MESSAGE</button>
                </form>
            </div>
            <DottedGrid className="bottom-0 right-0 translate-y-1/2"/>
        </div>
    </section>
);


// --- REUSED COMPONENTS ---
const Stats = () => ( <section className="py-20 bg-white"> <div className="container mx-auto px-6 relative"> <DottedGrid className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" /> <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> <div><p className="text-4xl font-bold text-brand-purple">99%</p><p className="mt-2 text-gray-500">Job Success on Upwork</p></div> <div><p className="text-4xl font-bold text-brand-purple">150+</p><p className="mt-2 text-gray-500">Team Members</p></div> <div><p className="text-4xl font-bold text-brand-purple">19 years</p><p className="mt-2 text-gray-500">On the market</p></div> <div><p className="text-4xl font-bold text-brand-purple">1400+</p><p className="mt-2 text-gray-500">Completed Projects</p></div> </div> </div> </section> );
const Testimonials = () => ( <section className="bg-brand-purple text-white py-20"> <div className="container mx-auto px-6"> <h2 className="text-4xl font-bold mb-12">Don't take it from us. Hear from our clients:</h2> <div className="grid md:grid-cols-2 gap-12 items-center"> <div> <Quote className="text-violet-400 -ml-4" size={60} fill="currentColor"/> <blockquote className="mt-4 text-lg leading-relaxed text-violet-100"> We moved from another agency to Polcode. They have a good track record and reviews, their sales process was great, and the audit was impressive. There's no doubt that Polcode saved the project. We continue to be really pleased with our results. The project is really big, and there's a lot of technology inside. We make progress easily and new features keep coming so the code quality is really satisfying. </blockquote> <div className="mt-8 flex justify-between items-center"> <div className="flex items-center gap-4"><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button></div> <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="w-2 h-2 bg-violet-400 rounded-full"></span>))}</div> </div> </div> <div className="flex justify-end"> <div className="text-right"><p className="text-xl font-semibold">Jan Donmez</p><p className="text-violet-200">Founder & CEO at AppyBee</p></div> <div className="ml-6 flex items-center justify-center bg-white rounded-full w-20 h-20"><Image src="/appybee-logo-color.svg" width={60} height={60} alt="AppyBee Logo"/></div> </div> </div> </div> </section> );
const Footer = () => ( <footer className="bg-white pt-20"> <div className="container mx-auto px-6 relative"> <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8"> <div className="xl:col-span-2"> <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg> <div className="mt-4 space-y-2 text-gray-600 text-sm"><p>Polcode Sp. z o.o.</p><p>Al. Jerozolimskie 94</p><p>00-807 Warszawa</p><p>Poland</p><p>VAT-ID: PL7010440690</p></div><a href="mailto:sales@polcode.com" className="mt-4 inline-block text-brand-purple font-semibold text-sm">sales@polcode.com</a> </div> <div><h4 className="font-bold text-gray-800">Company</h4>...</div> <div><h4 className="font-bold text-gray-800">Services</h4>...</div> <div className="md:col-span-2 lg:col-span-1 space-y-6 text-sm">...</div> </div> </div> <div className="mt-16 border-t"><div className="container mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-500"><p>2025 Polcode Sp. z o.o. All rights reserved.</p>...</div></div> </footer> );
const ChatWidget = () => ( <button className="fixed bottom-6 right-6 bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-violet-700 transition-colors z-40"> <MessageSquare size={32} /> </button> );


// --- Main Page ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <PageTitle />
        <FeaturedStory />
        <StoriesGrid />
        <Stats />
        <Awards />
        <Testimonials />
        <Partners />
        <ReadyToTalk />
        <MagentoRecognition />
        <GetStartedForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}