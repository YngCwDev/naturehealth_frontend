"use client";

import CtaButton from "@/components/productCard/cta-button";
import QuantityButton from "@/components/productCard/quantity-button";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartMobile = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className=" bg-white w-screen min-h-[95vh] p-4 md:hidden relative">
      <h2 className="text-darkgreen1 py-2 border-b-2 mb-4">Meu Carrinho</h2>
      <div className="relative space-y-4 h-full">
        {Array.from([1, 2, 3]).map((_, index) => (
          <div
            key={index}
            className="relative w-full flex items-center gap-4 border-b-2 pb-2"
          >
            <div className="border-2 p-2 rounded-2xl w-fit h-fit">
              <Image
                src="/products/nature.png"
                alt="AA"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 w-full">
              <div className="flex justify-between gap-4">
                <span className="text-sm font-semibold space-y-2">
                  <p>Complexo Multivitamínico Feminino</p>
                  <p className="text-gray-500 text-[10px] font-normal">
                    Nature
                  </p>
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
                  <QuantityButton
                    setQuantity={setQuantity}
                    quantity={quantity}
                  />
                </div>
                <div className="text-md ">1500.00 Mts</div>
              </div>
            </div>
          </div>
        ))}

        {/* Resumo */}

        <div></div>
      </div>
      <div className="pt-4 border-t-2 absolute w-full bottom-2 right-2.5 max-w-[95vw]  ">

        <CtaButton className="bg-darkgreen1 text-white">
          Encomendar <ArrowRight size={20} />
        </CtaButton>
      </div>
    </div>
  );
};

export default CartMobile;
