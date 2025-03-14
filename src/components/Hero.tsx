import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-[500px] bg-cover bg-center relative bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2070')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hi 👋, I'm DINESH_SK
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-200">
              MERN Stack Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;