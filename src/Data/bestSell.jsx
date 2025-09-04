import React, { useState, useEffect } from "react";
import BestSellerCard from "../components/BestSeller";
import kop3 from "../assets/kop3.png";
import drink2 from "../assets/drink2.png";
import es from "../assets/es.png";
import yakiniku from "../assets/yakiniku.png";

const products = [
  {
    title: "COFFEE BEST SELLER",
    subtitle: "Americano Coffee",
    rating: 5,
    image: kop3,
  },
  {
    title: "DESERT BEST SELLER",
    subtitle: "Ice Cream Almond",
    rating: 4,
    image: es,
  },
  {
    title: "MAIN DISH BEST SELLER",
    subtitle: "Yakiniku Rice",
    rating: 5,
    image: yakiniku,
  },
  {
    title: "SIGNATURE DRINKS BEST SELLER",
    subtitle: "Matcha Latte",
    rating: 4,
    image: drink2,
  },
];

const BestSellerSlider = ({ interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  return (
    <div className="relative w-full p-2 z-50 overflow-hidden max-w-10xl mt-10">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {products.map((product, index) => (
          <div key={index} className="min-w-full flex justify-center">
            <BestSellerCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerSlider;
