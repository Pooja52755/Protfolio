import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievementsData = [
    {
      title: "Hackathon Winner",
      description: "Won 1st place in the National Hackathon organized by ABC Tech for developing an innovative disaster management app.",
      year: "2023",
      icon: "🏆",
    },
    {
      title: "Certified Full-Stack Developer",
      description: "Completed the Full-Stack Web Development certification from XYZ Academy with excellence.",
      year: "2022",
      icon: "💻",
    },
    {
      title: "Published Research Paper",
      description: "Published a paper on 'AI in Healthcare' in the International Journal of Technology.",
      year: "2021",
      icon: "📜",
    },
    {
      title: "Top 10 in Coding Contest",
      description: "Ranked among the top 10 in the Global Coding Contest 2021 hosted by Codeforces.",
      year: "2021",
      icon: "💡",
    },
  ];

  return (
    <div className="achievements-container">
      <h2 className="section-title">My Achievements</h2>
      <div className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <div className="achievement-item" key={index}>
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-details">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-year">{achievement.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
