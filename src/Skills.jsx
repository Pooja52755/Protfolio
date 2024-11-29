import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './Skills.css'; // Import the CSS file for animations


const Skills = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const skillsData = [
    { name: 'React', value: 35, color: '#0088FE' },
    { name: 'Node.js', value: 25, color: '#00C49F' },
    { name: 'Python', value: 20, color: '#FFBB28' },
    { name: 'TypeScript', value: 10, color: '#FF8042' },
    { name: 'Docker', value: 10, color: '#8884D8' },
  ];

  useEffect(() => {
    // Trigger animation on component mount
    setIsAnimated(true);
  }, []);

  return (
    <div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Technology Skills Breakdown</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={skillsData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {skillsData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Animated content */}
      
    </div>
    <div className={`animated-section ${isAnimated ? 'slide-up' : ''}`}>
    <p className="text-center text-gray-600">
    Explore my technical expertise showcased through this dynamic pie chart, highlighting my proficiency across cutting-edge technologies. React, with its versatility, leads my skillset, empowering me to craft responsive and interactive user interfaces. My backend development strength lies in Node.js, complemented by Python for its versatility in data manipulation and scripting. TypeScript enhances my ability to write robust, scalable code, while Docker enables seamless deployment and containerization. Together, these technologies form the backbone of my innovative solutions.
    </p>
  </div>
  </div>
  );
};

export default Skills;
