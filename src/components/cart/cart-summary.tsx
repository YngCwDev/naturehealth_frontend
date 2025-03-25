import { WalletMinimal } from "lucide-react";
import CtaButton from "../productCard/cta-button";


const CartSummary = () => {
  return (
    <div className="h-fit bg-white rounded-2xl px-4 pt-4 pb-2 min-w-1/4 shadow-md">
      <h2 className="py-4 border-b-2">Resumo</h2>
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
        <CtaButton className="bg-darkgreen1 hover:bg-darkgreen2 text-white ">
          Efectuar Pedido
          <WalletMinimal className="text-green1" />
        </CtaButton>
      </div>
    </div>
  );
};

export default CartSummary;
