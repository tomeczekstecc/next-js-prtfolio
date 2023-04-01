import React from 'react'

const ContactSection = () => {
    return (
        <div className={'pt-32 md:pt-52'} id={'contact'}>
            <h1 className={'text-center font-bold text-4xl'}>Kontakt
                <hr className={'w-8 h-1 rounded mx-auto mt-4 border-2 border-teal-600'}/>
            </h1>
            <div className={'flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0'}>
                <div className={'md:w-1/2'}>
                    <h2 className={'text-center text-2xl font-bold mb-6 md:text-left'}>Skontaktuj się ze mną</h2>
                    <p className={'mb-3'}>
                        Zapraszam do konatktu duże firmy, mały biznes, instytucje publiczne, osoby prywatne. Odpowiadam
                        szybko, telefony odbieram, wyceny robię do 24 godzin.
                        <br/>
                    </p>
                    <p>
                        Każdy projekt wymaga indywidualnego podejścia, dlatego proszę o kontakt telefoniczny lub
                        mailowy.
                    </p>
                </div>

                <div className={'md:w-1/2'}>
                    <h1 className={'text-center font-bold text-xl md:text-2xl'}>Telefon</h1>
                    <div
                        className={'flex flex-col items-center text-xl md:text-3xl justify-center align-top md:flex-row md:text-left md:p-4 md:space-x-0 space-x-10'}>
                        502 990 876
                    </div>

                    <h1 className={'text-center font-bold text-xl md:text-2xl'}>Email</h1>
                    <div
                        className={'flex flex-col items-center text-xl md:text-3xl justify-center align-top md:flex-row md:text-left md:p-4 md:space-x-0 space-x-10'}>
                        <a href="mailto:tomeczekstecc@gmail.com">
                            tomeczekstecc@gmail.com
                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default ContactSection
