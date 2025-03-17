import { ShoppingBag } from "lucide-react";
import React from "react";

type ctaContent = {
  action: any;
  name: any;
};

const CtaButton = ({ action, name }: ctaContent) => {
  return (
    <button
      onClick={action}
      className="flex w-full sm:w-auto bg-darkgreen1 hover:bg-darkgreen2 transition-all items-center text-white justify-center gap-2 p-3 sm:p-4 px-6 rounded-full cursor-pointer"
    >
      <p className="text-sm sm:text-base md:flex hidden">Adicionar</p>
      <ShoppingBag size={20} />
    </button>
  );
};

export default CtaButton;
