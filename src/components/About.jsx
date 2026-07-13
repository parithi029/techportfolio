import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <p className={styles.sectionSubText}>About Me</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4 max-w-3xl space-y-4"
            >
                <p className="text-secondary text-[17px] leading-[30px]">
                    I'm a <span className="text-white font-semibold">Full Stack Developer</span> and{' '}
                    <span className="text-white font-semibold">UI/UX Designer</span> currently pursuing a
                    Bachelor's degree in Electronics and Electrical Engineering.
                </p>
                <p className="text-secondary text-[17px] leading-[30px]">
                    I specialize in developing responsive web applications, cross-platform mobile apps, and
                    modern user interfaces using{' '}
                    <span className="text-[#915eff] font-medium">
                        React, React Native, Python, Tailwind CSS, and Supabase
                    </span>
                    .
                </p>
                <p className="text-secondary text-[17px] leading-[30px]">
                    With a strong background in both software engineering and visual design, I enjoy creating
                    products that combine beautiful user experiences with scalable backend architecture.
                </p>
                <p className="text-secondary text-[17px] leading-[30px]">
                    My experience ranges from open-source software development to building production-ready
                    applications focused on performance, usability, and clean architecture.
                </p>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
