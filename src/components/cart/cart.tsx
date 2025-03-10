import useLocalStorage from "@/hooks/useLocalStorage";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

const Cart = ({
  quantity,
  productID,
}: {
  quantity: number;
  productID: String;
}) => {
  const [cart, setCart] = useLocalStorage<{ id: String; Qty: number }[]>(
    "shoppingCart",
    []
  );

  const addToCart = (product: { id: String; Qty: number }) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div className="w-full">
        <Button
          onClick={() => addToCart({ id: productID, Qty: quantity })}
          variant={"darkgreen"}
          className="w-full flex items-center gap-2 p-6"
        >
          <p>Adicionar</p>
          <ShoppingBag size={20} />
        </Button>
      </div>
      {/*  <button>Adicionar Produto</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
