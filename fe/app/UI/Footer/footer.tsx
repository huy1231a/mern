import Image from "next/image";
import React from "react";
import Service from "./service";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[371px] bg-[#D9D9D9]">
        <div className="p-8 flex justify-between items-center">
          <div className="flex flex-col p-8 gap-8 cursor-pointer">
            <Image src={"/logo1.png"} alt="2" width={268} height={66} />
            <div className="flex gap-3">
              <div className="w-[200px] h-[53px] bg-black rounded-lg flex items-center justify-center">
                <Image
                  src={"/appstore.svg"}
                  alt="2"
                  width={180.5}
                  height={53}
                />
              </div>
              <Image src={"/ggplat.svg"} alt="2" width={180.5} height={53} />
            </div>
            <p className="text-black font-normal text-base leading-normal">
              Company # 490039-445, Registered with <br /> House of companies.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-black font-bold text-lg leading-normal">
              Get Exclusive Deals in your Inbox
            </h1>
            <div className="flex ">
              <input
                type="text"
                className="w-[381px] h-[59px] rounded-full relative p-5 outline-none"
                placeholder="youremail@gmail.com"
              />
              <div className="w-[171px] h-[59px] bg-[#FC8A06] rounded-full relative right-[90px] flex justify-center items-center text-white font-semibold text-lg leading-normal">
                Subscribe
              </div>
            </div>
            <span>
              we wont spam, read our{" "}
              <span className="underline cursor-pointer">email policy</span>
            </span>
            <div className="flex gap-8">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:underline"
                >
                  <g clip-path="url(#clip0_219_920)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#00171F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_219_920">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:underline"
                >
                  <g clip-path="url(#clip0_219_922)">
                    <path
                      d="M7.55016 21.7502C16.6045 21.7502 21.5583 14.2469 21.5583 7.74211C21.5583 7.53117 21.5536 7.31554 21.5442 7.1046C22.5079 6.40771 23.3395 5.5445 24 4.55554C23.1025 4.95484 22.1496 5.21563 21.1739 5.32898C22.2013 4.71315 22.9705 3.74572 23.3391 2.60601C22.3726 3.1788 21.3156 3.58286 20.2134 3.80085C19.4708 3.01181 18.489 2.48936 17.4197 2.3143C16.3504 2.13923 15.2532 2.32129 14.2977 2.83234C13.3423 3.34339 12.5818 4.15495 12.1338 5.14156C11.6859 6.12816 11.5754 7.23486 11.8195 8.29054C9.86249 8.19233 7.94794 7.68395 6.19998 6.79834C4.45203 5.91274 2.90969 4.66968 1.67297 3.14976C1.0444 4.23349 0.852057 5.51589 1.13503 6.73634C1.418 7.95678 2.15506 9.02369 3.19641 9.72023C2.41463 9.69541 1.64998 9.48492 0.965625 9.10617V9.1671C0.964925 10.3044 1.3581 11.4068 2.07831 12.287C2.79852 13.1672 3.80132 13.7708 4.91625 13.9952C4.19206 14.1934 3.43198 14.2222 2.69484 14.0796C3.00945 15.0577 3.62157 15.9131 4.44577 16.5266C5.26997 17.14 6.26512 17.4808 7.29234 17.5015C5.54842 18.8714 3.39417 19.6144 1.17656 19.6109C0.783287 19.6103 0.390399 19.5861 0 19.5387C2.25286 20.984 4.87353 21.7516 7.55016 21.7502Z"
                      fill="#00171F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_219_922">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:underline"
                >
                  <path
                    d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                    fill="#00171F"
                  />
                  <path
                    d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                    fill="#00171F"
                  />
                  <path
                    d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
                    fill="#00171F"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 18"
                  fill="none"
                  className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:underline"
                >
                  <path
                    d="M23.7609 4.1998C23.7609 4.1998 23.5266 2.54512 22.8047 1.81855C21.8906 0.862305 20.8688 0.857617 20.4 0.801367C17.0438 0.557617 12.0047 0.557617 12.0047 0.557617H11.9953C11.9953 0.557617 6.95625 0.557617 3.6 0.801367C3.13125 0.857617 2.10938 0.862305 1.19531 1.81855C0.473438 2.54512 0.24375 4.1998 0.24375 4.1998C0.24375 4.1998 0 6.14512 0 8.08574V9.90449C0 11.8451 0.239062 13.7904 0.239062 13.7904C0.239062 13.7904 0.473437 15.4451 1.19062 16.1717C2.10469 17.1279 3.30469 17.0951 3.83906 17.1982C5.76094 17.3811 12 17.4373 12 17.4373C12 17.4373 17.0438 17.4279 20.4 17.1889C20.8688 17.1326 21.8906 17.1279 22.8047 16.1717C23.5266 15.4451 23.7609 13.7904 23.7609 13.7904C23.7609 13.7904 24 11.8498 24 9.90449V8.08574C24 6.14512 23.7609 4.1998 23.7609 4.1998ZM9.52031 12.1123V5.36699L16.0031 8.75137L9.52031 12.1123Z"
                    fill="#00171F"
                  />
                </svg>
              </span>
            </div>
          </div>
          <Service
            title="Legal Pages"
            h1="Terms and conditions"
            h2="Privacy"
            h3="Cookies"
            h4='Modern Slavery Statement"'
          />
          <Service
            title="Important Links"
            h1="Get help"
            h2="Add your restaurant"
            h3="Sign up to deliver"
            h4='Create a business account"'
          />
        </div>
      </div>
      <div className="w-full h-[73px] bg-[black] flex justify-between items-center p-8">
        <div className="text-white p-8">
          Order.uk Copyright 2024, All Rights Reserved.
        </div>
        <div>
          <div className="flex gap-8 text-white font-normal text-base leading-normal p-8 ">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms</span>
            <span className="cursor-pointer">Pricing</span>
            <span className="cursor-pointer">
              Do not sell or share my personal information
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
