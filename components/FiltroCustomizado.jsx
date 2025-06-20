"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const FiltroCustomizado = ({ titulo, opcoes }) => {
  const [selecionado, setSelecionado] = useState(opcoes[0]);
  return (
    <div>
      <div className="w-fit">
        <Listbox value={selecionado} onChange={(e) => setSelecionado(e)}>
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block truncate">{selecionado.titulo}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="setas para escolher opções no filtro"
              />
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="custom-filter__options">
                {opcoes.map((opcao, key) => (
                  <ListboxOption key={key}>
                    {({ selecionado }) => <span>{opcao.titulo}</span>}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default FiltroCustomizado;
