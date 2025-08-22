"use client"; // This is a Client Component because it uses hooks

import Image from "next/image";
import {
  ChevronDown, ArrowRight, ArrowLeft, Quote, MessageSquare, Star, ChevronUp,
  Lightbulb, MousePointerClick, TestTube2, Infinity as InfinityIcon, Zap, Handshake, Briefcase, CheckSquare, Award
} from "lucide-react"; // Corrected import
import React, { useState, ReactNode } from 'react';

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
    { name: "Web Development", href: "#" }, { name: "Frontend Development", href: "#" },
    { name: "Backend Development", href: "#" }, { name: "Mobile Development", href: "#" },
    { name: "Product Design", href: "#" },
  ];
  return ( <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50"> <div className="container mx-auto px-6 py-4 flex justify-between items-center"> <div className="flex items-center gap-8"> <svg width="120" height="30" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.284 32.185c-6.84 0-11.832-5.11-11.832-15.687C10.452 5.858 15.444.75 22.284.75c6.84 0 11.832 5.108 11.832 15.737 0 10.578-4.992 15.698-11.832 15.698zm0-26.65c-3.792 0-5.88 3.55-5.88 10.963 0 7.31 2.088 10.91 5.88 10.91 3.792 0 5.88-3.6 5.88-10.91.05-7.412-2.088-10.963-5.88-10.963zM45.626 31.75h-5.928V1.18h5.928v30.57zM57.925 31.75h-5.928V1.18h5.928v30.57zM81.218 31.75h-5.496l-9.312-14.24V31.75h-5.928V1.18h5.496l9.312 14.24V1.18h5.928v30.57zM103.058 32.185c-6.84 0-11.832-5.11-11.832-15.687 0-10.628 4.992-15.738 11.832-15.738 3.936 0 6.84 1.48 8.448 3.84l-3.936 3.4c-1.128-.9-2.28-1.58-4.512-1.58-3.792 0-5.88 3.6-5.88 10.91 0 7.31 2.088 10.91 5.88 10.91 2.232 0 3.384-.68 4.512-1.58l3.936 3.4c-1.608 2.36-4.512 3.84-8.448 3.84zM128.243 19.387c0 7.55-4.128 12.8-10.44 12.8-6.312 0-10.44-5.25-10.44-12.8V1.18h5.928v18.207c0 4.6 2.088 7.9 4.512 7.9s4.512-3.3 4.512-7.9V1.18h5.928v18.207zM.16 1.18h6.12v15.25c0 6.25-2.75 9.4-7.25 9.4H-.7v-5.65c1.45.3 3.1.45 4.87.45 1.7 0 2.22-.5 2.22-1.75V1.18h.77z" fill="#111827"></path><path d="M41.77 1.18h-8.25L32.25 15l-1.27-13.82h-8.25L28.52 31.7h8.25l1.28-13.78 1.27 13.78h8.25L41.77 1.18z" fill="#7C3AED"></path></svg> <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600"> <div className="relative group"> <button className="flex items-center gap-1 text-brand-purple font-semibold transition-colors"> SERVICES <ChevronDown size={16} /> </button> <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56 ring-1 ring-black ring-opacity-5 z-20"> <div className="py-1"> {serviceLinks.map((link) => (<a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-purple">{link.name}</a>))} </div> </div> </div> <a href="#" className="hover:text-brand-purple">PROJECTS</a> <a href="#" className="hover:text-brand-purple">ABOUT</a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">HOW WE WORK <ChevronDown size={16} /></a> <a href="#" className="flex items-center gap-1 hover:text-brand-purple">BLOG & MORE <ChevronDown size={16} /></a> <a href="#" className="hover:text-brand-purple">CAREERS</a> </nav> </div> <a href="#" className="hidden md:inline-block border border-gray-300 rounded-md px-6 py-2 text-sm font-semibold text-brand-dark hover:bg-gray-100 transition-colors">LET'S TALK</a> </div> </header> );
};

// --- Product Design Hero Section ---
const ProductDesignHero = () => (
    <section className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-brand-dark leading-tight">Product Design</h1>
          <p className="mt-6 text-lg text-gray-600">Take your ideas from concept to market launch seamlessly with our product design services. We validate your new product ideas or existing solutions with lean design workshops that reveal optimal processes, technologies and design decisions.</p>
          <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">START YOUR PROJECT</button>
        </div>
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-brand-purple opacity-70 z-20"></div>
          <Image src="/product-design-hero.png" alt="Team collaborating in a workshop" layout="fill" objectFit="cover" className="z-10" />
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-brand-purple" style={{ width: '85%' }}></div>
        </div>
      </div>
    </section>
);

// --- Next-level Teams Section ---
const NextLevelTeams = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-4xl font-bold text-brand-dark">Next-level product design teams, at your service.</h2>
      <p className="mt-6 text-lg text-gray-600">Team up with our trusted product designers who can take you through a web or mobile product development journey from start to finish. Build product experiences that wow users or disrupt a market with our product designers, developers, and business specialists backing you up at every step of the way.</p>
    </div>
  </section>
);

// --- Design Sprint Accordion Section ---
const DesignSprintAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const items = [
        { icon: <Lightbulb />, title: "Design Sprint", content: "Our teams ask the hard questions, as we conceptualize and visualize your product in a unified way. We simplify and shorten a process that can usually take months, by validating your core product intent with research, user feedback, and data-driven decision-making." },
        { icon: <MousePointerClick />, title: "Tappable Prototypes", content: "Interactive prototypes allow you to experience your product before it's built, saving time and resources. Test usability and gather feedback early on." },
        { icon: <TestTube2 />, title: "Development & Testing", content: "Once the design is validated, our development team brings it to life. Rigorous testing ensures a bug-free, high-performance final product." }
    ];

    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[450px]">
                    <DottedGrid className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
                    <Image src="/design-sprint-image.png" alt="Team working together on a laptop" layout="fill" objectFit="cover" className="rounded-lg"/>
                </div>
                <div>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="w-full flex justify-between items-center py-4 text-left">
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-purple">{item.icon}</span>
                                        <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
                                    </div>
                                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                {openIndex === index && (
                                    <div className="pb-4 text-gray-600">{item.content}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 bg-brand-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-violet-700 transition-colors">LET'S TALK</button>
                </div>
            </div>
        </section>
    );
};

// --- Toolkit Section ---
const Toolkit = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-brand-dark">Our product design toolkit</h2>
            <p className="mt-4 text-gray-600">Great design systems can validate ideas and mitigate issues before they ever reach the user. To ensure that we're building products with confidence, we use the latest product workflow and collaboration tools at the forefront of the digital design industry.</p>
            <div className="mt-12 flex justify-center gap-16">
                <div className="text-center">
                    <Image src="/logos/figma.svg" alt="Figma Logo" width={48} height={48} className="mx-auto" />
                    <p className="mt-2 font-semibold text-gray-700">FIGMA</p>
                </div>
                <div className="text-center">
                    <Image src="/logos/invision.svg" alt="Invision Logo" width={48} height={48} className="mx-auto" />
                    <p className="mt-2 font-semibold text-gray-700">INVISION</p>
                </div>
            </div>
        </div>
    </section>
);

// --- Journey CTA ---
const JourneyCta = () => (
    <section className="bg-brand-purple text-white">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center relative">
        <DottedGrid className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <div>
          <h2 className="text-4xl font-bold">Ready to start your journey with us?</h2>
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

// --- Productive Approach Section ---
const ProductiveApproach = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl font-bold text-brand-dark">A productive approach to designing products</h2>
                <p className="mt-6 text-gray-600">An agile-like process gets our teams laser-focused on solving your product challenges with quick turnaround times.</p>
            </div>
            <div>
                <Image src="/productive-approach.png" alt="Team in a productive meeting" width={600} height={400} className="rounded-lg" />
            </div>
        </div>
    </section>
);

// --- Design Process Carousel ---
const DesignProcessCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const processes = [
        { title: "Scoping Session", content: "We elicit your overall business requirements, and you get a feel for how well we’re equipped to handle your specific product challenges. Come prepared (we will too) and ideally we land on a scope document together." },
        { title: "Product Spec", content: "After or during a design sprint, we’ll form a complete blueprint for communicating the product with every stakeholder possible. The product spec should bring clarity to everyone involved in the project." },
        { title: "Clickable Wireframes", content: "Interactive wireframes offer a more immersive experience—one where you can independently explore and navigate your product on devices which the product will be used." },
        { title: "Design Deliverables", content: "Get a package of your project summary and any wireframes, mockups or prototypes created by Polcode. They're yours to do with as you please; shop them around, use them for your internal processes, or continue with Polcode services to flesh out more mature product design." },
        { title: "Testing", content: "We gather insights from end-users to ensure a more reliable product design. Heatmaps, user feedback and automated processes can give us the data to make well-informed decisions about any changes to the final product design." }
    ];
    
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % processes.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length);

    return (
        <section className="py-24 bg-gray-50/70">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-brand-dark">Design process</h2>
                <p className="mt-4 text-gray-600">Take a look into how we approach designing digital products.</p>
                <div className="mt-12 relative">
                    <div className="grid grid-cols-5 gap-8">
                        {processes.map((proc, index) => (
                            <div key={index} className="text-center">
                                <button onClick={() => setCurrentIndex(index)} className={`font-semibold w-full pb-2 ${currentIndex === index ? 'text-brand-purple border-b-2 border-brand-purple' : 'text-gray-600'}`}>{proc.title}</button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="relative mt-6 text-center min-h-[150px] overflow-hidden">
                        {processes.map((p, i) => (
                           <div key={i} className={`absolute w-full transition-opacity duration-300 ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                               <p className="text-gray-600">{p.content}</p>
                           </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-full w-full flex justify-between px-[-2rem]">
                      <button onClick={prevSlide} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"><ArrowLeft /></button>
                      <button onClick={nextSlide} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Why Choose Product Design Section ---
const WhyChooseProductDesign = () => {
  const reasons = [
    // This is where the fix is applied: <InfinityIcon /> instead of <Infinity />
    { icon: <InfinityIcon size={32} />, title: "Transparency", text: "Everything we do is about keeping you in the loop, logging progress, and continuous updates." },
    { icon: <Zap size={32} />, title: "Masterful UX/Usability", text: "Designing for great experiences leads to better products, perfectly aligning with our UI/UX expertise." },
    { icon: <Handshake size={32} />, title: "Mutual Trust", text: "Remote work, but face-to-face engagement is our motto, building products requires collaboration." },
    { icon: <Briefcase size={32} />, title: "Business Acumen", text: "We don’t just blindly develop solutions; we strive to be stakeholders for shaping your business and product." },
    { icon: <CheckSquare size={32} />, title: "99% Review Scores", text: "We have stellar reviews across the board for our product design and planning projects." },
    { icon: <Award size={32} />, title: "Top Design Teams", text: "As a Top B2B Company, we have designed and developed products at the leading edge for over a decade." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-brand-dark">Why Choose Polcode's Product Design Services?</h2>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
            {reasons.map(reason => (
              <div key={reason.title}>
                <div className="text-brand-purple">{reason.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-brand-dark">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[550px]">
            <DottedGrid className="bottom-0 right-0 translate-x-1/4 translate-y-1/4"/>
            <Image src="/why-choose-us.png" alt="Two Polcode team members" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
      </div>
    </section>
  );
};


// --- REUSED COMPONENTS ---
const Testimonials = () => ( <section className="bg-brand-purple text-white py-20"> <div className="container mx-auto px-6"> <h2 className="text-4xl font-bold mb-12">Don't take it from us. Hear from our clients:</h2> <div className="grid md:grid-cols-2 gap-12 items-center"> <div> <Quote className="text-violet-400 -ml-4" size={60} fill="currentColor"/> <blockquote className="mt-4 text-lg leading-relaxed text-violet-100"> We moved from another agency to Polcode. They have a good track record and reviews, their sales process was great, and the audit was impressive. There's no doubt that Polcode saved the project. We continue to be really pleased with our results. The project is really big, and there's a lot of technology inside. We make progress easily and new features keep coming so the code quality is really satisfying. </blockquote> <div className="mt-8 flex justify-between items-center"> <div className="flex items-center gap-4"><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button><button className="border border-violet-400 rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button></div> <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>{Array.from({ length: 8 }).map((_, i) => (<span key={i} className="w-2 h-2 bg-violet-400 rounded-full"></span>))}</div> </div> </div> <div className="flex justify-end"> <div className="text-right"><p className="text-xl font-semibold">Jan Donmez</p><p className="text-violet-200">Founder & CEO at AppyBee</p></div> <div className="ml-6 flex items-center justify-center bg-white rounded-full w-20 h-20"><Image src="/appybee-logo-color.svg" width={60} height={60} alt="AppyBee Logo"/></div> </div> </div> </div> </section> );
const Stats = () => ( <section className="py-20 bg-white"> <div className="container mx-auto px-6 relative"> <DottedGrid className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" /> <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> <div><p className="text-4xl font-bold text-brand-purple">99%</p><p className="mt-2 text-gray-500">Job Success on Upwork</p></div> <div><p className="text-4xl font-bold text-brand-purple">150+</p><p className="mt-2 text-gray-500">Team Members</p></div> <div><p className="text-4xl font-bold text-brand-purple">19 years</p><p className="mt-2 text-gray-500">On the market</p></div> <div><p className="text-4xl font-bold text-brand-purple">1400+</p><p className="mt-2 text-gray-500">Completed Projects</p></div> </div> </div> </section> );
const LatestProjects = () => { const ProjectCard = ({ imgSrc, tags, title, industry, region, clientLogoSrc, clientName }: any) => ( <a href="#" className="group block"> <div className="bg-gray-100 rounded-lg overflow-hidden p-4"> <Image src={imgSrc} width={600} height={400} alt={title} className="transform group-hover:scale-105 transition-transform duration-300"/> </div> <div className="bg-white p-6 shadow-sm group-hover:shadow-xl transition-shadow rounded-b-lg -mt-4 relative z-10"> <p className="text-xs font-bold text-gray-400 tracking-wider">{tags}</p> <h3 className="mt-2 text-xl font-semibold text-brand-dark leading-tight">{title}</h3> <div className="mt-4 grid grid-cols-2 gap-4 text-sm"> <div><p className="text-gray-400 text-xs uppercase">Industry</p><p className="font-medium text-gray-700">{industry}</p></div> <div><p className="text-gray-400 text-xs uppercase">Region</p><p className="font-medium text-gray-700">{region}</p></div> </div> <div className="mt-6 border-t pt-4 flex justify-between items-center"> <div><p className="text-gray-400 text-xs uppercase">Client</p><Image src={clientLogoSrc} width={100} height={30} alt={clientName} className="mt-1"/></div> <ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors"/> </div> </div> </a> ); return ( <section className="py-24 bg-gray-50/70"> <div className="container mx-auto px-6"> <h2 className="text-4xl font-bold text-brand-dark text-center">Our latest projects:</h2> <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12"> <ProjectCard imgSrc="/project-fitness.png" tags="PHP SYMFONY REACT NATIVE" title="Rebuilding a Powerful Online Fitness Appointment Booking Platform" industry="Booking platforms" region="Netherlands" clientLogoSrc="/appybee-logo-grey.svg" clientName="AppyBee" /> <ProjectCard imgSrc="/project-gaming.png" tags="RUBY NODE.JS REDUX" title="Digital Marketing Agency Levels Up Their Gaming Influencer Platform" industry="Digital agencies" region="Germany" clientLogoSrc="/partner-combo-strike.svg" clientName="Combo Strike" /> <ProjectCard imgSrc="/project-firm.png" tags="REACT PYTHON DJANGO" title="Canadian Firm Trusts Polcode With Their Core Product Development" industry="Finance" region="Canada" clientLogoSrc="/partner-impak.svg" clientName="Impak" /> </div> <div className="text-center mt-16"> <button className="border border-brand-purple text-brand-purple font-semibold py-3 px-10 rounded-md hover:bg-brand-purple hover:text-white transition-colors"> SEE MORE </button> </div> </div> </section> ); };
const KickOffCta = () => ( <section className="bg-brand-purple text-white"> <div className="container mx-auto grid lg:grid-cols-2"> <div className="p-16"> <h2 className="text-4xl font-bold">Ready to kick off your next product design sprint?</h2> <div className="mt-12 space-y-10"> <div className="flex gap-6"> <p className="text-6xl font-bold text-violet-400">1.</p> <div> <h3 className="text-2xl font-semibold">Tell us more</h3> <p className="mt-2 text-violet-200">Fill out a quick form describing your project. You can always add details later on and we’ll reply within a day!</p> <button className="mt-4 bg-white text-brand-purple font-semibold py-2 px-6 rounded-md">CONTACT US</button> </div> </div> <div className="flex gap-6"><p className="text-6xl font-bold text-violet-400">2.</p><div><h3 className="text-2xl font-semibold">Scoping</h3><p className="mt-2 text-violet-200">We’ll arrange materials and our previous work that align with your product proposal, and we’ll see if we’re a good fit for each other.</p></div></div> <div className="flex gap-6"><p className="text-6xl font-bold text-violet-400">3.</p><div><h3 className="text-2xl font-semibold">Kickoff</h3><p className="mt-2 text-violet-200">Get your project up and running with Polcode quickly and without unnecessary formalities. Meet your team members and start work immediately.</p></div></div> </div> </div> <div className="hidden lg:block relative"><Image src="/contact-cta-image.png" alt="Team brainstorming on a whiteboard" layout="fill" objectFit="cover" /></div> </div> </section> );
const AllServices = () => { const ServiceCard = ({ title, items }: { title: string; items: string[] }) => ( <a href="#" className="group bg-white p-8 border border-gray-200 hover:border-brand-purple hover:shadow-xl transition-all rounded-lg flex flex-col"> <h3 className="text-2xl font-semibold text-brand-dark">{title}</h3> <div className="mt-4 text-gray-500 space-y-1 flex-grow">{items.map(item => <p key={item}>{item}</p>)}</div> <div className="mt-6 self-end"><ArrowRight className="text-gray-400 group-hover:text-brand-purple transition-colors" /></div> </a> ); return( <section className="py-24 bg-gray-50"> <div className="container mx-auto px-6 text-center"> <h2 className="text-4xl font-bold text-brand-dark">Our custom software development services</h2> <p className="mt-6 max-w-4xl mx-auto text-gray-600">Polcode is home to full-service design and development experts. Our teams cover an extensive range of end-to-end services to help you build, grow and scale your internet business.</p> <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"> <ServiceCard title="Web Development" items={["Frontend", "Backend"]} /> <ServiceCard title="Frontend Development" items={["React", "Vue.js", "Angular"]} /> <ServiceCard title="Backend Development" items={["Symfony Laravel PHP", "Python Node.js", "Ruby on Rails Golang"]} /> <ServiceCard title="eCommerce Development" items={["Shopify", "WooCommerce", "Magento"]} /> <ServiceCard title="Mobile Development" items={["Hybrid Apps", "React Native"]} /> <ServiceCard title="Product Design" items={["UI", "UX"]} /> </div> </div> </section> );};
const Footer = () => ( <footer className="bg-white pt-20"> <div className="container mx-auto px-6 relative"> <DottedGrid className="top-0 right-0" /> <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8"> <div className="xl-col-span-2">...</div> <div><h4 className="font-bold text-gray-800">Company</h4>...</div> <div><h4 className="font-bold text-gray-800">Services</h4>...</div> <div className="md:col-span-2 lg:col-span-1 space-y-6 text-sm">...</div> </div> </div> <div className="mt-16 border-t">...</div> </footer> );
const ChatWidget = () => ( <button className="fixed bottom-6 right-6 bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-violet-700 transition-colors z-40"> <MessageSquare size={32} /> </button> );

// --- Main Page ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <ProductDesignHero />
        <NextLevelTeams />
        <DesignSprintAccordion />
        <Toolkit />
        <JourneyCta />
        <ProductiveApproach />
        <DesignProcessCarousel />
        <WhyChooseProductDesign />
        <Testimonials />
        <Stats />
        <LatestProjects />
        <KickOffCta />
        <AllServices />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}