"use client"
import { styles } from "@/app/styles";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";

const Hero = () => {
    const words = [
        " Your Tech Partner",
        "Turning Your Dream into Reality",
        "Crafting Your Dream, Our Promise",
        "Your Vision, Our Commitment",
        "Your Ambition, Our Dedication",
        "Your Dream, Our Path to Success",
        "Your Aspirations, Our Focus",
        "Your Dream, Our Duty",
        "Dreams Start, We Finish"
    ];

    return (
        <section className="min-h-screen w-full flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32">
            <div className="text-center max-w-4xl mx-auto gap-4 flex flex-col justify-center items-center">
                <motion.div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#915EFF]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    EXEIV
                </motion.div>
                <motion.div 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <FlipWords words={words} className="text-white" />
                </motion.div>
                <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    At the forefront of innovation, we transform visionary ideas into cutting-edge digital solutions, crafting technology that empowers businesses to thrive in a constantly evolving world
                </motion.p>

                <motion.div 
                    className="flex gap-5 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.button 
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-[#915EFF] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#fff] hover:text-black transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        Get Started
                    </motion.button>
                    <motion.button 
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full text-base sm:text-lg font-semibold hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
