import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiSearch, FiUser, FiShoppingCart, FiMapPin } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2 px-4 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-gray-600 cursor-pointer"
        >
          <FiMenu size={24} />
          <span className="text-xs block text-center">Menu</span>
        </motion.div>

        {/* Logo */}
        <div className="flex items-center gap-1">
          <motion.img
            src="https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Rite Aid Logo"
            className="h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
          {/* <motion.span
            className="text-lg font-semibold text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            RITE
          </motion.span>
          <motion.span
            className="text-lg font-semibold text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AID
          </motion.span> */}
        </div>

        {/* Pharmacy Label */}
        {/* <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500"
        >
          Pharmacy
        </motion.div> */}
      </div>

      {/* Search Bar */}
      <motion.div
        className="flex items-center border rounded-full px-4 py-2 w-1/3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none text-gray-700"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-800 text-white rounded-full p-2"
        >
          <FiSearch size={20} />
        </motion.button>
      </motion.div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        {/* Store Selection */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <FiMapPin size={20} />
          <br />
          <span className="text-sm text-gray-600">
            Your Store <br/><p className="font-semibold ">Select a Store</p>
          </span>
        </motion.div>

        {/* Account */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <FiUser size={20} />
        
          <span className="text-sm text-gray-600">
            Hi, Sign In   <br /><p className="font-semibold ml-4">Account</p>
          </span>
        </motion.div>

        {/* Cart Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-gray-600 cursor-pointer"
        >
          <FiShoppingCart size={24} />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
