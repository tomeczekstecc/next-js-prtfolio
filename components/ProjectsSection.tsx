import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRightSquare, BsGithub} from "react-icons/bs";
import {SiGitlab} from "react-icons/si";
import SlideUp from "@/components/SlideUp";

const projects = [
    {
        name: "Ocena wniosków stypendialnych",
        description:
            "Aplikacja służąca do zarządzania wnioskami stypendialnymi, dokonywania oceny wniosków, zarządzania ocenami, przydzielania oceniających oraz udostępniania materiałów pomocniczych. Obsługuje cały proces po złożeniu wniosku przez ucznia lub opiekuna do jego oceny przez oceniającego, po zatwierdzenie przez menadżera.",
        image: "/project_1.png",
        repo: "https://repo.com/hqasmei/thankful-thoughts",
        link: "https://stypendia-ocena-dev.tomaszstec.me/",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Express.js', 'GraphQL', 'MySQL', 'TypeORM', 'Docker', 'GitLab CI/CD', 'Keycloak']
    },
    {
        name: "Data overview",
        description: "Aplikacja służąca do przeglądu danych statystycznych, np. sprzedażowych, oferująca różne ciekawe wizualizacje danych, w różnych konfigurowalnych przez użytkownika układach. Wersja poglądowa, ponieważ hostowana jest na darmowyej platwormie, pierwsze uruchomienie może zająć ok minuty.",
        image: "/project_2.png",
        repo: "https://repo.com/hqasmei/platoio",
        link: "https://platoio.com/register",
    },
    {
        name: "Kator Family Photos",
        description:
            "Kator Family Photos is a photos and video digitization service in the LA area.",
        image: "/project_3.jpg",
        repo: "https://repo.com/hqasmei/katorfamilyphotos",
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
                                        <Image src={project.image} alt={project.name} className={'w-full'} width={400}
                                               height={400}/></Link>
                                </div>
                                <div className={'md:w-1/2 flex flex-col justify-between gap-4'}>
                                    <div>
                                        <h1 className={'text-center text-2xl font-bold mb-6 md:text-left'}>{project.name}</h1>
                                        <p className={'text-center md:text-left'}>{project.description}</p>
                                    </div>
                                    <div className={'hidden flex-wrap md:flex '}>
                                        {project?.techs?.map((tech, index) => (
                                            <div key={index}
                                                 className={'bg-gray-200 p-1 mr-1 mt-1 text-gray-600 rounded font-semibold'}>
                                                {tech}
                                            </div>
                                        ))}</div>
                                    <div className={'flex flex-col md:flex-row md:space-x-10'}>

                                        <div className={'flex space-x-3'}>
                                            <Link title={'link do repozytorium'} href={project.repo} target={'_blank'}>
                                                <div
                                                    className={'hover:-translate-y-1 transition-transform cursor-pointer'}>{project.icon}</div>
                                            </Link>
                                            <br/>
                                            <Link href={project.link} title={'link do projektu'}>
                                                <BsArrowUpRightSquare size={30}
                                                                      className={'hover:-translate-y-1 transition-transform cursor-pointer'}/></Link>
                                        </div>
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
