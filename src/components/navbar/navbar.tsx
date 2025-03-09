import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white px-[15vw] ">
      <div className="py-2 flex justify-between items-center gap-[10vw]">
        <Image src="/logo.png" alt="Nature Health" width={120} height={120} />
        <SearchInput />
        <div className="flex items-center gap-2">
          <div>
            <ShoppingCart />
          </div>
          <p className="text-[16px]">0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
