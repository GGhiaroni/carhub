"use client";

import { atualizarSearchParams } from "@/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const FiltroCustomizado = ({ titulo, opcoes, parametro }) => {
  const [selecionado, setSelecionado] = useState(opcoes[0]);
  const router = useRouter();

  const handleAtualizacaoParametros = (valorSelecionado) => {
    const novoCaminho = atualizarSearchParams(
      parametro,
      valorSelecionado.value
    );
    router.push(novoCaminho, { scroll: false });
  };

  return (
    <div>
      <div className="w-fit">
        <Listbox
          value={selecionado}
          onChange={(e) => {
            setSelecionado(e);
            handleAtualizacaoParametros(e);
          }}
        >
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
                  <ListboxOption
                    key={key}
                    value={opcao}
                    className={({ focus }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        focus ? "bg-primary-blue text-white" : "text-grey-900"
                      }`
                    }
                  >
                    {({ selecionado }) => (
                      <span
                        className={`block truncate ${
                          selecionado ? "font-medium" : "font-normal"
                        }`}
                      >
                        {opcao.titulo}
                      </span>
                    )}
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
