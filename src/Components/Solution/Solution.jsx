import React from "react";
import service1 from "../../assets/Images/service-1.gif";
import service2 from "../../assets/Images/service-2.gif";
import service3 from "../../assets/Images/service-3.gif";
import { FaArrowRight } from "react-icons/fa6";

export default function Solution() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-[30px] md:text-[50px] font-[900]">Our Solutions For You</h2>
        <p className="max-w-[90%] md:max-w-[55ch] m-auto mt-[10px] mb-[35px] text-slate-400 text-lg md:text-xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida
          donec orci.
        </p>
      </div>

      <ul className="flex flex-col md:flex-row px-5 md:px-40 items-center justify-between">
        <li className="w-full md:w-[30%] rounded-lg shadow-xl shadow-slate-300 mb-5 md:mb-0">
          <img
            src={service1}
            alt=""
            className="w-full rounded-t-lg rounded-b-none"
          />
          <div className="p-7 flex flex-col gap-3">
            <h2 className="text-[1.5rem] md:text-[2rem] font-[600] cursor-pointer hover:text-[#FF176D]">
              Support
            </h2>
            <p className="font-semibold text-lg text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              imperdiet nulla duis consectetur adipiscing elit.
            </p>
            <button className="flex items-center justify-start gap-2 text-[#8049D9] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
        <li className="w-full md:w-[30%] rounded-lg shadow-xl shadow-slate-300 mb-5 md:mb-0">
          <img
            src={service2}
            alt=""
            className="w-full rounded-t-lg rounded-b-none"
          />
          <div className="p-7 flex flex-col gap-3">
            <h2 className="text-[1.5rem] md:text-[2rem] font-[600] cursor-pointer hover:text-[#FF176D]">
              Engagement
            </h2>
            <p className="font-semibold text-lg text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              imperdiet nulla duis consectetur adipiscing elit.
            </p>
            <button className="flex items-center justify-start gap-2 text-[#8049D9] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
        <li className="w-full md:w-[30%] rounded-lg shadow-xl shadow-slate-300 mb-5 md:mb-0">
          <img
            src={service3}
            alt=""
            className="w-full rounded-t-lg rounded-b-none"
          />
          <div className="p-7 flex flex-col gap-3">
            <h2 className="text-[1.5rem] md:text-[2rem] font-[600] cursor-pointer hover:text-[#FF176D]">
              Marketing
            </h2>
            <p className="font-semibold text-lg text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              imperdiet nulla duis consectetur adipiscing elit.
            </p>
            <button className="flex items-center justify-start gap-2 text-[#8049D9] hover:scale-[1.02] transition ease-in">
              Learn More <FaArrowRight />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
