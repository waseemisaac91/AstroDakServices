import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="why-us" className="bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('whyUs.title')}</h2>
        
        <div className="mt-16" ref={ref}>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t('whyUs.subtitle')}
            </h3>
            <p className="mb-6 text-gray-700">
              {t('whyUs.text')}
            </p>
            
            <motion.ul
              className="space-y-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {t('whyUs.points', { returnObjects: true }).map((point: string, index: number) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="bg-secondary rounded-full p-1 text-white mr-3 mt-1">
                    <Check size={14} />
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <p className="italic font-medium text-center text-gray-800 my-6">
              {t('whyUs.slogan')}
            </p>
            
            <div className="flex justify-center mt-8">
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('whyUs.cta')}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;