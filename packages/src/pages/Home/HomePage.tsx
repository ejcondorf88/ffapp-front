import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { InfoSection } from '../../components/Info/InfoSection';
import { AboutSection } from '../../components/About/AboutSection';
import { EcuadorSostenible } from '../../components/EcuadorSostenible/EcuadorSostenible';
import { ModeloGestion } from '../../components/ModeloGestion/ModeloGestion';
import { ImpactoSection } from '../../components/Impacto/ImpactoSection';
import { AliadosSection } from '../../components/Aliados/AliadosSection';
import { VideoAuditoriaSection } from '../../components/VideoAuditoriaSection/VideoAuditoriaSection';
import CardsGrid from '../../components/Cards/CardsGrid';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <AboutSection 
        videoUrl="https://fundacionfavorita.org/wp-content/uploads/2023/01/VERSION-FINAL-FFAVORITA-HORIZONTAL-MEDIA-1.mp4"
      />
      <ModeloGestion />
      <EcuadorSostenible />
      <CardsGrid />
      <ImpactoSection />
      <AliadosSection />
      <VideoAuditoriaSection />
    </div>
  );
};