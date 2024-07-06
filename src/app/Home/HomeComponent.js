'use client'
import '../globals.css'
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeComponent() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">

      <div className="grid grid-cols-2 gap-4 w-full py-10 mb-6">
        <div className="flex items-center justify-center">
          <p className='text-center text-4xl text-Brown font-bold fadeIn'>
            <span className="block" style={{ textAlign: 'left' }}>Tutoring</span>
            <span className="block" style={{ textAlign: 'left' }}>that will boost</span>
            <span className="block" style={{ textAlign: 'left' }}>confidence & grades</span>
          </p>
        </div>
        <div className="relative">
          <Image
            src="/tutorpic.png"
            alt="tutorpic"
            width={400}
            height={400}
            layout="responsive"
            className="object-center object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-white"></div>
        </div>
      </div>

      <div className="top-10 left-0 right-0 text-center z-30 mt-10">
        <p className="text-4xl font-bold text-darkbrown" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Get Started Today
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-24 mb-10 ml-3">
        <div className="w-full lg:w-1/2">
          <Image
            src="/tutorpic3.jpg"
            alt="tutorpic3"
            width={1000}
            height={700}
            layout="responsive"
            className="object-center object-cover rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-6 lg:px-0">
          <div className="bg-white px-6" >
            <ul className="list-with-checkmark text-white text-center">
              <li>Online or In Person Lessons</li>
              <li>Flexible Scheduling</li>
              <li>Lessons Tailored to each student</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-10 mb-10">
        <div className="w-full lg:w-3/4 px-6 lg:px-0">
          <div className="bg-white px-6 py-4">
            <p className="text-center text-4xl font-bold text-darkbrown mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              Subjects
            </p>
            <div className="flex flex-wrap text-gray-700 text-3xl">
              <ul className="flex flex-wrap gap-4 justify-center text-Brown">
                <li>Physics |</li>
                <li>Chemistry |</li>
                <li>Geometry |</li>
                <li>Algebra I </li>
                <li>Algebra II |</li>
                <li>Calculus </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 p-6 border border-black rounded-md mb-10">
        <p className="text-4xl font-bold text-darkbrown" style={{ fontFamily: 'Roboto, sans-serif', color: '#FFD700' }}>
          ★★★★★
        </p>
        <p className="text-3xl text-gray-700" style={{ fontFamily: 'Roboto, sans-serif'}} >5-star rating on <a href="https://www.wyzant.com/tutor/profile"><u>Wyzant</u></a></p>
        <p className="text-lg" style={{ fontFamily: 'Roboto, sans-serif'}}>(40 ratings)</p>
      </div>

      </div>
);

}
