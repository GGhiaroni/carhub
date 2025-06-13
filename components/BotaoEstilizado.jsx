"use client";

const BotaoEstilizado = ({ titulo, btnType, estiloContainer, handleClick }) => {
  return (
    <>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${estiloContainer}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{titulo}</span>
      </button>
    </>
  );
};

export default BotaoEstilizado;
