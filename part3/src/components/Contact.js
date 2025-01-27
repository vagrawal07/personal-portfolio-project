import React from "react";

function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form action="mailto:vaibhavagrawal55@gmail.com" method="post" enctype="text/plain">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;
