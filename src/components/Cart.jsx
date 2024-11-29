import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartItems,
  openCloseModal,
  totalCartItems,
} from "../assets/store/productInfo";

export function Cart() {
  const items = useRecoilValue(cartItems);

  return (
    <div className={`${items.length <= 1 ? "h-full" : "h-auto"} w-4/5 mx-auto`}>
      <div className="grid w-full mx-auto my-8 grid grid-cols-4 gap-6">
        <div className="bg-white col-span-3  p-4">
          <h2 className="text-3xl pb-4 border-b border-slate-200">
            Shopping Cart
          </h2>
          {items.length > 0 ? (
            items.map((item) => <CartItems props={item} />)
          ) : (
            <h2 className="text-center text-2xl py-10">
              {" "}
              No items added to cart yet
            </h2>
          )}
        </div>
        <div className="bg-white col span-1 h-64 p-6">
          <h2 className="text-2xl mb-2">Order Summery</h2>
          <OrderSummery />
        </div>
      </div>
    </div>
  );
}

function CartItems({ props }) {
  const [cart, setCart] = useRecoilState(cartItems);

  function increaseQuantity(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function decreaseQuantity(id) {
    const selectedItem = cart.find((item) => item.id === id);
    if (selectedItem.quantity <= 1) {
      setCart((cart) => cart.filter((item) => item.id !== id));
    } else {
      setCart((cart) =>
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  return (
    <div className="grid grid-cols-7 gap-3 py-10 border-b border-slate-200">
      <div className="col-span-1">
        <img src={props.imageURL} className="w-full h-full" />
      </div>
      <div className="col-span-5">
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-red-500">In stock</p>
        <div className="flex mt-4">
          <button
            onClick={() => decreaseQuantity(props.id)}
            className="border-blue-500 border-2 w-5 h-5 p-1 flex justify-center items-center"
          >
            -
          </button>
          <span className="mx-2">{props.quantity}</span>
          <button
            onClick={() => increaseQuantity(props.id)}
            className="border-blue-500 border-2 w-5 h-5 p-1 flex justify-center items-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 text-right px-3 font-bold text-lg">
        ₹{" "}
        {(props.price * props.quantity).toLocaleString("en-IN", {
          minimumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}

function OrderSummery() {
  const { totalItems, totalPrice } = useRecoilValue(totalCartItems);
  const [openModal, setOpenModal] = useRecoilState(openCloseModal);

  function placeOrder() {
    if (totalItems > 0) {
      setOpenModal(true);
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between border-b border-slate-300 py-2 px-auto my-3">
        <p className="">items ({totalItems}):</p>
        <p className="pr-5 font-bold">
          ₹{" "}
          {totalPrice.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="flex justify-between">
        <p className=" font-bold">Order Total</p>
        <p className="pr-5 font-bold">
          ₹{" "}
          {totalPrice.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <button
        onClick={placeOrder}
        className="bg-button-cart rounded-3xl mt-4 h-12"
      >
        Proceed to buy
      </button>
    </div>
  );
}
