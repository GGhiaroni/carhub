"use client";

import { fabricantes } from "@/constants";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const BuscarFabricantes = ({ fabricante, setFabricante }) => {
  const [query, setQuery] = useState("");

  const fabricantesFiltrados =
    query == ""
      ? fabricantes
      : fabricantes.filter((fabricante) =>
          fabricante
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={fabricante} onChange={setFabricante}>
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
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {fabricantesFiltrados.map((item) => (
                <ComboboxOption
                  key={item}
                  className={({ focus }) => `
                                  relative search__manufacturer-option py-2 px-4 ${
                                    focus
                                      ? "bg-primary-blue text-white"
                                      : "text-gray-900"
                                  }
                                  `}
                  value={item}
                >
                  {({ selected, focus }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default BuscarFabricantes;
