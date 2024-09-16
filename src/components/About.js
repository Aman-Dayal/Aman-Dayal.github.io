import React from 'react';
import './About.css';

// Importing React Icons
import { FaSync,FaLaptopCode, FaCloud, FaRobot, FaDatabase, FaCode, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaTools, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiPostgresql, SiMongodb, SiDocker, SiFlask, SiFastapi} from 'react-icons/si';
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { IoMdAnalytics } from 'react-icons/io';
import { MdApi } from 'react-icons/md';

// SkillCard component
const SkillCard = ({ icon: Icon, skill }) => (
  <div className="skill-card">
    <Icon className="skill-icon" />
    <span className="skill-hover">{skill}</span>
  </div>
);

// List of skills and their respective icons
const skills = [
  { icon: FaPython, skill: "Python" },
  { icon: FaSync, skill: "ETL" },
  { icon: HiOutlineDocumentReport, skill: "Business Intelligence (Power BI, AWS Quicksight)" },
  { icon: IoMdAnalytics, skill: "Data Analytics" },
  { icon: MdApi, skill: "API Development" },
  { icon: SiFlask, skill: "Flask" },
  { icon: SiFastapi, skill: "Fast API" },
  { icon: FaCode, skill: "Vs Code" },
  { icon: FaLaptopCode, skill: "Full Stack Development" },
  { icon: FaCloud, skill: "Cloud Computing (AWS, Azure, GCP)" },
  { icon: FaRobot, skill: "Machine Learning & AI" },
  { icon: SiTensorflow, skill: "TensorFlow" },
  { icon: FaReact, skill: "React" },
  { icon: FaHtml5, skill: "HTML" },
  { icon: FaCss3Alt, skill: "CSS" },
  { icon: FaJsSquare, skill: "JavaScript" },
  { icon: FaDatabase, skill: "Database Management" },
  { icon: SiPostgresql, skill: "PostgreSQL" },
  { icon: SiMongodb, skill: "MongoDB" },
  { icon: FaTools, skill: "DevOps & Automation" },
  { icon: SiDocker, skill: "Docker" },
];

// About component
const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">Hello, I'm <span className="highlight">Aman</span></h1>
        <p className="subtitle">Engineering the future as an Architect, Developer and Innovator - Crafting solutions that drive progress.</p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map(({ icon, skill }) => (
            <SkillCard key={skill} icon={icon} skill={skill} />
          ))}
        </div>
      </section>

      {/* Summary Section */}
      <section className="summary-section">
        <h2 className="section-title">Summary</h2>
        <p>
          I love building stuff ! So far I have worked on end-to-end solutions across web development, cloud computing, AI-ML and much more. I bring a blend of full-stack development expertise and data engineering to create robust, scalable, and efficient solutions. Always eager to learn new technologies, I am driven by the challenge of solving complex problems and bringing innovative ideas to life.
        </p>
      </section>
    </div>
  );
};

export default About;
