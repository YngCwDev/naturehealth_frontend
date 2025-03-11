"use client";
import React, { use, Suspense } from "react";
import ProductCard from "../productCard/productCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

async function retrieve() {
  const res = await fetch("http://localhost:4000/Products");
  if (!res.ok) {
    throw new Error("Failed to retrieve data");
  }
  return res.json();
}

interface data {
  product: any;
  index: number;
}

const ProductCarousel = () => {
  const products = use(retrieve());
  console.log(products);
  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
