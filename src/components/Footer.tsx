import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Service area cities
  const cities = [
    "Breda",
    "'s-Hertogenbosch",
    "Eindhoven",
    "Nijmegen",
    "Oss",
    "Dordrecht",
    "Tilburg",
    "Utrecht",
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="text-white">AstroDak Service</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <p className="text-gray-300 mb-4">{t("footer.about")}</p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61576362463269"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/astrodakservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@astrodak.service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-secondary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service Area Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="text-white">{t("footer.serviceArea")}</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>

            <div className="grid grid-cols-2 gap-y-3">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center group">
                  <MapPin size={14} className="text-secondary mr-2" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="text-white">{t("footer.quickLinks")}</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>

            <ul className="space-y-3">
              {["home", "about", "services", "projects", "contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item}`}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      <span className="mr-2 text-secondary">›</span>
                      {t(`header.${item}`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              <span className="text-white">{t("footer.contactInfo")}</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-2 mt-1" />
                <span className="text-gray-300">
                  Salahutuplein, Vught, Nederland
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-secondary mr-2 mt-1" />
                <a
                  href="tel:+31684762946"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +31 6-84762946
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-secondary mr-2 mt-1" />
                <a
                  href="mailto:info.astrodak@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info.astrodak@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-secondary mr-2 mt-1" />
                <span className="text-gray-300">Ma-Vrij: 8:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 lg:gap-8">
            <div className="certification-logo flex-1 min-w-[90px] max-w-[160px] p-1.5">
              <img
                src="src/components/img/VCA.jpeg"
                alt="VCA Certification"
                className="w-full h-auto max-h-16 md:max-h-20 lg:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-200 hover:scale-105"
              />
            </div>
            <div className="certification-logo flex-1 min-w-[90px] max-w-[160px] p-1.5">
              <img
                src="src/components/img/gecertificeerde-dakdekker2.png"
                alt="Certified Roofer"
                className="w-full h-auto max-h-16 md:max-h-20 lg:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-200 hover:scale-105"
              />
            </div>
            <div className="certification-logo flex-1 min-w-[90px] max-w-[160px] p-1.5">
              <img
                src="src/components/img/google-reviews.png"
                alt="Google Reviews"
                className="w-full h-auto max-h-16 md:max-h-20 lg:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-200 hover:scale-105"
              />
            </div>
            <div className="certification-logo flex-1 min-w-[90px] max-w-[160px] p-1.5">
              <img
                src="src/components/img/pinnen-ja-graag.png"
                alt="Payment Accepted"
                className="w-full h-auto max-h-16 md:max-h-20 lg:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-200 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} AstroDak Service. {t("footer.copyright")}
          </p>
          <p className="mt-2">{t("footer.kvk")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
