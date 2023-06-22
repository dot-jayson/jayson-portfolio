"use client"
import { logos } from "../../public/assets/skills/index.js"
import { motion } from "framer-motion"
import SkillItem from "./SkillItem.jsx"

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}



const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-5">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                    <h2>What I can Do</h2>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >

                    {/* Skills, update this to use map function instead */}

                    {logos.map((logo, index) => (
                        <motion.div
                            variants={childVariant}
                            key={index}
                            className="p-6 shadow-sm shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300"

                        >
                            <SkillItem
                                logoImg={logo.img}
                                logoName={logo.name}
                            />

                        </motion.div>
                    ))}


                </motion.div>
            </div>
        </div>
    )
}

export default Skills