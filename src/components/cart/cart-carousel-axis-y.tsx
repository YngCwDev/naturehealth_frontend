import useEmblaCarousel from "embla-carousel-react";
import CartItemMobile from "./mobile/cart-item-mobile";

const OPTIONS = { axis: "y" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CartCarouselAxisY = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla_container">
      <div className="embla_slide">
        <CartItemMobile />
      </div>
      <div className="embla_slide">
        <CartItemMobile />
      </div>
      <div className="embla_slide">
        <CartItemMobile />
      </div>
    </div>
  );
};

export default CartCarouselAxisY;
