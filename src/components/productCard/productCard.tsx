//Documentacao do componente
// Componente de produto que exibe os detalhes do produto e permite
// Organizado,  formarta  e retorna um objecto do produto selecionado pronto para ser utilizado

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
    <div className="flex flex-col min-w-[300px] shrink-0 items-center justify-between gap-5 shadow-lg p-4 rounded-md cursor-pointer hover:scale-102 transition-all">
      <Link href={"/product"}>
        <div className="rounded-md w-full h-full">
          <Image src={image} alt={name} width={300} height={300} />
        </div>
      </Link>

      <div className="flex flex-col justify-between gap-4 w-full h-full">
        <Link href={"/product"}>
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-semibold text-green1">{name}</h2>
            <p className="text-sm text-gray-500 text-wrap">{description}</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{brand}</p>
              <p className="font-bold text-xl text-green2">{price} Mts</p>
            </div>
          </div>
        </Link>

        <div className=" bottom-4 flex gap-2 mt-4 justify-between w-auto">
          <div
            className="flex items-center gap-2 justify-between  border border-gray-300 rounded-full cursor-pointer "
            aria-label="Alterar quantidade do produto"
          >
            <button onClick={increaseQuantity} className="p-2  cursor-pointer">
              <Plus size={20} />
              <span className="sr-only">Plus</span>
            </button>
            <p className="text-xl">{quantity}</p>
            <button onClick={decreaseQuantity} className="p-2  cursor-pointer">
              <Minus size={20} />
              <span className="sr-only">Minus</span>
            </button>
          </div>

          <button
            onClick={addToCart}
            className="flex w-full bg-darkgreen1 hover:bg-darkgreen2 transition-all  items-center  text-white justify-center gap-2 p-4 rounded-full  cursor-pointer "
          >
            <p className="text-[min(20px,70px)]">Adicionar</p>
            <ShoppingBag className="text-[min(10px,70px)]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
