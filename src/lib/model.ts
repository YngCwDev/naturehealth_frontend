import { ProductProps } from "./types";

export async function getProducts(): Promise<ProductProps[]> {
  const prodUrl = "https://peat-holistic-bearskin.glitch.me/Products";
  const localUrl = "http://localhost:4000/Products";
  const res = await fetch(localUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
