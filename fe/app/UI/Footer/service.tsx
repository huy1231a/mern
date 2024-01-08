import React from "react";
interface Prop {
  title: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
}
const Service = (prop: Prop) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-lg leading-10 text-black">
          {prop.title}
        </span>
        <span className="font-normal text-base leading-10 text-black underline cursor-pointer transition duration-300 ease-in-out hover:scale-110">
          {prop.h1}
        </span>
        <span className="font-normal text-base leading-10 text-black underline cursor-pointer transition duration-300 ease-in-out hover:scale-110">
          {prop.h2}
        </span>
        <span className="font-normal text-base leading-10 text-black underline cursor-pointer transition duration-300 ease-in-out hover:scale-110">
          {prop.h3}
        </span>
        <span className="font-normal text-base leading-10 text-black underline cursor-pointer transition duration-300 ease-in-out hover:scale-110">
          {prop.h4}
        </span>
      </div>
    </>
  );
};

export default Service;
