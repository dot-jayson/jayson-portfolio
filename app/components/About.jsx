"use client"

import Image from "next/image"
import AboutImg from "../../public/assets/about.jpg"
import Link from "next/link"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-5 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <motion.div
                    className="col-span-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-500">// Front-end developer</p>
                    <p className="py-2 text-gray-500">Self-taught and passionate about front-end development,
                        I am constantly staying up to date with the latest technologies and trends in the field.
                        With a keen eye for design, I thoroughly enjoy the process of crafting visually appealing
                        and responsive web pages.
                    </p>
                    <p className="py-2 text-gray-500">My portfolio showcases a collection of projects that reflect
                        my dedication to creating intuitive user experiences and aesthetically pleasing interfaces.
                        I am excited to contribute my skills and creativity to dynamic teams in delivering exceptional
                        web solutions.
                    </p>

                    <p className="py-2 text-gray-500 underline">
                        <Link href="/#projects">
                            Check out some of my latest projects.
                        </Link>
                    </p>

                </motion.div>
                <motion.div
                    className="w-full h-auto m-auto shadow-md shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <Image src={AboutImg} className="rounded-xl" alt="about" />


                </motion.div>
            </div>
        </div>
    )
}

export default About