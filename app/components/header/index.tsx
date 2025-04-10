import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaRegCreditCard, FaRegUserCircle, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="shadow-[0_4px_4px_0_rgba(0,0,0,0.03)] sticky top-0 z-10 bg-white ">
      <div className="w-[90%] mx-auto max-w-[1440px]  ">
        <div className="flex items-center py-2  w-full justify-between gap-7 max-[320px]:gap-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.03)] ">
          <Link href={"/"}>
            <img src="/Logo (3).svg" alt="asda" className="h-14" />
          </Link>
          <div className="flex items-center gap-4  max-[530px]:hidden p-1 border border-[#019e7f]  rounded-lg  w-full max-[530px]:w-fit ">
            <BiSearch size={20} />
            <input type="text" placeholder="Qidirish..." className="w-full" />
          </div>
          <div
            className="flex items-center gap-5  max-[320px]:gap3
           "
          >
            <div className=" items-center gap-4  max-[530px]:flex hidden p-1 border border-[#019e7f]  rounded-lg  w-full max-[530px]:w-fit ">
              <BiSearch size={20} />
            </div>
            <Link
              href={"/faq"}
              className="text-text-title font-medium flex gap-2 items-center max-[860px]:hidden "
            >
              <FaUser size={20} className="font-semibold" />
              {/* <p className="underline ">Bog’lanish</p> */}
              <p className="underline ">Faq</p>
            </Link>
            <button className="border max-[730px]:hidden border-primary-variant text-primary-variant rounded-lg px-2 py-1  flex items-center gap-2 ">
              <FaRegCreditCard />
              <p>Payme</p>
            </button>
            <button className=" border min-w-[110px] border-primary-variant text-primary-variant rounded-lg px-2 py-1  flex items-center gap-2  max-[530px]:min-w-fit max-[530px]:py-1.5">
              <img src="/uzbek.svg" alt="" />
              <p className="text-nowrap max-[530px]:hidden">Uz / UZS </p>
            </button>
            <Link href={"/login"}>
              <FaRegUserCircle size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
