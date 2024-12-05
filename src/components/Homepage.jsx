import ProductCardContainer from "./productCard";
import { Carousel } from "./productSlide";
export function Homepage() {
  return (
    <div className="w-full">
      <Carousel />
      <ProductCardContainer />
    </div>
  );
}
