import React from "react";

function Projects() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-3 border bg-light">
            <h5>Project 1: Chrome Extension</h5>
            <p>Developed a Chrome extension to boost user productivity by 25%.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border bg-light">
            <h5>Project 2: Web Application</h5>
            <p>Implemented RESTful APIs, reducing response times by 35%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
