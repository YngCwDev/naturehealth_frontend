import CartProductCard from "@/components/cart/cartProductCard";
import CartSummary from "@/components/cart/cartSummary";

const Page = () => {
  return (
    <div className="space-y-16 my-24 w-screen px-[15vw] place-content-center">
      <h1 className="uppercase text-green2">Meu Carrinho</h1>

      <div className="flex gap-8 justify-center">
        <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md w-full">
          <CartProductCard />
          <CartProductCard />
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default Page;
