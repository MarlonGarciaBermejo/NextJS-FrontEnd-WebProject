"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-1 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        Welcome, I'm{"  "}
        </span>
        <br></br>
        <TypeAnimation
      sequence={[
        'Marlon',
        1000, 
        'Front-End Developer',
        1000,
        'Application Developer',
        1000,
        'Graphic Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            I'm a application developer mainly focusing on front-end with javascript.
            </p>
            <div>
            <button className="px-6 py-3 w-[150px] sm:-w-fit rounded-full  mr-4 bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-slate-200 text-white">
            Hire Me
            </button>
            <button className="px-1 py-1 w-[150px] s:w-fit rounded-full bg-gradient-to-br from-blue-500  to-blue-700 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full py-2">
            Download CV
            </span>
            </button>   
            </div>
            </div>
            <div className="col-span-1 place-self-center mt-4 lg:mt-0"></div>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-9">
            <Image 
            src="/images/mini-room.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={700}
            height={700}
            />
            </div>
            </div>
    </section>
  );
}
