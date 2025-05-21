
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GrowthPlay transformed my tech startup from a concept to a viable business. Their mentorship and support were instrumental in our early success.",
      author: "Thabo Mokoena",
      role: "Founder, TechConnect",
      avatar: "TM"
    },
    {
      quote: "The structured approach to business development helped me focus on what really matters. My business has grown 300% since completing the program.",
      author: "Nosipho Ndlovu",
      role: "CEO, DataDrive",
      avatar: "NN"
    },
    {
      quote: "As a first-time entrepreneur in the ICT space, GrowthPlay gave me the confidence and skills to turn my idea into reality. I'm forever grateful.",
      author: "Michael van der Merwe",
      role: "Founder, CloudFlow",
      avatar: "MM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Real Stories. Real Growth.</h2>
          <p className="text-lg text-white/80">Hear from our alumni about their GrowthPlay experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8 text-primary">
                <svg className="h-10 w-10 opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-white/90 mb-8 text-lg italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-primary mr-4">
                  <AvatarImage src={`https://via.placeholder.com/48/FFD700/000000?text=${testimonial.avatar}`} />
                  <AvatarFallback className="bg-primary text-black font-bold">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
