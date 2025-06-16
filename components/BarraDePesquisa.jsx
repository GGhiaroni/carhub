"use client";

import { useState } from "react";
import { BuscarFabricantes } from ".";

const BarraDePesquisa = () => {
  const [fabricante, setFabricante] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <BuscarFabricantes
          fabricante={fabricante}
          setFabricante={setFabricante}
        />
      </div>
    </form>
  );
};

export default BarraDePesquisa;
