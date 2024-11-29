import { useRecoilState } from "recoil";
import { cartItems, sellItems } from "../assets/store/productInfo";

export function ProductList() {
  const [items, setItems] = useRecoilState(sellItems);

  return (
    <div className="w-full bg-white ">
      <div className="pl-72 py-4 pr-6">
        {items.map((item, i) => (
          <ItemCard ItemDetails={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ ItemDetails }) {
  const [items, setItems] = useRecoilState(sellItems);
  const [cart, setCart] = useRecoilState(cartItems);

  function addtoCart(id) {
    const existingCartItem = cart.find((item) => item.id === id);
    if (existingCartItem) {
      setCart((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const cartItem = items.find((item) => item.id === id);
      setCart((cart) => [...cart, { ...cartItem, quantity: 1 }]);
    }
  }

  return (
    <div className="border border-navbar-txt w-full h-64 mx-auto my-6 ">
      <div className="grid grid-cols-4 w-5/6 gap-5">
        <div className="bg-body-imagebg w-80 h-64 flex justify-center items-center">
          <img
            src={ItemDetails.imageURL}
            className="w-full h-full px-4 py-2 mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col justify-around col-span-3 pl-2 pt-2 pb-16">
          <h2 className="text-lg  ">{ItemDetails.name}</h2>
          <div className="flex my-2">
            <span className="text-sm mt-1">₹</span>
            <h3 className="text-3xl font-medium">
              {ItemDetails.price.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h3>
          </div>
          <p className="text-sm mt-6 pb-2">Free delivery</p>
          <button
            onClick={() => addtoCart(ItemDetails.id)}
            className="w-36 h-10  bg-button-cart rounded-3xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
