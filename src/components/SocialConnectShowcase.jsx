import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { projects } from '../constants';
import { github } from '../assets';

const SocialConnectShowcase = () => {
  const navigate = useNavigate();
  const project = projects.find(p => p.name === "SocialConnect Hub");
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 320; // approximate width of one card + gap
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  if (!project) return null;

  return (
    <div className="bg-primary min-h-screen text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d1836] hover:bg-[#915eff]/20 border border-[#915eff]/30 transition-colors"
        >
          <span className="text-xl">←</span> Back to Portfolio
        </button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-8 rounded-3xl border border-[#915eff]/20 shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className={`${styles.heroHeadText} !text-4xl sm:!text-5xl mb-4`}>{project.name}</h1>
              <p className="text-secondary text-lg leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag.name} className={`px-3 py-1 rounded-full text-sm font-medium bg-[#915eff]/10 border border-[#915eff]/20 ${tag.color}`}>
                    #{tag.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => window.open(project.source_code_link, '_blank')}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1d1836] hover:bg-black border border-white/10 transition-colors shadow-lg"
                >
                  <img src={github} alt="github" className="w-6 h-6 object-contain" />
                  <span>GitHub Repository</span>
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-[300px] h-[300px] rounded-3xl border-[4px] border-[#1d1836] shadow-2xl overflow-hidden bg-white flex items-center justify-center p-6">
                <img src={project.image} alt="App Preview" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1d1836] p-8 rounded-3xl border border-white/5"
          >
            <h2 className={`${styles.sectionHeadText} !text-3xl mb-6`}>Overview & Features</h2>
            <ul className="list-none space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary text-lg">
                  <span className="text-[#915eff] mt-1">✦</span>
                  {feature}
                </li>
              ))}
              <li className="flex items-start gap-3 text-secondary text-lg">
                <span className="text-[#915eff] mt-1">✦</span> Cross-platform compatibility for Android and iOS devices.
              </li>
              <li className="flex items-start gap-3 text-secondary text-lg">
                <span className="text-[#915eff] mt-1">✦</span> Advanced filtering algorithms to connect volunteers with local initiatives.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1d1836] p-8 rounded-3xl border border-white/5"
          >
            <h2 className={`${styles.sectionHeadText} !text-3xl mb-6`}>Development Process</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Challenges</h3>
                <p>Handling real-time data sync across multiple organizations and ensuring offline capabilities for volunteers in remote areas posed significant challenges.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Solutions</h3>
                <p>Implemented an optimized Supabase architecture using local caching and optimistic UI updates for a seamless offline experience.</p>
              </div>
              <div>
                <h3 className="text-[#915eff] font-semibold text-xl mb-2">My Contributions</h3>
                <p>Architected the full backend schema, integrated authentication, built the React Native UI layout system, and led performance optimization efforts using Sentry.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className={`${styles.sectionHeadText} !text-4xl mb-8 text-center`}>App Gallery</h2>
          
          {/* Scroll Buttons */}
          <button 
            onClick={() => scrollGallery('left')}
            className="absolute left-0 top-[55%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1d1836]/90 hover:bg-[#915eff] text-white backdrop-blur-sm border border-[#915eff]/30 shadow-xl transition-all hover:scale-110"
            aria-label="Scroll Left"
          >
            <span className="text-3xl leading-none -mt-1">‹</span>
          </button>
          
          <button 
            onClick={() => scrollGallery('right')}
            className="absolute right-0 top-[55%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1d1836]/90 hover:bg-[#915eff] text-white backdrop-blur-sm border border-[#915eff]/30 shadow-xl transition-all hover:scale-110"
            aria-label="Scroll Right"
          >
            <span className="text-3xl leading-none -mt-1">›</span>
          </button>

          <div 
            ref={galleryRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar justify-start px-8 items-center h-[600px] scroll-smooth"
          >
            {project.images && project.images.map((img, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] h-[550px] snap-center rounded-[2rem] overflow-hidden border-[8px] border-[#1d1836] shadow-2xl relative group"
              >
                <img src={img} alt={`SocialConnect Screenshot ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold tracking-wider">Screenshot {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialConnectShowcase;
