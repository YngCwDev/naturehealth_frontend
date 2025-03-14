//Documentacao do componente
// Componente de produto que exibe os detalhes do produto e permite
// Organizado, formata e retorna um objecto do produto selecionado pronto para ser utilizado

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";

// Define a interface para os detalhes do produto
export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  image: string;
  qty?: number; // Add optional qty property
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  brand,
  image,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    console.log(quantity, id);
  };

  return (
    <div className="flex flex-col h-fit w-full max-w-[350px] items-center justify-between gap-5 shadow-lg p-4 rounded-md cursor-pointer md:hover:scale-105 transition-all">
      <Link href={"/product"}>
        <div className="rounded-md w-full h-auto max-h-[250px] overflow-hidden">
          <Image src={image} alt={name} width={300} height={300} className="w-full h-full object-cover" />
        </div>
      </Link>

      <div className="flex flex-col justify-between gap-4 w-full h-full">
        <Link href={"/product"}>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold text-green1">{name}</h2>
            <p className="text-xs sm:text-sm text-gray-500 text-wrap md:flex hidden">{description}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
              <p className="text-gray-700 text-sm sm:text-base">{brand}</p>
              <p className="font-bold text-lg sm:text-xl text-green2">{price} Mts</p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:justify-between w-full">
          <div
            className="flex items-center gap-2 justify-between border border-gray-300 rounded-full cursor-pointer px-3 py-1 sm:px-4 sm:py-2"
            aria-label="Alterar quantidade do produto"
          >
            <button onClick={increaseQuantity} className="p-2 cursor-pointer">
              <Plus size={20} />
              <span className="sr-only">Plus</span>
            </button>
            <p className="text-xl sm:text-2xl">{quantity}</p>
            <button onClick={decreaseQuantity} className="p-2 cursor-pointer">
              <Minus size={20} />
              <span className="sr-only">Minus</span>
            </button>
          </div>

          <button
            onClick={addToCart}
            className="flex w-full sm:w-auto bg-darkgreen1 hover:bg-darkgreen2 transition-all items-center text-white justify-center gap-2 p-3 sm:p-4 px-6 rounded-full cursor-pointer"
          >
            <p className="text-sm sm:text-base md:flex hidden">Adicionar</p>
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
