'use client'
import React, {} from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from "../public/assets/home/logo.png";

interface NavbarProps {
    handleContactClick: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({handleContactClick })=> {
    return (
        <div className='w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-right w-full h-full px-2 2xl:px-16'>
            <div className="flex items-center">
                <Link href='/'>
                <Image 
                src={Logo} 
                className='rounded-xl h-16 w-auto' 
                alt='Crescent Academy Logo'
                />
                </Link>
                <ul className=' md:flex ml-4'> 
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>Home</li>
                </Link>
                <Link href='/programs'> 
                <li className='ml-10 text-sm uppercase hover:border-b hover:border-black'>Programs</li>
                </Link>
                <Link href='/' onClick={handleContactClick}>
                    <li className='ml-10 text-sm uppercase hover:border-b hover:border-black cursor-pointer'>Contact</li> 
                </Link>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;