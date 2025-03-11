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
