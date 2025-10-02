import React from "react";
import PropTypes from "prop-types";

interface CardProps {
  title: string;
  description: string;
  bgImage: string;
}

const Card: React.FC<CardProps> = ({ title, description, bgImage }) => {
  return (
    <div
      className="w-72 h-80 rounded-2xl shadow-lg overflow-hidden flex items-end relative bg-cover bg-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white w-[90%] mx-auto mb-4 rounded-xl p-4 text-center shadow-md">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
};

export default Card;
