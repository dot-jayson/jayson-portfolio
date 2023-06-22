"use client"

import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from "framer-motion"


const Contact = () => {

    const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/

    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter your full name"),
        phoneNumber: yup.string().matches(PHONE_NO_REGEX, { message: "Invalid phone number" }).required("Please enter your Phone number"),
        email: yup.string().email().required("Please enter your email"),
        subject: yup.string().required("Subject field is required"),
        message: yup.string().required("Message field is required")
    })

    const { register, trigger, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = async (e) => {
        const isValid = await trigger()

        if (!isValid) {
            e.preventDefault()
        }

    }

    return (
        <div id="contact" className="w-full lg:h-screen pt-20">
            <div className="max-w-[1240px] m-auto px-5 py-16 w-full">
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
                    <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                        Contact
                    </p>
                    <h2 className="py-4">
                        Get In Touch
                    </h2>
                </motion.div>

                {/* <div> */}
                {/* left */}
                {/* <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src={contactImg}
                                    alt="contact" />
                            </div>
                            <div>
                                <h2 className="py-2">Jayson Chiu</h2>
                                <p>Front-End Developer</p>
                                <p>I am available for freelance or full-time positions. Contact me and let's talk</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect With Me</p>
                                <div className="flex items-center justify-between py-4">
                                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                {/* right */}
                <motion.div
                    className="max-w-6xl h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4  mt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="p-4">
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action={`https://formsubmit.co/${process.env.FORM_KEY}`}>

                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Name
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 border-gray-300 text-black"
                                        type="text"
                                        name="fullName"
                                        {...register("fullName")}
                                    />
                                    <p className="text-red-500">{errors.fullName?.message}</p>
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Phone Number
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 border-gray-300 text-black"
                                        type="text"
                                        name="phoneNumber"
                                        {...register("phoneNumber")}
                                    />
                                    <p className="text-red-500">{errors.phoneNumber?.message}</p>
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Email
                                </label>
                                <input
                                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                />
                                <p className="text-red-500">{errors.email?.message}</p>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Subject
                                </label>
                                <input
                                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                                    type="text"
                                    name="subject"
                                    {...register("subject")}
                                />
                                <p className="text-red-500">{errors.subject?.message}</p>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Message
                                </label>
                                <textarea
                                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                                    rows="10"
                                    name="message"
                                    {...register("message")}
                                />
                                <p className="text-red-500">{errors.message?.message}</p>
                            </div>
                            <button
                                className="w-full p-4 text-gray-100 mt-4 shadow-none"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </motion.div>
                {/* </div> */}
                <div className="flex justify-center py-12">
                    <Link href="/#home">
                        <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact