import { Image } from "antd";
import Link from "next/link";
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import Header from "../components/header";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) => {
  const { product_id } = await params;
  const res = await fetch(
    `https://67ee292bc11d5ff4bf788bb8.mockapi.io/NotImportant/${product_id}`
  );
  const data = await res.json();

  const breadcrumbs = [
    { label: "Home page", href: "/" },
    { label: "Shirinliklar", href: "/sweets" }, // Sweets
    { label: "Kokand halva 500gr" },
  ];
  const {
    deliveryInfo,
    name,
    weight,
    countryOfOrigin,
    importer,
    halalCertification,
    packagingInfo,
    deliveryDetails,
  } = {
    deliveryInfo: {
      destination: "O'zbekistonga", // To Uzbekistan
      time: "14 ish kuni", // 14 working days
      cost: 3000,
      costCurrency: "₩",
    },
    name: "Kokand halva",
    weight: "500 gr",
    countryOfOrigin: "Uzbekistan",
    importer: "Crescent trade LTD",
    halalCertification: "Self certified",
    packagingInfo:
      "Frozen items are sent packaged in a special box with ice. Our company does not use typical ice boxes for the sake of the environment. The above image is for representative purpose, actual image of the product may slightly vary.",
    deliveryDetails:
      "Delivery available all over the Korea. It takes about one working day if the order is recieved before 5 p.m. Far places and islands may take 3-4 working days.",
    // Add handlers here if needed, e.g.,
    // onQuantityChange: (qty) => console.log('New Qty:', qty),
  };

  const { img, title, price, currentPrice } = await data;
  return (
    <>
      <Header />
      <div className="container mx-auto p-4  font-sans">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
          <ol className="list-none p-0 inline-flex">
            {breadcrumbs.map((crumb: any, index: number) => (
              <li key={index} className="flex items-center">
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-green-700">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link
              href={"/"}
              className="flex font-semibold items-center text-sm text-gray-700 hover:text-black"
            >
              <IoArrowBack className="mr-1" />
              Orqaga {/* Back */}
            </Link>
            <div className="border border-gray-200 rounded-lg !size-full p-4 flex justify-center items-center   ">
              <Image
                src={img}
                alt={title}
                className="!h-full !w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
            <p className="text-3xl font-bold text-green-600">{price}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  className="px-3 py-2 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <span className="px-4 py-1.5 text-center w-12">{1}</span>
                <button
                  className="px-3 py-2 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>
              <span className="text-sm ">Omborda mavjud: 1</span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center gap-3 text-sm text-green-800">
              <TbTruckDelivery className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>
                {deliveryInfo.destination} yetkazib berish: {deliveryInfo.time}
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-2 border-t pt-5">
              <p>
                <strong className="font-medium text-gray-800">Name:</strong>{" "}
                {name}
              </p>
              <p>
                <strong className="font-medium text-gray-800">Weight:</strong>{" "}
                {weight}
              </p>
              <p>
                <strong className="font-medium text-gray-800">
                  Country of origin:
                </strong>{" "}
                {countryOfOrigin}
              </p>
              <p>
                <strong className="font-medium text-gray-800">Importer:</strong>{" "}
                {importer}
              </p>
              <p>
                <strong className="font-medium text-gray-800">
                  Halal certification:
                </strong>
                {halalCertification}
              </p>
              <div className="mt-3 space-y-2">
                <p>{packagingInfo}</p>
                <p>
                  <strong className="font-medium text-gray-800">
                    Delivery:
                  </strong>
                </p>
                <p>{deliveryDetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
