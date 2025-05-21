
import React from 'react';
import { FileText, Briefcase, Rocket, ArrowRight } from 'lucide-react';

const Program = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Apply",
      description: "Submit your ICT business for consideration in our competitive selection process.",
      items: [
        "Online application",
        "Business assessment",
        "Initial interviews"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Learn & Build",
      description: "Participate in our intensive program designed to rapidly grow your business capabilities.",
      items: [
        "Weekly workshops",
        "1:1 mentorship",
        "Pitch development"
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Launch & Grow",
      description: "Graduate with a solid business foundation and ongoing support to scale your venture.",
      items: [
        "Investor connections",
        "Market access",
        "Alumni network"
      ]
    }
  ];

  return (
    <section id="program" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">2025 ICT Business Development Programme</h2>
          <p className="text-lg text-white/80">
            Join our 2025 program to access strategies and skills to thrive in today's tech landscape.
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-black rounded-full p-4 flex items-center justify-center relative border-2 border-primary">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 bg-primary text-black text-lg font-bold h-8 w-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-center mb-3">{step.title}</h3>
                <p className="text-white/70 text-center mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" /> 
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
