"use client";

import { calcularValorAluguelCarro } from "@/utils";

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
    </div>
  );
};

export default CardCarro;
