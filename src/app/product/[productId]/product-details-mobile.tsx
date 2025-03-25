"use client";
import CtaButton from "@/components/productCard/cta-button";
import { Product } from "@/lib/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ProductDetailsContent from "./product-details-content";

const ProductDetailsMobile = ({ product }: Product) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (alter: boolean) => {
    setOpen(alter);
  };
  return (
    <section className="my-8 md:h-[600px] space-y-24  bg-white  rounded-2xl p-4 md:p-8 lg:p-16 md:hid">
      <h2 className="text-green2 font-bold uppercase text-2xl mb-4">
        Detalhes do Produto
      </h2>
      <div className="flex gap-8 text-start max-sm:w-full">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-md">Denominação de Venda</h4>
            <p className="mb-2">{product.name}</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">Ingredientes</h4>
            <p className="mb-2">{product.details.ingredients}...</p>
          </div>
          {isOpen && (
            <div>
              <ProductDetailsContent product={product} />
            </div>
          )}
          {!isOpen ? (
            <div onClick={() => handleClick(true)}>
              <CtaButton className="bg-accent">
                Ler mais <ChevronDown />
              </CtaButton>
            </div>
          ) : (
            <div onClick={() => handleClick(false)}>
              <CtaButton className="bg-accent">
                Ler menos
                <ChevronUp />
              </CtaButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsMobile;
