import React from "react";
import "./style.css";
const Internship = () => {
  return (
    <div>
      <section id="internship">
        <div class="section_info">
          <h1>Experience / Internship</h1>
        </div>
        <div className="internship_box">
          <div className="internship_box_left">
            <h1>
              Congnizant Technology Solutions{" "}
              <span>( From 27th Jan 2022 to 13th June 2022 )</span>
            </h1>
            <p>
              Got an opportunity from the campus to work as Programmer Analyst
              Trainee at Cognizant Technology Solutions from 27 January 2022 to 13
              June 2022. I was trained on Front-end development, mainly focused
              on React Js and JavaScript.
            </p>
          </div>
          <div className="internship_box_right">
            <h1>
            Newton School Coding Bootcamp Internship {" "}
              <span>(  December 2021 )</span>
            </h1>
            <li>Full Stack Web Development along with problem-solving.</li>
            <li>Technical Stack Learn- React js,HTML, CSS, JavaScript, Sql,and Bootstrap.</li>
            <li>Participated in various coding contests organized by the platform</li>
            <li>Worked on various projects like GitHub User's Finder,React Portfolio,etc.</li>
           
            {/* <h3></h3>
            <p>
              
            
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
