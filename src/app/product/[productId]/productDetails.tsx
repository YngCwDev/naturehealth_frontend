import { Product } from "@/lib/types";
import React from "react";

const ProductDetails = ({ product }: Product) => {
  return (
    <section className="my-8">
      <h2 className="text-green2 font-bold uppercase">Detalhes do Produto</h2>
      <div className="flex ">
        {/* sidebar */}
        <div>
          <div>Sobre Produto</div>
          <div>Caracteristicas</div>
          <div>Informacao Adicional</div>
        </div>
        {/* Sobre Produto */}
        <div>
          <h4>Denominação de Venda</h4>
          <p>{product.name}</p>
          <h4>Ingredientes</h4>
          <p>{product.name}</p>
          <h4>Advertências</h4>
          <p>{product.name}</p>
          <h4>Modo de Tomar/Usar</h4>
          <p>{product.name}</p>
          <h4>Condições de Conservação</h4>
          <p>{product.name}</p>
        </div>
        {/* Caracteristicas */}
        <div>
          <h4>Denominação de Venda</h4>
          <p>{product.name}</p>
          <h4>Ingredientes</h4>
          <p>{product.name}</p>
          <h4>Advertências</h4>
          <p>{product.name}</p>
          <h4>Modo de Tomar/Usar</h4>
          <p>{product.name}</p>
          <h4>Condições de Conservação</h4>
          <p>{product.name}</p>
        </div>

        {/* Adicionais */}
        <div>
          <h4>Denominação de Venda</h4>
          <p>{product.name}</p>
          <h4>Ingredientes</h4>
          <p>{product.name}</p>
          <h4>Advertências</h4>
          <p>{product.name}</p>
          <h4>Modo de Tomar/Usar</h4>
          <p>{product.name}</p>
          <h4>Condições de Conservação</h4>
          <p>{product.name}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
