import { motion } from "framer-motion";
import React from "react";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Grid } from "@/components/Grid";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Testimonials } from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { Newslatter } from "@/components/Newslatter";
import { OurApproach } from "@/components/OurApproach";

export default function Home() {
  return (<>


<Hero></Hero>
<Grid></Grid>
<ProjectsGrid></ProjectsGrid>
<OurApproach></OurApproach>
<Testimonials></Testimonials>
<Faq></Faq>
<Newslatter></Newslatter>


  {/* <AuroraBackground>
    
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-[500] dark:text-white text-center">
        Your Tech Solution Partner Exeiv.

        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Your Vision Our Passion For Inovation

        </div>
        <Link href={"/"} className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Learn More
        </Link>
      </motion.div>
  </AuroraBackground>

  <Grid></Grid> */}

  </>
  );
}
