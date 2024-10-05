import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm <strong>Your Name</strong>, a passionate web developer specializing in building
          amazing websites and applications. Explore my work and let’s create something great
          together.
        </p>
        <Link to="/projects" className="btn-primary">View My Work</Link>
      </div>

      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I’m a full-stack web developer with a love for solving problems and building beautiful
          user experiences. With skills in both front-end and back-end development, I create
          seamless and efficient applications that delight users. Let’s turn your ideas into reality.
        </p>
        <Link to="/about" className="btn-secondary">Learn More About Me</Link>
      </div>

      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-css3-alt"></i>
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-js-square"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="skill-item">
            <i className="fab fa-node"></i>
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;