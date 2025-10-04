import React from 'react';
import { HeroDonaciones } from '../../components/HeroDonaciones/HeroDonaciones';
import { ImpactSections } from '../../components/ImpactSections/ImpactSections';

export const DonacionesPage: React.FC = () => {
  return (
    <div>
      <HeroDonaciones />
      <ImpactSections />
    </div>
  );
};