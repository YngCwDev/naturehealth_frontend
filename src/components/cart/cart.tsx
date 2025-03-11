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
  qty,
}) => {
  console.log(
    id
  )
  return (
    <div></div>
  )
};

export default Cart;
