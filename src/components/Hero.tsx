import React from 'react';
import { Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from '../components/assets/krutickProfile.jpg'
import { Link as ScrollLink } from 'react-scroll';
import resumepdf from '../components/assets/Krutick Mistry Resume.pdf'

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">          <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Krutick Mistry
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block text-orange-600 dark:text-orange-400"
            >
              Frontend Developer
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Hire Me
            </ScrollLink>

            <a
              href={resumepdf}
              download="Krutick_Mistry_Resume.pdf"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          <img
            src={profile}
            alt="Krutick Mistry"
            className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white dark:border-gray-800 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};