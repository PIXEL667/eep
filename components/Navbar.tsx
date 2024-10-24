"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='mt-5 flex flex-col items-center'>
            {/* Mobile Navbar */}
            <div className='md:hidden w-full px-4'>
                <div className='flex justify-between items-center h-16 rounded-full px-4'>
                    {/* Menu Button */}
                    <button className='text-white text-2xl' onClick={toggleMenu}>
                    <RiMenuUnfoldLine />
                    </button>
                    
                    {/* Logo */}
                    <Link href="/" className='absolute left-1/2 transform -translate-x-1/2'>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Link>
                    
                    {/* Contact Button */}
                    <Link href="/contact" className='text-white text-2xl'>
                    <IoCallOutline />
                    </Link>
                </div>
            </div>

            {/* Sliding Menu */}
            {isMenuOpen && (
                <div
                    className={`fixed top-0 left-0 w-2/3 h-full bg-black text-white p-4 transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50`}
                >
                    <button className="absolute top-4 right-4 text-white text-4xl" onClick={toggleMenu}>
                    <IoCloseOutline />
                    </button>
                    <nav className="mt-8">
                        <ul className="space-y-4 text-3xl">
                            <li><Link href="#about" className="block">About</Link></li>
                            <li><Link href="/services" className="block">Services</Link></li>
                            <li><Link href="#projects" className="block">Projects</Link></li>
                            <li><Link href="#contact" className="block">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* Desktop Navbar (unchanged) */}
            <div className='hidden md:flex h-[80px] text-white gap-7 lg:gap-[90px] justify-center items-center px-10 text-lg font-medium border border-gray-400 rounded-full md:w-[600px] lg:w-[800px]'>
                <div className='flex gap-7 lg:gap-[40px]'>
                    <Link href="/">Services</Link>
                    <Link href="#projects">Projects</Link>
                </div>
                <div>
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={80} height={80} />
                    </Link>
                </div>
                <div className='flex gap-7 lg:gap-[40px]'>
                    <Link href="#about">About</Link>
                    <Link href="#socials">Socials</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
