import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <div className="pt-10 md:pt-14">
                <div className="container py-6 text-center">
                    <h1 className="text-[30px] md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">Get in touch</h1>
                    <p className="mt-2 text-[16px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We’d love to hear about your project.</p>
                </div>
            </div>
            <div className="py-10 bg-gray-50 dark:bg-[#111318]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Contact information</h2>
                            {/* ... contact info items ... */}
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}