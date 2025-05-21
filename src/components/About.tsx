
import React from 'react';
import { Briefcase, Award, TrendingUp, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-black mb-4">About <span className="growth-logo inline-flex">
            <span className="growth text-black">GROWTH</span>
            <span className="play bg-black text-white px-2">PLAY</span>
            <div className="dots">
              <div className="dot bg-yellow-400"></div>
              <div className="dot bg-red-500"></div>
              <div className="dot bg-green-500"></div>
            </div>
          </span></h2>
          <p className="text-lg text-gray-700">
            GrowthPlay empowers emerging entrepreneurs through mentorship, branding support, and access to networks and funding. We focus on ICT businesses with scalable potential and real impact across South Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "Expert Mentorship",
              description: "Connect with industry veterans who provide personalized guidance to navigate your entrepreneurial journey."
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-primary" />,
              title: "Business Growth",
              description: "Access strategies and resources designed to scale your business effectively in today's competitive landscape."
            },
            {
              icon: <Briefcase className="h-10 w-10 text-primary" />,
              title: "Branding Support",
              description: "Transform your business identity with professional branding and robust development strategies."
            },
            {
              icon: <DollarSign className="h-10 w-10 text-primary" />,
              title: "Funding Access",
              description: "Gain exclusive opportunities to pitch to investors and access grants tailored for emerging businesses."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <div className="bg-black/5 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
