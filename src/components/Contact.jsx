import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_9u6v7pl',
                'template_zssszfu',
                {
                    from_name: form.name,
                    to_name: 'Parithi',
                    from_email: form.email,
                    to_email: 'parithi029@gmail.com',
                    message: form.message,
                },
                'RkF0nV6IDLCjyoews'
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you! I will get back to you as soon as possible.');
                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-gradient-to-br from-[#1d1836] to-[#100d25] p-8 rounded-2xl border border-[#915eff]/15"
            >
                <p className={styles.sectionSubText}>Let's collaborate</p>
                <h3 className={styles.sectionHeadText}>Let's Build Something Great.</h3>

                <p className="mt-3 text-secondary text-[15px] leading-relaxed max-w-md">
                    Whether you have a project, internship opportunity, or collaboration in mind, I'd love to
                    hear from you.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                    <label className="flex flex-col" htmlFor="contact-name">
                        <span className="text-white font-medium mb-3">Your Name</span>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            required
                            className="bg-[#151030] border border-[#915eff]/20 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/60 transition-colors duration-200 font-medium"
                        />
                    </label>
                    <label className="flex flex-col" htmlFor="contact-email">
                        <span className="text-white font-medium mb-3">Your Email</span>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            required
                            className="bg-[#151030] border border-[#915eff]/20 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/60 transition-colors duration-200 font-medium"
                        />
                    </label>
                    <label className="flex flex-col" htmlFor="contact-message">
                        <span className="text-white font-medium mb-3">Your Message</span>
                        <textarea
                            id="contact-message"
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What would you like to discuss?"
                            required
                            className="bg-[#151030] border border-[#915eff]/20 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/60 transition-colors duration-200 font-medium resize-none"
                        />
                    </label>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-[#915eff] to-[#6C63FF] py-4 px-10 rounded-xl text-white font-bold text-[16px] shadow-lg shadow-[#915eff]/30 hover:shadow-[#915eff]/50 transition-all duration-300 w-fit"
                        aria-label="Send message"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </motion.button>
                </form>

                {/* Social links */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="https://github.com/parithi029"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#aaa6c3]/30 text-[#aaa6c3] text-sm font-medium hover:border-white hover:text-white transition-all duration-200"
                        aria-label="GitHub profile"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/pari7hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#aaa6c3]/30 text-[#aaa6c3] text-sm font-medium hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-200"
                        aria-label="LinkedIn profile"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=parithi029@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#aaa6c3]/30 text-[#aaa6c3] text-sm font-medium hover:border-[#915eff] hover:text-[#915eff] transition-all duration-200"
                        aria-label="Send email"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Email
                    </a>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
