"use client"
import React, { useRef } from 'react';
import Link from "next/link";


const Footer = () => {


return (
    <footer className=' bg-LightGrey flex flex-col items-center text-light'>
        <h3 className='mt-5 mb-5 font-medium text-center capitalize text-2xl px-4'>
        <a href="/About">About</a> | <a href="/">Home</a>
        </h3>

    <div className='w-full mt-15 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
        <span>&copy;2024 Stellar Solutions</span>

    </div>
    </footer>
)

};

export default Footer;
