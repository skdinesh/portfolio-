import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <About />
            <Projects />
          </div>
          <div className="space-y-12">
            <Connect />
            <Skills />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;