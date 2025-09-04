const BestSellerCard = ({ image, title, subtitle, rating }) => {
  return (
    <div className="lg:w-5xl w-xl bg-[#f3f0ea] lg:p-8 p-2 rounded-full flex items-center justify-between shadow-md shadow-black/55 mt-10">
      <div className="">
        <h2 className="lg:text-5xl md:text-xl text-md font-bold lg:ms-5 md:ms-6 ms-4 text-[#4b2c2c]">{title}</h2>
        <p className="lg:text-lg md:text-sm text-[8px] md:mt-3 lg:ms-5 md:ms-6 ms-4 text-gray-700">{subtitle}</p>
        <p className="text-yellow-600 md:text-lg lg:ms-5 md:ms-6 ms-4 text-[9px] mt-1">{"★".repeat(rating)}</p>
        {/* <div className="mt-9 flex items-center gap-2">
          <div className="bg-white rounded-full px-2 py-1 border text-sm flex items-center gap-2">
            <button className="text-[#4b2c2c] font-bold">−</button>
            <span>0</span>
            <button className="text-[#4b2c2c] font-bold">+</button>
          </div>
          <button className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full hover:bg-yellow-600 transition">
            ADD TO CART →
          </button>
        </div> */}
      </div>
      <img src={image} alt={title} className="lg:h-44 h-16 object-contain me-5" />
    </div>
  );
};

export default BestSellerCard;
