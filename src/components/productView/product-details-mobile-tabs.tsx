"use client";

import { Product } from "@/lib/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import CtaButton from "../productCard/cta-button";
import ProductDetailsContent from "./product-details-content";

const Tabs = ({ product }: Product) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (alter: boolean) => {
    setOpen(alter);
  };
  return (
    <div>
      {isOpen && (
        <div>
          <ProductDetailsContent product={product} />
        </div>
      )}
      {!isOpen ? (
        <div onClick={() => handleClick(true)}>
          <CtaButton className="bg-accent">
            Ver mais <ChevronDown />
          </CtaButton>
        </div>
      ) : (
        <div onClick={() => handleClick(false)}>
          <CtaButton className="bg-accent">
            Ver menos
            <ChevronUp />
          </CtaButton>
        </div>
      )}
    </div>
  );
};

export default Tabs;
