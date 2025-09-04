  import wafle from "../assets/wafles.png";
  import panceks from "../assets/Pancake.png";
  import CakeMatcha from "../assets/CakeMat.png";
  import IceA from "../assets/es.png";
  import Tiramisu from "../assets/Tiramisu.png";
  import BananaC from "../assets/bancek.png";
  import JumlahPesan from "./ButtonVal";

  const Products = [
    {
      image: wafle,
      title: "Waffle",
      title2: "Perpaduan Waffle cream & Madu",
      price: "Rp. 40.000",
    },
    {
      image: panceks,
      title: "Pancakes",
      title2: "Perpaduan kue, madu & potongan buah",
      price: "Rp. 40.000",
    },
    {
      image: CakeMatcha,
      title: "Matcha Cupcake",
      title2: "Perpaduan kue & cream matcha",
      price: "Rp. 25.000",
    },
    {
      image: IceA,
      title: "Ice Almond",
      title2: "Perpaduan ice cream & almond",
      price: "Rp. 25.000",
    },
    {
      image: Tiramisu,
      title: "Tiramisu Cup",
      title2: "Perpaduan tiramisu & cream susu",
      price: "Rp. 30.000",
    },
    {
      image: BananaC,
      title: "Banana Cake",
      title2: "Perpaduan kue pisang & cream susu",
      price: "Rp. 35.000",
    },
  ];

  const CardDessert = () => {
  // atur jarak horizontal kiri-kanan di awal/akhir scroll
  const spaceHorizontal = "w-0"; // bisa diganti ke w-8, w-12, min-w-[80px], dll
  // atur jarak atas-bawah area scroll
  const spaceVertical = "py-3"; // bisa diganti py-4, py-8, dll

return (
    <>
      {/* Judul */}
      <div className="flex items-center mt-10">
        <h1 className="lg:text-3xl font-bold text-yellow-950 md:ms-8 ms-4">
          Menu Dessert
        </h1>
        <hr className="border-3 mt-1.5 rounded-2xl ms-2 border-t border-yellow-950 w-30 items-center" />
      </div>

      {/* Kontainer scroll */}
      <div className={`overflow-x-auto scrollbar-hide`}>
        <div
          className={`flex md:flex-wrap flex-nowrap gap-3 items-center justify-center snap-x snap-mandatory ${spaceVertical}`}
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
              <h3 className="lg:text-lg md:text-[14px] text-[13px] font-semibold md:mt-2 mt-4">
                {product.title}
              </h3>
              <p className="md:text-sm text-[9px] text-gray-600">
                {product.title2}
              </p>
              <div className="flex">
                <h3 className="border border-black self-center md:py-1 py-0.5 rounded-xl px-2 mt-6 md:text-[13px] text-[6px]">
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

  export default CardDessert;
