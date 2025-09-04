import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Carousel = ({ images = [], interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative top-8 w-full lg:h-screen md:h-120 h-55 bg-yellow-950 overflow-hidden">
      <div
        className="flex items-center transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full items-center">
            <div className="flex">
              <h3 className="lg:text-7xl md:text-3xl lg:ms-25 md:ms-20 ms-10 text-md font-bold text-white lg:mt-45 md:mt-50 mt-20">
                {img.title}
              </h3>
              <motion.img
                src={img.image}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="lg:h-screen lg:me-18 md:me-17 md:h-105 lg:mt-0 md:mt-10 mt-4 me-5 h-50 object-cover"
              />
            </div>
            <div className="relative lg:left-7 md:left-8 items-center grid grid-cols-1 gap-1 left-3.5 bg-yellow-500 lg:w-10 md:w-8 lg:h-40 md:h-30 h-12 w-3 px-0.5 py-1.5 md:px-1.5 md:py-1.5 rounded-4xl text-center font-bold lg:bottom-120 md:bottom-65 bottom-33">
              <a
                href=""
                className="lg:text-3xl md:text-xl transition transform hover:scale-110 text-yellow-950 text-[8px] text-center md:mt-[-5px] mt-[-3px]"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="lg:text-3xl md:text-xl transition transform hover:scale-110 text-yellow-950 text-[8px] text-center md:mt-[-5px] mt-[-3px]"
              >
                <FaTiktok />
              </a>
              <a
                href=""
                className="lg:text-3xl md:text-xl transition transform hover:scale-110 text-yellow-950 text-[8px] text-center md:mt-[-5px] mt-[-3px]"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div
              className="bg-yellow-500 text-yellow-950 text-center
                lg:w-28 md:w-25 w-10 lg:h-10 md:h-8 h-4
                relative
                bottom-33 lg:left-25 left-10 md:left-20 md:bottom-65 lg:bottom-105
                hover:bg-yellow-700 hover:text-white
                cursor-pointer rounded-xl font-bold
                flex items-center justify-center"
            >
              <Link className="text-[7px] md:text-[15px] lg:text-xl" to="/">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`md:w-3 w-2 h-1 md:h-1 rounded-full ${
              index === current ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
