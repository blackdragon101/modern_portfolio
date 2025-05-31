import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-8 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact</h2>
      <p className="mb-8">
        Want to collaborate or just say hi? I’d love to connect!
      </p>
      <a
        href="mailto:fammasood8404@gmail.com"
        className="inline-block px-8 py-3 bg-primary text-background rounded shadow hover:bg-opacity-80 transition font-semibold"
      >
        Email Me
      </a>
    </section>
  );
}