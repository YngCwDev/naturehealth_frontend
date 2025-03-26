import CtaButton from "@/components/productCard/cta-button";
import { Input } from "@/components/ui/input";

const PaymentMobile = () => {
  return (
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold mb-2">Pagamento</h1>
      <h3 className="text-lg mb-4">Preencha com os dados</h3>
      <form className="space-y-4 mb-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Nome Completo</label>
          <Input
            type="text"
            placeholder="Nome Completo"
            id="fullName"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Numero de Telemovel</label>
          <Input type="tel" placeholder="Numero de telemovel" id="phone" />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Selecione o serviço de Pagamento
        </h2>
        <fieldset className="space-y-2">
          <div className="flex items-center gap-2">
            <Input
              type="radio"
              name="paymentMethod"
              id="mpesa"
              value="mpesa"
              className="w-4 h-4"
            />
            <label htmlFor="mpesa">Mpesa</label>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="radio"
              name="paymentMethod"
              id="emola"
              value="emola"
              className="w-4 h-4"
            />
            <label htmlFor="emola">Emola</label>
          </div>
        </fieldset>

        <div className="h-fit bg-white rounded-2xl px-4 pt-4 pb-2 min-w-1/4 shadow-md">
          <h2 className="py-4 border-b-2">Resumo</h2>
          <p className="py-4 font-semibold">Items</p>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>2ax</div>
              <div>1500.00 Mts</div>
            </div>
            <div className="flex justify-between">
              <div>2x</div>
              <div>1500.00 Mts</div>
            </div>
          </div>
          <div className="mt-10 mb-2 pt-2 border-t-2">
            <div className="flex justify-between px-2 py-2">
              <span>Total(4):</span>
              <span className="text-green2">3000.00 Mts</span>
            </div>
          </div>
        </div>

        <CtaButton className="bg-darkgreen1 hover:bg-darkgreen2 text-white w-full sm:w-auto">
          Confirmar Pagamento
        </CtaButton>
      </form>
    </div>
  );
};

export default PaymentMobile;
