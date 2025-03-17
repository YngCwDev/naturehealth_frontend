import ProductCard from "@/components/productCard/productCard";
import { Product, ProductProps } from "@/lib/types";
import React from "react";




const Related = ({product}: Product) => {
  return (
    <section>
      <h2 className="text-green2 font-bold"> PRODUTOS RELACIONADOS </h2>
      <div>
        <ProductCard product={product}/>
      </div>
    </section>
  );
};

export default Related;
