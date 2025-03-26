'use client';

import { FaRobot, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 sm:px-8">
            {/* Top Dark Purple Line */}
            <div className="border-t border-purple-900 w-full mb-8"></div>

            {/* Footer Content */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Column 1 - Brand Info */}
                <div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <FaRobot size={30} className="text-purple-500" />
                        <h2 className="text-2xl font-semibold">Agentia World</h2>
                    </div>
                    <p className="text-gray-400 mt-3">
                        Next-generation AI agents powering the future of enterprise intelligence.
                    </p>
                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        {[{ icon: FaGithub, link: "#" }, { icon: FaLinkedin, link: "#" }, { icon: FaTwitter, link: "#" }].map((item, index) => (
                            <a 
                                key={index} 
                                href={item.link} 
                                aria-label='social links' 
                                className="cursor-pointer text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50 rounded-full p-2 transition-all duration-300"
                            >
                                <item.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2 - Product */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Product</h3>
                    <ul className="mt-3 space-y-2">
                        {["Features", "Pricing", "Documentation", "API"].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="cursor-pointer text-gray-400 hover:text-purple-500 transition duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Company */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Company</h3>
                    <ul className="mt-3 space-y-2">
                        {["About", "Blog", "Careers", "Contact"].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="cursor-pointer text-gray-400 hover:text-purple-500 transition duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 - Legal */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Legal</h3>
                    <ul className="mt-3 space-y-2">
                        {["Privacy", "Terms", "Security", "Compliance"].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="cursor-pointer text-gray-400 hover:text-purple-500 transition duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Dark Purple Line */}
            <div className="border-t border-purple-900 w-full mt-8 mb-4"></div>

            {/* Copyright Text */}
            <p className="text-center text-gray-400 text-sm">
                © 2025 Agentia World. Powered by Panaversity. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
