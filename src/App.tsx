import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = 'ltr';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={isScrolled} toggleLanguage={toggleLanguage} currentLang={i18n.language} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;