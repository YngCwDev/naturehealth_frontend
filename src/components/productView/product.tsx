"use client";

import CtaButton from "@/components/productCard/cta-button";
import QuantityButton from "@/components/productCard/quantity-button";
import { Card } from "@/components/ui/card";
import { ProductProps } from "@/lib/types";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ActionButtons from "./product-action-buttons";

type Product = {
  product: ProductProps;
};

export default function ProductClient({ product }: Product) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  const thumbnails = product.images.slice(1);

  return (
    <section className=" mx-auto p-4 md:p-8 lg:p-16 bg-white md:my-4 rounded-2xl">
      <div className="flex max-sm:flex-col gap-6 justify-center">
        {/* Product Images */}
        <div className="flex flex-col  justify-center gap-4 ">
          <div className="overflow-hidden md:size-[25vw] rounded-lg border">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-auto w-full  object-fit
               transition-all scale-75 hover:scale-80"
            />
          </div>
          <div className="flex gap-4">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className="overflow-hidden rounded-md border hover:border-primary"
                onClick={() => setMainImage(thumb)}
              >
                <span className="sr-only">a</span>
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="h-20 w-20 object-cover p-2"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-wrap font-bold text-green1 leading-tight tracking-tighter md:text-4xl">
            {product.name} <br />
          </h2>

          <h2 className="text-[15px] md:font-semibold text-darkgreen1  leading-tight tracking-tighter md:text-2xl">
            {product.description}
          </h2>

          <div className="flex items-center justify-between my-10 pr-2">
            <div className="text-sm md:text-base">
              <p className="text-muted-foreground">{product.brand}</p>
              <p>{product.unit}</p>
            </div>
            <div className="text-xl font-bold md:text-3xl text-green2">
              {product.price}.00 Mts
            </div>
          </div>

          <ActionButtons product={product}/>

          {/* Mobile */}

          <div className="fixed bottom-0 flex justify-center    md:hidden">
            <div></div>
          </div>

          <Card className="p-4">
            <h3 className="font-semibold">Entrega</h3>
            <p className="text-sm text-muted-foreground">
              Em 2 a 7 dias <br />* Custo adicional para fora da cidade de
              Maputo
            </p>
          </Card>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Visão Geral</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {product.details.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
