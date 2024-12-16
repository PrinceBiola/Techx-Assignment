import React from "react";
import aboutimg1 from "../../assets/Images/aboutimg1.svg";
import aboutimg2 from "../../assets/Images/aboutimg2.svg";
import aboutimg3 from "../../assets/Images/aboutimg3.svg";
import aboutimg4 from "../../assets/Images/aboutimg4.svg";
import { FaArrowRight } from "react-icons/fa";

export default function Work() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-[30px] md:text-[50px] font-[900]">What We Do</h2>
        <p className="max-w-[90%] md:max-w-[55ch] m-auto mt-[10px] mb-[30px] text-slate-400 text-lg md:text-xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida
          donec orci.
        </p>
      </div>

      <ul className="px-5 md:px-40 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <li className="rounded-xl p-5 md:p-10 gap-5 flex items-center bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-white">
          <img
            src={aboutimg1}
            alt=""
            className="bg-[#FFFFFF80] p-3 md:p-5 rounded-full hover:bg-white"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-semibold text-xl md:text-3xl">Automated Ticket Routing</h1>
            <p className="font-medium text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex items-center text-lg md:text-xl font=semibold justify-start gap-2 text-[#ffffff] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
        <li className="rounded-xl p-5 md:p-10 gap-5 flex items-center bg-gradient-to-r from-[#4B00E6] to-[#8255D3] text-white">
          <img
            src={aboutimg2}
            alt=""
            className="bg-[#FFFFFF80] p-3 md:p-5 rounded-full hover:bg-white"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-semibold text-xl md:text-3xl">Workflow Automation</h1>
            <p className="font-medium text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex items-center text-lg md:text-xl font=semibold justify-start gap-2 text-[#ffffff] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
        <li className="rounded-xl p-5 md:p-10 gap-5 flex items-center bg-gradient-to-r from-[#0A9980] to-[#2ED57F] text-white">
          <img
            src={aboutimg3}
            alt=""
            className="bg-[#FFFFFF80] p-3 md:p-5 rounded-full hover:bg-white"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-semibold text-xl md:text-3xl">Automated Callback</h1>
            <p className="font-medium text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex items-center text-lg md:text-xl font=semibold justify-start gap-2 text-[#ffffff] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
        <li className="rounded-xl p-5 md:p-10 gap-5 flex items-center bg-gradient-to-r from-[#D65B00] to-[#E1C400] text-white">
          <img
            src={aboutimg4}
            alt=""
            className="bg-[#FFFFFF80] p-3 md:p-5 rounded-full hover:bg-white"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-semibold text-xl md:text-3xl">Customer Feedback Survey</h1>
            <p className="font-medium text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="flex items-center text-lg md:text-xl font=semibold justify-start gap-2 text-[#ffffff] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
      </ul>

      <p className="max-w-[90%] md:max-w-[55ch] m-auto mb-[10px] text-center mt-[30px] text-slate-400 text-lg md:text-xl font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget gravida
        facilisis maecenas vitae.
        <button className="flex items-center justify-center gap-2 text-[#8049D9] hover:scale-[1.02] transition ease-in">
          <span>
          Learn More
          </span>
           <FaArrowRight />
        </button>
      </p>
    </div>
  );
}
