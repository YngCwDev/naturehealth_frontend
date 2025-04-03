import { Plus, Minus } from "lucide-react";
import React from "react";

type quantityFunctions = {
  setQuantity: (value: number | ((prev: number) => number)) => void;
  quantity: number;
  className?: string;
};

const QuantityButton = ({
  setQuantity,
  quantity,
  className,
}: quantityFunctions) => {
  const increaseQuantity = () => {
    setQuantity((prev: number) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div
      className={`flex items-center gap-2 justify-between border border-gray-300 rounded-full cursor-pointer px-3 py-1 sm:px-4 sm:py-2 ${className}`}
      aria-label="Alterar quantidade do produto"
    >
      <button onClick={increaseQuantity} className="md:p-2 cursor-pointer">
        <Plus size={20} />
        <span className="sr-only">Plus</span>
      </button>
      <p className="text-md md:text-2xl">{quantity}</p>
      <button onClick={decreaseQuantity} className="md:p-2 cursor-pointer">
        <Minus size={20} />
        <span className="sr-only">Minus</span>
      </button>
    </div>
  );
};

export default QuantityButton;
