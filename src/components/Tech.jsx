import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { techCategories } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const TechIcon = ({ name, icon, link, index }) => {
  const content = (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.08, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.12, rotate: 3, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="flex flex-col items-center gap-2 group"
      title={name}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#1d1836] to-[#151030] border border-[#915eff]/20 shadow-lg group-hover:border-[#915eff]/60 group-hover:shadow-[#915eff]/20 group-hover:shadow-xl transition-all duration-300 p-3">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<span style="color:#915eff;font-size:11px;font-weight:bold;text-align:center">${name.slice(0, 3)}</span>`;
          }}
        />
      </div>
      <span className="text-[#aaa6c3] text-[11px] font-medium text-center group-hover:text-white transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  );

  if (link && link !== '#') {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
        aria-label={`${name} documentation`}
      >
        {content}
      </a>
    );
  }
  return content;
};

const Tech = () => {
  let iconIndex = 0;

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="mt-16 space-y-12">
        {techCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-6 bg-[#915eff]" />
              <span className="text-[#915eff] text-sm font-semibold uppercase tracking-widest">
                {category.category}
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#915eff]/40 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-6">
              {category.items.map((tech) => {
                const idx = iconIndex++;
                return (
                  <TechIcon
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    link={tech.link}
                    index={idx}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
