import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-light py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t("about.title")}
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8" ref={ref}>
          {/* النص */}
          <motion.div
            className="lg:w-1/2 space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t("about.paragraph1")}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t("about.paragraph2")}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t("about.paragraph3")}
            </p>
          </motion.div>

          {/* الصورة */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
              <img
                src="project/components/img/Platdak.jpg"
                alt="Roofing work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
