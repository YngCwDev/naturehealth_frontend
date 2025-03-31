import { Product } from "@/lib/types";
import Tabs from "./product-details-mobile-tabs";

const ProductDetailsMobile = ({ product }: Product) => {
  return (
    <section className="my-8 md:h-[600px] space-y-24  bg-white  rounded-2xl p-4 md:p-8 lg:p-16 md:hidden">
      <h2 className="text-green2 font-bold uppercase text-xl mb-4">
        Detalhes do Produto
      </h2>
      <div className="flex gap-8 text-start max-sm:w-full">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-md">Denominação de Venda</h4>
            <p className="mb-2">{product.name}</p>
          </div>
          <div>
            <h4 className="font-semibold text-md">Ingredientes</h4>
            <p className="mb-2">{product.details.ingredients}...</p>
          </div>
          <Tabs product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsMobile;
