export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  unit: string;
  price: string;
  description: string;
  images: string[];
  categories: string[];
  keywords: string[];
  details: {
    denomination: string;
    overview: string;
    ingredients: string;
    instruction: string;
    warnings: string;
    additionalMention?: string;
    storageConditions: string;
    disclaimer: string;
    weight: string;
    nutritionalFacts: {
      [key: string]: string;
    };
  };
}

export type Product = {
  product: ProductProps;
};
export type Products = {
  products: ProductProps[];
};
