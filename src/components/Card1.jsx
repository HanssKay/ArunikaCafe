import biji from "../assets/biji.png";
import Coffe from "../assets/Coffe.png";
import desert from "../assets/desert.png";
import NonC from "../assets/NonC.png";

const Products = [
    {
        image:biji,
        title:"Kualitas Biji Kopi Terbaik",
    },
    {
        image:Coffe,
        title:"Aroma Kopi yang Sedap",
    },
    {
        image:desert,
        title:"Hidangan Penutup yang Lezat",
    },
    {
        image:NonC,
        title:"Kesegaran Minuman yang Nikmat",
    }
]

const Card1 = () => {
    return(
    <> 
        <div className="flex justify-center items-center mx-auto mt-20 lg:w-200 md:w-100 w-90">
            <hr className="flex-grow border-t border-2 border-yellow-900" />
            <h1 className="px-4 text-yellow-900 font-bold text-lg lg:text-4xl whitespace-nowrap">
              Kenapa Pilih Kita?
            </h1>
            <hr className="flex-grow border-t border-2 border-yellow-900" />
        </div>        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            {Products.map((product, index) => (
                <div key={index} className="lg:w-50 md:w-30 w-20 z-50 text-center content-center bg-white rounded-lg shadow-sm shadow-black/45  justify-center lg:p-6 md:p-4 p-2">
                    <img src={product.image} alt={product.title} className=" lg:h-15 md:h-10 h-5 object-cover rounded-t-lg md:mb-4 mb-2 mx-auto" />
                    <h3 className="lg:text-sm md:text-xs text-[8px] font-bold">{product.title}</h3>
                </div>
            ))}
        </div>
    </>
    )
}

export default Card1;