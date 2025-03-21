import ProductCard from "@/components/productCard/productCard";
import { ProductProps, Products } from "@/lib/types";
import Link from "next/link";
import React from "react";

// Função para verificar categorias comuns entre dois produtos
function hasCommonCategory(arr1: string[], arr2: string[]): boolean {
  const set = new Set(arr1);
  return arr2.some((category) => set.has(category));
}

type relatedProducts = {
  products: ProductProps[];
  currentProduct: string[];
};

const Related = ({ products, currentProduct }: relatedProducts) => {
  // Verifica se a lista de produtos existe e não está vazia
  if (!products || products.length === 0) {
    return (
      <section>
        <h2 className="text-green2 font-bold">PRODUTOS RELACIONADOS</h2>
        <p>Nenhum produto relacionado encontrado.</p>
      </section>
    );
  }

  // Obtém as palavras chaves do primeiro produto como referência
  const currentProductKeywords = currentProduct;

  // Filtra produtos que compartilham pelo menos uma categoria com o primeiro
  const relatedProducts = products.filter((product) =>
    hasCommonCategory(currentProductKeywords, product.keywords)
  );

  // Se nenhum produto relacionado for encontrado, exibe uma mensagem
  if (relatedProducts.length === 0) {
    return (
      <section className="my-8 mb-14">
        <Link href={"/"} className="text-green2 font-bold underline">
          Ver mais produtos
        </Link>
      </section>
    );
  }

  return (
    <section className="my-8 mb-14">
      <h2 className="text-green2 font-bold my-4">PRODUTOS RELACIONADOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Related;
