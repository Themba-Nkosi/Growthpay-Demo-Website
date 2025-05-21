
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhoWeAre from '../components/WhoWeAre';
import ESDForCorporates from '../components/ESDForCorporates';
import Collaboration from '../components/Collaboration';
import BusinessSupport from '../components/BusinessSupport';
import ICTProgram from '../components/ICTProgram';
import EntrepreneursShowcase from '../components/EntrepreneursShowcase';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhoWeAre />
        <ESDForCorporates />
        <Collaboration />
        <BusinessSupport />
        <ICTProgram />
        <EntrepreneursShowcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
