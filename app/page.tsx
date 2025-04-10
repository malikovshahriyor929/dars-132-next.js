"use client";
import { useState } from "react";
import Category from "./components/category";
import Products from "./components/products";
import Showcase from "./components/showcase";
import { Button, Drawer } from "antd";
import { BiMenu } from "react-icons/bi";

const Home = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
   
      <div className="w-[90%] mx-auto flex max-w-[1440px] gap-5  max-[870px]:flex-col relative ">
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <Category />
        </Drawer>
        <div className="max-[870px]:hidden">
          <Category />
        </div>

        <div className="flex flex-col gap-5 w-full">
          <Showcase />
          <div className="flex items-center justify-between ">
            <div className=" flex items-center gap-3 ">
              <img src="/new.svg" alt="" />
              <p className="text-[32px] font-bold  text-text-title">Yangi</p>
            </div>
            <Button
              className="!hidden max-[870px]:!flex !w-fit "
              type="primary"
              onClick={showDrawer}
            >
              <BiMenu size={20} />
            </Button>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
