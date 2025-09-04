import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { highlight } from "../Data/image";
import { GiCoffeeBeans } from "react-icons/gi";
// import { bestSell } from "../Data/bestSell";
import BestSellerSlider from "../Data/bestSell";
import Card1 from "../components/Card1";
import CardCoffee from "../components/CardCoffee";
import CardDessert from "../components/CardDessert";
import CardMakanan from "../components/CardMakan";
import CardMinuman from "../components/CardMinum";
import kop3 from "../assets/kop3.png";
import min3 from "../assets/min3.png";
import des3 from "../assets/des3.png";
import steakk from "../assets/steakk.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-orange-300 relative">
        
        <Carousel images={highlight} />
        <div className="flex flex-col items-center  ">
          <div className="flex items-center mt-20 lg:w-200 md:w-100 w-90">
            <hr className="flex-grow border-t border-2 border-yellow-900" />
            <h1 className="px-4 text-yellow-900 font-bold text-lg lg:text-4xl whitespace-nowrap">
              Kategori Menu
            </h1>
            <hr className="flex-grow border-t border-2 border-yellow-900" />
          </div>
          <div className="flex lg:gap-14 md:gap-7 gap-4 lg:mt-3 md:mt-3 mt-2">
            <div className="flex flex-col  items-center lg:mt-6 md:mt-10 mt-7 gap-2 me-[-6px] justify-center">
              <img src={kop3} alt="kopi" className="lg:w-25 md:w-20 w-15" />
              <h2 className="lg:text-lg shadow-sm shadow-black/30 md:text-md text-xs font-semibold  bg-gray-50 px-2 py-0.5 rounded-md">
                Original Coffee
              </h2>
            </div>
            <div className="flex flex-col  items-center lg:mt-6 md:mt-7 mt-4.5 justify-center">
              <img src={des3} alt="dessert" className="lg:w-20 md:w-20 w-15" />
              <h2 className="lg:text-lg shadow-sm shadow-black/30 md:text-md text-xs font-semibold bg-gray-50 px-2 py-0.5 rounded-md">
                Dessert
              </h2>
            </div>
            <div className="flex flex-col  items-center lg:mt-8 md:mt-8.5 mt-6 justify-center">
              <img
                src={steakk}
                alt="dessert"
                className="lg:w-20 md:w-20 w-15"
              />
              <h2 className="lg:text-lg shadow-sm shadow-black/30 md:text-md text-xs font-semibold bg-gray-50 px-2 py-0.5 rounded-md">
                Main Dish
              </h2>
            </div>
            <div className="flex flex-col  items-center gap-3 justify-center">
              <img src={min3} alt="minuman" className="lg:w-20 md:w-20 w-15 " />
              <h2 className="lg:text-lg shadow-sm shadow-black/30 md:text-md text-xs font-semibold bg-gray-50 mt-[-10px] px-2 py-0.5 rounded-md">
                Signature Drinks
              </h2>
            </div>
          </div>
        </div>
        <div className="inset-0 absolute overflow-hidden z-10">
          <GiCoffeeBeans className="absolute md:top-200 top-58 left-[-30px] md:left-0 text-yellow-950 md:text-[300px] md:rotate-95 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:top-200 top-58 right-[-40px] md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:top-360 top-140 md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:top-450 top-201 left-79 md:left-0 text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:top-650 top-257 md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:hidden md:top-650 top-460 right-[-40px] md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:hidden md:top-650 top-320 right-[-30px] md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
          <GiCoffeeBeans className="absolute md:hidden md:top-750 top-387 md:right-[-60px] text-yellow-950 md:text-[300px] md:rotate-45 rotate-30 text-[120px] opacity-50 " />
        </div>
        <BestSellerSlider />
        <Card1 />
        <CardCoffee />
        <CardDessert />
        <CardMakanan />
        <CardMinuman />
        <Footer />
      </div>
    </>
  );
}
