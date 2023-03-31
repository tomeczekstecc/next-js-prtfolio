import Image from 'next/image'
import {Inter} from '@next/font/google'
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
        </main>
    )
}
