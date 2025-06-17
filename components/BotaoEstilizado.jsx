"use client";

import Image from "next/image";

const BotaoEstilizado = ({
  titulo,
  btnType,
  estiloContainer,
  handleClick,
  estiloTexto,
  iconeDireita,
}) => {
  return (
    <>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${estiloContainer}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${estiloTexto}`}>{titulo}</span>
        {iconeDireita && (
          <div className="relative w-6 h-6">
            <Image
              src={iconeDireita}
              alt="ícone direita"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </>
  );
};

export default BotaoEstilizado;
