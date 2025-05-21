
import React from 'react';
import { ArrowRight, Calendar, CheckCircle, FileText } from 'lucide-react';

const ICTProgram = () => {
  const benefits = [
    "Accredited Entrepreneurial Training",
    "Mentorship from Industry Experts",
    "Business Support & Resources",
    "Access to Networks & Partners"
  ];
  
  const criteria = [
    "Registered South African SMME or EME",
    "Trading for 2+ years",
    "Focus on ICT",
    "100% South African-owned",
    "Registered with CIPC",
    "Valid Tax Clearance Certificate",
    "Level 1 or 2 B-BBEE Status"
  ];

  return (
    <section id="ict-program" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Now Open</span>
            </div>
            
            <h2 className="heading-lg mb-6">2025 ICT Enterprise Development Programme</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              This Enterprise Development Programme supports black-owned ICT businesses through training, 
              mentorship, and strategic support. It promotes entrepreneurial skills alongside accredited training.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why Should You Apply?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="https://growthplay.co.za/index.php/apply" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary px-8 py-3 text-lg flex items-center gap-2 group w-fit"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm animate-fade-in animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Qualifying Criteria</h3>
            </div>
            
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700">{criterion}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                For more details about the programme and application process, please contact our 
                team or visit our application portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICTProgram;
