import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import resumePDF from '../assets/Parithi_Resume.pdf';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto" aria-label="Hero Section">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                {/* Accent line */}
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div className="flex flex-col">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`${styles.heroHeadText} text-white`}
                    >
                        Hi, I'm <span className="text-[#915eff]">Parithi</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}
                    >
                        I'm a{' '}
                        <span className="text-[#915eff] font-semibold">Full Stack Developer</span> and{' '}
                        <span className="text-[#915eff] font-semibold">Mobile App Developer</span> passionate
                        about building modern web applications, cross-platform mobile experiences, and intuitive
                        user interfaces.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="mt-4 text-[#aaa6c3] text-[16px] sm:text-[18px] max-w-2xl leading-[28px]"
                    >
                        I design and develop scalable digital products using React, React Native, Python, and
                        Supabase while creating seamless user experiences through thoughtful UI/UX design.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-xl bg-[#915eff] text-white font-semibold text-[15px] hover:bg-[#7a4ee0] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#915eff]/30"
                            aria-label="View Projects"
                        >
                            View Projects
                        </a>
                        <a
                            href={resumePDF}
                            download="Parithi_Resume.pdf"
                            className="px-6 py-3 rounded-xl border border-[#915eff] text-[#915eff] font-semibold text-[15px] hover:bg-[#915eff]/10 transition-all duration-300 hover:scale-105 shadow-lg"
                            aria-label="Download Resume"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://github.com/parithi029"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl border border-[#aaa6c3]/40 text-[#aaa6c3] font-semibold text-[15px] hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
                            aria-label="GitHub Profile"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/pari7hi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl border border-[#aaa6c3]/40 text-[#aaa6c3] font-semibold text-[15px] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-300 hover:scale-105"
                            aria-label="LinkedIn Profile"
                        >
                            LinkedIn
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* 3D Computer Canvas */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:flex justify-center items-center xl:pr-10">
                <ComputersCanvas />
            </div>

            {/* Animated Scroll Arrow (Desktop Only) */}
            <div className="absolute bottom-10 w-full hidden lg:flex justify-center items-center z-10">
                <a href="#about" aria-label="Scroll down">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut'
                        }}
                        className="flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-[#915eff] text-sm uppercase tracking-widest font-semibold mb-2">Scroll</span>
                        <svg
                            className="w-6 h-6 text-[#915eff]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
