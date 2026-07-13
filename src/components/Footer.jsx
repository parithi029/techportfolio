import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050816] border-t border-[#915eff]/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold text-[22px] tracking-wide"
        >
          Parithi Bharathidasan
        </motion.h3>

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#aaa6c3] text-[14px] text-center"
        >
          Full Stack Developer&nbsp;•&nbsp;Mobile App Developer&nbsp;•&nbsp;UI/UX Designer
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-6 mt-2"
        >
          <a
            href="https://github.com/parithi029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa6c3] hover:text-white transition-colors duration-200 text-sm font-medium"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <span className="text-[#915eff]/40">|</span>
          <a
            href="https://linkedin.com/in/pari7hi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa6c3] hover:text-[#0A66C2] transition-colors duration-200 text-sm font-medium"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <span className="text-[#915eff]/40">|</span>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=parithi029@gmail.com&tf=cm"
            className="text-[#aaa6c3] hover:text-[#915eff] transition-colors duration-200 text-sm font-medium"
            aria-label="Email"
          >
            Email
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#915eff]/40 to-transparent mt-4" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#aaa6c3]/60 text-[12px]"
        >
          © 2026 Parithi Bharathidasan. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
