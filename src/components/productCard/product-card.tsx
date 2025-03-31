import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "./card-action-buttons";

const ProductCard = ({ product }: Product) => {
  return (
    <div
      key={product.id}
      className="flex flex-col h-fit w-full max-w-[350px] items-center justify-between gap-5  bg-white shadow-lg p-4 rounded-2xl cursor-pointer md:hover:scale-105 transition-all"
    >
      <Link href={"/product/" + product.id}>
        <div className="rounded-md w-full h-auto lg:min-h-[250px] max-h-[250px] overflow-hidden">
          <Image
            key={product.id}
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full lg:min-h-[250px]"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between gap-4 w-full h-full">
        <Link href={"/product/" + product.id}>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-[14px] sm:text-[18px] md:text-[24px] font-semibold text-green1">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 text-wrap md:flex hidden">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
              <p className="text-gray-700 text-sm sm:text-base">
                {product.brand}
              </p>
              <p className="font-bold text-lg sm:text-xl text-green2">
                {product.price} Mts
              </p>
            </div>
          </div>
        </Link>
        <ActionButtons product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
