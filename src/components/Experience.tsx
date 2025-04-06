import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

const experiences = [
  // {
  //   title: 'Senior Frontend Developer',
  //   company: 'Tech Solutions Inc.',
  //   period: '2021 - Present',
  //   description: 'Lead frontend development for enterprise applications, mentored junior developers, and implemented modern CI/CD practices.'
  // },
  {
    title: 'Full stack Developer',
    company: 'Kevalam Solutions',
    period: 'Currently',
    description: 'Built and maintained client websites using Angular Js, collaborated with designers to implement pixel-perfect UIs. Also work as backend developer using Spring Boot'
  },
  {
    title: 'Frontend Developer',
    company: 'EVITAERC',
    period: '01 Sep, 2024 - 31 Jan, 2025',
    description: 'Developed responsive web applications using React and TypeScript, improved performance metrics by 40%.'
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'C.K. Pithawala Engineering ',
    period: '2021 - 2025',
    description: 'Focus on web technologies and software engineering.'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience & Education
          </h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <AnimatedSection>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Work Experience
              </h3>
            </AnimatedSection>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.title}>
                  <motion.div
                    className="relative pl-8 border-l-2 border-orange-600 dark:border-orange-400"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute w-4 h-4 bg-orange-600 dark:bg-orange-400 rounded-full -left-[9px] top-0"></div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <AnimatedSection>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
            </AnimatedSection>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <AnimatedSection key={edu.degree}>
                  <motion.div
                    className="relative pl-8 border-l-2 border-orange-600 dark:border-orange-400"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute w-4 h-4 bg-orange-600 dark:bg-orange-400 rounded-full -left-[9px] top-0"></div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};