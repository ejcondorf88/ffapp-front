import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { AboutSection } from '../../components/About/AboutSection';
import { PartnersSection } from '../../components/Partners/PartnersSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PartnersSection />
    </div>
  );
};