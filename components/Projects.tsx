"use client";
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

// Define a TypeScript interface for the ProjectCard props
interface ProjectCardProps {
    title: string;
    imageSrc: string;
    description: string;
    footerContent: string;
    buttonLink: string;
}

// Reusable Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, description, footerContent, buttonLink }) => {
    const wordColorMap: { [key: string]: string } = {
        "#Steam": "text-cyan-500",
        "#Clerk": "text-purple-500",
        "#Next.js": "text-white",
        "#React": "text-cyan-500",
        "#TailwindCSS": "text-blue-500",
        // Add more mappings as needed
    };

    return (
        <Card className='bg-[#1d1c1e] text-white w-full sm:w-[250px] md:w-[300px] lg:w-[350px] hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:scale-105'>
            <CardHeader className='p-4'>
                <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
            </CardHeader>
            <div className='flex justify-center items-center p-4'>
                <Image src={imageSrc} alt={title.toLowerCase()} width={300} height={300} className='rounded-md' layout="responsive" />
            </div>
            <CardContent className='p-4'>
                <CardDescription className='text-sm'>{description}</CardDescription>
            </CardContent>
            <CardFooter className='flex flex-col items-start text-center mt-4 p-4'>
                <p className='text-sm mb-2 flex space-x-3'>
                    {footerContent.split(' ').map((word, index) => (
                        <span key={index} className={`${wordColorMap[word] || 'text-white'}`}>
                            {word}
                        </span>
                    ))}
                </p>
                <button
                    onClick={() => window.open(buttonLink, "_blank", "noopener,noreferrer")}
                    className='inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>
                    Visit Website
                </button>
            </CardFooter>
        </Card>
    );
};

const Projects: React.FC = () => {
    const projectDetails = [
        {
            title: "EXEIV TALK",
            imageSrc: "/ExeivTalk.png",
            description: "EXEIV TALK is a cutting-edge video call app for seamless communication. It delivers high-quality video and audio, making conversations feel face-to-face. With an intuitive interface, users can quickly schedule, host, and join meetings.",
            footerContent: "#Steam  #Clerk  #Next.js #React #TailwindCSS",
            buttonLink: "https://exeiv-talk.vercel.app/"
        },
        {
            title: "EXEIV TALK",
            imageSrc: "/ExeivTalk.png",
            description: "EXEIV TALK is a cutting-edge video call app for seamless communication. It delivers high-quality video and audio, making conversations feel face-to-face. With an intuitive interface, users can quickly schedule, host, and join meetings.",
            footerContent: "#Steam  #Clerk  #Next.js #React #TailwindCSS",
            buttonLink: "https://exeiv-talk.vercel.app/"
        },
        {
            title: "EXEIV TALK",
            imageSrc: "/ExeivTalk.png",
            description: "EXEIV TALK is a cutting-edge video call app for seamless communication. It delivers high-quality video and audio, making conversations feel face-to-face. With an intuitive interface, users can quickly schedule, host, and join meetings.",
            footerContent: "#Steam  #Clerk  #Next.js #React #TailwindCSS",
            buttonLink: "https://exeiv-talk.vercel.app/"
        },
        {
            title: "EXEIV TALK",
            imageSrc: "/ExeivTalk.png",
            description: "EXEIV TALK is a cutting-edge video call app for seamless communication. It delivers high-quality video and audio, making conversations feel face-to-face. With an intuitive interface, users can quickly schedule, host, and join meetings.",
            footerContent: "#Steam  #Clerk  #Next.js #React #TailwindCSS",
            buttonLink: "https://exeiv-talk.vercel.app/"
        },
        // Add more projects here if needed
    ];

    return (
        <div id="projects" className='text-white flex flex-col bg-transparent px-4 sm:px-6 md:px-10 lg:px-20'>
            <h1 className="text-base font-bold mt-20 pb-10 text-[#915EFF] flex flex-col items-start">
                Our Work
                <span className='text-4xl md:text-5xl lg:text-6xl'>Projects.</span>
            </h1>
            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-[60px]'>
                    {projectDetails.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            imageSrc={project.imageSrc}
                            description={project.description}
                            footerContent={project.footerContent}
                            buttonLink={project.buttonLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
