import nasam from "../assets/nasam.png";
import nasgor from "../assets/nasgor.png";
import spageti from "../assets/spageti.png";
import steak from "../assets/steakk.png";
import yakiniku from "../assets/yakiniku.png";
import unadon from "../assets/unadon.png";
import JumlahPesan from "./ButtonVal";

const Products = [
  {
    image: nasam,
    title: "Nasi Ayam Nusantara",
    title2: "Nasi ayam dengan sambal terasi",
    price: "Rp. 20.000",
  },
  {
    image: nasgor,
    title: "Nasi Goreng Spesial",
    title2: "Nasi goreng dengan telur dan ayam",
    price: "Rp. 20.000",
  },
  {
    image: spageti,
    title: "Spageti Bolognese",
    title2: "Spageti dengan saus daging & Keju",
    price: "Rp. 20.000",
  },
  {
    image: steak,
    title: "Steak Sapi",
    title2: "Steak sapi dengan kentang goreng",
    price: "Rp. 20.000",
  },
  {
    image: yakiniku,
    title: "Yakiniku",
    title2: "Daging panggang dengan saus yakiniku",
    price: "Rp. 20.000",
  },
  {
    image: unadon,
    title: "Unagi Donburi",
    title2: "Nasi dengan unagi panggang & Telur",
    price: "Rp. 20.000",
  },
];

const CardMakanan = () => {
    // atur jarak horizontal kiri-kanan di awal/akhir scroll
    const spaceHorizontal = "w-0"; // bisa diganti ke w-8, w-12, min-w-[80px], dll
    // atur jarak atas-bawah area scroll
    const spaceVertical = "py-3"; // bisa diganti py-4, py-8, dll
  
  return (
      <>
        {/* Judul */}
        <div className="flex items-center mt-10">
          <h1 className="lg:text-3xl font-bold text-yellow-950 md:ms-8 ms-4">
            Menu Makanan
          </h1>
          <hr className="border-3 mt-1.5 rounded-2xl ms-2 border-t border-yellow-950 w-30 items-center" />
        </div>
  
        {/* Kontainer scroll */}
        <div className={`overflow-x-auto scrollbar-hide`}>
          <div
            className={`flex md:flex-wrap flex-nowrap gap-3 md:ms-5 items-center justify-center snap-x snap-mandatory ${spaceVertical}`}
          >
            {/* Spacer kiri */}
            <div className={`flex-shrink-0 md:w-0 md:ms-[-19px] w-207 ${spaceHorizontal}`} />
  
            {/* List produk */}
            {Products.map((product, index) => (
              <div
                key={index}
                className="bg-white flex-shrink-0 flex z-50 justify-center flex-col shadow-sm shadow-black/65 rounded-lg p-4 md:h-58  h-43 w-40 md:w-53 min-w-[0px] snap-start"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="lg:h-16 h-10 self-center rounded-t-lg"
                />
                <h3 className="lg:text-lg md:text-[14px] text-[13px] font-semibold md:mt-2 mt-4">
                  {product.title}
                </h3>
                <p className="md:text-sm text-[9px] text-gray-600">
                  {product.title2}
                </p>
                <div className="flex">
                  <h3 className="border border-black self-center py-1 rounded-xl px-2 mt-6 md:text-[13px] text-[6px]">
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

export default CardMakanan;
