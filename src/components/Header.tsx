import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

interface HeaderProps {
  isScrolled: boolean;
  toggleLanguage: () => void;
  currentLang: string;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  toggleLanguage,
  currentLang,
}) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const menuItems = [
    { title: t("header.home"), href: "#home" },
    { title: t("header.about"), href: "#about" },
    { title: t("header.services"), href: "#services" },
    { title: t("header.projects"), href: "#projects" },
    { title: t("header.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-medium h-header-shrink"
          : "bg-white shadow-soft h-header"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            {
              <img
                src="src/components/img/logo.jpg"
                alt="AstroDak Logo"
                className="flex items-center justify-center h-full w-full rounded-full bg-primary text-white font-bold text-lg"
              />
            }
          </div>
          <div className="ml-3">
            <h1 className="text-lg md:text-xl font-bold text-primary">
              AstroDak
            </h1>
            <p className="text-xs text-secondary">Service</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-secondary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={toggleLanguage}
              aria-label={`Switch to ${
                currentLang === "en" ? "Dutch" : "English"
              }`}
            >
              <Globe size={18} />
              <span className="ml-1">{currentLang === "en" ? "NL" : "EN"}</span>
            </button>
            <a
              href="https://wa.me/31684762946"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} className="mr-1.5" />
              <span className="hidden sm:inline">+31 684762946</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-medium hover:bg-secondary-dark transition-colors"
            >
              {t("header.quote")}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="p-2 mr-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Globe size={18} />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
              className="fixed top-0 right-0 h-full bg-white/20 shadow-lg z-50 md:hidden p-6"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={closeMenu}
                  className="text-black-600 top-5 right-5 hover:text-gray-800 focus:outline-none"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M18.27 15.27a1 1 0 0 1-1.41 1.41L12 13.41l-4.86 4.87a1 1 0 0 1-1.41-1.41L10.59 12 5.73 7.13a1 1 0 0 1 1.41-1.41L12 10.59l4.87-4.86a1 1 0 0 1 1.41 1.41L13.41 12l4.86 4.87z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <nav className="mb-8">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-800 hover:text-secondary font-medium text-lg block py-2"
                        onClick={closeMenu}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3">
                <a
                  href="https://wa.me/31684762946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors"
                >
                  {/* <MessageCircle size={18} className="mr-2" /> */}
                  {t("header.whatsapp")}
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full px-4 py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary-dark transition-colors"
                >
                  {t("header.quote")}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <WhatsAppButton isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;
