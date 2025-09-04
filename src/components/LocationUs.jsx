import estetik3 from "../assets/estetik3.JPEG";
import { FaClock } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

const LocationUs = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="w-full flex flex-col items-center">
          <h1 className="md:mt-33 mt-20 md:text-6xl text-2xl font-bold text-yellow-950">
            Toko Kami
          </h1>
          <p className="md:text-lg text-center md:mt-2 ">
            Kunjungi kafe kami di lokasi terbaik untuk Anda!
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:px-15 px-5 grid-cols-1 gap-10 md:mt-20 mt-10 mb-20 place-items-center">
          <div className="flex md:h-50 h-40 border border-black rounded-xl ">
            <img
              src={estetik3}
              alt="estetik"
              className="md:h-40 md:w-40 self-center h-30 w-30 md:ms-5 ms-3 rounded-xl object-cover"
            />
            <div className="flex justify-center px-3 flex-col">
              <h1 className="md:text-2xl font-bold md:mb-5 mb-1 md:ms-3">Depok</h1>
              <div className="flex items-center gap-2">
                <ImLocation className="text-yellow-950 md:text-xl text-5xl" />
                <p className="break-all text-justify">
                  Ruko Blok B No. 12, Grand Depok City, Kelurahan Depok Jaya, Kecamatan Sukmajaya, Kota Depok
                </p>
              </div>
              <div className="flex items-center gap-2 ms-1 md:mt-5 mt-3 mb-3">
                <FaClock className="text-yellow-950 md:text-sm text-sm" />
                <p>Setiap Hari 08.00 - 22.00</p>
              </div>
            </div>
          </div>          
          <div className="flex md:h-50 h-40 border border-black rounded-xl ">
            <img
              src={estetik3}
              alt="estetik"
              className="md:h-40 md:w-40 self-center h-30 w-30 md:ms-5 ms-3 rounded-xl object-cover"
            />
            <div className="flex justify-center px-3 flex-col">
              <h1 className="md:text-2xl font-bold md:mb-5 mb-1 md:ms-3">Jakarta Selatan</h1>
              <div className="flex items-center gap-2">
                <ImLocation className="text-yellow-950 md:text-3xl text-5xl" />
                <p className="break-all text-justify">
                  The Plaza Office Tower Lt. 1 Unit 05, Jalan Jenderal Sudirman Kav. 52-53, SCBD, Jakarta Selatan
                </p>
              </div>
              <div className="flex items-center gap-2 ms-1 md:mt-5 mt-3 mb-3">
                <FaClock className="text-yellow-950 md:text-sm text-sm" />
                <p>Setiap Hari 08.00 - 22.00</p>
              </div>
            </div>
          </div>          
          <div className="flex md:h-50 h-40 border border-black rounded-xl ">
            <img
              src={estetik3}
              alt="estetik"
              className="md:h-40 md:w-40 self-center h-30 w-30 md:ms-5 ms-3 rounded-xl object-cover"
            />
            <div className="flex justify-center px-3 flex-col">
              <h1 className="md:text-2xl font-bold md:mb-5 mb-1 md:ms-3">Jakarta Pusat</h1>
              <div className="flex items-center gap-2">
                <ImLocation className="text-yellow-950 md:text-3xl text-5xl" />
                <p className="break-all text-justify">
                  Kios No. 15A, Blok B, Thamrin City, Jalan Thamrin No. 10, Kecamatan Tanah Abang, Jakarta Pusat
                </p>
              </div>
              <div className="flex items-center gap-2 ms-1 md:mt-5 mt-3 mb-3">
                <FaClock className="text-yellow-950 md:text-sm text-sm" />
                <p>Setiap Hari 08.00 - 22.00</p>
              </div>
            </div>
          </div>          
                
          <div className="flex md:h-50 h-40 border border-black rounded-xl ">
            <img
              src={estetik3}
              alt="estetik"
              className="md:h-40 md:w-40 self-center h-30 w-30 md:ms-5 ms-3 rounded-xl object-cover"
            />
            <div className="flex justify-center px-3 flex-col">
              <h1 className="md:text-2xl font-bold md:mb-5 mb-1 md:ms-3">Bogor</h1>
              <div className="flex items-center gap-2">
                <ImLocation className="text-yellow-950 md:text-3xl text-5xl" />
                <p className="break-all text-justify">
                  Lapak Komersial 1A, Komplek Tugu Kujang, Simpang Tugu Kujang, Kota Bogor
                </p>
              </div>
              <div className="flex items-center gap-2 ms-1 md:mt-5 mt-3 mb-3">
                <FaClock className="text-yellow-950 md:text-sm text-sm" />
                <p>Setiap Hari 08.00 - 22.00</p>
              </div>
            </div>
          </div>          
                
        </div>
      </div>
    </>
  );
};

export default LocationUs;
