'use client'
import '../styles/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" className={inter.className}>
        <head/>
        <body className={"dark:bg-gray-900"}>
        <ThemeProvider enableSystem={true} attribute="class">
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    )
}
