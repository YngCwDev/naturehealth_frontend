import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Cart from "../cart/cart";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-md w-full fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <Image
          src="/glogo.png"
          alt="Nature Health"
          width={100}
          height={100}
          className="h-auto"
        />

        {/* Campo de busca */}
        <div className="flex-1 min-w-[200px] max-w-[400px]">
          <SearchInput />
        </div>

        {/* Carrinho de compras */}
        <div className="relative flex items-center gap-2">
          <ShoppingCart size={28} className="text-gray-700" />
          <p className="text-lg font-semibold">{}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
