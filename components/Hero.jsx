"use client";

import Image from "next/image";
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
          titulo="Encontrar modelos"
          estiloContainer="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="imagem carro hero"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
