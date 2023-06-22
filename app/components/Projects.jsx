"use client"
import chatAppImg from '../../public/assets/projects/chat-app.png'
import fitnessAppImg from '../../public/assets/projects/fitness-app.png'
import photographyAppImg from '../../public/assets/projects/photography-app.png'
import netflixAppImg from '../../public/assets/projects/netflix-clone.png'
import ProjectItem from "./ProjectItem"
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const Projects = () => {
    return (


        <div id='projects' className="w-full pt-20">
            <div className="max-w-[1240px] mx-auto px-5 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                    <h2 className="py-4">What I've Built</h2>
                </motion.div>
                <motion.div className="grid md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >

                    <ProjectItem
                        title="Chat App"
                        backgroundImg={chatAppImg}
                        tech="React | Firebase"
                        projectUrl="https://chat-room-lemon.vercel.app/chat"
                        githubUrl="https://github.com/dot-jayson/chat-room"
                    />

                    <ProjectItem
                        title="Fitness App"
                        backgroundImg={fitnessAppImg}
                        tech="React | TypeScript | Framer Motion"
                        projectUrl="https://fitness-app-ruddy.vercel.app/"
                        githubUrl="https://github.com/dot-jayson/fitness-app"
                    />

                    <ProjectItem
                        title="Photography App"
                        backgroundImg={photographyAppImg}
                        tech="Nextjs | Tailwind"
                        projectUrl="https://photography-app-kohl.vercel.app/"
                        githubUrl="https://github.com/dot-jayson/photography-app"
                    />

                    <ProjectItem
                        title="Netflix Clone"
                        backgroundImg={netflixAppImg}
                        tech="React | Tailwind | Firebase"
                        projectUrl="https://netflix-clone-beta-black.vercel.app/"
                        githubUrl="https://github.com/dot-jayson/netflix-clone"
                    />

                </motion.div>
            </div>
        </div>

    )
}

export default Projects