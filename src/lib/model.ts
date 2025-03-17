import { ProductProps } from "./types";

export async function getProducts(): Promise<ProductProps[]> {
  const res = await fetch("http://localhost:4000/Products", {});

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}