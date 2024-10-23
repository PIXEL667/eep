import { styles } from "@/app/styles";
import { FlipWords } from "../components/ui/flip-words";

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
                <div className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-normal text-[#915EFF]">
                    EXEIV
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ">
                    <FlipWords words={words} className="text-white" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mt-4">
                At the forefront of innovation, we transform visionary ideas into cutting-edge digital solutions, crafting technology that empowers businesses to thrive in a constantly evolving world
                </p>
                
                <button className="mt-6 w-[190px] sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[#915EFF] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#7c4edb] transition-colors duration-300">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
