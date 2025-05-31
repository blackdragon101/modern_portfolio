import React from "react";

const jobs = [
  {
    company: "TechCorp",
    title: "Frontend Developer",
    period: "2023 - Present",
    description: "Working on modern web applications using React and Next.js."
  },
  {
    company: "WebStudio",
    title: "Web Developer",
    period: "2021 - 2023",
    description: "Built responsive websites and UI components for clients."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold text-primary mb-8">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-secondary">{job.title} @ {job.company}</h3>
            <span className="block text-sm mb-2 text-primary">{job.period}</span>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}