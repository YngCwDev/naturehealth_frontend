"use client";
import ProductCard from "@/components/productCard/product-card";
import { ProductProps } from "@/lib/types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../../../node_modules/swiper/swiper.css";

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
    <section className="my-8 mb-14 bg-white rounded-xl py-10 p-4 md:p-16">
      <h2 className="text-green2 font-bold my-6 md:my-4 ">
        PRODUTOS RELACIONADOS
      </h2>
      <div className="max-sm:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="max-w-[70vw]"
        >
          {relatedProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          watchOverflow={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="max-w-[90vw]"
        >
          {relatedProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Related;
