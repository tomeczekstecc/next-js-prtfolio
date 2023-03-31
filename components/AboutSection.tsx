import React from 'react'
import Image from 'next/image'

const techs = [
    {name: 'React'},
    {name: 'Next.js'},
    {name: 'JavaScript'},
    {name: 'TypeScript'},
    {name: 'TailwindCSS'},
    {name: 'Node.js'},
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Express.js'},
    {name: 'MongoDB'},
    {name: 'PostgreSQL'},
    {name: 'Docker'},
    {name: 'Git'},
    {name: 'GitHub'},
    {name: 'GitLab'},
    {name: 'REST API'},
    {name: 'tRPC'},
    {name: 'GraphQL'},
    {name: 'Apollo'},
    {name: 'Redux'},
    {name: 'Redux-Toolkit'},
    {name: 'IntelliJ'},
]


const AboutSection = () => {
    return (
        <section id={'about'}>
            <div className={'my-12 pb-12 md:pt-16 md:pb-48'}>
                <h1 className={'text-center font-bold text-4xl'}>O mnie
                    <hr className={'w-8 h-1 rounded mx-auto mt-4 border-2 border-teal-600'}/>
                </h1>
                <div
                    className={'flex flex-col items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-x-0 space-x-10'}>
                    <div className={'md:w-1/2'}>
                        <h1 className={'text-center text-2xl font-bold mb-6 md:text-left'}>Poznaj mnie</h1>
                        <p>
                            Cześć, jestem Tomasz, i jestem:
                            <span className={'font-bold'}> ambitny,</span>
                            <span className={'font-bold'}> wytrwały w tym co robię,</span>
                            <span className={'font-bold'}> jestem osobą, która lubi szybko rozwiązywać problemy.</span>
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias 👷‍♀️
                        </p>
                        <br/>                   <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias 👷‍♀️
                    </p>
                        <br/>
                    </div>
                    <div className={'md:w-1/2'}>
                        <h1 className={'text-center text-2xl font-bold mb-6 md:text-left'}>Technologie</h1>
                        <div className={'flex flex-wrap flex-row justify-center md:justify-start'}>
                            {techs.map((tech, index) => (
                                <p key={index}
                                   className={'bg-gray-200 px-2  py-1  mr-1 mt-1  md:text-xl md:px-4 md:py-3 md:mr-3 md:mt-3 text-gray-500 rounded font-semibold'}>{tech.name}</p>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default AboutSection
