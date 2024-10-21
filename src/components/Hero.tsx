
"use client";
import React from "react";

import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Vortex } from "./ui/vortex";
import Link from "next/link";

export function Hero() {
  return (<>
    
      <div className="flex flex-col overflow-hidden">
      
        <ContainerScroll
          titleComponent={
            <>
            {/* <AuroraBackground> */}
              <div className="h-[40rem] flex items-center justify-center">
                <TextHoverEffect text="Exive" />
              </div>
              {/* </AuroraBackground> */}
            </>
          }
        >
          
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Your Tech Solution Partner!
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          {/* will add soon */}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/about" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Know More!
          </Link>
          <Link href="/contact" className="px-4 py-2  text-white ">Contact Us</Link>
        </div>
      </Vortex>
      
        </ContainerScroll>
      </div>
      </>
      );
}

