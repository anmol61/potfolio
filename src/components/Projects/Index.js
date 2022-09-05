import React from "react";
import "./style.css";
const Projects = () => {
  return (
    <section id="projects">
      <div className="section_info">
        <h1>Projects</h1>
      </div>
      <div className="project_box">
        <div className="third">
          <h1>Recipes Finder App</h1>
          <h3>( May 2022 )</h3>

          <li>Features :  Application for searching food recipes
</li>
          <li>Most of the food recipies are available
</li>
          <li>Tech Stack : React Js and Bootstrap
</li>
<li>Edamam API
</li>
          {/* <p>
            A food recipes App that has almost all the food recipes anyone can
            use to make any food. I have used edamma food recipes API in this
            project to get recipes. This App is made in React Js and fully
            responsive.
          </p> */}
          <span>
            <a href="https://github.com/anmol61/Foodapp" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="https://food-recipies-by-abhinit.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
        <div className="first">
          <h1>Food Shop App</h1>
          <h3>( April 2022 To May 2022 )</h3>
         
         <li>Created a Food Shop App
</li>
         <li>Features: Responsiveness, beautiful Card for displaying food items
</li>
         <li>Tech Stack: React, JavaScript, HTML and CSS
</li>
          {/* <p>
            A very similar to amazon.in where I have used React Js front-end
            library to build this application. All the images are dynamically
            e.i I have used props to do so. And by using context Api we can add
            and remove items from the cart. Still i am working on it to make it
            more better.
          </p> */}
          <span>
            <a href="https://github.com/anmol61/yourSHop" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="https://e-online-shop.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
        <div className="second">
          <h1>My Portfolio </h1>
          <h3>( March 2022 )</h3>

          <li>Features : One can find more information about me
</li>
          <li>All projects,Skills,Training are available about me
</li>
          <li>Tech Stack : React Js, HTML and CSS
</li>
          {/* <p>
            This project i have developed so that one can get to all about me in
            just having at one place. Here you can see all my
            projects,experiences,skills and many more things.
          </p> */}
          <span>
            <a href="https://github.com/anmol61/potfolio" target="_blank">
              Github
            </a>
          </span>
          <span>
            https://anmol-potfolio.vercel.app/" target="_blank">
              Live Demo
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
