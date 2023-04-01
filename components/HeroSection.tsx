'use client'
import React from 'react'
import Image from 'next/image'
import {Link} from 'react-scroll/modules'
import {HiArrowDown} from "react-icons/all";

const HeroSection = () => {
    return (
        <section id={'home'}>`
            <div
                className={'flex flex-col text-center items-center justify-center my-10 py-20 sm:py-32  md:flex-row md:space-x-6 md:text-left md:py-52'}>
                <div className={'md:w-1/2 md:mt-2'}>
                    <Image className={'rounded-full shadow-2xl'} src={'/profile.jpg'} alt={'head shot'} width={300}
                           height={300}/>
                </div>
                <div className={'md:w-3/4 md:mt-2'}>
                    <h1 className={'text-6xl font-bold mt-6 md:text-7xl md:mt-0'}>Cześć, jestem Tomasz</h1>
                    <p className={'text-xl mt-4 mb-6'}>
                        Jestem
                        <span className={'font-semibold dark:text-teal-600 text-teal-700 '}> programistą </span>
                        specjalizującym się w tworzeniu aplikacji webowych i stron internetowych.
                    </p>
                    <Link
                        to={'projects'}
                        activeClass={'active'}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={'text-white font-semibold px-6 py-3 bg-teal-700 rounded hover:bg-teal-600'}
                    >
                        Projekty
                    </Link>
                </div>
            </div>
            <div className={'flex flex-row justify-center'}>
                <Link to={'about'}
                      activeClass={'active'}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                    <HiArrowDown size={40} className={'animate-bounce text-teal-700'}/>
                </Link>
            </div>
        </section>
    )
}
export default HeroSection
