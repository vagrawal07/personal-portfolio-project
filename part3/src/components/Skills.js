import React from "react";

function Skills() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="p-3 border bg-light">
            <h5>Frontend</h5>
            <p>HTML5, CSS3, Angular, JavaScript</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light">
            <h5>Backend</h5>
            <p>NodeJS, REST APIs</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light">
            <h5>Other Skills</h5>
            <p>Agile, GIT, Design Thinking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
