"use client";

import { useState } from "react";
import { ShoppingBag, WalletMinimal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuantityButton from "@/components/productCard/quantityButton";
import Image from "next/image";
import { ProductProps } from "@/lib/types";

type Product = {
  product: ProductProps;
};
export default function ProductClient({ product }: Product) {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const thumbnails = product.images.slice(1);

  return (
    <section className="container mx-auto p-4 md:p-8 lg:p-16 bg-white my-8 rounded-2xl">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {/* Product Images */}
        <div className="flex flex-col  justify-center gap-4 ">
          <div className="overflow-hidden size-[25vw] rounded-lg border">
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
                {" "}
                <span className="sr-only">a</span>
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-green1 leading-tight tracking-tighter md:text-4xl">
            {product.name + " n/" + product.description}
          </h1>

          <div className="flex items-center justify-between">
            <div className="text-sm md:text-base">
              <p className="text-muted-foreground">{product.brand}</p>
              <p>{product.unit}</p>
            </div>
            <div className="text-xl font-bold md:text-3xl">{product.price}</div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <QuantityButton setQuantity={setQuantity} quantity={quantity} />

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 sm:flex-none">
                Adicionar
                <ShoppingBag className="mr-2 h-4 w-4" />
              </Button>
              <Button className="flex-1 sm:flex-none">
                Comprar <WalletMinimal />
              </Button>
            </div>
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
