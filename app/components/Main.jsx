"use client"

import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto flex p-5 justify-center items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <p className="uppercase text-sm tracking-widest text-gray-400">
                        Hello World
                    </p>
                    <h1 className="py-4 text-gray-300">
                        Hi, I'm <span className="text-[#5651e5]">Jayson.</span>
                    </h1>
                    <h1 className="py-2 text-gray-300">
                        A front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-400 max-w-[70%] m-auto">
                        Computer Science graduate and passionate self-taught front-end developer with a strong focus on staying up to date with the latest technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href="https://www.linkedin.com/in/jaysonchiu/"
                            target="_blank">
                            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href="https://github.com/dot-jayson"
                            target="_blank">
                            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Main