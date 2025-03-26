import QuantityButton from "@/components/productCard/quantity-button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartItemMobile = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="relative w-full flex items-center gap-4 border-b-2 pb-2">
      <div className="border-2 p-2 rounded-2xl w-fit h-fit">
        <Image src="/products/nature.png" alt="AA" width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex justify-between gap-4">
          <span className="text-sm font-semibold space-y-2">
            <p>Complexo Multivitamínico Feminino</p>
            <p className="text-gray-500 text-[10px] font-normal">Nature</p>
          </span>
          <span className="absolute right-0 ">
            <button className="cursor-pointer">
              <span className="sr-only">trash</span>
              <Trash2 size={20} className="text-accent-foreground/60" />
            </button>
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 w-full">
          <div>
            <QuantityButton setQuantity={setQuantity} quantity={quantity} />
          </div>
          <div className="text-md ">1500.00 Mts</div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
