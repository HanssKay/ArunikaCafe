import ArunikaNews from "./ArunikaNews";
import estetik from "../assets/estetik.JPEG";
import estetik3 from "../assets/estetik3.JPEG";
import sya2 from "../assets/sya2.png";

const DeskripArun = () => {
  return (
    <>
      <div className="flex items-center">
        <hr className="border-t rounded-full border-3 md:mt-35 md:w-13 w-10 md:ms-10 ms-3 mt-20 border-black" />
        <div className="flex flex-col md:mt-35 mt-20 ms-1">
          <h1 className="md:text-3xl text-lg  ms-1 font-bold">About arunika Cafe</h1>
          <h1 className="md:text-lg  text-sm ms-1 font-medium">Tentang Arunika kafe</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:gap-0 gap-3 mt-3">
        <img
          src={estetik}
          className="md:h-100 h-50 rounded-2xl md:ms-20 ms-3 mt-5 md:shadow-[-36px_6px_10px_rgba(0,0,0,0.5)] shadow-[-16px_6px_10px_rgba(0,0,0,0.5)]"
          alt="kopi"
        />
        <p className="text-justify md:text-2xl text-sm md:ms-40 font-semibold border-t-2 border-black border-b-2 mx-auto md:p-10 py-6 md:px-0 px-5 md:w-180 w-100 text-black rounded-xl">
          Arunika Cafe sebuah kedai kopi yang mengusung konsep hangat, nyaman,
          dan modern sebagai tempat berkumpul maupun melepas penat. Nama Arunika
          yang berarti cahaya matahari pagi, merepresentasikan semangat untuk
          menghadirkan suasana baru yang cerah bagi setiap pengunjung.
          <br />
        </p>
      </div>
      <div className="flex items-center mt-0">
        <hr className="border-t rounded-full border-3 md:mt-15 md:w-13 w-10 md:ms-10 ms-3 mt-5 border-black"/>
        <div className="flex flex-col md:mt-15 mt-5 ms-1">
          <h1 className="md:text-3xl text-lg  ms-1 font-bold">Concept Arunika Cafe</h1>
          <h1 className="md:text-lg  text-sm ms-1 font-medium">Konsep Arunika kafe</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-5 ">
        <img
          src={estetik3}
          className="md:h-100 h-50 rounded-2xl md:ms-20 ms-3 mt-5 md:mb-0 mb-4 md:shadow-[-36px_6px_10px_rgba(0,0,0,0.5)] shadow-[-16px_6px_10px_rgba(0,0,0,0.5)]"
          alt="kopi2"
        />
        <p className="text-justify md:text-2xl text-sm md:ms-40 font-semibold border-t-2 border-black border-b-2 mx-auto md:p-10 py-6 md:px-0 px-5 md:w-180 w-100 text-black rounded-xl">
          Dengan desain interior yang estetik, suasana tenang, serta layanan
          ramah, Arunika Cafe menjadi tempat ideal untuk bekerja, berdiskusi,
          atau sekadar bersantai bersama teman dan keluarga. Visi Arunika Cafe
          adalah menjadi ruang pertemuan yang menginspirasi, di mana setiap
          cangkir kopi menghadirkan kehangatan dan kebersamaan.
        </p>
      </div>
      <div className="flex items-center md:mt-1 mt-5">
        <hr className="border-t rounded-full border-3 md:mt-15 md:w-13 w-10 md:ms-10 ms-3 border-black" />
        <div className="flex flex-col md:mt-15 ms-1">
          <h1 className="md:text-3xl text-lg  ms-1 font-bold">Our Founder</h1>
          <h1 className="md:text-lg  text-sm ms-1 font-medium">Pendiri Kami</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 shadow-sm shadow-black p-3 bg-gray-50 md:h-100 h-150 md:gap-10 place-items-center mt-5">
        <div className="flex flex-col ms-3 ">
          <img
            src={sya2}
            className="md:h-60 md:w-60 h-40 w-40 shadow-lg shadow-black rounded-full object-cover"
            alt="saya"
          />
          <div className="flex flex-col mt-7 shadow-sm shadow-black rounded-xl items-center border-1 border-black">
            <p className="self-center font-bold">HansKay</p>
            <p className="self-center ">CEO of Arunika Cafe</p>
          </div>
        </div>
        <div className="flex flex-col ms-3 ">
          <img
            src={sya2}
            className="md:h-60 md:w-60 h-40 w-40 shadow-lg shadow-black rounded-full object-cover"
            alt="saya"
          />
          <div className="flex flex-col mt-7 shadow-sm shadow-black rounded-xl items-center border-1 border-black">
            <p className="self-center font-bold">HansKay</p>
            <p className="self-center ">CEO of Arunika Cafe</p>
          </div>
        </div>
        <div className="flex flex-col ms-3">
          <img
            src={sya2}
            className="md:h-60 md:w-60 h-40 w-40 shadow-lg shadow-black rounded-full object-cover"
            alt="saya"
          />
          <div className="flex flex-col mt-7 shadow-sm shadow-black rounded-xl items-center border-1 border-black">
            <p className="self-center font-bold">HansKay</p>
            <p className="self-center ">CEO of Arunika Cafe</p>
          </div>
        </div>
        <div className="flex flex-col ms-3 ">
          <img
            src={sya2}
            className="md:h-60 md:w-60 h-40 w-40 shadow-lg shadow-black rounded-full object-cover"
            alt="saya"
          />
          <div className="flex flex-col mt-7 shadow-sm shadow-black rounded-xl items-center border-1 border-black">
            <p className="self-center font-bold">HansKay</p>
            <p className="self-center ">CEO of Arunika Cafe</p>
          </div>
        </div>
      </div>
      <ArunikaNews />
    </>
  );
};

export default DeskripArun;
