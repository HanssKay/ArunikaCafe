import estetik from "../assets/estetik.JPEG";
import { Link } from "react-router-dom";

const ArunikaNews = () => {
  return (
    <>
      <div className="flex items-center mt-15">
        {/* <hr className="border-t border-3 w-13 ms-10 border-black" /> */}
        <div className="flex flex-col ms-1">
          <h1 className="md:text-5xl text-3xl md:ms-10 ms-5 font-bold  text-yellow-950 ">
            Arunika News
          </h1>
          <h1 className="md:text-xl text-sm md:ms-10 ms-5">Arunika News</h1>
        </div>
      </div>
      <div className="bg-gray-50 md:h-120 h-90 md:mt-5">
        {/* wrapper wajib: scroll container */}
        <div className="flex mt-3 gap-5 overflow-x-auto scrollbar-hidden px-5">
          {/* card item */}
          <div className="flex-none w-72 flex flex-col items-center px-5 mt-5 rounded-lg  bg-yellow-950/45">
            <img src={estetik} className="md:h-60 h-35 mt-5 mb-3 rounded-lg" alt="" />
            <h1 className="self-start  font-bold md:text-xl text-lg mb-2">jajaja</h1>
            <p className="self-start md:text-lg text-sm break-all mb-2">
              lalalasslalasssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="self-end gap-2 bg-white rounded-lg px-2 mt-4 mb-3 flex hover:bg-gray-500 items-center">
              <Link
                className="text-sm md:text-lg font-bold lg:text-sm"
                to="/"
              >
                Read More
              </Link>
              <p className="mt-1">....</p>
            </div>
          </div>
          <div className="flex-none w-72 flex flex-col items-center px-5 mt-5 rounded-lg  bg-yellow-950/45">
            <img src={estetik} className="md:h-60 h-35 mt-5 mb-3 rounded-lg" alt="" />
            <h1 className="self-start  font-bold md:text-xl text-lg mb-2">jajaja</h1>
            <p className="self-start md:text-lg text-sm break-all mb-2">
              lalalasslalasssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="self-end gap-2 bg-white rounded-lg px-2 mt-4 mb-3 flex hover:bg-gray-500 items-center">
              <Link
                className="text-sm md:text-lg font-bold lg:text-sm"
                to="/"
              >
                Read More
              </Link>
              <p className="mt-1">....</p>
            </div>
          </div>
          <div className="flex-none w-72 flex flex-col items-center px-5 mt-5 rounded-lg  bg-yellow-950/45">
            <img src={estetik} className="md:h-60 h-35 mt-5 mb-3 rounded-lg" alt="" />
            <h1 className="self-start  font-bold md:text-xl text-lg mb-2">jajaja</h1>
            <p className="self-start md:text-lg text-sm break-all mb-2">
              lalalasslalasssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="self-end gap-2 bg-white rounded-lg px-2 mt-4 mb-3 flex hover:bg-gray-500 items-center">
              <Link
                className="text-sm md:text-lg font-bold lg:text-sm"
                to="/"
              >
                Read More
              </Link>
              <p className="mt-1">....</p>
            </div>
          </div>
          <div className="flex-none w-72 flex flex-col items-center px-5 mt-5 rounded-lg  bg-yellow-950/45">
            <img src={estetik} className="md:h-60 h-35 mt-5 mb-3 rounded-lg" alt="" />
            <h1 className="self-start  font-bold md:text-xl text-lg mb-2">jajaja</h1>
            <p className="self-start md:text-lg text-sm break-all mb-2">
              lalalasslalasssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="self-end gap-2 bg-white rounded-lg px-2 mt-4 mb-3 flex hover:bg-gray-500 items-center">
              <Link
                className="text-sm md:text-lg font-bold lg:text-sm"
                to="/"
              >
                Read More
              </Link>
              <p className="mt-1">....</p>
            </div>
          </div>
          <div className="flex-none w-72 flex flex-col items-center px-5 mt-5 rounded-lg  bg-yellow-950/45">
            <img src={estetik} className="md:h-60 h-35 mt-5 mb-3 rounded-lg" alt="" />
            <h1 className="self-start  font-bold md:text-xl text-lg mb-2">jajaja</h1>
            <p className="self-start md:text-lg text-sm break-all mb-2">
              lalalasslalasssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaa
            </p>
            <div className="self-end gap-2 bg-white rounded-lg px-2 mt-4 mb-3 flex hover:bg-gray-500 items-center">
              <Link
                className="text-sm md:text-lg font-bold lg:text-sm"
                to="/"
              >
                Read More
              </Link>
              <p className="mt-1">....</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ArunikaNews;
