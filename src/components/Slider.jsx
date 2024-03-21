import React from "react";
import qr from "../images/qr.png";
import telefon from "../images/telefon.png";
import gif from "../images/demo.gif";

const Slider = () => {
  return (
    <section className="overflow-hidden md:pb-28 px-8 m-auto max-w-screen-xl bg-[#000000]/20 lg:bg-[#000]/0">
      <div
        className="flex flex-col md:flex-row md:gap-4 lg:gap-8 overflow-clip lg:border lg:rounded-[48px] border-white/30 lg:bg-[#000000]/20 py-16 lg:pl-[96px] lg:pr-[60px]"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className="flex-1 flex flex-col justify-center text-white space-y-8 md:space-y-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-[84px] font-medium text-white lg:leading-[84px]">
            Pay or receive USDC anywhere.
          </h1>
          <h1 className="text-center text-[18px] leading-6 tracking-wide md:leading-normal md:tracking-normal md:text-left lg:text-[32px] font-medium text-gray-300">
            Store money using secure hardware on your phone. Yours alone, like
            cash.
          </h1>
          <div className="hidden md:flex md:flex-row md:items-center md:space-x-[20px] lg:space-x-[36px] md:pt-8">
            <a
              target="_blank"
              className="flex items-center space-x-2 lg:space-x-4 rounded-lg py-[15px] px-[36px] bg-primary text-white font-semibold md:text-2xl tracking-tight whitespace-nowrap min-w-[240px]"
            >
              <div>Download</div>
              <img
                loading="lazy"
                width="72"
                height="72"
                src={qr}
                decoding="async"
              />
            </a>
            <a className="font-semibold text-white text-2xl whitespace-nowrap">
              Learn more<span className="pl-4 font-extralight">&nbsp;↓</span>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center md:justify-end transform-none">
          <div className="py-6 relative w-full max-w-[330px] max-h-[620px] min-h-[462px] h-[calc(100vw_*_0.92_+_220px)] sm:w-[330px] sm:h-[640px] md:h-[600px] lg:w-[400px] lg:h-[740px]">
            <svg
              className="absolute"
              viewBox="0 0 750 1326"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79 103H680V1211.31C680 1245.93 651.934 1274 617.313 1274H141.687C107.066 1274 79 1245.93 79 1211.31V103Z"
                fill="#FFF"
              ></path>
            </svg>
            <img
              loading="lazy"
              width="400"
              height="707"
              decoding="async"
              className="absolute"
              src={telefon}
            ></img>
            <img
              loading="lazy"
              width="400"
              height="707"
              decoding="async"
              className="absolute"
              srcSet={gif}
              src={gif}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
