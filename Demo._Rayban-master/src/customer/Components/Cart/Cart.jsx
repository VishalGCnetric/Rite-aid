import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    layout
    className="flex items-start justify-between p-4 bg-white rounded-lg shadow mb-4"
  >
    <div className="flex items-start">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
      <div>
        <h2 className="font-semibold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-500">{item.weight}</p>
        {item.offer && <p className="text-sm text-pink-600">{item.offer}</p>}
        <div className="mt-2 flex items-center space-x-4">
          <button className="text-blue-600 hover:underline">Remove</button>
          <button className="text-blue-600 hover:underline">Save for later</button>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-semibold">${item.price}</p>
      <div className="flex items-center mt-2">
        <button className="px-2 py-1 border border-gray-300 rounded-l">-</button>
        <span className="px-4">{item.quantity}</span>
        <button className="px-2 py-1 border border-gray-300 rounded-r">+</button>
      </div>
    </div>
  </motion.div>
);

const CartSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const estimatedTotal = subtotal + shipping;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full lg:w-80 text-gray-800">
      <div className="bg-pink-600 text-white rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">Rite Aid Rewards</h2>
        <p className="mt-1">Sign in to earn/redeem BonusCash and clipped coupons.</p>
        <div className="flex mt-3 space-x-4">
          <button className="bg-white text-pink-600 py-1 px-3 rounded-md font-medium">Create Account</button>
          <button className="bg-white text-pink-600 py-1 px-3 rounded-md font-medium">Sign In</button>
        </div>
      </div>
      <button className="w-full py-2 mb-4 bg-indigo-800 text-white rounded-lg font-semibold hover:bg-indigo-900 transition">
        Proceed to Checkout
      </button>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Subtotal ({items.length} Items)</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Shipping</p>
        <p>${shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Tax</p>
        <p>Not yet calculated</p>
      </div>
      <div className="py-4 border-b border-gray-300">
        <p className="font-semibold">Apply Promo Code</p>
        <input
          type="text"
          placeholder="Promo Code"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center py-4 border-b border-gray-300">
        <input type="checkbox" className="mr-2" />
        <label>Donate My Change to KidCents</label>
      </div>
      <div className="flex justify-between py-4 text-lg font-semibold">
        <p>Est. Total</p>
        <p>${estimatedTotal.toFixed(2)}</p>
      </div>
      <div className="text-center text-pink-600 font-semibold mb-4">
        Your Total Savings $0.00
      </div>
      <div className="text-center text-sm text-gray-500">
        <p>or 4 interest-free payments of ${(estimatedTotal / 4).toFixed(2)} with</p>
        {/* <button className="underline text-blue-600">Afterpay</button> */}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {/* Replace with actual paths to payment method icons */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKaYFu855kzoydaqxJyEJZPwLXkbBG2OPlA&s" alt="Visa" className="w-full" />
        {/* <img src="/path/to/mastercard-icon.png" alt="Mastercard" className="w-8" />
        <img src="/path/to/amex-icon.png" alt="Amex" className="w-8" />
        <img src="/path/to/paypal-icon.png" alt="Paypal" className="w-8" /> */}
      </div>
    </div>
  );
};

// Dummy Data
const cartItems = [
  {
    id: 1,
    name: "Nature's Truth Horny Goat Weed Gummies",
    price: 25.99,
    quantity: 1,
    weight: "0.2lbs",
    image: "https://www.riteaid.com/shop/media/wysiwyg/Frame_2_38.png",
    offer: "Buy 1 get 1 FREE",
  },
  {
    id: 2,
    name: "SKYN Caress - 1 ct",
    price: 39.99,
    quantity: 1,
    weight: "0.4lbs",
    image: "https://www.riteaid.com/shop/media/wysiwyg/Frame_3_35.png",
    offer: "BonusCash Offer",
  },
];

const Cart = () => (
  <div className="container mx-auto w-full p-4 lg:flex lg:space-x-8">
    <div className="lg:w-[70%] ">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <AnimatePresence>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </div>
    <div className="lg:w-[30%] mt-8 lg:mt-0">
      <CartSummary items={cartItems} />
    </div>
  </div>
);

export default Cart;
