import { useRecoilState, useRecoilValue } from "recoil";
import { OrderConfirmationIcon } from "../assets/ConfirmationIcon";
import {
  openCloseModal,
  totalCartItems,
  cartItems,
} from "../assets/store/productInfo";

export function Modal() {
  const { totalPrice } = useRecoilValue(totalCartItems);
  const [openModal, setOpenModal] = useRecoilState(openCloseModal);
  const [cartItem, setCartItem] = useRecoilState(cartItems);

  function closeModal() {
    setOpenModal(false);
    setCartItem([]);
  }
  return (
    <div
      onClick={closeModal}
      className="bg-modal-bg w-full h-full absolute top-0 left-0"
      style={{ display: openModal ? "block" : "none" }}
    >
      <div className="bg-white w-full lg:w-1/4  h-72 rounded-lg my-60 mx-auto p-6 flex flex-col">
        <h2 className="text-xl font-bold text-center">Purchase Successful!</h2>
        <div className="mx-auto my-4">
          <OrderConfirmationIcon />
        </div>
        <p className="text-center">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <p className="pl-8 font-bold my-2">
          Total Amount:{" "}
          {totalPrice.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
        <button
          onClick={closeModal}
          className="bg-blue-700 mx-7 h-12 text-white text-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
