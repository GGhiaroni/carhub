"use client";

import Image from "next/image";
import { useState } from "react";
import { BuscarFabricantes } from ".";

const BarraDePesquisa = () => {
  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");

  const SearchButton = ({ outrasClasses }) => (
    <button type="submit" className={`-ml-3 z-100 ${outrasClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="ícone lupa"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <BuscarFabricantes
          fabricante={fabricante}
          setFabricante={setFabricante}
        />
        <SearchButton outrasClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="ícone modelo do carro"
        />
        <input
          type="text"
          name="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="searchbar__input"
          placeholder="Modelo"
        />
        <SearchButton outrasClasses="sm:hidden" />
      </div>
      <SearchButton outrasClasses="max-sm:hidden" />
    </form>
  );
};

export default BarraDePesquisa;
