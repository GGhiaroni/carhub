"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const BuscarFabricantes = ({ fabricante, setFabricante }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px] ">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Logo carro"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(fabricante) => fabricante}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition></Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default BuscarFabricantes;
