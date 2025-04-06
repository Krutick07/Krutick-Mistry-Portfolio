import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Angular js', 'BootStrap', 'Tailwind CSS', 'Material-UI', 'Spring Boot']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Firebase', 'Vercel']
  },
  // {
  //   title: 'Design & Testing',
  //   skills: ['Jest', 'React Testing Library', 'Cypress', 'Figma', 'Adobe XD', 'Storybook']
  // }
];

const skillProficiency = {
  JavaScript: 90,
  TypeScript: 85,
  HTML5: 95,
  CSS3: 90,
  Python: 80,
  SQL: 75,
  React: 90,
  Angular: 70,
  Bootstrap: 80,
  'Tailwind CSS': 85,
  'Material-UI': 75,
  'Spring Boot': 70,
  Git: 85,
  Firebase: 70,
  Vercel: 60,
};


export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title}>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1, duration: 1.0 }}
                          className="bg-orange-600 h-2.5 rounded-full"
                        ></motion.div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[80px]">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};