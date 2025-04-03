"use client";

import QuantityButton from "@/components/productCard/quantity-button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartItemMobile = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="relative w-full flex items-center gap-1 border-b-2 shadow-sm  rounded-2xl p-2  bg-white ">
      <div className="border-2 p-2 rounded-2xl w-fit h-fit">
        <Image src="/products/nature.png" alt="AA" width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="flex gap-4">
          <span className="text-[12px] font-semibold space-y-1 text-wrap">
            <p>Complexo Multivitamínico Feminino</p>
            <p className="text-gray-500 text-[10px] font-normal">Nature</p>
          </span>
          <span className="absolute right-2 ">
            <button className="cursor-pointer">
              <span className="sr-only">trash</span>
              <Trash2 size={18} className="text-accent-foreground/60" />
            </button>
          </span>
        </div>
        <div className="flex  items-center justify-between">
          <QuantityButton
            setQuantity={setQuantity}
            quantity={quantity}
          />
          <div className="text-md ">1500.00 Mts</div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
