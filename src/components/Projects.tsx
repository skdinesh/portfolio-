import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, link, type }: {
  title: string;
  description: string;
  link: string;
  type: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{type}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-4">
        <a 
          href={link}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group"
        >
          <Github size={20} />
          <span>View Code</span>
          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Flight Ticket Booking Application",
      description: "A modern UI/UX design project for flight booking system with focus on user experience.",
      link: "https://github.com/skdinesh/Flight-ticket-booking-UIUX",
      type: "UI/UX Design"
    },
    {
      title: "Restaurant Management Application",
      description: "A comprehensive front-end solution for restaurant management and ordering system.",
      link: "https://github.com/skdinesh/Restaurant-",
      type: "Front-End"
    },
    {
      title: "Bus Booking Application",
      description: "Full-stack MERN application for bus ticket booking and management.",
      link: "https://github.com/skdinesh/ZOPGO-BUS.git",
      type: "Full Stack"
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">Projects</h3>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;