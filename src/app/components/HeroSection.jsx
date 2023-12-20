"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


export const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-1 py-24 pb-7 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-bold">
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
      speed={40}
      repeat={Infinity}
    />
        </h1>
        <p className="text-white text-base sm:text-lg mb-5 py-0 px-5 pl-1 lg:text-xl">
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
            <div className="w-[300px] h-[300px] lg:w-[700px] lg:h-[600px] relative mt-20">
            
            <Image
            src="/images/header-img.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={768}
            />
            </div>
            </div>
    </section>
  );
}

export default HeroSection;
