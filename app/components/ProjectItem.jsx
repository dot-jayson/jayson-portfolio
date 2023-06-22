"use client"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, githubUrl }) => {
    return (
        <motion.div
            className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
            variants={childVariant}
        >
            <Image
                className="rounded-xl group-hover:opacity-10"
                src={backgroundImg}
                alt="property project"
            />
            <div className="hidden group-hover:flex flex-col absolute">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <div className="flex justify-around gap-4">
                    <Link href={projectUrl} target="_blank">
                        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg">Demo</p>
                    </Link>
                    <Link href={githubUrl} target="_blank">
                        <p className="flex items-center gap-1 text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg"><FaGithub /> Github</p>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectItem