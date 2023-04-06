import React from 'react'
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
    return (
        <div className={'pt-32 md:pt-52 mb-20'} id={'contact'}>
            <h1 className={'text-center font-bold text-4xl'}>Kontakt
                <hr className={'w-8 h-1 rounded mx-auto mt-4 border-2 border-teal-600'}/>
            </h1>


            <div className={'flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 mb-12'}>
                <div>
                    <h3 className={'text-center text-3xl font-bold mb-6 md:text-left'}>Skontaktuj się ze mną</h3>
                    <p className={'mb-3'}>
                        Zapraszam do konatktu duże firmy, mały biznes, instytucje publiczne, osoby prywatne. Odpowiadam
                        szybko, telefony odbieram, wyceny robię do 24 godzin.
                        <br/>
                    </p>
                    <p>
                        Każdy projekt wymaga indywidualnego podejścia, dlatego proszę o kontakt za pomocą formularza
                        kontaktowego, telefoniczny lub
                        mailowy.
                    </p>
                </div>


            </div>
            <ContactForm/>

        </div>

    )
}
export default ContactSection
