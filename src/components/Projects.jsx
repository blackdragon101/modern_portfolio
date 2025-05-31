import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description: "A modern desktop Python IDE constructed with GUI and File Dialog options.",
    image: "https://placehold.co/600x400?text=Project+1",
    github: "https://github.com/blackdragon101/YouCode",
    demo: "https://project1.demo.com"
  },
  {
    title: "Project Two",
    description: "A minimalist UI project built with Window Forms and C# connected with MySql Database.",
    image: "https://placehold.co/600x400?text=Project+2",
    github: "https://github.com/blackdragon101/Student-Course-Registration-system",
    demo: "https://project2.demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-accent rounded shadow-lg overflow-hidden flex flex-col">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover"/>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
              <p className="mb-4 flex-1">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                  <FaGithub className="mr-2" /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}