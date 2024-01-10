import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1528px] h-[610px] bg-transparent border border-[#D9D9D9] rounded-lg ">
        <div className="flex items-center justify-between bg-[#FAFAFA]">
          <div className="flex justify-center items-center">
            <Image
              src={"/header2.png"}
              alt=""
              width={805}
              height={537}
              className="relative left-[350px] top-[36px] z-10"
            />
            <Image
              src={"/header1.png"}
              alt=""
              width={377}
              height={455}
              className="relative left-[130px] top-[77px]"
            />
          </div>
          <div className="flex flex-col gap-8 absolute ml-10">
            <div className="flex flex-col">
              <span className="font-normal text-lg leading- leading-normal]">
                Order Restaurant food, takeaway and groceries.
              </span>
              <span className="font-semibold text-[54px] leading-normal">
                Feast Your Senses,
              </span>
              <span className="font-semibold text-[54px] leading-normal text-[#FC8A06]">
                Fast and Fresh
              </span>
            </div>
            <div className="space-y-3">
              <span>Enter a postcode to see what we deliver</span>
              <div className="flex ">
                <input
                  type="text"
                  className="w-[373px] h-[59px] rounded-full relative p-5 outline-none border border-[#D9D9D9]"
                  placeholder="youremail@gmail.com"
                />
                <div className="w-[171px] h-[59px] bg-[#FC8A06] rounded-full relative right-[150px] flex justify-center items-center text-white font-semibold text-lg leading-normal">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-14 px-3 py-4 mt-20 relative bottom-[35px] left-[9px]">
                <div className="w-[390px] h-[127px] bg-orange-500 text-white rounded-2xl p-5 ml-4 flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-[#FC8A06]">
                    1
                  </div>
                </div>
                <div className="w-[390px] h-[127px] bg-orange-500 text-white rounded-2xl p-5 ml-20 justify-between flex">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-[#FC8A06]">
                    2
                  </div>
                </div>
                <div className="w-[390px] h-[127px] bg-orange-500 text-white rounded-2xl p-5 ml-4 flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-[#FC8A06]">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className=" bg-[#FC8A06]"
            style={{ borderRadius: "282.5px 0px 12px 0px" }}
          >
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-14 px-3 py-4 mt-20 relative">
                <div className="w-[390px] h-[127px] bg-white rounded-2xl p-5 ml-4 flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-white">
                    1
                  </div>
                </div>
                <div className="w-[390px] h-[127px] bg-white rounded-2xl p-5 ml-20 justify-between flex">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-white">
                    2
                  </div>
                </div>
                <div className="w-[390px] h-[127px] bg-white rounded-2xl p-5 ml-4 flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg leading-normal">Order</h1>
                    <span className="font-semibold text-sm leading-normal">
                      We’ve Received your order!
                    </span>
                    <span className="font-normal text-sm leading-normal">
                      Awaiting Restaurant acceptance{" "}
                    </span>
                  </div>
                  <div className="relative text-[68px] font-semibold bottom-[94px] text-white">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
