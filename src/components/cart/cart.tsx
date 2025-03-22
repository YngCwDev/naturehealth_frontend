import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import { ProductCardProps } from "../productCard/productCard";

const Cart: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  brand,
  image,
  qty = 0,
}) => {
  return (
    <div>
      <div>
        {/* Carrinho de compras */}
        <div className="relative flex items-center gap-2">
          <ShoppingCart size={28} className="text-gray-700" />
          <p className="text-lg font-semibold">{}</p>
        </div>
      </div>
      {qty > 0 && <div>{qty}</div>}
    </div>
  );
};

export default Cart;
