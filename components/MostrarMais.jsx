"use client";

import { atualizarSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { BotaoEstilizado } from ".";

const MostrarMais = ({ numeroPagina, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const novoLimite = (numeroPagina + 1) * 10;
    const novoCaminho = atualizarSearchParams("limit", `${novoLimite}`);
    router.push(novoCaminho, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <BotaoEstilizado
          titulo="Mostrar mais"
          btnType="button"
          estiloContainer="bg-primary-blue rounded-full
                text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default MostrarMais;
