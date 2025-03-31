export type ProductProps = {
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
    nutritionalFacts: [
      {
        [key: string]: string;
      }
    ];
    benefits: string[];
  };
  comments: [
    {
      [key: string]: string | number;
    }
  ];
};

export type Product = {
  product: ProductProps;
};
export type Products = {
  products: ProductProps[];
};

/* Temp */
export type ctaContent = {
  action?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setValue?: React.SetStateAction<string | number | object>;
  className?: string;
  children?: React.ReactNode;
};
