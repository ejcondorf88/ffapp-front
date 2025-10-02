export interface CardConfigItem {
  title: string;
  description: string;
  bgImage: string;
}

const cardConfig: CardConfigItem[] = [
  {
    title: "Nutrición",
    description:
      "Buscamos que más personas en situación de vulnerabilidad puedan alimentarse de manera suficiente y efectiva.",
    bgImage: "/images/Nutricion.png"
  },
  {
    title: "Educación",
    description:
      "Queremos que más niños, niñas y adolescentes accedan a oportunidades educativas de calidad en condiciones dignas.",
    bgImage: "/images/Educacion.png"
  },
  {
    title: "Emprendimiento",
    description:
      "Impulsamos proyectos innovadores que generen empleo y desarrollo para comunidades en situación de vulnerabilidad.",
    bgImage: "/images/Emprendemiento.png"
  },
  {
    title: "Ambiente",
    description:
      "Apoyamos proyectos de conservación y protección ambiental que aseguren un futuro sostenible.",
    bgImage: "/images/Ambiente.png"
  },
  {
    title: "Equidad de Género",
    description:
      "Impulsamos proyectos que promuevan la igualdad de oportunidades y derechos para todas las personas.",
    bgImage: "/images/Equidad.png"
  },
  {
    title: "Respuesta a Emergencias",
    description:
      "Atendemos situaciones de emergencia para que comunidades en riesgo reciban ayuda de forma rápida y efectiva.",
    bgImage: "/images/Emergencia.png"
  }
];

export default cardConfig;