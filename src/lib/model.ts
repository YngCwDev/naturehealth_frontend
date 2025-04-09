import { ProductProps } from "./types";

export async function getProducts(): Promise<ProductProps[]> {
  const prod = "https://peat-holistic-bearskin.glitch.me/Products"; 
  const local = "http://localhost:4000/Products"
  const url =
    process.env.NODE_ENV !== "production"
      ? local
      : prod;
  const res = await fetch(prod);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
