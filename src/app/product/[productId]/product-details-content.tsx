import { Product } from "@/lib/types";
import React from "react";

const ProductDetailsContent = ({ product }: Product) => {
  return (
    <div>
      <div className="flex flex-col w-full  space-y-4">
        {/* Sobre o Produto */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-md">Advertências</h4>
            <p className="mb-2">{product.details.warnings}</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">Modo de Tomar/Usar</h4>
            <p className="mb-2">{product.details.instruction}</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">Condições de Conservação</h4>
            <p>{product.details.storageConditions}</p>
          </div>
        </div>
        <div className="w-3/4 md:block">
          {/* Características */}
          <div className="space-y-4">
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
              <table className="w-full">
                <tbody className="list-disc ml-6 border-b-2 space-y-4 max-w-[800px]">
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
        </div>
        {/* Informação Adicional */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-md">Menção Adicional</h4>
            <p className="mb-2">{product.details.additionalMention || "N/A"}</p>
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
      </div>
    </div>
  );
};

export default ProductDetailsContent;
