"use client";

import React from "react";
import { useState } from "react";
import CtaButton from "./cta-button";
import QuantityButton from "./quantity-button";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";

const ActionButtons = ({ product }: Product) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log(quantity, product.id);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-4 md:justify-between w-full">
      <QuantityButton setQuantity={setQuantity} quantity={quantity} />
      <div className="flex gap-4">
        <CtaButton
          action={addToCart}
          className={"bg-darkgreen1 text-white hover:bg-darkgreen2"}
        >
          Adicionar
          <ShoppingBag />
        </CtaButton>
      </div>
    </div>
  );
};

export default ActionButtons;
