'use client';

import { FaBrain, FaMicrochip, FaChartBar, FaGlobe } from "react-icons/fa"; // Import equivalent icons from react-icons

const Powered = () => {
    return (
        <section className="bg-black text-white py-16 px-4 md:px-16 text-center relative overflow-hidden">
            <div className="container mx-auto relative">
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-500">
                    Powered by Advanced AI
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-gray-300 mt-3">
                    Built on cutting-edge neural architectures
                </p>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 relative z-10">
                    {/* Card Data */}
                    {[
                        { icon: <FaBrain size={28} />, title: "Neural Networks", description: "Advanced neural architectures for complex decision making" },
                        { icon: <FaMicrochip size={28} />, title: "High-Performance CPUs", description: "Optimized for deep learning computations" },
                        { icon: <FaChartBar size={28} />, title: "Advanced ML", description: "Cutting-edge machine learning algorithms" },
                        { icon: <FaGlobe size={28} />, title: "Global Scale", description: "Distributed AI processing across global networks" }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-950 p-5 rounded-lg border-2 border-purple-800 hover:border-purple-400 shadow-lg transition-transform duration-300 w-full sm:w-72 md:w-64 mx-auto transform hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)]"
                        >
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-800 to-sky-800 transition-transform duration-300 hover:rotate-6">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
                            <p className="text-gray-400 mt-1 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Powered;
