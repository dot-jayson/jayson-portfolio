"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener("scroll", handleShadow)
    }, [])


    return (
        <div className={shadow ? "fixed w-full h-20 shadow-md shadow-gray-400 z-[50] bg-[#121212]" : "fixed w-full h-20 z-[50] bg-[#121212]"}>
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">

                <Link className="" href="/#home">
                    <h1>J<span>C</span></h1>
                </Link>

                <div>
                    <ul className="hidden md:flex">
                        <Link href="/#home">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    {/* Open sidebar nav button */}
                    <div
                        onClick={handleNav}
                        className="md:hidden cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile overlay (dark background when sidebar nav opens) */}
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 text-[#121212]" : ""}>
                {/* Sidebar nav */}
                <div className={
                    nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#121212] text-slate-200 p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
                }>
                    <div>
                        <div className="flex justify-between w-full items-center">
                            <Link href="/#home">
                                <h1>J<span>C</span></h1>
                            </Link>
                            {/* Close sidebar nav button */}
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-2" />

                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/#home">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#skills">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <Link href="https://www.linkedin.com/in/jaysonchiu/"
                                    target="_blank">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link href="https://github.com/dot-jayson"
                                    target="_blank">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href="/#contact">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div></Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar