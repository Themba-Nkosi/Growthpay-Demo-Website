
import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EntrepreneursShowcase = () => {
  const entrepreneurs = [
    {
      name: "TechSolutions",
      logo: "TS",
      description: "Cloud-based software solutions for business management"
    },
    {
      name: "DataDrive",
      logo: "DD",
      description: "Data analytics and business intelligence services"
    },
    {
      name: "WebMasters",
      logo: "WM",
      description: "Web development and digital marketing agency"
    },
    {
      name: "CloudFlow",
      logo: "CF",
      description: "Cloud infrastructure and security services"
    },
    {
      name: "DevOps Pro",
      logo: "DP",
      description: "DevOps consulting and implementation services"
    },
    {
      name: "AI Solutions",
      logo: "AI",
      description: "Artificial intelligence solutions for businesses"
    }
  ];

  return (
    <section id="entrepreneurs" className="py-20 bg-gradient-to-br from-gray-900 via-black to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-medium mb-4">
            <Star className="h-5 w-5 mr-2" />
            <span>Entrepreneur Showcase</span>
          </div>
          
          <h2 className="heading-lg text-white mb-4">Real Entrepreneurs. Real Impact.</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the innovative businesses that have grown through our programmes. These entrepreneurs 
            are creating jobs, driving innovation, and transforming South Africa's ICT landscape.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {entrepreneurs.map((entrepreneur, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 h-full hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-md mb-4 text-primary font-bold text-xl">
                    {entrepreneur.logo}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{entrepreneur.name}</h3>
                  <p className="text-white/70">{entrepreneur.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static transform-none bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="relative static transform-none bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default EntrepreneursShowcase;
