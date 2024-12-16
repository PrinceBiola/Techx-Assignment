import React from "react";
import herobanner from "../../assets/Images/herobanner.png";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-[#FAFAFA] py-10 px-5 md:py-40 md:px-32 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-[804px]">
        <img src={herobanner} alt="" className="w-full h-auto" />
      </div>

      <div className="flex flex-col items-start justify-center gap-4 w-full md:w-3/4">
        <h1 className="text-3xl md:text-[3.3rem] leading-10 font-extrabold text-center md:text-left">
          Make Chat Easy For Today's Digital Customers
        </h1>

        <p className="text-slate-500 text-lg md:text-xl w-full md:w-4/5 font-base text-center md:text-left">
          Techx is the ecommerce helpdesk center that turns your customer
          service into a profit center without any delay and increase your sale.
        </p>

        <div className="w-full flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-gray-200 px-4 py-2 rounded-lg text-lg w-full md:w-[65%] rounded-r-none rounded-br-none"
          />
          <button 
            className="mt-2 md:mt-0 inline-flex px-8 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-white">
            Start Free Trial
          </button>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
          <li className="flex items-center justify-center gap-3 text-[1rem] md:text-[1.15rem] text-gray-500">
            <FaCheckCircle className="text-[#8255D4]" /> Live Chat
          </li>
          <li className="flex items-center justify-center gap-3 text-[1rem] md:text-[1.15rem] text-gray-500">
            <FaCheckCircle className="text-[#8255D4]" /> Ticketing
          </li>
          <li className="flex items-center justify-center gap-3 text-[1rem] md:text-[1.15rem] text-gray-500">
            <FaCheckCircle className="text-[#8255D4] text-[1.1rem]" /> Knowledge Base
          </li>
          <li className="flex items-center justify-center gap-3 text-[1rem] md:text-[1.15rem] text-gray-500">
            <FaCheckCircle className="text-[#8255D4]" /> Chat pages
          </li>
          <li className="flex items-center justify-center gap-3 text-[1rem] md:text-[1.15rem] text-gray-500">
            <FaCheckCircle className="text-[#8255D4]" /> Team chat
          </li>
        </ul>
      </div>
    </div>
  );
}
