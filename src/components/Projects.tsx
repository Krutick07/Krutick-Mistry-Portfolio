import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import cvrreformate from '../components/assets/CVRefromatter.jpg';
import gym from '../components/assets/GYM.jpg';

const projects = [
  {
    title: 'CVReformatter',
    description: 'A modern dashboard for instant CV Reformat in template of choice and rapid text validation.',
    // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    image: cvrreformate,
    tech: ['React JS','CSS','lucide-react'],
    github: 'https://github.com/Krutick07/CVReformatter',
    demo: '#'
  },
  {
    title: 'Fitclub',
    description: 'A full-featured social platform for GYM to shape your body with best coaches.',
    // image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    image: gym,
    tech: ['React JS', 'CSS'],
    github: 'https://github.com/Krutick07/GYM',
    demo: '#'
  }
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
                  className="w-full h-50 object-cover"
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
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </motion.a>
                    {/* <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </motion.a> */}
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