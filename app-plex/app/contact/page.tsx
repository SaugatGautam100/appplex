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
                      gautamsaugat100@gmail.com
                    </a>
                  </p>
                </div>
                {/* Second Phone Number */}
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:9704896716" className="hover:underline">
                      +977 9704896716
                    </a>
                  </p>
                </div>
                {/* Second Email */}
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-600 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="mailto:shresthasachendra8@gmail.com"
                      className="hover:underline"
                    >
                      shresthasachendra8@gmail.com
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

          {/* Google Map Embed */}
          <div className="mt-8">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Find us on the map
            </h2>
            <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-900">
              <iframe
                src="https://maps.app.goo.gl/Qgz8da92KVanuG3T7"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Madhyapur Thimi"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}