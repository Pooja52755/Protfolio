import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      role: "Software Engineer",
      company: "TechCorp Solutions",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnzISAKwICODIEqGEiuNmpmuYejfPM4ZvVQ&s",
      description: "Developed full-stack applications using React, Node.js, and MongoDB.",
      year: "2023 - Present",
    },
    {
      role: "Web Developer",
      company: "Creative Web Inc.",
      logo: "https://pbs.twimg.com/profile_images/1272530576134660096/J57MMP1r_400x400.jpg",
      description: "Built responsive websites using HTML, CSS, JavaScript, and React.",
      year: "2021 - 2023",
    },
    {
      role: "Intern",
      company: "StartUp Innovations",
      logo: "https://png.pngtree.com/element_our/png/20181226/ideainnovationlightsolutionstartup-purple-business-logo-png_284908.jpg",
      description: "Worked on front-end development and contributed to the UI/UX design.",
      year: "2020 - 2021",
    },
  ];

  return (
    <div>
    <h2 className="section-title">Work Experience</h2>
    <div className="experience-container" style={{display:"flex"}}>
      
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="company-info">
                <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                <div className="role-details">
                  <h3 className="role">{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <span className="year">{exp.year}</span>
                </div>
              </div>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}

</div>
      <div className="gif-container">
        <img
          src="https://raw.githubusercontent.com/ericaig/ericaig/master/working.gif"
          alt="Animated GIF"
          className="animated-gif"
        />
      </div>
      </div>
    </div>
    
   
  );
};

export default Experience;
