import React from "react";
import "./style.css";
import pic from "./photo.jpeg";

const About = () => {
  return (
    <>
      <main id="about">
        <div className="pic">
          <img src={pic} alt="myImg" />
        </div>
        <div className="about">
          <h1>About Me</h1>

          <h4>I am a software developer (Fresher).</h4>
          <p>
            A Quick learner, passionate about technology. Adabtable in most of the scenario.
            Having skills are: React Js, JavaScript,HTML,CSS,C++,Python. Strong background in front-end development.
            <br /><br /><span>Positive attitude:</span>To progress positively under all circumstances with conviction and maturity in approach.
            <br /><br /><span>Enthusiasm for learning:</span>Endlessly strive to learn through different activities.
         
         <br /> <a href="https://docs.google.com/document/d/1wUWUnUWlmzsivhNib0ZX8z_bywLYqS2h/edit?usp=sharing&ouid=108509283532344909024&rtpof=true&sd=true" target="_blank"><button className="btn">Download CV</button></a>
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
