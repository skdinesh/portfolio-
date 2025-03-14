import React from 'react';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <a 
            href="https://github.com/skdinesh/skdinesh/blob/main/Dinesh.S.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FileText size={20} />
            <span className="font-medium">View Resume</span>
          </a>
        </div>
        <p className="text-gray-400">© 2024 DINESH_SK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;