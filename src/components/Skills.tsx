import React from 'react';

const SkillTag = ({ skill }: { skill: string }) => {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      {skill}
    </span>
  );
};

const Skills = () => {
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB',
    'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Git', 'AWS', 'Docker',
    'Python', 'Java', 'C#', '.NET'
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;