import React from 'react';
import Card from './Card';
import cardConfig from './cardsConfig';
import type { CardConfigItem } from './cardsConfig';

interface CardsGridProps {
  maxCards?: number;
}

const CardsGrid: React.FC<CardsGridProps> = ({ maxCards }) => {
  const cardsToShow = maxCards ? cardConfig.slice(0, maxCards) : cardConfig;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {cardsToShow.map((card: CardConfigItem, index: number) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          bgImage={card.bgImage}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
export { CardsGrid };