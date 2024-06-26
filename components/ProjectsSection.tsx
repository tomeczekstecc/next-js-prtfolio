import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRightSquare} from "react-icons/bs";
import {SiGitlab} from "react-icons/si";
import SlideUp from "@/components/SlideUp";
import getAllProjects from "@/app/actions/getAllProjects";

const projects = [
    {
        name: "Portal ze sklepem i blogiem",
        description:
            "Portal umożliwiający przeglądanie, usuwanie, edytowanie blogów, komentowania ich, przeglądanie, usuwanie, edytowanie filmów oraz pełny sklep z obsługą koszyka z funkcją dokonywania płatności za pomocą karty, gpay, blik oraz przelewów bankowych. Portal obsługuje w pełni funkcjonalny system obsługi autoryzacji i autentykacji.  ",
        image: "/project_6.png",
        repo: "https://gitlab.com/tomeczekstecc/martyna-tv",
        link: "https://martyna-tv.vercel.app/store/",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'TypeScript', 'NextAuth.js', 'NextJS', 'Stripe', 'ShadCNUI', 'TailwindCSS', 'Node.js', 'Prisma', 'Redux/Redux Toolkit', 'tRPC']
    },
    {
        name: "Ocena wniosków stypendialnych",
        description:
            "Aplikacja służąca do zarządzania wnioskami stypendialnymi, dokonywania oceny wniosków, zarządzania ocenami, przydzielania oceniających oraz udostępniania materiałów pomocniczych. Obsługuje cały proces po złożeniu wniosku przez ucznia lub opiekuna do jego oceny przez oceniającego, po zatwierdzenie przez menadżera.",
        image: "/project_1.png",
        repo: "https://gitlab.com/tomeczekstecc/ocena-web-chakra-ui",
        link: "https://stypendia-ocena-dev.tomaszstec.me/",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'TypeScript', 'Chakra UI', 'Node.js', 'Express.js', 'GraphQL', 'MySQL', 'TypeORM', 'Docker', 'GitLab CI/CD', 'Keycloak']
    },

    {
        name: "Data overview",
        description: "Aplikacja służąca do przeglądu danych statystycznych, np. sprzedażowych, oferująca różne ciekawe wizualizacje danych, w różnych konfigurowalnych przez użytkownika układach. Wersja poglądowa, ponieważ hostowana jest na darmowyej platwormie, pierwsze uruchomienie może zająć ok minuty.",
        image: "/project_2.png",
        repo: "https://gitlab.com/tomeczekstecc/data-overview",
        link: "https://fullstack-dashboard-client-2g2w.onrender.com",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'Vite', 'Material UI', 'Node.js', 'Express.js', 'Redux', 'REST Api', 'Docker', 'Mongo DB']

    },
    {
        name: "Ecommerce Shop",
        description:
            "Testowy sklep z obsługą płatności przy użyciu Stripe oraz cmsa Strapi. Zapewnia przegląd produktów np. wg kategorii, obsługuje koszyk, formularz zamówienia oraz płatności.",
        image: "/project_3.png",
        repo: "hhttps://gitlab.com/tomeczekstecc/ecommerce-shop-strapi",
        link: "/",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'Strapi', 'Stripe', 'Material UI', 'Redux', 'Formik', 'Docker', 'GitLab CI/CD']
    },
    {
        name: "Wyszukiwarka filmów",
        description:
            "Wyszukiwarke filmów z wykorzystaniem API The Movie Database. Zapewnia przegląd filmów, ich szczegółowe informacje",
        image: "/project_5.png",
        repo: "https://gitlab.com/tomeczekstecc/moviesdb",
        link: "https://moviesdb.tomaszstec.me",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'NextJS', 'React-Query', 'REST API', 'Tailwind CSS', 'Vercel']
    },
    {
        name: "Markdown Blog",
        description:
            "Blog utworzony przy pomocy NextJS, Gray-Matter i Remark. Zapewnia możliwość tworzenia postów z plików markdown, które są automatycznie przetwarzane na wpisy postów na stronie. Wykorzystano strategie Static Generation, dzięki której strona uzyskała maksymalną ilosć punktów w Lighthouse.",
        image: "/project_4.png",
        repo: "https://gitlab.com/tomeczekstecc/nextjs-markdown-blog",
        link: "https://blog.tomaszstec.me",
        icon: <SiGitlab size={30}/>,
        techs: ['React', 'NextJS', 'Gray-Matter', 'Markdown', 'Remark', 'Tailwind CSS', 'Vercel']
    },
]


// const onSub = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault()
//     await getAllProjects()
// }


type Project = {
    title: string
}

const ProjectsSection = async () => {

    const data = await getAllProjects()

    console.log(data)

    return (
        <section id={'projects'}>
            {
                data.map((project: Project, index: number) => <div key={index}>
                    <h1>{project.title}</h1>
                    {/*<p>{project.description}</p>*/}
                </div>)
            }
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
                                            {project.link !== '/' &&
                                                <Link href={project.link} title={'link do projektu'}>
                                                    <BsArrowUpRightSquare size={30}
                                                                          className={'hover:-translate-y-1 transition-transform cursor-pointer'}/></Link>}
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
