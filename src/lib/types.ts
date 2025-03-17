export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  unit: string;
  price: string;
  description: string;
  images: string[];
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
