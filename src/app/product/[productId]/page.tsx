import { use } from "react";
import ProductClient from "./product-client";
import type { ProductProps } from "@/lib/types";
import Related from "./related";

async function getProducts(): Promise<ProductProps[]> {
  const res = await fetch("http://localhost:4000/Products", {});

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.productId;

  const products = use(getProducts());

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto p-8 text-center">Product not found</div>
    );
  }

  return (
    <>
      <ProductClient product={product} />;
      <Related product={product} />
    </>
  );
}
