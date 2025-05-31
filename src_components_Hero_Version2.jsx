import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-start h-screen px-8 max-w-4xl mx-auto">
      <h1 className="text-primary text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-secondary">Fatima Masood</span>.
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
        I build elegant web and desktop experiences.
      </h2>
      <p className="max-w-xl text-lg mb-8">
        I'm a developer focused on building modern, performant, and beautiful digital products. Welcome to my portfolio.
      </p>
      <a
        href="#projects"
        className="px-8 py-3 bg-primary text-background rounded shadow hover:bg-opacity-80 transition"
      >
        See my work
      </a>
    </section>
  );
}