
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      toast.error('Please enter your email address');
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="growth-logo mb-4">
              <span className="growth text-2xl text-primary">GROWTH</span>
              <span className="play text-2xl text-white">PLAY</span>
              <div className="dots">
                <div className="dot bg-yellow-400"></div>
                <div className="dot bg-red-500"></div>
                <div className="dot bg-green-500"></div>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Empowering South Africa's next generation of ICT entrepreneurs through mentorship, resources, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#program" className="text-white/70 hover:text-primary transition-colors">Our Program</a></li>
              <li><a href="#cohort" className="text-white/70 hover:text-primary transition-colors">Entrepreneurs</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="https://growthplay.co.za/index.php/apply" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">Apply Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-1" />
                <span className="text-white/70">123 Innovation Street, Gauteng, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-white/70">+27 11 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-white/70">info@growthplay.co.za</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button 
                type="submit"
                className="px-4 py-3 bg-primary hover:bg-primary/90 transition rounded font-medium text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} GrowthPlay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
