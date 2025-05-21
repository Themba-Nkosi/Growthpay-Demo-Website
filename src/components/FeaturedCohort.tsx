
import React from 'react';

const FeaturedCohort = () => {
  const businesses = [
    {
      name: "TechConnect",
      logo: "https://via.placeholder.com/150/FFD700/000000?text=TC",
      description: "Digital literacy training platform for underserved communities."
    },
    {
      name: "DataDrive",
      logo: "https://via.placeholder.com/150/FFD700/000000?text=DD",
      description: "Big data analytics solutions for small businesses."
    },
    {
      name: "CloudFlow",
      logo: "https://via.placeholder.com/150/FFD700/000000?text=CF",
      description: "Cloud infrastructure management for startups."
    },
    {
      name: "CyberShield",
      logo: "https://via.placeholder.com/150/FFD700/000000?text=CS",
      description: "Affordable cybersecurity solutions for SMEs."
    }
  ];

  return (
    <section id="cohort" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-black mb-4">Meet Our Entrepreneurs</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            These innovative ICT businesses are transforming South Africa's tech landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-black flex items-center justify-center p-8">
                <img 
                  src={business.logo} 
                  alt={`${business.name} logo`} 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{business.name}</h3>
                <p className="text-gray-600 text-sm">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCohort;
