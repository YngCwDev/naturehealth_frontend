import { Trash2 } from "lucide-react";
import Image from "next/image";

const CartPopProduct = () => {
  return (
    <div className="max-w-[80vw] flex gap-4 justify-between border-b-2 pb-2">
      <div className="border-2 p-2 rounded-2xl">
        <Image src="/products/nature.png" alt="AA" width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="max-w-[80%] text-green1 text-wrap font-semibold">
            <p>Complexo Multivitamínico Feminino</p>
            <p className="text-gray-500 text-sm font-normal">Nature</p>
          </span>
          <span>
            <button className="cursor-pointer">
              <span className="sr-only">trash</span>
              <Trash2 size={20} className="text-accent-foreground/60" />
            </button>
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="">Qty: 2</p>
          <div>1500.00 Mts</div>
        </div>
      </div>
    </div>
  );
};

export default CartPopProduct;
