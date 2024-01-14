"use client";
import Image from "next/image";
import React from "react";

const ProfileRes = () => {
  const [click, setOnClick] = React.useState(false);

  React.useEffect(() => {
    setOnClick(true);
  }, []);

  return (
    <>
      <div className="justify-center flex mt-10">
        <div className="w-[1527px] h-[882px] flex-shrink-0 bg-[#D9D9D9] rounded-2xl">
          <div className="flex justify-center mt-20">
            <div className="w-[1290px] h-[700px] flex-shrink-0 bg-white">
              <div className="flex gap-5 justify-between items-center w-full h-[120px] bg-[#D9D9D9]">
                <div className="font-bold text-3xl leading-normal">
                  Know more about us!
                </div>
                <div className="flex gap-8 items-center cursor-pointer">
                  <div
                    className={`${
                      click &&
                      "border px-6 py-3 border-[#FC8A06] rounded-full font-semibold"
                    } text-base `}
                  >
                    Frequent Questions
                  </div>
                  <span> Who we are?</span>
                  <span>Partner Program</span>
                  <span> Help & Support</span>
                </div>
              </div>
              <div className="flex p-5 gap-2">
                <div className="w-[500px] h-[500px] bg-transparent p-5 flex flex-col justify-center items-center gap-10 cursor-pointer text-lg font-bold">
                  <div className="px-5 py-3 bg-[#FC8A06] rounded-full ">
                    How does Order.UK work?
                  </div>
                  <span className="">What payment methods are accepted?</span>
                  <span>Can I track my order in real-time?</span>
                  <span className="text-center">
                    Are there any special discounts or <br /> promotions
                    available?
                  </span>
                  <span>Is Order.UK available in my area?</span>
                </div>
                <div className="w-[1000px] h-[500px] bg-transparent flex flex-col gap-3 items-center justify-center space-y-4">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl">
                      <div className="flex flex-col items-center p-5 gap-4">
                        <span className="font-bold text-lg leading-normal">
                          Place an Order
                        </span>
                        <Image
                          src={"/profile/or1.png"}
                          alt="w"
                          height={128}
                          width={128}
                        />
                        <span className="font-medium text-base leading-6">
                          Place order through our <br />
                          website or Mobile app
                        </span>
                      </div>
                    </div>
                    <div className="w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl">
                      <div className="flex flex-col items-center p-5 gap-4">
                        <span className="font-bold text-lg leading-normal">
                          Track Progress
                        </span>
                        <Image
                          src={"/profile/or2.png"}
                          alt="w"
                          height={128}
                          width={128}
                        />
                        <span className="font-medium text-base leading-6">
                          Your can track your order
                          <br />
                          status with delivery time
                        </span>
                      </div>
                    </div>
                    <div className="w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl">
                      <div className="flex flex-col items-center p-5 gap-4">
                        <span className="font-bold text-lg leading-normal">
                          Place an Order
                        </span>
                        <Image
                          src={"/profile/or3.png"}
                          alt="w"
                          height={128}
                          width={128}
                        />
                        <span className="font-medium text-base leading-6">
                          Receive your order at a<br />
                          lighting fast speed!
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center ">
                      Order.UK simplifies the food ordering process. Browse
                      through our diverse menu, select your favorite dishes, and
                      proceed to checkout. Your delicious meal will be on its
                      way to your doorstep in no time!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[1528px] h-[150px] bg-[#FC8A06] rounded-2xl">
          <div className="flex justify-around p-8 items-center">
            <div className="w-[223px] h-[100px] bg-transparent flex flex-col justify-center gap-5 items-center">
              <span className="text-white font-normal text-[64px] leading-9">
                546+{" "}
              </span>
              <span className="text-white font-bold text-2xl leading-9 inline-flex">
                Registered Riders
              </span>
            </div>
            <div className="w-[1px] h-[100px] border border-[#D9D9D9]"></div>
            <div className="w-[223px] h-[100px] bg-transparent flex flex-col justify-center gap-5 items-center">
              <span className="text-white font-normal text-[64px] leading-9">
                789,900+
              </span>
              <span className="text-white font-bold text-2xl leading-9 inline-flex">
                Orders Delivered
              </span>
            </div>
            <div className="w-[1px] h-[100px] border border-[#D9D9D9]"></div>
            <div className="w-[223px] h-[100px] bg-transparent flex flex-col justify-center gap-5 items-center">
              <span className="text-white font-normal text-[64px] leading-9">
                546+{" "}
              </span>
              <span className="text-white font-bold text-2xl leading-9 inline-flex">
                Registered Riders
              </span>
            </div>
            <div className="w-[1px] h-[100px] border border-[#D9D9D9]"></div>
            <div className="w-[223px] h-[100px] bg-transparent flex flex-col justify-center gap-5 items-center">
              <span className="text-white font-normal text-[64px] leading-9">
                546+{" "}
              </span>
              <span className="text-white font-bold text-2xl leading-9 inline-flex">
                Registered Riders
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileRes;
