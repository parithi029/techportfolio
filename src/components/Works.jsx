import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { useNavigate } from 'react-router-dom';
import { styles } from '../style';

// --- Active Project Card ---
const ProjectCard = ({ index, name, description, tags, features, source_code_link, live_link, route, image, cta_text }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (route) {
      navigate(route);
    } else if (live_link) {
      window.open(live_link, '_blank');
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn('up', 'spring', index * 0.4, 0.75)}
    >
      <Tilt
        options={{ max: 15, scale: 1.01, speed: 450 }}
        className="sm:w-[320px] w-full"
      >
        <div 
          onClick={handleNavigation}
          className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-5 rounded-2xl border border-[#915eff]/15 shadow-xl hover:border-[#915eff]/40 transition-all duration-300 cursor-pointer h-full"
        >
          {/* Project header visual */}
          <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-[#915eff]/10 to-[#6C63FF]/5 flex items-center justify-center border border-[#915eff]/20">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#915eff] to-[#00E5FF]" />
            
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover z-10" />
            ) : (
              <div className="z-10 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-[#915eff]/30 border border-[#915eff]/50 flex items-center justify-center shadow-lg shadow-[#915eff]/20">
                  <span className="text-3xl">
                    {name.includes('Mobile') || name.includes('Social')
                      ? '📱'
                      : name.includes('Portfolio') || name.includes('Interactive')
                        ? '💻'
                        : name.includes('AI')
                          ? '🤖'
                          : name.includes('Dashboard')
                            ? '📊'
                            : name.includes('Commerce')
                              ? '🛒'
                              : '⚡'}
                  </span>
                </div>
              </div>
            )}

            {/* Floating Pill Button CTA */}
            {(live_link || route) && (
              <div className="absolute top-3 right-3 z-20">
                <div
                  className="px-4 py-2 rounded-full text-[13px] font-bold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#00E5FF]/30 hover:scale-105 hover:shadow-[#00E5FF]/20 flex items-center gap-1"
                >
                  {cta_text || "Live ↗"}
                </div>
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[18px] leading-tight">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>

            {/* Feature chips */}
            {features && features.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-[#915eff]/15 text-[#915eff] border border-[#915eff]/25"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// --- Coming Soon Card ---
const ComingSoonCard = ({ index, name, description, tags }) => {
  const totalActive = projects.filter((p) => !p.coming_soon).length;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn('up', 'spring', (totalActive + index) * 0.4, 0.75)}
    >
      <div className="relative sm:w-[360px] w-full">
        <div className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-5 rounded-2xl border border-[#915eff]/10 shadow-xl overflow-hidden">
          {/* Blurred header */}
          <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-[#915eff]/10 to-[#6C63FF]/5 flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="z-10 blur-[3px]">
              <div className="w-16 h-16 rounded-2xl bg-[#915eff]/20 border border-[#915eff]/30 flex items-center justify-center">
                <span className="text-3xl">
                  {name.includes('AI') ? '🤖' : name.includes('Dashboard') ? '📊' : '🛒'}
                </span>
              </div>
            </div>
          </div>

          {/* Blurred text */}
          <div className="mt-5 blur-[4px] select-none pointer-events-none">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>

          {/* Coming Soon overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-3"
            >
              <div className="px-4 py-2 rounded-full bg-[#915eff]/20 border border-[#915eff]/50 backdrop-blur-md">
                <span className="text-[#915eff] font-bold text-sm tracking-wider uppercase">
                  Coming Soon
                </span>
              </div>
              <p className="text-[#aaa6c3] text-xs text-center max-w-[200px]">{name}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Works Section ---
const Works = () => {
  const activeProjects = projects.filter((p) => !p.coming_soon);
  const upcomingProjects = projects.filter((p) => p.coming_soon);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A collection of projects showcasing my expertise in full stack development, mobile
          applications, UI engineering, and modern web technologies.
        </motion.p>
      </div>

      {/* Active projects */}
      <div className="mt-16 flex flex-wrap gap-7">
        {activeProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Upcoming projects */}
      {upcomingProjects.length > 0 && (
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-8 bg-[#aaa6c3]/40" />
            <p className="text-[#aaa6c3] text-sm uppercase tracking-widest font-medium">
              Upcoming Projects
            </p>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#aaa6c3]/40 to-transparent" />
          </motion.div>

          <div className="flex flex-wrap gap-7">
            {upcomingProjects.map((project, index) => (
              <ComingSoonCard key={`upcoming-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, 'projects');
