import React from "react";
import CartPopProduct from "./cartPopProduct";
import CtaButton from "../productCard/ctaButton";
import Link from "next/link";

const CartPop = () => {
  return (
    <div className="p-4 bg-white rounded-2xl  space-y-2 flex flex-col justify-center w-fit ">
      <h3 className="text-2xl text-green2 font-semibold">Meu Carrinho</h3>
      <CartPopProduct />
      <CartPopProduct />

      <div className="flex justify-between font-semibold px-2 py-2">
        <span>Total(4):</span>
        <span className="text-green2">3000.00 Mts</span>
      </div>
      <Link href={"/cart"} className="w-full">
        <CtaButton
          name="Encomendar"
          className="bg-darkgreen1 text-white hover:bg-darkgreen2"
        ></CtaButton>
      </Link>
    </div>
  );
};

export default CartPop;
