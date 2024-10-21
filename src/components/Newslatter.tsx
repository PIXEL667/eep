"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { NewslatterSignupButton } from "./Newslatter-Signup-Button";
import Link from "next/link";

export function Newslatter() {
  const words = [
    {
      text: "Join",
    },
    
    {
      text: "Programm IT",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Today.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="/" className="w-40 text-center  h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            <span className="my-auto">Contact Us</span>
        </Link>
       <NewslatterSignupButton ></NewslatterSignupButton>
      </div>
    </div>
  );
}
