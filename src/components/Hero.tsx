'use client';

import { useState, useEffect } from 'react';
import { LuBot } from "react-icons/lu"; 

const lines = [
    "Hello! I'm your AI agent. How can I enhance your business today?",
    "Unlock new possibilities with AI.",
    "Streamline your operations with intelligent agents.",
];

const Hero = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayAfterTyping = 1500;
        const text = lines[currentLine];

        if (!isDeleting && index < text.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText(text.slice(0, index + 1));
                setIndex(prevIndex => prevIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(typingTimeout);
        } 
        else if (isDeleting && index > 0) {
            const deletingTimeout = setTimeout(() => {
                setDisplayText(text.slice(0, index - 1));
                setIndex(prevIndex => prevIndex - 1);
            }, deletingSpeed);
            return () => clearTimeout(deletingTimeout);
        } 
        else if (index === text.length) {
            setTimeout(() => setIsDeleting(true), delayAfterTyping);
        } 
        else if (index === 0 && isDeleting) {
            setIsDeleting(false);
            setCurrentLine((prev) => (prev + 1) % lines.length);
        }
    }, [index, isDeleting, currentLine]);

    return (
        <section className='hero bg-gradient-to-t from-purple-950 via-black/95 to-black text-white min-h-screen flex flex-col justify-center py-20 px-4 text-center font-[Arial]'>
            <div className='container mx-auto'>
                {/* Powered by Panaversity */}
                <span className='bg-gray-900 text-purple-300 text-sm px-3 py-1 rounded-full inline-flex items-center'>
                    ● POWERED BY PANAVERSITY
                </span>

                {/* Heading */}
                <h1 className='text-4xl md:text-6xl font-bold my-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-sky-400/50 to-purple-500'>
                    Enterprise AI Agents
                    <br />
                    <span className='text-white'>For the Future</span>
                </h1>

                {/* Bot Icon & Typing Box */}
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-6 mt-6">
                    {/* Bot Icon inside Gradient Circle */}
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-sky-500 flex items-center justify-center">
                        <LuBot className="text-5xl md:text-6xl text-white" />
                    </div>

                    <div className="border-2 border-purple-500 p-6 rounded-lg bg-gray-900 w-full max-w-lg">
                        <div className="p-5 rounded-md bg-gray-800 mx-2">
                            <div className="text-base text-white min-h-[1.5rem] whitespace-pre-line">
                                {displayText} <span className="animate-blink">|</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='buttons mt-8 flex flex-col sm:flex-row justify-center gap-4'>
                    <button 
                        type='submit' 
                        className='cursor-pointer relative bg-gradient-to-r from-purple-500 to-sky-500 text-white py-4 px-8 rounded-md text-xl font-bold shadow-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50 transition-all duration-300'>
                        Deploy Your AI Agent
                    </button>
                    <button 
                        type='submit' 
                        className='cursor-pointer relative bg-transparent text-white py-3 px-8 border-2 border-purple-500 rounded-md font-bold transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] hover:shadow-purple-500/50'>
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
