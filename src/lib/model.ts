import { ProductProps } from "./types";

export async function getProducts(): Promise<ProductProps[]> {
  const res = await fetch("https://peat-holistic-bearskin.glitch.me/Products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
