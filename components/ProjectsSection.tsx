import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRightSquare, BsGithub} from "react-icons/all";
import SlideUp from "@/components/SlideUp";

const projects = [
    {
        name: "Thankful Thoughts",
        description:
            "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/project_1.jpg",
        github: "https://github.com/hqasmei/thankful-thoughts",
        link: "https://thankfulthoughts.io/",
    },
    {
        name: "PlatoIO",
        description: "PlatoIO is a to do list app that built using the PERN stack.",
        image: "/project_2.jpg",
        github: "https://github.com/hqasmei/platoio",
        link: "https://platoio.com/register",
    },
    {
        name: "Kator Family Photos",
        description:
            "Kator Family Photos is a photos and video digitization service in the LA area.",
        image: "/project_3.jpg",
        github: "https://github.com/hqasmei/katorfamilyphotos",
        link: "https://katorfamilyphotos.com/",
    },
]

const ProjectsSection = () => {
    return (
        <section id={'projects'}>
            <h1 className={'text-center font-bold text-4xl'}>Przykładowe projekty
                <hr className={'w-8 h-1 rounded mx-auto mt-4 border-2 border-teal-600'}/>
            </h1>

            <div className={'flex flex-col space-y-28 mt-16'}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <SlideUp offset={'-300px 0px -300px 0px'}>
                            <div className={'flex flex-col md:flex-row md:space-x-10'}>
                                <div className={'md:w-1/2 animate-slideUpCubiBezier animation-delay'}>
                                    <Link href={project.link} target={'_blank'}>
                                        <Image src={project.image} alt={project.name} className={'w-full'} width={300}
                                               height={300}/></Link>
                                </div>
                                <div className={'md:w-1/2 flex flex-col justify-between'}>
                                    <div>
                                        <h1 className={'text-center text-2xl font-bold mb-6 md:text-left'}>{project.name}</h1>
                                        <p className={'text-center md:text-left'}>{project.description}</p>
                                    </div>
                                    <div className={'flex space-x-3'}>
                                        <Link href={project.github} target={'_blank'}>
                                            <BsGithub size={30}
                                                      className={'hover:-translate-y-1 transition-transform cursor-pointer'}/>
                                        </Link>
                                        <br/>
                                        <Link href={project.link}>
                                            <BsArrowUpRightSquare size={30}
                                                                  className={'hover:-translate-y-1 transition-transform cursor-pointer'}/></Link>
                                    </div>
                                </div>

                            </div>
                        </SlideUp>
                    </div>
                ))}

            </div>

        </section>
    )
}
export default ProjectsSection
