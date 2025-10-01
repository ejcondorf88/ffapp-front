import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { InfoSection } from '../../components/Info/InfoSection';
import { AboutSection } from '../../components/About/AboutSection';
import { ModeloGestion } from '../../components/ModeloGestion/ModeloGestion';
import { PartnersSection } from '../../components/Partners/PartnersSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <AboutSection 
        videoUrl="https://fundacionfavorita.org/wp-content/uploads/2023/01/VERSION-FINAL-FFAVORITA-HORIZONTAL-MEDIA-1.mp4"
      />
      <ModeloGestion />
      <PartnersSection />
    </div>
  );
};