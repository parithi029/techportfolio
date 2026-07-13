import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../style';
import { certifications } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { close } from '../assets';

const CertCard = ({ index, name, issuer, color, icon, image, setSelectedCert }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn('up', 'spring', index * 0.2, 0.6)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative bg-gradient-to-br from-[#1d1836] to-[#151030] rounded-2xl p-6 sm:w-[320px] w-full border border-[#915eff]/15 shadow-xl hover:border-[#915eff]/50 hover:shadow-[#915eff]/10 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* Header row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white/10 border border-white/10 flex-shrink-0">
            {icon ? (
              <img src={icon} alt={issuer} className="w-8 h-8 object-contain" loading="lazy" />
            ) : (
              <span className="text-white text-xs font-bold">{issuer.slice(0, 2)}</span>
            )}
          </div>

          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/15 border border-green-500/30">
            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-400 text-[10px] font-semibold">Verified</span>
          </div>
        </div>

        <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{name}</h3>
        <p className="text-[#aaa6c3] text-[14px]">{issuer}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setSelectedCert(image)}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#915eff] to-[#6C63FF] hover:opacity-90 transition-opacity shadow-lg"
        >
          View Certificate
        </button>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>What I've earned</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Continuous learning and professional development through industry-recognized certifications.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-6">
        {certifications.map((cert, index) => (
          <CertCard key={cert.name} index={index} {...cert} setSelectedCert={setSelectedCert} />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#151030] rounded-2xl overflow-hidden border border-[#915eff]/30 shadow-[0_0_40px_rgba(145,94,255,0.2)]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center backdrop-blur-md transition-colors z-10 border border-white/10"
              >
                <img src={close} alt="close" className="w-4 h-4 object-contain" />
              </button>
              
              <div className="w-full h-[60vh] sm:h-[80vh] flex items-center justify-center p-4">
                <img 
                  src={selectedCert} 
                  alt="Certificate" 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
