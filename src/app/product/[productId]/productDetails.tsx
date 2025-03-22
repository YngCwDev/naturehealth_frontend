"use client";
import { Product } from "@/lib/types";
import React, { useState } from "react";

const ProductDetails = ({ product }: Product) => {
  const [selectedTab, setTab] = useState(0);

  return (
    <section className="my-8 md:h-[600px] space-y-24  bg-white  rounded-2xl p-4 md:p-8 lg:p-16">
      <h2 className="text-green2 font-bold uppercase text-2xl mb-4">
        Detalhes do Produto
      </h2>
      <div className="flex gap-8 text-start">
        {/* Sidebar */}
        <div className="flex flex-col w-1/4  space-y-2">
          <button
            onClick={() => setTab(0)}
            className={`p-4 border-l-4 text-start ${
              selectedTab === 0
                ? "border-darkgreen1 bg-gray-100"
                : "border-transparent"
            }`}
          >
            Sobre o Produto
          </button>
          <button
            onClick={() => setTab(1)}
            className={`p-4 border-l-4 text-start ${
              selectedTab === 1
                ? "border-darkgreen1 bg-gray-100"
                : "border-transparent"
            }`}
          >
            Características
          </button>
          <button
            onClick={() => setTab(2)}
            className={`p-4 border-l-4 text-start ${
              selectedTab === 2
                ? "border-darkgreen1 bg-gray-100"
                : "border-transparent"
            }`}
          >
            Informação Adicional
          </button>
        </div>

        {/* Conteúdo Principal */}
        <div className="w-3/4">
          {/* Sobre o Produto */}
          {selectedTab === 0 && (
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-md">Denominação de Venda</h4>
                <p className="mb-2">{product.name}</p>
              </div>

              <div>
                <h4 className="font-semibold text-md">Ingredientes</h4>
                <p className="mb-2">{product.details.ingredients}</p>
              </div>
              <div>
                <h4 className="font-semibold text-md">Advertências</h4>
                <p className="mb-2">{product.details.warnings}</p>
              </div>
              <div>
                <h4 className="font-semibold text-md">Modo de Tomar/Usar</h4>
                <p className="mb-2">{product.details.instruction}</p>
              </div>
              <div>
                <h4 className="font-semibold text-md">
                  Condições de Conservação
                </h4>
                <p>{product.details.storageConditions}</p>
              </div>
            </div>
          )}

          {/* Características */}
          {selectedTab === 1 && (
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-md">Denominação de Venda</h4>
                <p className="mb-2">{product.name}</p>
              </div>

              <div>
                <h4 className="font-semibold text-md">Benefícios</h4>
                <ul className="list-disc ml-6">
                  {product.details.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-md">Fatos Nutricionais</h4>
                <table className="min-w-1/2">
                  <tbody className="list-disc ml-6 border-b-2 space-y-2 max-w-[800px]">
                    <tr className="border-b-2">
                      <th className="text-start">Nutriente</th>
                      <th className="text-end">Valor Diarios(%/g/mg)</th>
                    </tr>
                    {product.details.nutritionalFacts.map(
                      (fact: object, index: number) => (
                        <tr key={index} className="border-b-2">
                          <td>{Object.keys(fact)}</td>
                          <td className="text-end">{Object.values(fact)}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Informação Adicional */}
          {selectedTab === 2 && (
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-md">Menção Adicional</h4>
                <p className="mb-2">
                  {product.details.additionalMention || "N/A"}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-md">Declaração Legal</h4>
                <p className="mb-2">{product.details.disclaimer}</p>
              </div>
              <div>
                <h4 className="font-semibold text-md">Peso</h4>
                <p>{product.details.weight}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
