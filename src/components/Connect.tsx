import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
      <Icon size={22} />
      <span className="font-medium">{label}</span>
    </a>
  );
};

const Connect = () => {
  const socialLinks = [
    {
      href: "https://github.com/skdinesh",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/dinesh-sk-9363607540-mern-devloper",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/skdinesh97/",
      icon: Instagram,
      label: "Instagram"
    },
    {
      href: "mailto:skdinesh97@gmail.com",
      icon: Mail,
      label: "Email"
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">Connect with me</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Connect;