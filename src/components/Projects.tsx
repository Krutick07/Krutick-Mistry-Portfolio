import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import cvrreformate from "../components/assets/CVRefromatter.jpg";
import gym from "../components/assets/GYM.jpg";
import solcleaners from "../components/assets/sol_project.png";
import otlo from "../components/assets/Otlo.png";

const projects = [
  // {
  //   title: 'CVReformatter',
  //   description: 'A responsive web application that automates resume formatting and validation.Built with React.js, TypeScript, and Tailwind CSS, it helps users quickly reformat resumes for consistency and style using smart text parsing and layout templates.Tech Stack: React.js, TypeScript, Tailwind CSS, lucide-react',
  //   image: cvrreformate,
  //   tech: ['React JS','CSS','lucide-react'],
  //   github: 'https://github.com/Krutick07/CVReformatter',
  //   demo: '#'
  // },
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
    title: "Sol cleaners",
    description:
      "A comprehensive ERP web application built for business management, including modules for inventory, employees, and finance.For privacy reasons, only the login interface and dummy UI screens are shown. Developed using Spring Boot, Angular, and MySQL, with secure authentication and PDF reporting features (JasperReports).",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    // image: solcleaners,
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "BootStrap"],
    github: "https://github.com/Krutick07/GYM",
    // demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                    {/* <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </motion.a> */}
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
      </div>
    </section>
  );
};
