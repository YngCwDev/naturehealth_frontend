"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../productCard/productCard";
import { ProductProps } from "@/lib/types";


function getProducts({Products}: ProductProps[]){
  return Products
}

const ProductList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
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
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 md:gap-8 px-5 md:px-20 place-items-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
