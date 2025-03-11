//Documentacao do componente
// Componente de produto que exibe os detalhes do produto e permite
// Organizado,  formarta  e retorna um objecto do produto selecionado pronto para ser utilizado

"use client";
import React, { useRef, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Cart from "../cart/cart";

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
  const quantityRef = useRef(0); // Armazena a quantidade
  const [quantity, setQuantity] = useState(0); // Estado para forçar atualização da UI

  const updateUI = () => {
    setQuantity(quantityRef.current);
  };

  const increaseQuantity = () => {
    quantityRef.current += 1;
    updateUI(); // Força re-render
  };

  const decreaseQuantity = () => {
    if (quantityRef.current > 0) {
      quantityRef.current -= 1;
      updateUI(); // Força re-render
    }
  };

  // Referência para o produto no carrinho(Todos os detalhes do produto obtiodos da API)
  const productCartDetails = useRef<ProductCardProps>({
    id: id,
    name: name,
    description: description,
    price: price,
    brand: brand,
    image: image,
    qty: quantityRef.current,
  });

  // Imprime  o produto formatado selecionado
  const formatedCurrentProduct = () => {
    Cart({
      id,
      name,
      description,
      price,
      brand,
      image,
      qty: quantityRef.current,
    });

    /* console.log("Produto adicionado:", {
      id,
      name,
      description,
      price,
      brand,
      image,
      qty: quantityRef.current,
    }); */
  };

  return (
    <Card className="max-w-[350px] flex flex-col justify-between items-center p-4 drop-shadow-md">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-md w-full"
      />

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

      <div className="flex gap-2 mt-4 w-full justify-between">
        <div className="w-full">
          <div
            className="w-full flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-full px-6"
            aria-label="Alterar quantidade do produto"
          >
            <Button variant={"ghost"} onClick={increaseQuantity}>
              <Plus size={16} />
            </Button>
            <p className="text-2xl">{quantity}</p>
            <Button variant={"ghost"} onClick={decreaseQuantity}>
              <Minus size={16} />
            </Button>
          </div>
        </div>

        <div className="w-full">
          <Button
            onClick={formatedCurrentProduct}
            variant={"darkgreen"}
            className="w-full flex items-center gap-2 p-6"
          >
            <p>Adicionar</p>
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
