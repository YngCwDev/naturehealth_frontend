import { getProducts } from "@/lib/model";
import { use } from "react";
import ProductClient from "./product";
import ProductDetails from "./product-details";
import ProductDetailsMobile from "./product-details-mobile";
import Related from "./related";

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
      <ProductDetails product={product} />
      <ProductDetailsMobile product={product} />
      <Related products={products} currentProduct={product.keywords} />
      {/*    <Reviews product={product} /> */}
    </div>
  );
}
