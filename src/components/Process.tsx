import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: 1,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: 2,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: 3,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      number: 4,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="process" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('process.title')}</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-soft relative"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-1 bg-gray-200 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-secondary"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;