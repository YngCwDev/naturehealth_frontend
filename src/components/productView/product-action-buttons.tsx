"use client";

import { ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import CtaButton from "../productCard/cta-button";
import QuantityButton from "../productCard/quantity-button";
import { Product } from "@/lib/types";

const ActionButtons = ({ product }: Product) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="md:flex flex gap-2  flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <QuantityButton setQuantity={setQuantity} quantity={quantity} />
        <CtaButton className={"border-2 hover:bg-accent md:hidden"}>
          Adicionar
          <ShoppingBag className="max-sm:hidden" />
        </CtaButton>
      </div>

      <div className="flex">
        <CtaButton className={"border-2 hover:bg-accent max-sm:hidden"}>
          Adicionar
          <ShoppingBag className="max-sm:hidden" />
        </CtaButton>

        <CtaButton className={"text-white bg-darkgreen1 hover:bg-darkgreen2"}>
          Comprar Já
        </CtaButton>
      </div>
    </div>
  );
};

export default ActionButtons;
