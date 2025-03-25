import { use } from "react";
import ProductClient from "./product-client";
import Related from "./related";
import { getProducts } from "@/lib/model";
import ProductDetails from "./product-details";
import Reviews from "./reviews";
import ProductDetailsMobile from "./product-details-mobile";

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
    <div className="">
      <ProductClient product={product} />
      <Related products={products} currentProduct={product.keywords} />
      <ProductDetails product={product} />
      <ProductDetailsMobile product={product} />
      <Reviews product={product} />
    </div>
  );
}
