import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo_new, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo_new} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Parithi&nbsp;
            <span className="sm:block hidden text-[#915eff]">| Full Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/parithi029"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile/Tablet Nav */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[29px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            initial={false}
            animate={
              toggle
                ? { opacity: 1, y: 0, pointerEvents: 'auto' }
                : { opacity: 0, y: -10, pointerEvents: 'none' }
            }
            transition={{ duration: 0.2 }}
            className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl"
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/parithi029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
