import React from "react";
import "./About.css"; // Assuming you're using a separate CSS file for styling.

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>B.Vignesh Subramaniam</strong>, a passionate web developer with a
          strong focus on creating clean, user-friendly websites and applications.
          I have experience in technologies like
          <strong> HTML, CSS, JavaScript, React, and Node.js.</strong>
        </p>

        <p>
          I love solving problems, building projects from scratch, and constantly
          learning new tools and technologies to stay on the cutting edge of web
          development. In my free time, you’ll find me experimenting with design
          patterns, contributing to open-source projects, or reading tech blogs.
        </p>

        <div className="skills">
          <h2>My Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
