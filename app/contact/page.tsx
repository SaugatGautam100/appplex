import ContactForm from "@/components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <div className="pt-10 md:pt-14">
        <div className="container py-6 text-center">
          <h1 className="text-[30px] md:text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
            Get in touch
          </h1>
          <p className="mt-2 text-[16px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We’d love to hear about your project.
          </p>
        </div>
      </div>

      <div className="py-10 bg-gray-50 dark:bg-[#111318]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                Contact information
              </h2>
              <div className="space-y-4">
                {/* First Phone Number */}
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:9866294492" className="hover:underline">
                      +977 9866294492
                    </a>
                  </p>
                </div>
                {/* First Gmail */}
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="mailto:gautamsaugat100@gmail.com"
                      className="hover:underline"
                    >
                      appplex100@gmail.com
                    </a>
                  </p>
                </div>
                
                {/* Google Maps */}
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="https://www.google.com/maps/dir//Madhyapur+Thimi/@27.7108,85.3251,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb1a419f80aa67:0x288ab8841508315f!2m2!1d85.3873022!2d27.6830624?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Madhyapur Thimi, Nepal
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>

        {/* Full-width Map (outside container) */}
        <div className="mt-8">
          <div className="container">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Find us on the map
            </h2>
          </div>
          <div className="w-full h-[350px] md:h-[450px] overflow-hidden bg-gray-200 dark:bg-neutral-900">
            <iframe
              className="w-full h-full block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.318754273067!2d85.3583229431158!3d27.685163376459833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a419f80aa67%3A0x288ab8841508315f!2sMadhyapur%20Thimi!5e0!3m2!1sen!2snp!4v1756049354396!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Madhyapur Thimi"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}