"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./card";
import { Product } from "@/app/@types";
import Link from "next/link";
const Products = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://67ee292bc11d5ff4bf788bb8.mockapi.io/NotImportant",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 max-[1264px]:grid-cols-3 max-[580px]:grid-cols-2 max-[300px]:grid-cols-1">
        {data?.map((value) => (
          <Link href={value.id} key={value.id}>
            <ProductCard {...(value as Product)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
