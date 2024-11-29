import React from "react";
import "./Home.css"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Home = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQE1zhvoksEtgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723828613838?e=1738195200&v=beta&t=BDPfBqJUmJVVUAYmG2KubN27S0xOacyN9BTjMXb4bRM" // Replace with your image URL
          alt="Profile"
          className="rounded-image"
        />
      </div>
      <div className="text-container">
        <p className="animated-text" >
        Bhavya Bansal, CTO at Persist Ventures and FacesearchAI, specializes in AI, Full Stack Engineering, and NLP. With certifications in Python and Data Visualization, and a B.Tech in Computer Science, Bhavya has contributed to innovative projects as a Software Engineer and AI Developer globally.
        </p>
        <button type="button" className="btn btn-primary btn-lg" style={{marginLeft:"11rem",marginTop:"1.5rem"}}>My Profile</button>
      </div>
    </div>
  );
};

export default Home;
