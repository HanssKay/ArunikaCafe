import { FaWhatsapp } from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";


const ContactUs = () => {
  return (
    <>
      <div className="w-full bg-orange-300 flex flex-col items-center">
        <h1 className="md:mt-35 mt-20 md:text-4xl text-2xl font-bold text-yellow-950">
          Hubungi Kami 
        </h1>
        <p className="md:text-lg text-center md:mt-2 ">
          Jika ada pertanyaan atau memberi saran, Silahkan tulis pesanmu disini!
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-20 gap-7 justify-center items-center md:mt-10 mt-5 mb-10">
        <div className="relative flex flex-col rounded-xl md:w-130 md:gap-5 gap-3 h-140 w-80 bg-yellow-950 overflow-hidden">
          <h1 className="text-white font-bold mb-[-7px] md:text-2xl md:ms-5 md:mt-2 mt-3 ms-4 text-xl">
            Informasi Kontak
          </h1>
          <p className="text-justify mx-9 ms-6 text-white md:text-md">
            Jika anda ingin memberikan saran atau pesan mengenai keluhan yang
            ada di Arunika Cafe, Silahkan untuk hubungi kontak sebagai berikut :
          </p>
          <div className="flex items-center md:gap-2 gap-1 ">
            <FaWhatsapp className="md:ms-5 ms-6 md:mt-3 mt-2 text-white md:text-xl text-xl" />
            <p className="text-white mt-2 md:text-md text-[12px]">0831-xxxx-xxxx</p>
          </div>
          <div className="flex items-center md:gap-2 gap-1 ">
            <MdEmail className="md:ms-5 ms-6 md:mt-3 mt-2 text-white md:text-xl text-xl" />
            <p className="text-white mt-2 md:text-md text-[12px]">hallo@arunika.cafe</p>
          </div>
          <div className="flex items-center md:gap-2 gap-1 ">
            <ImLocation className="md:ms-5 ms-6 md:mt-3 mt-2 text-white md:text-xl text-xl" />
            <p className="text-white mt-2 md:text-md text-[12px]">Jl Pondok Cabe 5, Sawangan Depok </p>
          </div>
          <GiCoffeeBeans className="absolute md:bottom-5 bottom-5 right-[-55px] md:right-[-65px] text-white md:text-[260px] md:rotate-45 rotate-30 text-[190px] opacity-20" />
        </div>
        <div className="flex flex-col md:gap-5 gap-3 md:w-130 w-90 rounded-xl h-107 bg-gray-50/70">
          <form action="">
            <div className="flex flex-col gap-1 px-4 md:ms-2 ms-2 md:mt-3 mt-2">
              <label htmlFor="nama" className="font-semibold">
                Nama
              </label>
              <input
                type="text"
                className="border-1 ps-1 rounded-sm border-black"
              />
            </div>
            <div className="flex flex-col gap-1 px-4 md:ms-2 ms-2 md:mt-3">
              <label htmlFor="nama" className="font-semibold">
                Email
              </label>
              <input
                type="text"
                className="border-1 ps-1 rounded-sm border-black"
              />
            </div>
            <div className="flex flex-col gap-1 px-4 md:ms-2 ms-2 md:mt-3">
              <label htmlFor="nama" className="font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                className="border-1 ps-1 rounded-sm border-black"
              />
            </div>
            <div className="flex flex-col gap-1 px-4 md:ms-2 ms-2 md:mt-3">
              <label htmlFor="nama" className="font-semibold">
                Message
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="5" // tinggi ke bawah (misal 5 baris)
                placeholder="Tulis pesan di sini..."
                className="mt-1 block w-full rounded-md border-1 border-black shadow-sm 
               focus:border-blue-500 focus:ring focus:ring-blue-200 ps-1 py-1
               focus:ring-opacity-50 text-left align-top"
              />
            </div>
            <button className="bg-yellow-950 font-bold text-white ms-6 mt-3 px-2 py-1 cursor-pointer rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
