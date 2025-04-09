"use client";

import { ChevronLeft, Home } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="flex top-0 max-md:justify-between  justify-start items-center px-[3vw] max-md:pt-2 py-4 bg-white w-screen">
      <button onClick={() => router.back()} className="p-2 hover:bg-accent">
        <ChevronLeft className="md:size-6"/>
      </button>
      <button onClick={() => router.push("/")} className="p-2 hover:bg-accent">
        <Home  className="max-md:size-6 size-5"/>
      </button>
    </div>
  );
};

export default TopBar;
