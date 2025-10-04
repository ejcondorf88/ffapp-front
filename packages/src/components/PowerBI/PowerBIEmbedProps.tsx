// src/components/PowerBIEmbed.tsx
import React from "react";

interface PowerBIEmbedProps {
  url: string;
  width?: string | number;   // Ej: '100%' o 800
  height?: string | number;  // Ej: '600px' o '100%'
  className?: string;        // Para estilos adicionales
}

export const PowerBIEmbed: React.FC<PowerBIEmbedProps> = ({
  url,
  width = "100%",
  height = "600px",
  className = "",
}) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className}`} style={{ width, height }}>
      <iframe
        title="Power BI Report"
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
};
