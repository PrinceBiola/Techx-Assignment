import React from "react";

export default function Support() {
  return (
    <div className="py-10 px-5 md:py-20 md:px-40 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#4B00E6] to-[#8255D3] text-white">
      <div className="flex flex-col gap-5 w-full md:w-3/4">
        <h1 className="font-extrabold text-3xl md:text-5xl">24/7 Customer Support</h1>
        <p className="font-semibold text-lg md:text-xl w-full md:w-5/6">
        Our team is here to provide you with personalized and outstanding service. We also offer a range of self-learning tools in our support center:
        </p>
      </div>

      <button className="mt-4 md:mt-0 inline-flex px-6 py-3 rounded-lg text-lg md:text-xl font-semibold bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-white">
        Contact Us Now
      </button>
    </div>
  );
}
