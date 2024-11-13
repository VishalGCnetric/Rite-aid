import React, { useState, useEffect } from 'react';
import b1 from "./banners/b1.png";
import b2 from "./banners/b2.png";
import b3 from "./banners/b3.png";

const banners = [
  { imageSrc: b1 },
  { imageSrc: b2 },
  { imageSrc: b3 },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden mb-10">
      {/* Banner Images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${banner.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      ))}

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div> */}

      {/* Prev and Next Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        ›
      </button> */}
    </div>
  );
};

export default BannerSlider;
