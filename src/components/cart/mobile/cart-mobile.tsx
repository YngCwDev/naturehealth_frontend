"use client";

import CtaButton from "@/components/productCard/cta-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CartItemMobile from "./cart-item-mobile";
import { Input } from "@/components/ui/input";

const CartMobile = () => {
  return (
    <div className="bg-white w-screen  p-4 md:hidden relative">
      <h2 className="text-darkgreen1 py-2 border-b-2 mb-4">Meu Carrinho</h2>
      <div className="relative  flex flex-col justify-between min-h-[85vh] max-h-screen">
        <div className="h-full flex flex-col justify-center border-b-2 pb-4 gap-4">
          {Array.from([1, 2, 3]).map((_, index) => (
            <div key={index}>
              <CartItemMobile />
            </div>
          ))}
        </div>
        <div className="flex relative">
          <Input
            type="text"
            placeholder="Codigo Promocional"
            className="h-[54px] text-sm focus:border-none"
          />
          <CtaButton className="bg-green1 text-white absolute max-w-[40%] right-0">
            Aplicar
          </CtaButton>
        </div>
        <div className="w-full bg-white shadow-md p-2 rounded-2xl">
          {/* Resumo */}

          <div className="text-sm">
            <p className="py-4 font-semibold">Totals</p>
            <div className="space-y-1">
              <div className="flex justify-between ">
                <div>Items(4x)</div>
                <div>6000.00 Mts</div>
              </div>
              <div className="flex justify-between ">
                <div>Delivery</div>
                <div>250.00 Mts</div>
              </div>
              <div className="flex justify-between ">
                <div>Desconto</div>
                <div>0.00 Mts</div>
              </div>
            </div>
            <div className="mt-10 mb-2 pt-2 border-t-2">
              <div className="flex text-lg justify-between px-2 py-2">
                <span>Total</span>
                <span className="text-green2">6250.00 Mts</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4  w-full bottom-0 right-2.5 max-w-[95vw]  ">
            <Link href={"/cart/payment"}>
              <CtaButton className="bg-darkgreen1 text-white">
                Efectuar o Pedido <ArrowRight size={20} />
              </CtaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMobile;
