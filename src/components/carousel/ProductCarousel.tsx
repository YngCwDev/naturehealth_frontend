"use client";
import React, { use, Suspense, useState, useEffect } from "react";
import ProductCard from "../productCard/productCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import axios from "axios";

type product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  image: string;
};

const ProductCarousel = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:4000/Products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  if (loading) return <div>Loading...</div>;

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
