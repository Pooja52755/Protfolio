import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"grey"}}>
    <div className="container-fluid" style={{gap:"2rem"}}>
      <a className="navbar-brand" href="#" style={{paddingLeft:"50rem"}}></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
            
          </li>
          <li className="nav-item">
          <Link to="/education" className="nav-link" >Education</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link" >Skills</Link>
          </li>
          <li className="nav-item">
          <Link to="/experience" className="nav-link" >Experience</Link>
          </li>
          <li className="nav-item">
          <Link to="/achievements" className="nav-link" >Achievements</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Check out
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://www.linkedin.com/in/bhavya-bansal98/?originalSubdomain=in">Linkedin</a></li>
              <li><a className="dropdown-item" href="https://github.com/">GitHub</a></li>
              <li><a className="dropdown-item" href="https://leetcode.com/">Leetcode</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
