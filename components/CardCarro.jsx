"use client";

import { calcularValorAluguelCarro } from "@/utils";
import Image from "next/image";

const CardCarro = ({ carro }) => {
  const { year, make, model, transmission, drive } = carro;

  const custoAluguel = calcularValorAluguelCarro(year);

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
          src="/hero.png"
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
            <p className="text-[14px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarro;
