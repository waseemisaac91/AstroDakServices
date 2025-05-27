import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  // This will be replaced with actual project images in a real implementation
  const projectsData: Project[] = [
    {
      id: 1,
      title: t("services.flatRoofs.title"), // Flat Roofs
      description: "Bitumen platdak isolatie",
      category: "flatRoofs",
      image: "static//img/Bitumen platdak isolatie1.jpg",
    },
    {
      id: 2,
      title: t("services.flatRoofs.title"),
      description: "Bitumen platdak isolatie",
      category: "flatRoofs",
      image: " static//img/Bitumen platdak isolatie2.jpg",
    },
    {
      id: 3,
      title: t("services.slopedRoofs.title"), // Sloped Roofs
      description: "Dakpannen",
      category: "slopedRoofs",
      image: "static//img/Dakpannen1.jpg",
    },
    {
      id: 4,
      title: t("services.slopedRoofs.title"),
      description: "Dakpannen",
      category: "slopedRoofs",
      image: "static//img/Dakpannen2.jpg",
    },
    {
      id: 5,
      title: t("services.slopedRoofs.title"),
      description: "Dakpannen",
      category: "slopedRoofs",
      image: "static//img/Dakpannen3.jpg",
    },
    {
      id: 6,
      title: t("services.flatRoofs.title"),
      description: "lichtKoepel",
      category: "flatRoofs",
      image: "static//img/lichtKoepel1.jpg",
    },
    {
      id: 7,
      title: t("services.flatRoofs.title"),
      description: "lichtKoepel",
      category: "flatRoofs",
      image: "static//img/lichtKoepel2.jpg",
    },
    {
      id: 8,
      title: t("services.chimney.title"), // Chimney
      description: "Schoorsteen",
      category: "chimney",
      image: "static//img/schoorsteen1.jpg",
    },
    {
      id: 9,
      title: t("services.chimney.title"),
      description: "Schoorsteen",
      category: "chimney",
      image: "static//img/schoorsteen2.jpg",
    },
    {
      id: 10,
      title: t("services.flatRoofs.title"),
      description: "Bitumen platdak isolatie",
      category: "flatRoofs",
      image: "static//img/Bitumen platdak isolatie3.jpg",
    },
    {
      id: 11,
      title: t("services.flatRoofs.title"),
      description: "Bitumen platdak isolatie",
      category: "flatRoofs",
      image: "static//img/Bitumen platdak isolatie4.jpg",
    },
    {
      id: 12,
      title: t("services.slopedRoofs.title"),
      description: "Dakraam",
      category: "slopedRoofs",
      image: "static//img/Dakraam vervangen1.jpg",
    },
    {
      id: 13,
      title: t("services.zincWork.title"), // Zinc Work
      description: "Dakgoot",
      category: "zincWork",
      image: "static//img/Zinkwerk-Dakgootset.jpg",
    },
    {
      id: 14,
      title: t("services.zincWork.title"),
      description: "Dakgoot",
      category: "zincWork",
      image: "static//img/Zinkwerk-Dakgootset2.jpg",
    },
    {
      id: 15,
      title: t("services.zincWork.title"),
      description: "Dakgoot",
      category: "zincWork",
      image: "static//img/Zinkwerk-Dakgootset3.jpg",
    },

    {
      id: 16,
      title: t("services.zincWork.title"),
      description: "Kilgoot",
      category: "zincWork",
      image: "static//img/kilgoot.jpg",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="flex justify-center mb-10" ref={ref}>
          <div className="bg-gray-100 p-1.5 rounded-lg inline-flex flex-wrap justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
                filter === "all"
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("projects.filter.all")}
            </button>
            <button
              onClick={() => setFilter("flatRoofs")}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
                filter === "flatRoofs"
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("projects.filter.flatRoofs")}
            </button>
            <button
              onClick={() => setFilter("zincWork")}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
                filter === "zincWork"
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("projects.filter.zincWork")}
            </button>
            <button
              onClick={() => setFilter("slopedRoofs")}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
                filter === "slopedRoofs"
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("projects.filter.slopedRoofs")}
            </button>
            <button
              onClick={() => setFilter("chimney")}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
                filter === "chimney"
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("projects.filter.chimney")}
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
