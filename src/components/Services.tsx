import React from "react";
import { useTranslation } from "react-i18next";
import { Home, PenTool as Tool, ArrowUp, Square } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services: React.FC = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const serviceItems = [
    {
      icon: <Home size={36} />,
      title: t("services.flatRoofs.title"),
      description: t("services.flatRoofs.description"),
    },
    {
      icon: <Tool size={36} />,
      title: t("services.zincWork.title"),
      description: t("services.zincWork.description"),
    },
    {
      icon: <ArrowUp size={36} />,
      title: t("services.slopedRoofs.title"),
      description: t("services.slopedRoofs.description"),
    },
    {
      icon: <Square size={36} />,
      title: t("services.chimney.title"),
      description: t("services.chimney.description"),
    },
  ];

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("services.title")}</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <div className="text-secondary mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
