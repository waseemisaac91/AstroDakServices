import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('src/components/img/Platdak2.jpg')`,
        paddingTop: "90px",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="h-0.5 w-24 bg-secondary mx-auto my-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="btn btn-primary min-w-[180px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contact")}
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-secondary min-w-[180px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.discover")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
