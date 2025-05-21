
import React from 'react';
import { CheckCircle, Award, Briefcase, HandshakeIcon } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-lg text-center mb-6">Who We Are</h2>
          <p className="text-lg text-white/80 text-center mb-10">
            We are a committed Growth and ESD partner, offering innovative business support and practical 
            guidance to help entrepreneurs achieve sustainable success. We design impactful ESD Programmes 
            that create value for both entrepreneurs and sponsoring corporates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                title: "Tailored SME Development Solutions",
                description: "Custom strategies designed to address the unique challenges of small and medium enterprises."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Builders of Growth & Catalysts for Change",
                description: "Creating innovative pathways for entrepreneurs to achieve sustainable business growth."
              },
              {
                icon: <HandshakeIcon className="h-10 w-10 text-primary" />,
                title: "Experienced Advocates for SME Growth",
                description: "Years of experience supporting small businesses through challenges and opportunities."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Trusted Leaders in Venture & ESD Solutions",
                description: "A proven track record of successful enterprise and supplier development initiatives."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                <div className="text-primary mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
