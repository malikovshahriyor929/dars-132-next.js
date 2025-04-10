import { Product } from "@/app/types";
import { FC } from "react";
import { BsHandbag } from "react-icons/bs";

const formatCurrency = (amount: number): string => {
  return `${amount.toLocaleString("uz-UZ")} UZS`;
};

const ProductCard: FC<Product> = ({
  img,
  title,
  currentPrice,
  price,
  discount,
  halal,
  id,
}) => {
  const hasDiscount: boolean = discount > 0;
  const hasHalal: boolean | string = halal && halal?.length > 0;
  const displayPrice: number = price;
  const displayCurrentPrice: number = currentPrice;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  flex flex-col font-sans border border-gray-200 hover:shadow-lg transition-shadow duration-200 ease-in-out m-2">
      <div className="relative p-4 flex justify-center items-center max-h-48">
        <img
          src={img}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
        {hasDiscount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
        {hasHalal && (
          <img
            src={halal}
            alt="Halal"
            className="absolute top-2 left-2 w-8 h-8 object-contain"
          />
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-lg  font-semibold text-gray-800 mb-2 truncate"
          title={title}
        >
          {title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3 max-[1050px]:flex-col">
            <span className="text-lg max-[1100px]:text-[16px] font-bold text-gray-900">
              {formatCurrency(displayPrice)}
            </span>
            {(displayPrice !== displayCurrentPrice || hasDiscount) && (
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(displayCurrentPrice)}
              </span>
            )}
          </div>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-150 ease-in-out">
            <BsHandbag className="w-5 h-5" />
            <span>Qo'shish</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
