"use client";

import { X, Search, ShoppingBag, ChevronLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SearchInput from "./search-input";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavBar = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const path = usePathname().split("/");
  const notShow = ["cart"];

  const checkPath = () => {
    return (
      notShow.filter((pathname) => pathname === path[1]).toString() === path[1]
    );
  };

  console.log(checkPath());
  if (checkPath()) {
    return (
      <nav className=" px-[2vw] flex md:hidden justify-between items-center  pt-4 bg-white w-full  top-0 z-50 text-darkgreen1 relative">
        <ChevronLeft />
      </nav>
    );
  } else {
    return (
      <nav className=" px-[5vw] py-3 flex md:hidden justify-between items-center bg-white shadow-md w-full  top-0 z-50 text-darkgreen1 relative">
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
            <Link href={"/cart"}>
              <ShoppingBag size={24} className="text-darkgreen1" />
            </Link>
          </div>
        </div>

        {searchBarOpen && (
          <div className="max-sm:flex absolute top-12 bg-white w-screen px-6 py-4">
            <SearchInput />
          </div>
        )}
      </nav>
    );
  }
};

export default MobileNavBar;
