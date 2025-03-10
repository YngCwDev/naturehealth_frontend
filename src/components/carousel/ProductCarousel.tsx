import React from "react";
import ProductCard from "../productCard/productCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { mockProducts } from "@/lib/productApi";

// Mock de Produtos (apenas para exemplo)


const ProductCarousel = ({ products = mockProducts }) => {
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
