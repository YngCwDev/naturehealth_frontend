"use client";
import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Cart from "../cart/cart";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  brand,
  image,
}) => {
  const [quantity, setQuantity] = useState(0);
  
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Card className="max-w-[350px] flex flex-col justify-between items-center p-4 drop-shadow-md">
      {/* 📷 Imagem do Produto */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-md w-full"
      />

      {/* 📌 Informações */}
      <CardHeader className="flex flex-col gap-2 w-full">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-700">{brand}</span>
          <span className="font-bold text-lg">{price} Mts</span>
        </div>
      </CardHeader>

      {/* 🛒 Botões de Ação */}
      <div className="flex gap-2 mt-4 w-full justify-between">
        {/* 📌 Contador */}
        <div className="w-full">
          <div
            className="w-full flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-full px-6"
            aria-label="Alterar quantidade do produto"
          >
            <Plus size={10} onClick={increaseQuantity} />
            <p className="text-2xl">{quantity}</p>
            <Minus size={10} onClick={decreaseQuantity} />
          </div>
        </div>

        {/* 🛍️ Botão Adicionar ao Carrinho */}
        <Cart productID={id} quantity={quantity} />
      </div>
    </Card>
  );
};

export default ProductCard;
