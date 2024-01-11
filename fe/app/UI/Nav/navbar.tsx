import Image from "next/image";
import React from "react";
import Menu from "./menu/menu";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[1528px] h-[70px] flex-shrink-0 bg-[#FAFAFA] rounded-b-2xl ">
          <div className="flex justify-between">
            <div className="flex items-center ml-4 gap-3">
              <h1>🌟</h1>
              <span className="font-medium text-base leading-normal text-black">
                {" "}
                Get 5% Off your first order,
                <span className="font-medium text-base leading-normal text-[#FC8A06] underline cursor-pointer">
                  {" "}
                  Promo: ORDER5
                </span>
              </span>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 justify-center">
                <Image
                  src={"/nav/location.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                <span className="font-medium text-base leading-medium text-black">
                  Regent Street, A4, A4201, London
                </span>
                <span className="font-medium text-base leading-medium text-[#FC8A06] underline cursor-pointer">
                  Change Location
                </span>
              </div>
              <div className="w-[378px] h-[70px] bg-[#028643] rounded-b-2xl flex items-center justify-center">
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={"/nav/full.png"} alt="" width={43} height={43} />
                  <div className="w-[1px] h-[70px] opacity-30 bg-[#FFF]"></div>
                  <span className="font-medium text-base leading-normal text-white">
                    23 Items
                  </span>
                  <div className="w-[1px] h-[70px] opacity-30 bg-[#FFF]"></div>
                  <span className="font-medium text-base leading-normal text-white">
                    GBP 79.89
                  </span>
                  <div className="w-[1px] h-[70px] opacity-30 bg-[#FFF]"></div>
                  <Image src={"/nav/fb.png"} alt="" width={38} height={38} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Navbar;
