import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../style';
import { whyWorkWithMe } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const WhyCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn('up', 'spring', index * 0.2, 0.6)}
      className="xs:w-[260px] w-full"
    >
      <Tilt options={{ max: 30, scale: 1.03, speed: 400 }}>
        <div className="relative w-full p-[1px] rounded-2xl overflow-hidden group">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915eff] via-[#6C63FF] to-[#00E5FF] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-[#1d1836] to-[#100d25] rounded-2xl py-8 px-8 min-h-[220px] flex flex-col gap-4">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#915eff]/30 to-[#6C63FF]/20 flex items-center justify-center text-3xl border border-[#915eff]/30">
              {icon}
            </div>

            <h3 className="text-white text-[18px] font-bold leading-tight">{title}</h3>
            <p className="text-secondary text-[14px] leading-[22px]">{description}</p>

            {/* Decorative corner */}
            {/* <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#915eff]/10 border border-[#915eff]/20" /> */}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const WhyWorkWithMe = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>What makes me different</p>
        <h2 className={styles.sectionHeadText}>Why Work With Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I bring a unique combination of technical depth and design sensibility to every project,
        delivering solutions that are both powerful and beautiful.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center sm:justify-start">
        {whyWorkWithMe.map((item, index) => (
          <WhyCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WhyWorkWithMe, 'why');
