import Image from "next/image";
import Link from "next/link";
import { BotaoEstilizado } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logomarca CarHub"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <BotaoEstilizado
          titulo="Cadastre-se"
          btnType="button"
          estiloContainer="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
