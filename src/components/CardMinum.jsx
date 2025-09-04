import Yamang from "../assets/Yamang.png";
import Redval from "../assets/Redval.png";
import banco from "../assets/banCo.png";
import maca from "../assets/maca.png";
import JumlahPesan from "./ButtonVal";

const Products = [
  {
    image: Yamang,
    title: "Mango Yakult",
    title2: "Perpaduan Yakult dan Mangga",
    price: "Rp. 20.000",
  },
  {
    image: Redval,
    title: "Red Velvet",
    title2: "Perpaduan Susu dan Red Velvet",
    price: "Rp. 25.000",
  },
  {
    image: banco,
    title: "Banana Choco",
    title2: "Perpaduan Pisang, Coklat & Susu",
    price: "Rp. 22.000",
  },
  {
    image: maca,
    title: "Matcha Latte",
    title2: "Perpaduan Matcha dan Cream Susu",
    price: "Rp. 22.000",
  },
];

const Minuman = () => {
  // atur jarak horizontal kiri-kanan di awal/akhir scroll
  const spaceHorizontal = "min-w-[20px]"; // bisa diganti ke w-8, w-12, min-w-[80px], dll
  // atur jarak atas-bawah area scroll
  const spaceVertical = "py-6"; // bisa diganti py-4, py-8, dll

return (
    <>
      {/* Judul */}
      <div className="flex items-center mt-10">
        <h1 className="lg:text-3xl font-bold text-yellow-950 md:ms-14 ms-5">
          Menu Minuman
        </h1>
        <hr className="border-3 mt-1 rounded-2xl ms-5 border-t border-yellow-950 w-30 items-center" />
      </div>

      {/* Kontainer scroll */}
      <div className={`overflow-x-auto scrollbar-hide`}>
        <div
          className={`flex md:flex-wrap flex-nowrap gap-4 ms-5 snap-x snap-mandatory ${spaceVertical}`}
        >
          {/* Spacer kiri */}
          <div className={`flex-shrink-0 ${spaceHorizontal}`} />

          {/* List produk */}
          {Products.map((product, index) => (
            <div
              key={index}
              className="bg-white flex-shrink-0 flex z-50 flex-col shadow-sm shadow-black/65 rounded-lg p-4 md:h-60 h-40 w-40 md:w-55 min-w-[160px] snap-start"
            >
              <img
                src={product.image}
                alt={product.title}
                className="lg:h-20 h-10 self-center rounded-t-lg"
              />
              <h3 className="md:text-lg text-[9px] font-semibold mt-2">
                {product.title}
              </h3>
              <p className="md:text-sm text-[9px] text-gray-600">
                {product.title2}
              </p>
              <div className="flex">
                <h3 className="border border-black self-center py-1 rounded-xl px-2 mt-6 md:text-[16px] text-[6px]">
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



export default Minuman;
