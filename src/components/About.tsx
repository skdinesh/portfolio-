import React from 'react';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">About Me</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-3 group">
            <span className="text-2xl">🔭</span>
            <div>
              <p className="font-medium text-gray-700">Currently working on:</p>
              <a 
                href="https://github.com/skdinesh/ZOPGO-BUS.git" 
                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
              >
                Bus Booking Application
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <p className="font-medium text-gray-700">Learning:</p>
              <p className="text-gray-600">MERN Stack Development</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-medium text-gray-700">Ask me about:</p>
              <p className="text-gray-600">React.JS, Express.js, MongoDB, Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;