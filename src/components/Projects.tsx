// ─── OPTION 1: Show 4 projects + "Show More / Show Less" toggle ───────────────

import React, { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import cvrreformate from "../components/assets/CVRefromatter.jpg";
import gym from "../components/assets/GYM.jpg";
import solcleaners from "../components/assets/sol_project.png";
import otlo from "../components/assets/Otlo.png";

const projects = [
  // ... keep your exact projects array unchanged
  {
    title: "OTLO Ventures",
    description:
      "A full-stack e-commerce platform for an organic food brand with a dynamic user interface and a feature-rich admin panel. Users can browse categories, view detailed product pages, manage carts, and place orders, while admins control homepage content, products, and order management. Built with secure JWT authentication and a scalable backend architecture.",
    image: otlo,
    tech: ["Angular ", " Spring Boot ", "MySQL", "JWT ", "Tailwind CSS"],
    github: "#",
    demo: "http://otlouser.kevalam.info/",
  },
  {
    title: "Cultiva Jewels E-commerce & ERP System",
    description:
      "Developed a full-featured e-commerce platform integrated with a custom ERP system for a jewelry business. The application includes product catalog management, secure user authentication, shopping cart, and order processing, along with backend ERP modules for inventory management, sales tracking, and accounting. The system ensures real-time synchronization between online sales and internal operations, improving efficiency and business visibility.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "Bootstrap"],
    github: "#",
    demo: "https://cultivajewels.com/",
  },
  {
    title: "Sol cleaners",
    description:
      "A comprehensive ERP web application built for business management, including modules for inventory, employees, and finance. For privacy reasons, only the login interface and dummy UI screens are shown. Developed using Spring Boot, Angular, and MySQL, with secure authentication and PDF reporting features (JasperReports).",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "BootStrap"],
    github: "https://github.com/Krutick07/GYM",
  },
  {
    title: "HLE GlassCoat ERP System",
    description:
      "A full-scale Quality Control (QC) Workflow Management System developed for a mechanical manufacturing company to digitize and automate end-to-end quality processes. The system supports dynamic QC forms and templates using a master-transaction architecture, role-based workflows, and multi-level approval/rejection flows. Integrated with SAP work orders to map production orders with QC templates.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "MySQL", "SAP Integration", "JWT"],
    github: "#",
  },
  {
    title: "Trilok Prefabrique ERP System",
    description:
      "A comprehensive ERP system developed to streamline business operations for a manufacturing company, covering modules such as Purchase, Sales And Accounting. The system enables efficient inventory tracking, financial management, and production planning. Designed with a scalable architecture, it improves operational efficiency, data accuracy, and decision-making.",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
    github: "#",
  },
  {
    title: "Shine Diamond ERP System",
    description:
      "Developed a specialized ERP system for diamond business operations, handling purchase, sales, and inventory management of diamonds. The system includes employee assignment workflows where diamonds are allocated to workers for jewelry manufacturing, with complete tracking of stock movement and processing stages.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "Bootstrap"],
    github: "#",
  },
];

const INITIAL_COUNT = 4; // how many cards to show before "Show More"

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <AnimatedSection key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Show More / Show Less button ── */}
        {projects.length > INITIAL_COUNT && (
          <AnimatedSection>
            <div className="flex justify-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAll((prev) => !prev)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Show {hiddenCount} More Projects
                  </>
                )}
              </motion.button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};