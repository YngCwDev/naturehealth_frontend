"use client";

import CtaButton from "@/components/productCard/cta-button";
import { Input } from "@/components/ui/input";
import PaymentMobile from "./payment-mobile";

const Payment = () => {
  return (
    <div>
      <PaymentMobile />
      <div className="space-y-16 my-24 w-screen px-[15vw] place-content-center max-sm:hidden">
        <h1 className="uppercase text-center text-white font-semibold bg-darkgreen1 py-8">
          Pagamento
        </h1>

        <div className="flex gap-8 justify-center">
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md w-full">
            <h2 className="text-xl font-semibold mt-6 mb-2">
              Preencha com os seus dados
            </h2>
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
                <Input
                  type="tel"
                  placeholder="Numero de telemovel"
                  id="phone"
                />
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                Selecione o serviço de Pagamento
              </h2>
              <fieldset className="flex gap-4">
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
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Numero de Telemovel</label>
                <Input type="tel" placeholder="Numero do serviço" id="phone" />
              </div>
              <CtaButton className="bg-darkgreen1 hover:bg-darkgreen2 text-white w-full sm:w-auto">
                Confirmar Pagamento
              </CtaButton>
            </form>

            {/*Atencao*/}

            <div className="p-4 border-[1.5px] border-gray-900 text-center rounded-2xl">
              <p className="font-bold text-red-700">Atenção!</p>
              <p>
                Verifique o seu telemovel com o serviço de pagamento selecionado
                para poder proceder com a transação.{" "}
              </p>
            </div>
          </div>

          <div className="h-fit bg-white rounded-2xl px-4 pt-4 pb-2 w-1/2 shadow-md">
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
              <div className="flex justify-between px-2 py-2 font-semibold text-2xl">
                <span>Total(4):</span>
                <span className="text-green2">3000.00 Mts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
