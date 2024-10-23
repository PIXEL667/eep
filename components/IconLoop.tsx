"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaVuejs, FaAngular, FaPython, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';

const IconLoop: React.FC = () => {
  const icons = [
    FaReact, FaNodeJs, FaVuejs, FaAngular, FaPython, FaJava, FaDocker, FaAws,
    SiTypescript, SiJavascript, SiMongodb, SiPostgresql
  ];

  const colors = [
    '#61DAFB', '#68A063', '#41B883', '#DD0031', '#3776AB', '#007396', '#2496ED', '#FF9900',
    '#3178C6', '#F7DF1E', '#47A248', '#336791'
  ];

  return (
    <div className="relative overflow-hidden py-10 bg-transparent">
      <div className="absolute inset-0 bg-transparent z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920], // Assuming a max-width of 1920px
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...icons, ...icons, ...icons].map((Icon, index) => (
          <motion.div
            key={index}
            className="inline-block mx-8"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Icon
              className="text-5xl transition-colors duration-300"
              style={{ color: colors[index % colors.length] }} // Assign color to each icon
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconLoop;
