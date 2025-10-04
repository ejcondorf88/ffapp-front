import React from 'react';
import { DonationProvider } from '../../contexts/DonationContext';
import { HeroDonaciones } from '../../components/HeroDonaciones/HeroDonaciones';
import { WhyDonateBanner } from '../../components/WhyDonateBanner/WhyDonateBanner';
import { ImpactSections } from '../../components/ImpactSections/ImpactSections';
import { EcuadorMap } from '../../components/EcuadorMap/EcuadorMap';
import { ImpactSection } from '../../components/ImpactSection/ImpactSection';

export const DonacionesPage: React.FC = () => {
  return (
    <DonationProvider>
      <div>
        <HeroDonaciones />
        <WhyDonateBanner />
        <ImpactSections />
        <ImpactSection />
        <EcuadorMap />
      </div>
    </DonationProvider>
  );
};