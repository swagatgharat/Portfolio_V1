import React from 'react';
import { motion } from 'framer-motion';
import { home_assets } from '../assets/home/home_assets.js';

const HomeSection = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4 select-none"
      style={{ userSelect: 'none' }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <img
          src={home_assets.profile}
          alt="Profile"
          className="rounded-full w-32 pointer-events-none"
          draggable="false"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm John Doe
        <img
          src={home_assets.hand}
          alt="Hand"
          className="w-6 pointer-events-none"
          draggable="false"
        />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[44px] font-Ovo"
      >
        Freelance Website & Application Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        I am a passionate and detail-oriented developer with a strong foundation in building responsive, user-friendly web and mobile applications. 
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2 cursor-pointer select-none"
          style={{ userSelect: 'none' }}
        >
          Contact Me
          <img
            src={home_assets.right_arrow}
            alt="Arrow"
            className="w-4 pointer-events-none"
            draggable="false"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Sample_Resume.pdf"
          download
          className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 bg-white text-black cursor-pointer select-none"
          style={{ userSelect: 'none' }}
        >
          My Resume
          <img
            src={home_assets.download}
            alt="Download"
            className="w-4 pointer-events-none"
            draggable="false"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default HomeSection;
