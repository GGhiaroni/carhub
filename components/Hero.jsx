"use client";

import { BotaoEstilizado } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, reserve ou alugue um carro de forma rápida e fácil.
        </h1>

        <p className="hero__subtitle">
          simplifique sua experiência de aluguel de carros com nosso processo de
          reserva descomplicado.
        </p>
        <BotaoEstilizado
          titulo="Encontrar modelos disponíveis"
          estiloContainer="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
