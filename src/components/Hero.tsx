
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-32 bg-primary/20 clip-path-arrow animation-delay-400"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/20 rotate-45 rounded-sm animation-delay-200"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-3/5 space-y-8 animate-fade-in">
            <div className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/40">
              <span className="text-white font-medium">ICT Entrepreneurs in Gauteng</span>
            </div>
            <h1 className="heading-xl text-white">
              <span className="block text-primary">THIS IS</span> FOR YOU
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Unlock your business's full potential with expert support and guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://growthplay.co.za/index.php/apply" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center gap-2 group"
              >
                Apply Today
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#about" 
                className="btn-secondary text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in animation-delay-200 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-black/50 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="Tech entrepreneur working on computer" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
