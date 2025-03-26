import { ProductProps } from "./types";

export async function getProducts(): Promise<ProductProps[]> {
  const url =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:4000/Products"
      : "https://peat-holistic-bearskin.glitch.me/Products";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
