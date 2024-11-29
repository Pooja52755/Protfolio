import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Chaitanya Bharathi Institute of Technology",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png",
      year: "2022 - Present",
    },
    {
      degree: "Intermediate",
      field: "MPC (Maths, Physics, Chemistry)",
      institution: "Narayana Junior College",
      image:
        "https://media.licdn.com/dms/image/v2/C560BAQHZsgN71E9YAQ/company-logo_200_200/company-logo_200_200/0/1630647146150/narayana_junior_college_nallakunta_logo?e=2147483647&v=beta&t=k-pHFalRb7dcsfZB1udO1DdFjmBURkNiRPiqg559Yqg",
      year: "2020 - 2022",
    },
    {
      degree: "High School",
      field: "General Education",
      institution: "Sri Chaitanya Techno School",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-EH3L6DuvKVwuDZ5pvu1NO6V8M8u_Q-GnA&s",
      year: "2010 - 2020",
    },
  ];

  return (
    <div>
    <h2 className="section-title" >Education Background</h2>
    <div className="education-container" style={{display:"flex"}}>
      
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="pointer-container">
                <div className="pointer-symbol">▶</div>
                <img src={edu.image} alt="Icon" className="small-icon" />
              </div>
              <h3 className="degree">{edu.degree}</h3>
              <p className="field">{edu.field}</p>
              <p className="institution">{edu.institution}</p>
              <span className="year">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="gif-container">
        <img
          src="https://i.gifer.com/RfmR.gif"
          alt="Animated GIF"
          className="animated-gif"
        />
      </div>

    
    </div>
    </div>
  );
};

export default Education;
