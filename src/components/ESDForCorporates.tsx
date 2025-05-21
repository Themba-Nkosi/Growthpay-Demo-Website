
import React from 'react';
import { CheckCircle, BarChart2, FileText } from 'lucide-react';

const ESDForCorporates = () => {
  return (
    <section id="esd-for-corporates" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-lg mb-6">Enterprise & Supplier Development Solutions That Drive Real Impact</h2>
            <p className="text-lg text-gray-700 mb-8">
              We design customized Enterprise and Supplier Development (ESD) strategies tailored to meet the unique 
              needs of your business. Our solutions align with your long-term goals, ensuring sustainable impact 
              and full compliance with B-BBEE requirements.
            </p>
            
            <div className="space-y-4">
              {[
                'Develop and integrate black-owned suppliers into your value chain',
                'Improve B-BBEE scorecards with strategic, real transformation',
                'Elevate black suppliers into capital-intensive supply chain roles',
                'Deliver measurable, lasting impact'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-bold mt-8">We don't just distribute funds—we activate potential.</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 animate-fade-in animation-delay-200 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-black/40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="Corporate partnership" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="flex space-x-4">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl">
                  <BarChart2 className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESDForCorporates;
