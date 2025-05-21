
import React from 'react';
import { Link, Users } from 'lucide-react';

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-20 bg-gradient-to-br from-black via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="heading-lg mb-6">Powering Growth Through Collaboration</h2>
          <p className="text-lg text-white/80 mb-12">
            We believe collaboration is essential for a thriving entrepreneurial ecosystem. GrowthPlay 
            works closely with corporates, mentors, and industry experts to co-develop impactful 
            programme solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Link className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ecosystem Building</h3>
              <p className="text-white/70">
                We foster connections between entrepreneurs, corporations, and industry experts to create 
                a supportive network that accelerates growth and innovation.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">SME Empowerment</h3>
              <p className="text-white/70">
                We empower SMEs with access to tailored training, mentorship, and resources that support 
                long-term growth and sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
