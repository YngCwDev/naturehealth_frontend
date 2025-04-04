"use client";

import { ChevronLeft, Home } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="flex top-0 justify-between  items-center px-[3vw] pt-2 bg-white w-full">
      <button onClick={() => router.back()} className="p-2 hover:bg-accent">
        <ChevronLeft />
      </button>
      <button onClick={() => router.push("/")} className="p-2 hover:bg-accent">
        <Home />
      </button>
    </div>
  );
};

export default TopBar;
