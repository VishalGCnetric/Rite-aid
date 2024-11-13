import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="flex justify-between items-center border-b py-4 px-2"
      >
        {/* Product Image Placeholder */}
        <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>

        {/* Product Details */}
        <div className="flex flex-col flex-grow px-4">
          <h2 className="font-semibold text-lg">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.weight}</p>
          <p className="text-sm text-gray-500">{item.deliveryTime}</p>

          {/* Offers */}
          {item.offer && (
            <p className="text-sm text-pink-600 font-medium">
              {item.offer} -{" "}
              <span className="underline text-blue-600 cursor-pointer">Add more items to qualify</span>
            </p>
          )}
          {item.bonusCash && (
            <p className="text-sm text-purple-600 font-medium flex items-center">
              🎁 BonusCash Offer
            </p>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center mt-2">
            <button
              className="px-2 py-1 text-lg border rounded-l bg-gray-200"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-1 border-y text-center w-8">{item.quantity}</span>
            <button
              className="px-2 py-1 text-lg border rounded-r bg-gray-200"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Remove and Save for Later */}
          <div className="flex items-center space-x-2 mt-2 text-sm text-blue-600 cursor-pointer">
            <span onClick={() => onRemove(item.id)}>Remove</span>
            <span>|</span>
            <span>Save for later</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartItem;