import americano from "../assets/americano.png";
import Espresso from "../assets/Espresso.png";
import Frappe from "../assets/Frappe.png";
import Latte from "../assets/Latte.png";
import LatteCream from "../assets/LatteCr.png";
import Machiato from "../assets/Machiato.png";
import JumlahPesan from "./ButtonVal";

const Products = [
  {
    image: Espresso,
    title: "Espresso",
    title2: "Kopi Hitam Murni",
    price: "Rp. 25.000",
  },
  {
    image: americano,
    title: "Americano",
    title2: "Perpaduan espresso dan gula",
    price: "Rp. 20.000",
  },
  {
    image: Latte,
    title: "Latte",
    title2: "Perpaduan Kopi, susu & bubuk coklat",
    price: "Rp. 22.000",
  },
  {
    image: Frappe,
    title: "Frappe",
    title2: "Perpaduan Kopi, Susu & Sirup",
    price: "Rp. 30.000",
  },
  {
    image: LatteCream,
    title: "Cream Latte",
    title2: "Perpaduan Kopi dan Susu Cream",
    price: "Rp. 28.000",
  },
  {
    image: Machiato,
    title: "Machiato",
    title2: "Perpaduan espresso, susu & caeramel",
    price: "Rp. 27.000",
  },
];

const CardCoffee = () => {
  // atur jarak horizontal kiri-kanan di awal/akhir scroll
  const spaceHorizontal = "w-0"; // bisa diganti ke w-8, w-12, min-w-[80px], dll
  // atur jarak atas-bawah area scroll
  const spaceVertical = "py-3"; // bisa diganti py-4, py-8, dll

return (
    <>
      {/* Judul */}
      <div className="flex items-center mt-10">
        <h1 className="lg:text-3xl font-bold text-yellow-950 md:ms-8 ms-4">
          Menu Kopi
        </h1>
        <hr className="border-3 mt-1.5 rounded-2xl ms-2 border-t border-yellow-950 w-30 items-center" />
      </div>

      {/* Kontainer scroll */}
      <div className={`overflow-x-auto scrollbar-hide `}>
        <div
          className={`flex md:flex-wrap flex-nowrap  gap-3 items-center justify-center snap-x snap-mandatory ${spaceVertical}`}
        >
          {/* Spacer kiri */}
          <div className={`flex-shrink-0 md:w-0 md:ms-[-19px] w-198 ${spaceHorizontal}`} />

          {/* List produk */}
          {Products.map((product, index) => (
            <div
              key={index}
              className="bg-white flex-shrink-0 flex z-50 justify-center flex-col shadow-sm shadow-black/65 rounded-lg p-4 md:h-57 md:w-50 h-43 w-35 min-w-[0px] snap-start"
            >
              <img
                src={product.image}
                alt={product.title}
                className="lg:h-16 h-10 self-center rounded-t-lg"
              />
              <h3 className="lg:text-lg md:text-[12px] text-[13px] font-bold md:mt-2 mt-4">
                {product.title}
              </h3>
              <p className="md:text-sm text-[9px] text-gray-600">
                {product.title2}
              </p>
              <div className="flex">
                <h3 className="border border-black self-center md:py-1 py-0.5 rounded-xl md:px-2 px-2 mt-6 md:text-[13px] text-[6px]">
                  {product.price}
                </h3>
                <JumlahPesan product={product} />
              </div>
            </div>
          ))}

          {/* Spacer kanan */}
          <div className={`flex-shrink-0 ${spaceHorizontal}`} />
        </div>
      </div>
    </>
  );
};



export default CardCoffee;
