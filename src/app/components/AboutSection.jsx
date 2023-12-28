"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>Kotlin</li>
                <li>Swift</li>
                <li>Photoshop</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Scrum</li>
                <li>Github</li>
                <li>Canva</li>
                <li>Figma</li>
                <li>Android Studios</li>
                <li>Xcode</li>
            </ul>
        )
        },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Application Developer</li>
                <li>Folkuniversitetet - Gotheburg</li>
                <li>Graphic Design & Communication</li>
                <li>RunoFolkhogskola - Stockholm</li>
                <li>Mainframe: The Complete COBOL Course</li>
                <li>Udemy.com</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>  {
            setTab(id);
        })
    }
  return (
   <section className="text-white "> 
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-image.png" width={500} height={500} />
    <div>
    <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-4xl font-bold text-blue-500">Me</span></h2>
   <p className='text-base lg:text-lg'>Info text about myself here.
   </p>
    <div className="flex flex-row mt-8">
    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
    </div>
    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
   </div>
   </div>
   </section>
  )
};

export default AboutSection;