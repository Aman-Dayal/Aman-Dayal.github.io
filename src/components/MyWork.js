import React from 'react';
import './MyWork.css';

const jobProjects = [
  {
    title: 'Health Bots',
    sections: [
      {
        subtitle: 'AWS Lex + Medline API',
        description:
          'Developed a health bot using AWS Lex integrated with the Medline API for real-time health-related data. This chatbot provided users with answers to medical queries based on Medline’s vast medical database.',
      },
      {
        subtitle: 'GPT Health Bot',
        description:
          'Built another version of a health bot using GPT to offer personalized medical assistance in real-time. This bot used GPT to generate contextually relevant responses to user queries.',
      },
    ],
  },
  {
    title: 'Business Intelligence Reports',
    description:
      'Created BI reports using tools like Power BI and Quicksight, enabling visualization of critical data for decision-making.',
  },
  {
    title: 'Resume Parser Application',
    description:
      'Developed an application to parse resumes, extract key details, and rank candidates based on job requirements, optimizing recruitment processes.',
  },
  {
    title: 'Kaggle Competitions',
    sections: [
      {
        subtitle: 'Novozymes Enzyme Stability Prediction',
        description:
          'Participated in the Novozymes Enzyme Stability Prediction competition, focusing on predicting enzyme stability using machine learning models.',
      },
      {
        subtitle: 'Breast Cancer Detection from RSNA',
        description:
          'Worked on the Breast Cancer Detection from RSNA competition, developing models to classify breast cancer from medical images.',
      },
    ],
  },
];

const workExperience = [
  {
    company: 'Deloitte',
    role: 'Cloud Engineer',
    duration: 'Jun 2023 - May 2024',
    responsibilities: [
      'Contributed to development of centralized data repository for cloud inventory.',
      'Developed and maintained infrastructure on major cloud platforms i.e., AWS, Azure, and GCP.',
    ],
  },
  {
    company: 'Cirruslabs',
    role: 'Junior Developer',
    duration: 'Aug 2022 - May 2023',
    responsibilities: [
      'Assisted in developing internal tools including chatbots and automation systems.',
      'Built a health bot using GPT and AWS Lex, with integrated Medline API for medical data.',
      'Worked on BI report generation, and participated in Kaggle competitions to enhance data science skills.',
    ],
  },
];

const MyWork = () => {
  return (
    <div className="my-work">
      <h1>My Work</h1>

      {/* Work Experience Section */}
      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {workExperience.map((job, index) => (
            <div className="experience-card" key={index}>
              <h3>{job.company}</h3>
              <h4>{job.role}</h4>
              <p>{job.duration}</p>
              <ul>
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Project Experience Section */}
      <section className="job-projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {jobProjects.map((project, index) => (
            <div className="scrollable-project-card" key={index}>
              <h3>{project.title}</h3>
              {project.sections ? (
                <div className="scrollable-sections">
                  {project.sections.map((section, secIndex) => (
                    <div className="project-section" key={secIndex}>
                      <h4>{section.subtitle}</h4>
                      <p>{section.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyWork;
