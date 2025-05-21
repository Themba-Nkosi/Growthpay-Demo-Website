
import React from 'react';
import { CheckCircle, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessSupport = () => {
  const services = [
    {
      title: "Compliance & Bookkeeping",
      description: "Ensure your business meets regulatory requirements and maintains accurate financial records."
    },
    {
      title: "Marketing & Social Media Support",
      description: "Develop effective marketing strategies and establish a strong online presence for your business."
    },
    {
      title: "Legal & HR Advice",
      description: "Access expert guidance on legal matters and human resource management for your company."
    },
    {
      title: "Technical Guidance & Lead Generation",
      description: "Receive specialized technical assistance and strategies to attract potential customers."
    }
  ];

  return (
    <section id="business-support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Support Beyond Funding</h2>
          <p className="text-lg text-gray-700">
            We offer operational support to help SMEs focus on what matters: growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in animation-delay-400">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-full shadow-lg mb-6">
            <Briefcase className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Get the Support Your Business Needs</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Focus on growing your business while we handle the operational details that can slow you down.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;
