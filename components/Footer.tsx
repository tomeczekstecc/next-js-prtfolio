import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiFillGitlab,
} from 'react-icons/ai'
import {BiMailSend, BiPhone} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
            <div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div
                    className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
                    © 2023-2024 Tomasz Steć
                    <a
                        title={'link do sekcji głównej'}
                        href='/'
                        className='hover:underline'
                    ></a>


                </div>
                <div
                    className='flex space-x-1 justify-center align-middle items-center text-neutral-500 dark:text-neutral-100'>
                    <BiPhone/>
                    <div>502 990 876</div>
                </div>
                <div
                    className='flex space-x-1 justify-center align-middle items-center text-neutral-500 dark:text-neutral-100'>
                    <BiMailSend/>
                    <div>tomeczekstecc@gmail.com</div>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a
                        title={'link do social media'}
                        href='https://github.com/tomeczekstecc'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineGithub
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>
                    <a
                        title={'link do social media'}
                        href='https://gitlab.com/tomeczekstecc'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiFillGitlab
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>
                    <a
                        title={'link do social media'}
                        href='https://twitter.com/tomeczekstecc'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineTwitter
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>

                    <a
                        title={'link do social media'}
                        href='https://www.linkedin.com/in/tomasz-ste%C4%87-748726180/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineLinkedin
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
