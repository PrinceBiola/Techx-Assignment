import React from "react";
import footerimg from "../../assets/Images/footerimg.png";
import contacticon1 from "../../assets/Images/contacticon1.svg";
import contacticon2 from "../../assets/Images/contacticon2.svg";
import contacticon3 from "../../assets/Images/contacticon3.svg";

export default function Footer() {
  return (
    <div>
      <div className="py-10 px-5 md:py-20 md:px-40 grid grid-cols-1 md:grid-cols-4 items-start justify-between bg-[#f2f2f2]">
        <div className="flex flex-col gap-3 w-full md:w-4/5">
          <h1 className="font-bold text-4xl">Techx</h1>

          <img src={footerimg} alt="" />
        </div>

        <ul className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl md:text-3xl mb-5">Services</h2>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6] ">
            Web Design{" "}
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Web Development
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Social Marketing
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            WordPress
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Content Writing
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl mb-5">Quick Links</h2>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6] ">
            About Us{" "}
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Portfolio
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Pricing Plan
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            FAQ
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6]">
            Download Apps
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl mb-5">Contact Us</h2>

          <li className="flex items-center justify-start gap-2 text-xl font-semibold">
            <img src={contacticon1} alt="" className="w-7" />
            Call Us:{" "}
            <span className="text-gray-500 cursor-pointer hover:text-[#4B00E6]">
              +(323) 750-1234
            </span>
          </li>
          <li className="flex items-start justify-start gap-2 text-xl font-semibold">
            <img src={contacticon2} alt="" className="w-10" />
            Address:{" "}
            <span className="text-gray-500 cursor-pointer hover:text-[#4B00E6]">
              Vermont Ave, Los Angeles, CA 90044
            </span>
          </li>
          <li className="flex items-center justify-start gap-2 text-xl font-semibold">
            <img src={contacticon3} alt="" className="w-7" />
            Mail Us:{" "}
            <span className="text-gray-500 cursor-pointer hover:text-[#4B00E6]">
              hello@Techx.com
            </span>
          </li>
        </ul>
      </div>

      <div className="py-5 px-3 md:py-10 md:px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="font-semibold text-lg md:text-xl text-gray-500">
          © 2022{" "}
          <span className="bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-transparent bg-clip-text">
            Techx.
          </span>{" "}
          All rights reserved by{" "}
          <span className="bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-transparent bg-clip-text cursor-pointer">
            codewithsadee
          </span>
        </div>

        <ul className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10">
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6] ">
            Privacy Policy
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6] ">
            Security
          </li>
          <li className="font-semibold text-xl text-gray-500 cursor-pointer hover:text-[#4B00E6] ">
            Terms & Conditions
          </li>
        </ul>
      </div>
    </div>
  );
}
