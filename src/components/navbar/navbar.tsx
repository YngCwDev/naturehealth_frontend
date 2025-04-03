"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartPop from "../cart/cart-popover";
import MobileNavBar from "./mobile-navbar";
import SearchInput from "./search-input";

const Navbar = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = (action: boolean) => {
    setMouseOver(action);
  };

  return (
    <nav className="bg-white md:shadow-md w-full  top-0 z-50 text-darkgreen1 relative hidden md:flex">
      <div className=" px-[10vw] hidden md:flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/glogo.png"
            alt="Nature Health"
            width={100}
            height={100}
            className="h-auto py-3"
          />
        </Link>
        {/* Searh */}
        <div className="flex-1 min-w-[200px] max-w-[400px] py-3">
          <SearchInput />
        </div>

        {/* Carrinho de compras */}
        <div
          onMouseEnter={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseOver(false)}
          className="relative py-3 cursor-pointer"
        >
          <div className=" flex items-center gap-2">
            <ShoppingCart size={28} strokeWidth={2} className="" />
            <p className="text-lg font-semibold  px-2 bg-accent rounded-full">
              2
            </p>
          </div>
        </div>
        {mouseOver && (
          <div
            onMouseEnter={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseOver(false)}
            className="absolute right-0 top-[50px] py-4"
          >
            <CartPop />
          </div>
        )}
      </div>

      {/* MOBILE SM */}

      <MobileNavBar />
    </nav>
  );
};

export default Navbar;
