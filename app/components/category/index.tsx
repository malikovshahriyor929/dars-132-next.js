import { FaChevronRight } from "react-icons/fa";

const categories = [
  { label: "O'zbekistonga yetkazish" },
  { label: "Go'sht va Baliq" },
  { label: "Asosiy oziq-ovqatlar" },
  { label: "Tayyor oziq-ovqatlar" },
  { label: "Ichimliklar" },
  { label: "Mobil telefon va kompyuter..." },
  { label: "Go'zallik & Sog'lik" },
  { label: "Oilaviy do'kon" },
  { label: "Kitoblar" },
  { label: "Shirinliklar" },
];

const Category = () => {
  return (
    <> 
      <div className="w-[250px] mt-3 sticky top-0 mx-auto bg-white  rounded-md divide-y divide-gray-200">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-4 hover:bg-gray-100 cursor-pointer transition"
          >
            <span className="text-sm text-gray-800 truncate w-[90%]">{item.label}</span>
            <FaChevronRight className="text-gray-400 text-xs" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
