"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import React from 'react'
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
  
  const Faq = () => {
    return (
      <div className="w-[80vw] mx-auto">
        {
          data.map((data)=>(
            <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{data.q}</AccordionTrigger>
          <AccordionContent>
           {data.a}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
          ))
            
          }
      </div>
    )
  }

  const data = [
    {
      q: "What services does Exive offer?",
      a: "At Exive, we provide comprehensive services, including Web Development, Mobile App Development, 2D & 3D Graphics & Animation, and a range of Digital Solutions to help bring your ideas to life."
    },
    {
      q: "How does Exive ensure quality in its projects?",
      a: "We follow a systematic approach, starting with understanding your vision, followed by collaborative planning, development, and thorough testing to deliver high-quality results every time."
    },
    {
      q: "Can Exive handle both small and large projects?",
      a: "Absolutely! Whether you're a small business, a startup, or a large enterprise, Exive can manage projects of any size, offering customized solutions to meet your specific needs."
    },
    {
      q: "What industries does Exive serve?",
      a: "Exive serves clients across all industries. No matter your sector, we have the expertise to deliver tailored solutions that match your business goals."
    },
    {
      q: "What is Exive's process for web and mobile app development?",
      a: "Our process includes discovery, design, development, deployment, and post-launch support to ensure your project's success from start to finish."
    },
    {
      q: "Does Exive offer support after project completion?",
      a: "Yes, we provide ongoing support and maintenance to ensure that your solution continues to run smoothly after launch."
    },
    {
      q: "How can I get a quote for my project?",
      a: "You can reach out via our Contact page or give us a call, and we'll provide a personalized quote based on your specific project requirements."
    }

  ]
  
  export default Faq