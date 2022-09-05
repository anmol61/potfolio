import React from "react";
import './style.css';
const Skills = () => {
  return (
    <div>
      <section id="skills">
        <div className="section_info">
          <h1>Skills</h1>
        </div>
        <div className="skills_row">
          <div className="skill_left">
            <p>
              I am a student of Bachelor of Technology in computer science,from Lovely Professional University.
              I have skills like React Js, JavaScript, HTML, CSS, C++, Python.
              Databae : MySql, and MongoDB. And Some basic understanding about computer network and Operating System.
            </p>
            <button className="btn">Read More...</button>
          </div>
          <div className="skill_right">
              <div className="progress_div">
                  <p>
                      <span>React Js</span>
                      <br />
                      <progress value="75" max="100"></progress>
                      <span>75%</span>
                  </p>
                  <p>
                      <span>HTML</span>
                      <br />
                      <progress value="90" max="100"></progress>
                      <span>90%</span>
                  </p>
                  <p>
                      <span>CSS</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>JavaScript</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>C++</span>
                      <br />
                      <progress value="85" max="100"></progress>
                      <span>85%</span>
                  </p>
                  <p>
                      <span>Python</span>
                      <br />
                      <progress value="75" max="100"></progress>
                      <span>75%</span>
                  </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
