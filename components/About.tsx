"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 2.5, // Increased delay between children animations
          },
        },
      };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 2.2, // Increased duration for smoother animation
            ease: "easeOut",
          },
        },
      };
    
    const titleVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 2.2, // Increased duration for smoother animation
          },
        },
      };

    return (
        <section id='about' ref={ref} className="py-20 mt-[-120px] bg-transparent text-white">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-3xl mx-auto"
              >
                <motion.h1 
                  variants={titleVariants}
                  className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-[#915EFF]"
                >
                  ABOUT US
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-lg mb-6">
                  Based in India, EXEIV is a dynamic team dedicated to delivering innovative digital solutions. Our expertise spans Web and Mobile App Development, UI/UX Design, Digital Branding, and more. We transform ideas into impactful realities with cutting-edge technology.
                </motion.p>
                
                <motion.p variants={itemVariants} className="text-lg mb-6">
                  Our journey began with a vision to revolutionize technology. We've worked on diverse projects, from E-commerce to AI solutions, always striving for innovation and excellence to meet our clients' highest standards.
                </motion.p>
                
                <motion.p variants={itemVariants} className="text-lg">
                  Beyond crafting exceptional digital experiences, we explore new technologies and industry trends to stay ahead. At EXEIV, we are committed to growth and connecting with innovators in the tech community.
                </motion.p>
              </motion.div>
            </div>
        </section>
    );
};

export default About;
