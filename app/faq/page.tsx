"use client";
import { Collapse } from "antd";
import { useState } from "react";
import Header from "../components/header";
const faqData = [
  {
    key: "1",
    label: "Ayirboshlash siyosati",
    title: "Ayirboshlash siyosati",
    children: (
      <p>
        Mahsulotni sotib olgan kundan boshlab 14 kun ichida ayirboshlashingiz
        mumkin. Batafsil ma'lumot uchun ayirboshlash siyosati sahifasiga
        qarang.,
      </p>
    ),
  },
  {
    key: "2",
    label: "Pulni qaytarish",
    title: "Pulni qaytarish siyosati",
    children: (
      <p>
        Agar mahsulot sizga mos kelmasa, uni sotib olgan kundan boshlab 30 kun
        ichida qaytarib berishingiz va pulingizni to'liq qaytarib olishingiz
        mumkin.,
      </p>
    ),
  },
  {
    key: "3",
    label: "Veb-sayt",
    title: "Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?",
    children: (
      <p>
        Veb-saytingizning ishlashini yaxshilash uchun rasmlarni
        optimallashtirish, brauzer keshidan foydalanish va CDN dan foydalanishni
        ko'rib chiqing.",
      </p>
    ),
  },
  {
    key: "4",
    label: "Hisob qaydnomasini",
    title: "Hisob qaydnomasini qanday yarataman?",
    children: (
      <p>
        Veb-saytimizning yuqori o'ng burchagidagi \"Ro'yxatdan o'tish\"
        tugmasini bosing va ko'rsatmalarga amal qiling.,
      </p>
    ),
  },
  // You can add more FAQ items here
];
const Faq = () => {
  const [activeKey, setActiveKey] = useState([]);

  const onChange = (key: any) => {
    setActiveKey(key);
  };
  return (
    <div className="h-full flex flex-col justify-between gap-5 bg-gray-100">
      <Header />
      <div className=" py-12 h-full w-[90%] mx-auto max-w-[1440px] ">
        <div className=" mx-auto max-w-3xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            F. A. Q
          </h1>

          <Collapse
            activeKey={activeKey}
            onChange={onChange}
            expandIconPosition="end"
            items={faqData}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Faq;
