import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import sertifikasi from "../assets/Halal.png";


const Footer = () => {
    return (
        <>
            <div className="bg-yellow-950 lg:h-90 bottom-0 mt-15 text-white text-center">
                <div className="flex justify-around  items-center ">
                    <h2 className="lg:text-4xl font-bold text-yellow-500">Arunika Cafe</h2>
                    <div className="flex flex-col mt-3 mb-2 items-center">
                        <h2 className="font-bold text-yellow-500">Ikuti Kontak Kami</h2>
                        <div className="flex justify-center items-center mt-2">
                            <a href="https://www.instagram.com" className="text-white cursor-pointer md:text-xl text-md transform hover:scale-110 mx-2">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com" className="text-white cursor-pointer md:text-xl text-md transform hover:scale-110 mx-2">
                                <FaTiktok />
                            </a>
                            <a href="https://www.whatsapp.com" className="text-white cursor-pointer md:text-xl text-md transform hover:scale-110 mx-2">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-b border-yellow-500 mt-3" />
                <div className="flex lg:gap-40 md:gap-10 gap-3 lg:ms-20   justify-beetwen items-center mt-3">
                    <div className="md:w-90 w-25 md:ms-0 ms-3">
                        <h2 className="text-yellow-500 font-bold text[1px] md:text-2xl mb-1">Arunika Cafe</h2>
                        <p className="md:max-w-md max-w-3xs font-semibold text-justify lg:text-lg md:text-sm text-[8px]">Kedai kopi dengan kualitas biji kopi pilihan terbaik yang bisa memanjakan lidah dan jiwa. Suasana yang nyaman untuk bertukar cerita dengan kerabat.</p>
                    </div>
                    <div className="md:w-90 w-40 lg:ms-[-15px] flex flex-col mb-0 gap-1">
                        <h1 className="font-bold lg:text-2xl md:text-md md:mb-3  text-yellow-500">Jadwal Buka Arunika Cafe</h1>
                        <p className="font-semibold lg:text-lg md:text-sm text-xs">Senin - Jumat: 08.00 - 22.00</p>
                        <p className="font-semibold lg:text-lg md:text-sm text-xs">Sabtu - Minggu: 09.00 - 23.00</p>
                    </div>
                    <div className="lg:ms-5 ms-5 md:mt-3 flex flex-col items-center">
                        <h2 className="text-yellow-500 font-bold md:mb-3 mb-1 md:text-2xl ">Sertifikasi </h2>
                        <img src={sertifikasi} alt="halal" className="md:h-30 h-13 brightness-200" />
                    </div>
                </div>
                <hr className="border-b border-yellow-500 mt-10" />
                <p className="mt-2 font-bold">&copy; 2025 Created by HanssKay</p>
            </div>
        </>
    )
}

export default Footer;