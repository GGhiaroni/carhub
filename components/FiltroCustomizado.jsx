"use client";

import { Listbox, ListboxButton } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

const FiltroCustomizado = ({ titulo, opcoes }) => {
  const [selecionado, setSelecionado] = useState(opcoes[0]);
  return (
    <div>
      <div className="w-fit">
        <Listbox value={selecionado} onChange={(e) => setSelecionado(e)}>
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block truncate">{selecionado.title}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="setas para escolher opções no filtro"
              />
            </ListboxButton>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default FiltroCustomizado;
