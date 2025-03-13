import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative place-items-center bg-darkgreen1 text-white   px-6 md:px-[15vw] w-full">
      <div className="flex justify-between py-24 w-full gap-4 flex-wrap">
        {/* Logo e descrição */}
        <div className="footer_element text-sm flex flex-col  gap-3">
          <Image
            src="/wlogo.png"
            alt="Nature Health"
            width={150}
            height={150}
          />
          <p className="text-justify">
            Nature Health é especializada na venda de produtos e suplementos
            naturais. Oferecemos soluções para próstata, emagrecimento,
            fertilidade e mais, distribuindo para todo Moçambique.
          </p>
        </div>

        {/* Informações de Contato */}
        <div className="footer_element">
          <h2 className="text-2xl font-semibold mb-3">Informações de Contato</h2>
          <p>Telefone: +258 84 123 4567</p>
          <p>WhatsApp: +258 84 123 4567</p>
          <p>Email: atendimento@naturehealth.co.mz</p>
        </div>

        {/* Redes Sociais */}
        <div className="footer_element">
          <h2 className="text-2xl font-semibold ">Redes Socias</h2>
          <div className="flex">
            <Instagram
              size={30}
              className="hover:text-gray-300 cursor-pointer"
            />
            <Facebook
              size={30}
              className="hover:text-gray-300 cursor-pointer"
            />
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="footer_element">
          <h2 className="text-2xl font-semibold mb-3">Métodos de Pagamento</h2>
          <div className="flex gap-6 items-center">
            <Image
              src={"/mpesa.svg"}
              alt="Mpesa icon"
              width={80}
              height={60}
              className="h-auto"
            />
            <Image
              src={"/emola.svg"}
              alt="Emola icon"
              width={80}
              height={60}
              className="h-auto"
            />
          </div>
        </div>
      </div>
      <div className="py-2 border-t-2 border-green1 w-full">
        <p>© 2025 Nature Health. Política de Privacidade </p>
      </div>
    </footer>
  );
};

export default Footer;
