"use client";

import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../productCard/productCard";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  image: string;
};

const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com//YngCwDev/fakeApi/Products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setError("Falha ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-20 place-items-center">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCarousel;
