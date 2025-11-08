import React from 'react';
import { motion } from 'framer-motion';
import { programming, frontend, backend, tool, ui_libraries, deploy } from '../assets/tech/tech_assets.js';


const TechSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="tech"
      className="w-full px-[12%] py-10 scroll-mt-20 select-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        What I Use
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-4"
      >
        My tech stack includes modern tools and frameworks that help me build fast,
        responsive, and scalable web applications.
      </motion.p>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full mb-6">
        Programming Languages & Markup
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {programming.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full my-6">
        Frontend Technologies & Frameworks
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {frontend.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full my-6">
        UI Libraries & Components
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {ui_libraries.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full my-6">
        Backend, Databases & APIs
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {backend.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full my-6">
        Tools & Version Control
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {tool.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

      <div className="border border-gray-800 rounded-xl px-6 py-3 text-base font-semibold w-full my-6">
        Deployment & Hosting
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {deploy.map(({ icon, title }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:-translate-y-1 hover:shadow-md duration-300 aspect-square"
          >
            <img src={icon} alt={title} className="w-16 mb-4 object-contain" />
            <h3 className="text-base font-semibold">{title}</h3>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default TechSection;
