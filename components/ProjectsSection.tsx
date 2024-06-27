import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRightSquare} from "react-icons/bs";
import {SiGitlab} from "react-icons/si";
import SlideUp from "@/components/SlideUp";
import getAllProjects from "@/app/actions/getAllProjects";
import * as process from "node:process";


type Image = {
    data: {
        attributes: {
            url: string
        }
    }
}

type Project = {
    attributes: {
        name: string
        description: string
        image: Image
        icon: string
        repo: string
        link: string
        techs: string
    }
}


const ProjectsSection = async () => {

    const data = await getAllProjects()

    return (
        <section id={'projects'}>

            <h1 className={'text-center font-bold text-4xl'}>Przykładowe projekty
                <hr className={'w-8 h-1 rounded mx-auto mt-4 border-2 border-teal-600'}/>
            </h1>

            <div className={'flex flex-col space-y-28 mt-16'}>
                {data.map((project: Project, index: string) => {


                    console.log(project.attributes.link, 'data')

                    return <div key={index}>
                        <SlideUp offset={'-300px 0px -300px 0px'}>
                            <div className={'flex flex-col md:flex-row md:space-x-10'}>
                                <div className={'md:w-1/2 animate-slideUpCubiBezier animation-delay'}>
                                    <Link href={project.attributes.link} target={'_blank'}>
                                        <Image
                                            src={process.env.NEXT_PUBLIC_STRAPI_URL +
                                                project.attributes.image.data.attributes.url
                                            }
                                            alt={project.attributes.name} className={'w-full'}
                                            width={400}
                                            height={400}/></Link>
                                </div>
                                <div className={'md:w-1/2 flex flex-col justify-between gap-4'}>
                                    <div>
                                        <h1 className={'text-center text-2xl font-bold mb-6 md:text-left'}>{project.attributes.name}</h1>
                                        <p className={'text-center md:text-left'}>{project.attributes.description}</p>
                                    </div>
                                    <div className={'hidden flex-wrap md:flex '}>
                                        {project?.attributes.techs.split(',').map((tech, index) => (
                                            <div key={index}
                                                 className={'bg-gray-200 p-1 mr-1 mt-1 text-gray-600 rounded font-semibold'}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={'flex flex-col md:flex-row md:space-x-10'}>

                                        <div className={'flex space-x-3'}>
                                            <Link title={'link do repozytorium'} href={project.attributes.repo}
                                                  target={'_blank'}>
                                                <div
                                                    className={'hover:-translate-y-1 transition-transform cursor-pointer'}>{
                                                    project.attributes.icon === 'gitlab' ? <SiGitlab size={30}/> :
                                                        <SiGitlab size={30}
                                                        />}
                                                </div>
                                            </Link>
                                            <br/>
                                            {project.attributes.link !== '/' &&
                                                <Link href={project.attributes.link} title={'link do projektu'}>
                                                    <BsArrowUpRightSquare size={30}
                                                                          className={'hover:-translate-y-1 transition-transform cursor-pointer'}/></Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                })
                }

            </div>

        </section>
    )
}
export default ProjectsSection
