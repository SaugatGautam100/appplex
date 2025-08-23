export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  details: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const servicesData: Service[] = [
    { slug: 'web-development',      icon: 'code',              title: 'Web Development',      description: 'High-performance web apps tailored to your needs.', details: 'Our web development team builds robust, scalable, and secure web applications. We leverage modern frameworks to create seamless digital experiences that delight users and move business metrics.' },
    { slug: 'frontend-development',  icon: 'design_services',   title: 'Frontend Development', description: 'Intuitive user interfaces with modern frameworks.', details: 'We create beautiful and responsive user interfaces. Our expertise in React, Next.js, and Vue ensures your app is fast, accessible, and engaging across devices.' },
    { slug: 'backend-development',   icon: 'dns',               title: 'Backend Development',  description: 'Robust and scalable server-side logic and APIs.', details: 'We build powerful server-side applications, databases, and APIs using Node.js, Python, and Go — with reliability, performance, and security in mind.' },
    { slug: 'ecommerce-development', icon: 'shopping_cart',     title: 'eCommerce Development',description: 'Powerful online stores that drive sales.', details: 'We create feature-rich eCommerce platforms that deliver smooth shopping experiences and operational efficiency — with payments, analytics, and custom integrations.' },
    { slug: 'mobile-development',    icon: 'smartphone',        title: 'Mobile Development',   description: 'Native and cross-platform apps for iOS & Android.', details: 'From concept to launch, we build intuitive, performant, and visually polished apps for iOS and Android — using native or cross‑platform stacks.' },
    { slug: 'product-design',        icon: 'search',            title: 'Product Design',       description: 'From wireframes to high-fidelity prototypes.', details: 'User research, UX, UI, and prototyping — our design process crafts products that are as useful as they are beautiful.' },
];

export const blogPostsData: BlogPost[] = [
    { slug: 'e-commerce-migration', title: 'Signs Your E‑Commerce Business Needs A Platform Migration', image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+1', category: 'E‑Commerce',      date: 'Aug 18, 2025', author: 'Jane Doe' },
    { slug: 'magento-support-end',  title: 'Magento 2.4.5 End of Support: What It Means',               image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+2', category: 'Magento',         date: 'Aug 15, 2025', author: 'John Smith' },
    { slug: 'python-versatility',   title: 'The Versatility of Python — Why It’s So Popular',           image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+3', category: 'Python',          date: 'Aug 12, 2025', author: 'Alex Johnson' },
    { slug: 'eu-cybersecurity-act', title: 'Is Your E‑commerce Ready for the EU’s New Act?',            image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+4', category: 'Security',        date: 'Aug 10, 2025', author: 'Emily White' },
    { slug: 'headless-cms-benefits',title: 'Unlocking Flexibility: The Benefits of a Headless CMS',    image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+5', category: 'Web Development', date: 'Aug 05, 2025', author: 'Chris Green' },
    { slug: 'ai-in-development',    title: 'How AI Is Transforming the Software Development Lifecycle', image: 'https://placehold.co/800x480/e5e7eb/1f2937?text=Blog+6', category: 'AI',              date: 'Aug 01, 2025', author: 'Jane Doe' },
];

// ... (keep your existing Service and BlogPost interfaces)

export interface Project {
  slug: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string; // Optional, for projects with images
}

// ... (keep your existing servicesData and blogPostsData arrays)

export const projectsData: Project[] = [
  { slug: 'vibe-music', icon: 'account_balance', title: 'Vibe Music', category: 'Mobile', description: 'A music listening app that plays the best audio quality musics.', imageUrl: '/projectlogos/plexify.png' },
  { slug: 'sajilo-interior-nepal', icon: 'dashboard', title: 'Sajilo Interior Nepal', category: 'Web', description: 'A interior company for interior design.', imageUrl: '/projectlogos/sajilo-interior.jpeg' },
  { slug: 'plexify', icon: 'storefront', title: 'Plexify', category: 'eCommerce', description: 'A e-commerce website for getting all daily used products.', imageUrl: '/projectlogos/vibe-music.png' },
  { slug: 'plexer', icon: 'health_and_safety', title: 'Plexer', category: 'Mobile', description: 'A application for booking rides and services.', imageUrl: '/projectlogos/plexer.png' },
];