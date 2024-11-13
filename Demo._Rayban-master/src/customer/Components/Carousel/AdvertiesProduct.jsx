import React from "react";
import Slider from "react-slick";



const AdvertisedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <div className="text-gray-500 text-2xl">→</div>,
    prevArrow: <div className="text-gray-500 text-2xl">←</div>,
  };

  const products = [
    {
      id: 1,
      image: "https://www.riteaid.com/shop/media/catalog/product/d/k/dky0x9kyjlbiiwihr9dd.jpg",
      brand: "Nature Made",
      name: "CholestOff Plus Softgels - 100 Ct",
      price: "$37.39",
    },
    {
      id: 2,
      image: "https://www.riteaid.com/shop/media/catalog/product/w/d/wdpabyvxylhqtnxrdjcr.jpg",
      brand: "Nature Made",
      name: "Advanced Multivitamin Gummies - 90 Ct",
      price: "$19.99",
    },
    {
      id: 3,
      image: "https://www.riteaid.com/shop/media/catalog/product/j/h/jhrodn75ifvhwbq47g2d.jpg",
      brand: "Nature Made",
      name: "High Absorption Magnesium Citrate - 60 Gummies",
      price: "$22.99",
    },
    {
      id: 4,
      image: "https://www.riteaid.com/shop/media/catalog/product/y/g/ygdcjiqqucnmfqveopoi.jpg",
      brand: "Nature Made",
      name: "Zero Sugar Multivitamin Gummies - 90 Ct",
      price: "$18.99",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Advertised Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md text-center p-4">
              <img src={"https://www.riteaid.com/shop/media/catalog/product/y/g/ygdcjiqqucnmfqveopoi.jpg"} alt={product.name} className="w-auto h-auto mx-auto mb-4"  loading="lazy"/>
              <h3 className="font-semibold text-lg">{product.brand}</h3>
              <p className="text-gray-600">{product.name}</p>
              <p className="text-blue-600 font-bold text-lg mb-2">{product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertisedProducts;
