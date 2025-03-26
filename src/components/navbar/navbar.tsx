"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchInput from "./search-input";
import { Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import CartPop from "../cart/cart-popover";

const Navbar = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const handleMouseOver = (action: boolean) => {
    setMouseOver(action);
  };

  return (
    <nav className="bg-white drop-shadow-md w-full  top-0 z-50 text-darkgreen1 relative">
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
        {/* Campo de busca */}
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

      <div className=" px-[5vw] py-3 flex md:hidden justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/glogo.png"
            alt="Nature Health"
            width={100}
            height={100}
            className="h-auto w-[20vw]"
          />
        </Link>
        {/* Campo de busca */}
        <div className="flex items-center gap-4 relative">
          <div>
            {searchBarOpen ? (
              <X
                strokeWidth={2}
                onClick={() => setSearchBarOpen(false)}
                className="hover:bg-accent"
              />
            ) : (
              <Search
                strokeWidth={2}
                size={24}
                onClick={() => setSearchBarOpen(true)}
                className="hover:bg-accent"
              />
            )}
          </div>

          {/* Carrinho de compras */}
          <div className="flex items-center gap-2 ">
            <Link href="/cart">
              <ShoppingCart size={24} strokeWidth={2} className="" />
            </Link>
          </div>
        </div>
      </div>

   {/*    {searchBarOpen && (
        <div className="max-sm:flex absolute top-14 bg-white w-screen px-6 py-4">
          <SearchInput />
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
