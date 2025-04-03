import CartProductCard from "@/components/cart/cart-product-card";
import CartSummary from "@/components/cart/cart-summary";
import { Truck } from "lucide-react";
import CartMobile from "@/components/cart/mobile/cart-mobile";

const Page = () => {
  return (
    <div>
      <div className="space-y-16 my-24 w-screen px-[15vw] place-content-center max-sm:hidden">
        <h1 className="uppercase text-center text-white font-semibold bg-darkgreen1 py-8">
          Meu Carrinho
        </h1>

        <div className="flex gap-8 justify-center">
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md w-full">
            <CartProductCard />
            <CartProductCard />
          </div>
          <CartSummary />
        </div>
        <div className="justify-between gap-6 hidden">
          <div className="flex p-8 bg-white rounded-2xl gap-4 items-center shadow-md">
            <span className="bg-darkgreen1 p-4 rounded-2xl">
              <Truck size={60} className="text-white" />
            </span>
            <span>
              <h4 className="font-semibold">Entrega Grátis</h4>
              <p>Dentro da Cidade de Maputo</p>
            </span>
          </div>
          <div className="flex p-8 bg-white rounded-2xl gap-4 items-center shadow-md">
            <span className="bg-darkgreen1 p-4 rounded-2xl">
              <Truck size={60} className="text-white" />
            </span>
            <span>
              <h4 className="font-semibold">Entrega Grátis</h4>
              <p>Dentro da Cidade de Maputo</p>
            </span>
          </div>
          <div className="flex p-8 bg-white rounded-2xl gap-4 items-center shadow-md">
            <span className="bg-darkgreen1 p-4 rounded-2xl">
              <Truck size={60} className="text-white" />
            </span>
            <span>
              <h4 className="font-semibold">Entrega Grátis</h4>
              <p>Dentro da Cidade de Maputo</p>
            </span>
          </div>
          <div className="flex p-8 bg-white rounded-2xl gap-4 items-center shadow-md">
            <span className="bg-darkgreen1 p-4 rounded-2xl">
              <Truck size={60} className="text-white" />
            </span>
            <span>
              <h4 className="font-semibold">Entrega Grátis</h4>
              <p>Dentro da Cidade de Maputo</p>
            </span>
          </div>
        </div>
      </div>
      <CartMobile />
    </div>
  );
};

export default Page;
