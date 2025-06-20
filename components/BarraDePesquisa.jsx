"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { BuscarFabricantes } from ".";

const BarraDePesquisa = () => {
  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const router = useRouter();

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

    if (fabricante === "" && modelo === "") {
      return toast.warning(
        "Por favor, preencha os campos da barra de pesquisa!"
      );
    }

    atualizarSearchParams(modelo.toLowerCase(), fabricante.toLowerCase());
  };

  const atualizarSearchParams = (modelo, fabricante) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modelo) {
      searchParams.set("model", modelo);
    } else {
      searchParams.delete("model");
    }

    if (fabricante) {
      searchParams.set("manufacturer", fabricante);
    } else {
      searchParams.delete("manufacturer");
    }

    const novoCaminhoUrl = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(novoCaminhoUrl);
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
