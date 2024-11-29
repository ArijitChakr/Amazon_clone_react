import { atom, selector } from "recoil";

export const sellItems = atom({
  key: "item",
  default: [
    {
      id: "1",
      name: "Kwumsy Ficihp Portable Monitor Split Screen Keyboard Mechanical Multifunctional With Built-In 12.6'' Touchscreen Usb Expansion Compact 71 Keys Rgb Led Backlit N-Key For Windows Mac Android (K2)",
      price: 111400.0,
      imageURL:
        "https://m.media-amazon.com/images/I/81HK3pi2mlL._AC_UY218_.jpg",
    },
    {
      id: "2",
      name: "Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
      price: 59990.0,
      imageURL: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    },
    {
      id: "3",
      name: "Axor Retro Jet Leather ISI Dot Certified Lightweight Open Face Helmet for Men and Women with Clear Bubble Visor Dull Battle Green(L)",
      price: 2529.0,
      imageURL: "https://m.media-amazon.com/images/I/51Iaz0WSnvL._SX522_.jpg",
    },
    {
      id: "4",
      name: "KOOKABURRA Leather Cricket Balls County Test (Color : Maroon Red) Standard Size",
      price: 3299.0,
      imageURL: "https://m.media-amazon.com/images/I/71mZTTHb3HL._SX679_.jpg",
    },
  ],
});

export const cartItems = atom({
  key: "cart-items",
  default: [],
});

export const totalCartItems = selector({
  key: "totalCartItems",
  get: ({ get }) => {
    const cart = get(cartItems);
    let totalItems = 0;
    let totalPrice = 0;
    if (cart.length > 0) {
      totalItems = cart.reduce((acc, item) => (acc += item.quantity), 0);
      totalPrice = cart.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0
      );
    }
    return { totalItems, totalPrice };
  },
});

export const openCloseModal = atom({
  key: "openCloseModal",
  default: false,
});
