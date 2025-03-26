'use client';

import { AiOutlineMail } from 'react-icons/ai'; // Mail icon
import { AiOutlineGlobal } from 'react-icons/ai'; // Globe icon
import { AiFillGithub } from 'react-icons/ai'; // Github icon
import { AiFillLinkedin } from 'react-icons/ai'; // Linkedin icon
import { AiOutlineTwitter } from 'react-icons/ai'; // Twitter icon

const Contact = () => {
    return (
        <section className="bg-black text-white py-16 px-6 sm:px-8">
            <div className="container mx-auto text-center">
                {/* Headings */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-500">
                    Get in Touch
                </h2>
                <p className="text-md sm:text-lg text-gray-300 mt-3">
                    Ready to transform your business with AI?
                </p>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side - Contact Information */}
                <div className="p-6 sm:p-10 rounded-lg shadow-lg text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-white">Contact Information</h3>

                    {/* Email */}
                    <div className="flex items-center justify-center md:justify-start mt-4 space-x-3 text-gray-300">
                        <AiOutlineMail className="text-purple-500" size={30} />
                        <span>contact@agentiaworld.com</span>
                    </div>

                    {/* Website */}
                    <div className="flex items-center justify-center md:justify-start mt-3 space-x-3 text-gray-300">
                        <AiOutlineGlobal className="text-purple-500" size={30} />
                        <span>www.agentiaworld.com</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-6">
                        {[{ icon: AiFillGithub, link: "#" }, { icon: AiFillLinkedin, link: "#" }, { icon: AiOutlineTwitter, link: "#" }].map((item, index) => (
                            <a key={index} href={item.link} aria-label="social links" className="cursor-pointer text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50 rounded-full p-2 transition-all duration-300">
                                <item.icon size={29} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="p-6 sm:p-10 rounded-lg shadow-lg">
                    <form className="space-y-4">
                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="w-full p-3 rounded-md bg-gray-950 text-white border border-purple-950 focus:outline-none focus:border-purple-500" />
                            <input type="text" placeholder="Last Name" className="w-full p-3 rounded-md bg-gray-950 text-white border border-purple-950 focus:outline-none focus:border-purple-500" />
                        </div>

                        {/* Email Address */}
                        <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md bg-gray-950 text-white border border-purple-950 focus:outline-none focus:border-purple-500" />

                        {/* Message */}
                        <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-md bg-gray-950 text-white border border-purple-950 focus:outline-none focus:border-purple-500"></textarea>

                        {/* Submit Button */}
                        <button 
                            type='submit' 
                            className="cursor-pointer w-full py-3 mt-2 rounded-md text-lg font-semibold bg-gradient-to-r from-purple-500 to-sky-500 shadow-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50 transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
