'use client'
import '../styles/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "next-themes";
import {Toaster} from "react-hot-toast";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest pareFnt
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head><title></title></head>
        <body className={"dark:bg-gray-900"}>
        <ThemeProvider enableSystem={true} attribute="class">
            <Toaster position={'top-center'}/>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    )
}
