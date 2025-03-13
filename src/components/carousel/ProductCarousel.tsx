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
        const res = await fetch("http://localhost:4000/Products");
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
    <div className="flex flex-wrap  gap-6 px-[1rem]">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCarousel;
