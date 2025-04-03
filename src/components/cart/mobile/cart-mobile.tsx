"use client";

import CtaButton from "@/components/productCard/cta-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CartItemMobile from "./cart-item-mobile";

const CartMobile = () => {
  return (
    <div className=" bg-white w-screen min-h-[90vh] p-4 md:hidden relative">
      <h2 className="text-darkgreen1 py-2 border-b-2 mb-4">Meu Carrinho</h2>
      <div className="relative space-y-4 h-full">
        {Array.from([1, 2, 3, 4]).map((_, index) => (
          <div key={index}>
            <CartItemMobile />
          </div>
        ))}

        {/* Resumo */}

        <div>
          <h3 className="text-xl font-semibold">Resumo</h3>
          <p className="py-4 font-semibold">Items</p>
          <div className="space-y-3">
            <div className="flex justify-between ">
              <div>2x</div>
              <div>3000.00 Mts</div>
            </div>
            <div className="flex justify-between ">
              <div>2x</div>
              <div>3000.00 Mts</div>
            </div>
          </div>
          <div className="mt-10 mb-2 pt-2 border-t-2">
            <div className="flex justify-between px-2 py-2">
              <span>Total(4):</span>
              <span className="text-green2">6000.00 Mts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 absolute w-full bottom-2 right-2.5 max-w-[95vw]  ">
        <Link href={"/payment"}>
          <CtaButton className="bg-darkgreen1 text-white">
            Efectuar o Pedido <ArrowRight size={20} />
          </CtaButton>
        </Link>
      </div>
    </div>
  );
};

export default CartMobile;
