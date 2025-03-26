'use client';

import { FaBuilding, FaNetworkWired, FaShieldAlt } from "react-icons/fa"; // Import equivalent icons from react-icons

const Solutions = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-16 text-center relative overflow-hidden">
            <div className="container mx-auto relative">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-500">
                    AI Solutions
                </h2>

                {/* Subheading */}
                <p className="text-base md:text-lg text-gray-300 mt-3">
                    Transforming industries with intelligent agents
                </p>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative z-10">
                    {/* Card Data */}
                    {[
                        { icon: <FaBuilding size={28} />, title: "Enterprise AI", description: "Custom AI agents designed for enterprise-scale operations and decision-making" },
                        { icon: <FaNetworkWired size={28} />, title: "Neural Operations", description: "Automated workflow optimization through distributed neural networks" },
                        { icon: <FaShieldAlt size={28} />, title: "Secure Intelligence", description: "Privacy-first AI solutions with military-grade security protocols" }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-950 p-6 rounded-lg border-2 border-purple-800 hover:border-purple-400 shadow-lg transition-transform duration-300 w-full sm:w-80 md:w-96 mx-auto transform hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)]"
                        >
                            <div className="flex items-center space-x-4 text-left">
                                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-800 to-sky-800 transition-transform duration-300 hover:rotate-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 mt-3 text-sm md:text-base text-left">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
