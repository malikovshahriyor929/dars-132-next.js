import { FaChevronLeft, FaChevronRight, FaPhoneAlt } from "react-icons/fa";

const Showcase = () => {
  return <div className="w-full mt-5">
     <div className="bg-green-100 rounded-md py-10 flex items-center justify-between px-4  max-w mx-auto shadow-sm">
      <button className="bg-white rounded-full p-2 shadow hover:scale-105 transition">
        <FaChevronLeft className="text-black text-sm" />
      </button>

      <div className="flex flex-col items-center text-center flex-1 px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 max-[390px]:text-sm">
          Yangi ro’yxatdan o’tgan mijozlarga ilk buyurtma bepul yetkazib beriladi!
        </h2>
        <div className="flex items-center text-black text-md font-medium">
          <FaPhoneAlt className="mr-2" /> 1833-2178
        </div>
      </div>
      <button className="bg-white rounded-full p-2 shadow hover:scale-105 transition">
        <FaChevronRight className="text-black text-sm" />
      </button>
    </div>
  </div>;
};

export default Showcase;
