import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={process.env.PUBLIC_URL + "/avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-primary"
        />
        <p className="text-lg text-secondary">
          I'm a passionate web developer with experience in Python, Java, DevTools and modern web tech. I enjoy crafting beautiful, accessible, and performant sites for everyone to use. <br /><br />
          Outside of coding, I love music, photography, and exploring new technologies.
        </p>
      </div>
      <div className="mt-8">
        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-primary text-background font-semibold rounded shadow hover:bg-opacity-80 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}