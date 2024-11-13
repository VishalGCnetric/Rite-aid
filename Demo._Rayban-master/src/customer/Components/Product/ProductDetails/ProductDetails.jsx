import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const productData = {
  id: 1,
  image: "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
  brand: "Abbott",
  name: "BinaxNOW COVID 19 Antigen Self Tests - 2 ct",
  price: "$18.99",
  eligibility: "FSA/HSA eligible",
  description: "Store Availability May Vary. All Sales Final - Returns will not be accepted.",
  shippingInfo: "In stock Online. Usually ships in 2 to 4 business days.",
  details: [
    { title: "Product Details", content: "This is a rapid antigen test for detecting COVID-19. It provides results in 15 minutes." },
    { title: "More Information", content: "This test is FDA approved for emergency use. It is not intended for home collection." },
    { title: "How to Use", content: "Insert the swab into the nostril and rotate it. Place the swab into the test card and wait for results." },
    { title: "Safety", content: "For in vitro diagnostic use only. Keep out of reach of children. Consult your doctor if you experience adverse reactions." },
    { title: "Dimensions", content: "Box Dimensions: 5 x 3 x 1 inches. Weight: 0.1 lbs." },
    { title: "Reviews", content: "This product has a 4.5/5 rating based on 200 customer reviews." },
  ],
};

const ProductDetailPage = () => {
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for accordion sections
  const [openSection, setOpenSection] = useState(null);

  // Handlers for quantity
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Toggle accordion sections
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        Home / Shop Rite Aid / Medicine & Health / Home Health Care / Home Test Kits
      </nav>

      {/* Product Info Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2">Roll over or click image to zoom in</p>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{productData.name}</h1>
          <p className="text-gray-700 mt-2">by {productData.brand}</p>
          <p className="text-3xl font-semibold text-gray-800 mt-4">{productData.price}</p>
          <p className="text-green-500 text-sm">{productData.eligibility}</p>

          <p className="text-sm text-gray-500 mt-4">{productData.description}</p>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-full">
              <button onClick={handleDecrease} className="px-3 py-1 text-gray-600">
                <FaMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={handleIncrease} className="px-3 py-1 text-gray-600">
                <FaPlus />
              </button>
            </div>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-full hover:bg-indigo-900">
              Add to Cart
            </button>
          </div>

          {/* Shipping Information */}
          <p className="text-sm text-gray-500 mt-4">
            <span className="font-semibold">Shipping:</span> {productData.shippingInfo}
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-8">
        {productData.details.map((section, index) => (
          <div key={index} className="border-t border-b py-2">
            <div
              onClick={() => toggleSection(index)}
              className="cursor-pointer flex justify-between items-center"
            >
              <span className="font-semibold">{section.title}</span>
              {openSection === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openSection === index && (
              <div className="mt-2 text-gray-700 text-sm">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
