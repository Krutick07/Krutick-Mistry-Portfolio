import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About = () => {
  const techSkills = [
    'Problem Solving',
    'Code Review',
    'UI/UX Design',
  ];

  const tools = [
    'VS Code',
    'Eclipse',
    'git',
    'Open-AI'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With over 1 years of experience in frontend development, I specialize in building 
              exceptional digital experiences. My expertise lies in React, Angular, and modern 
              CSS frameworks, with a strong focus on creating performant and accessible web applications.  
              I'm passionate about clean code, responsive design, and staying current with the latest 
              web technologies. Additionally, I have experience working with Spring Boot for building 
              robust backend services, enabling me to contribute effectively across the full stack.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Tools I Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};