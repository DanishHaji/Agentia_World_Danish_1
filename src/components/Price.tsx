'use client';

import { FaCheckCircle } from "react-icons/fa"; // Import the check icon from react-icons

const Price = () => {
    const plans = [
        {
            name: "Starter",
            price: "$499",
            duration: "/month",
            features: [
                "2 AI Agent Instances",
                "Basic Neural Processing",
                "24/7 Support",
                "Weekly Analytics",
                "Basic Integration Support",
            ],
        },
        {
            name: "Professional",
            price: "$999",
            duration: "/month",
            features: [
                "10 AI Agent Instances",
                "Advanced Neural Networks",
                "Priority Support",
                "Real-time Analytics",
                "Custom Integration",
                "API Access",
                "Advanced Security",
            ],
        },
        {
            name: "Enterprise",
            price: "$Custom",
            duration: "",
            features: [
                "Unlimited Agents",
                "Full Neural Suite",
                "Dedicated Support Team",
                "Advanced Analytics Dashboard",
                "Custom Development",
                "Full API Access",
                "Enterprise Security",
                "Custom Training",
            ],
        },
    ];

    return (
        <section className="bg-black text-white py-16 px-8 text-left">
            <div className="container mx-auto">
                {/* Main Heading */}
                <h2 className="text-4xl justify-center text-center md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-500">
                    Choose Your Plan
                </h2>

                {/* Subheading */}
                <p className="text-lg justify-center text-center text-gray-300 mt-3">
                    Scale your AI capabilities with our flexible pricing
                </p>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="group bg-gray-950 p-6 rounded-lg border border-purple-700 hover:bg-[rgba(128,0,128,0.2)] 
                                        transition-all duration-300 shadow-lg transform hover:scale-95 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] flex flex-col justify-between h-full"
                        >
                            {/* Sub Heading */}
                            <h3 className="text-xl font-semibold text-gray-300">{plan.name}</h3>

                            {/* Price */}
                            <div className="flex items-baseline mt-2">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-lg text-gray-400 ml-1">{plan.duration}</span>
                            </div>

                            {/* Features List */}
                            <ul className="mt-4 space-y-2 text-gray-300">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <FaCheckCircle className="text-purple-500" size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button 
                                type="submit" 
                                className="cursor-pointer mt-6 w-full py-2 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-sky-500 shadow-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50 transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Price;
