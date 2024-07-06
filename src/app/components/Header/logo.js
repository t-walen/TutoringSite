import React from 'react'
import Link from "next/link";
import Image from 'next/image';


export const Logo = () => {
  return (
    <div className="flex items-center text-black">
    <Link href="/">
    <div className="flex items-center">
        <div className="w-23 h-23 overflow-hidden mr-2">
        <Image src="/logo-transparent.png" alt="logo" width={130} height={130} className="w-full h-auto" />
        </div>
        <span className="ml-0 font-bold text-xl"></span>
    </div>
    </Link>

    </div>
  )
}

export default Logo;
