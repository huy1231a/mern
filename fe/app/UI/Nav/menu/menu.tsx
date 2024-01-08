"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Menu = () => {
  const [bg, setBg] = React.useState(false);
  const [bg1, setBg1] = React.useState(false);
  const [bg2, setBg2] = React.useState(false);
  const [bg3, setBg3] = React.useState(false);
  const [bg4, setBg4] = React.useState(false);

  const [showModal, setShowModal] = React.useState(false);

  console.log("bg", bg);
  console.log("bg1", bg1);

  useEffect(() => {
    setBg(true);
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1528px] h-auto ">
        <div className="flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt=""
            width={215}
            height={53}
            className="cursor-pointer"
          />
          <div className="flex gap-10 items-center">
            <div
              className={`w-[127px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg && "bg-[#FC8A06]"
              } rounded-[120px] flex justify-center items-center ${
                bg && "text-white font-normal text-lg leading-normal "
              }`}
            >
              <Link
                href={"/"}
                className="font-normal text-lg leading-normal "
                onClick={() => {
                  setBg(true);
                  setBg1(false);
                  setBg2(false);
                  setBg3(false);
                  setBg4(false);
                }}
              >
                Home
              </Link>
            </div>
            <div
              className={`w-[170px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg1 && "bg-[#FC8A06]"
              } rounded-[120px] flex justify-center items-center ${
                bg1 && "text-white font-normal text-lg leading-normal w-[170px]"
              }`}
            >
              <Link
                href={"/restaurents"}
                className="font-normal text-lg leading-normal"
                onClick={() => {
                  setBg1(true);
                  setBg(false);
                  setBg2(false);
                  setBg3(false);
                  setBg4(false);
                }}
              >
                Browse Menu
              </Link>
            </div>
            <div
              className={`w-[170px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg2 && "bg-[#FC8A06]"
              } rounded-[120px] flex justify-center items-center ${
                bg2 &&
                "text-white font-normal text-lg leading-normal w-[170px] transition-transform "
              }`}
            >
              <Link
                href={"/restaurents"}
                className="font-normal text-lg leading-normal"
                onClick={() => {
                  setBg2(true);
                  setBg(false);
                  setBg1(false);
                  setBg3(false);
                  setBg4(false);
                }}
              >
                Special Offers
              </Link>
            </div>
            <div
              className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg3 && "bg-[#FC8A06]"
              } rounded-[120px] flex justify-center items-center ${
                bg3 && "text-white font-normal text-lg leading-normal"
              }`}
            >
              <Link
                href={"/restaurents"}
                className="font-normal text-lg leading-normal"
                onClick={() => {
                  setBg3(true);
                  setBg1(false);
                  setBg2(false);
                  setBg(false);
                  setBg4(false);
                }}
              >
                Restaurants
              </Link>
            </div>
            <div
              className={`w-[150px] h-[45px] flex-shrink-0 transition duration-300 ease-in-out hover:scale-110 ${
                bg4 && "bg-[#FC8A06]"
              } rounded-[120px] flex justify-center items-center ${
                bg4 && "text-white font-normal text-lg leading-normal"
              }`}
            >
              <Link
                href={"/restaurents"}
                className="font-normal text-lg leading-normal"
                onClick={() => {
                  setBg4(true);
                  setBg(false);
                  setBg1(false);
                  setBg2(false);
                  setBg3(false);
                }}
              >
                Track Order
              </Link>
            </div>
            <div className="w-[234px] h-[60px] rounded-full bg-[#03081F] flex justify-center items-center cursor-pointer">
              <button
                className="flex items-center gap-3"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Image
                  src={"/nav/user.png"}
                  alt=""
                  width={30.971}
                  height={27}
                />
                <span className="text-white">Login/Signup</span>
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div className=" my-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                              Sign in to our platform
                            </h3>
                            <div>
                              <div className="mb-2 block">
                                <label htmlFor="email">Email</label>
                              </div>
                              <input
                                id="email"
                                placeholder="name@company.com"
                                required
                              />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <label htmlFor="password">Your password</label>
                              </div>
                              <input id="password" type="password" required />
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <input id="remember" type="checkbox" />
                                <label htmlFor="remember">Remember me</label>
                              </div>
                              <a
                                href="#"
                                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                              >
                                Lost Password?
                              </a>
                            </div>
                            <div className="w-full">
                              <button>Log in to your account</button>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                              Not registered?&nbsp;
                              <a
                                href="#"
                                className="text-cyan-700 hover:underline dark:text-cyan-500"
                              >
                                Create account
                              </a>
                            </div>
                          </div>
                          <p className="">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
