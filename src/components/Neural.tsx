'use client';

import { FaBrain, FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa"; // Import equivalent icons from react-icons

const Neural = () => {
    return (
        <section className="bg-black text-white py-16 px-6 text-center relative overflow-hidden">
            <div className="container mx-auto relative">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-500">
                    Neural Capabilities
                </h2>

                {/* Subheading */}
                <p className="text-lg text-gray-300 mt-3">
                    Powered by next-generation artificial intelligence
                </p>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 relative z-10">
                    {/* Card Component */}
                    {[
                        { icon: <FaBrain size={36} />, title: "Autonomous Learning", description: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning" },
                        { icon: <FaRobot size={36} />, title: "Multi-Modal Intelligence", description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding" },
                        { icon: <FaNetworkWired size={36} />, title: "Cognitive Integration", description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges" },
                        { icon: <FaShieldAlt size={36} />, title: "Ethical AI Framework", description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment" }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-lg border-2 border-purple-800 hover:border-purple-400 shadow-lg transition-transform duration-300 w-64 mx-auto transform hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)]"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gradient-to-r from-purple-800 to-sky-800 transition-transform duration-300 hover:rotate-6">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mt-3 text-left">{item.title}</h3>
                            <p className="text-gray-400 mt-1 text-sm text-left">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Neural;
