import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-md w-full  top-0 z-50 text-darkgreen1">
      <div className=" px-[10vw] py-3 hidden md:flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/glogo.png"
            alt="Nature Health"
            width={100}
            height={100}
            className="h-auto"
          />
        </Link>
        {/* Campo de busca */}
        <div className="flex-1 min-w-[200px] max-w-[400px]">
          <SearchInput />
        </div>

        {/* Carrinho de compras */}
        <div className="relative flex items-center gap-2">
          <ShoppingCart size={28} className="" />
          <p className="text-lg font-semibold">{}</p>
        </div>
      </div>

      {/* MOBILE SM */}

      <div className=" px-[5vw] py-3 flex md:hidden justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/glogo.png"
            alt="Nature Health"
            width={100}
            height={100}
            className="h-auto"
          />
        </Link>
        {/* Campo de busca */}
        <div className="flex items-center gap-2">
          <div className="flex">
            <SearchInput />
          </div>

          {/* Carrinho de compras */}
          <div className="relative flex items-center gap-2 ">
            <ShoppingCart size={28} className="" />
            <div className="text-lg text-darkgreen1">0</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
