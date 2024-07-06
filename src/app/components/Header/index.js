import React from 'react';
import Logo from './logo';
import Link from "next/link";

const Header = () => {
    return (
      <header className=" bg-LightGrey w-full p-6 px-24 flex items-center justify-between z-20">
          <Logo />
          <nav className="w-max h-[10vh] py-4 px-12 border border-dark rounded-full font-medium capitalize flex items-center fixed top-10 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-40">
              <Link href="/" className="mr-1 text-2xl">Home</Link>
              <Link href="/About" className="mx-4 text-2xl">About</Link>
              <Link href="/Contact" className="mr-4 text-2xl">Contact</Link>

          </nav>

      </header>
    )
  }

  export default Header;
