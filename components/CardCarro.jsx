"use client";

import {
  calcularValorAluguelCarro,
  gerarImagemCarroUrl,
  gerarNumeroAleatorio,
} from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { BotaoEstilizado, DetalhesDoCarro } from ".";

const CardCarro = ({ carro }) => {
  const { year, make, model, transmission, drive } = carro;

  const custoAluguel = calcularValorAluguelCarro(year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {custoAluguel}
        <span className="self-end text-[14px] font-medium">/dia</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={gerarImagemCarroUrl(carro)}
          alt="modelo do carro"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="ícone volante"
            />
            <p className="text-[14px]">
              {transmission == "a" ? "Automático" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src="/tire.svg" width={20} height={20} alt="ícone roda" />
            <p className="text-[14px]">
              {drive == "fwd" ? "Tração Dianteira" : "Tração Traseira"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src="/gas.svg" width={20} height={20} alt="ícone roda" />
            <p className="text-[14px]">{gerarNumeroAleatorio()} km/l</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <BotaoEstilizado
            titulo="Saiba mais"
            estiloContainer="w-full py-[16px] rounded-full bg-primary-blue"
            estiloTexto="text-white text-[14px] leading-[17px] font-bold"
            iconeDireita="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <DetalhesDoCarro
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        carro={carro}
      />
    </div>
  );
};

export default CardCarro;
