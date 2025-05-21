
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="growth-logo">
              <span className="growth text-3xl text-primary">GROWTH</span>
              <span className="play text-3xl text-white bg-black px-2">PLAY</span>
              <div className="dots">
                <div className="dot bg-yellow-400"></div>
                <div className="dot bg-red-500"></div>
                <div className="dot bg-green-500"></div>
              </div>
            </div>
          </div>
          
          <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join South Africa's premier ICT business accelerator and take your venture to the next level.
          </p>
          
          <a 
            href="https://growthplay.co.za/index.php/apply" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary px-10 py-4 text-lg flex items-center gap-2 group mx-auto w-fit"
          >
            Apply Today
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
