import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: 'linear-gradient(135deg, #1d1836 0%, #151030 100%)',
                color: '#fff',
                boxShadow: '0 4px 30px rgba(145, 94, 255, 0.1)',
                border: '1px solid rgba(145, 94, 255, 0.15)',
                borderRadius: '16px',
            }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={
                <span className="text-[#aaa6c3] font-medium text-sm">{experience.date}</span>
            }
            iconStyle={{
                background: experience.iconBg,
                boxShadow:
                    '0 0 0 4px #915eff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)',
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
                    {experience.icon ? (
                        <img
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-[80%] h-[80%] object-contain"
                        />
                    ) : (
                        <div
                            className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg"
                            style={{ background: experience.iconBg }}
                        >
                            {experience.company_name
                                .split(' ')
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join('')}
                        </div>
                    )}
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[20px] font-bold leading-tight">{experience.title}</h3>
                <p
                    className="text-[#915eff] text-[14px] font-semibold mt-1"
                    style={{ margin: 0, marginTop: 4 }}
                >
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={index}
                        className="text-white-100 text-[14px] pl-1 tracking-wide leading-relaxed"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <p className={styles.sectionSubText}>My journey so far</p>
                <h2 className={styles.sectionHeadText}>Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'experience');
