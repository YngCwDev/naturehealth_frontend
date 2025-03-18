"use client";
import { Product } from "@/lib/types";
import React, { useState } from "react";

const ProductDetails = ({ product }: Product) => {
  const [selectedTab, setTab] = useState(0);

  return (
    <section className="my-8">
      <h2 className="text-green2 font-bold uppercase text-lg mb-4">
        Detalhes do Produto
      </h2>
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="flex flex-col w-1/4 space-y-2">
          <button
            onClick={() => setTab(0)}
            className={`p-4 border-l-4 ${
              selectedTab === 0
                ? "border-darkgreen1 bg-gray-100"
                : "border-transparent"
            }`}
          >
            Sobre o Produto
          </button>
          <button
            onClick={() => setTab(1)}
            className={`p-4 border-l-4 ${
              selectedTab === 1
                ? "border-darkgreen1 bg-gray-100"
                : "border-transparent"
            }`}
          >
            Características
          </button>
          <button
            onClick={() => setTab(2)}
            className={`p-4 border-l-4 ${
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
            <div>
              <h4 className="font-semibold text-md">Denominação de Venda</h4>
              <p className="mb-2">{product.name}</p>

              <h4 className="font-semibold text-md">Ingredientes</h4>
              <p className="mb-2">{product.details.ingredients}</p>

              <h4 className="font-semibold text-md">Advertências</h4>
              <p className="mb-2">{product.details.warnings}</p>

              <h4 className="font-semibold text-md">Modo de Tomar/Usar</h4>
              <p className="mb-2">{product.details.instruction}</p>

              <h4 className="font-semibold text-md">
                Condições de Conservação
              </h4>
              <p>{product.details.storageConditions}</p>
            </div>
          )}

          {/* Características */}
          {selectedTab === 1 && (
            <div>
              <h4 className="font-semibold text-md">Denominação de Venda</h4>
              <p className="mb-2">{product.name}</p>

              <h4 className="font-semibold text-md">Benefícios</h4>
              <ul className="list-disc ml-6">
                {product.details.benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-md">Fatos Nutricionais</h4>
              <ul className="list-disc ml-6">
                {Object.entries(product.details.nutritionalFacts).map(
                  ([key, value], index) => (
                    <li key={index}>
                      {key}: {value}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Informação Adicional */}
          {selectedTab === 2 && (
            <div>
              <h4 className="font-semibold text-md">Menção Adicional</h4>
              <p className="mb-2">
                {product.details.additionalMention || "N/A"}
              </p>

              <h4 className="font-semibold text-md">Declaração Legal</h4>
              <p className="mb-2">{product.details.disclaimer}</p>

              <h4 className="font-semibold text-md">Peso</h4>
              <p>{product.details.weight}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
