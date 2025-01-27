import React from "react";

function About() {
  return (
    <section className="container my-5">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src="https://github.com/vagrawal07/personal-portfolio-project/blob/main/part3/public/IMG_9421.JPG"
          alt="Vaibhav Agrawal"
          className="rounded-circle"
          style={{ width: "150px", height: "150px", marginRight: "20px" }}
        />
        <div>
          <h2>About Me</h2>
          <p>
            I am a results-driven professional with expertise in Angular,
            JavaScript, and REST APIs. Passionate about creating efficient and
            transformative digital solutions to drive operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
