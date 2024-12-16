import React from "react";
import Featurebanner1 from "../../assets/Images/features-banner-1.gif";
import Featurebanner2 from "../../assets/Images/features-banner-2.png";
import featuresicon1 from "../../assets/Images/featuresicon1.svg";
import featuresicon2 from "../../assets/Images/featuresicon2.svg";
import featuresicon3 from "../../assets/Images/featuresicon3.svg";
import featuresicon4 from "../../assets/Images/featuresicon4.svg";

export default function Features() {
  return (
    <div className="py-16 px-5 md:px-10 gap-10 flex flex-col lg:flex-row justify-between items-center bg-slate-100">
      <div className="w-full lg:w-2/4 flex flex-col gap-5">
        <h1 className="text-[2rem] md:text-[3.2rem] font-extrabold text-center lg:text-left">
          Our Awesome Features To Serve You
        </h1>
        <p className="text-slate-500 text-lg md:text-xl text-center lg:text-left">
          Planning, tracking and delivering your team’s best work has never been
          easier. We make it easiest for you through the software.
        </p>

        <ul className="flex flex-col items-center lg:items-start justify-center gap-5">
          <li className="bg-white flex items-center gap-3 p-5 w-full max-w-md rounded-lg font-bold text-lg md:text-xl shadow-lg shadow-slate-100">
            <img src={featuresicon1} alt="Automate Instagram" className="w-10 h-10" />
            Automate Instagram
          </li>
          <li className="bg-white flex items-center gap-3 p-5 w-full max-w-md rounded-lg font-bold text-lg md:text-xl shadow-lg shadow-slate-100">
            <img src={featuresicon2} alt="Drive Sale" className="w-10 h-10" />
            Drive Sale
          </li>
          <li className="bg-white flex items-center gap-3 p-5 w-full max-w-md rounded-lg font-bold text-lg md:text-xl shadow-lg shadow-slate-100">
            <img src={featuresicon3} alt="Get More Leads" className="w-10 h-10" />
            Get More Leads
          </li>
          <li className="bg-white flex items-center gap-3 p-5 w-full max-w-md rounded-lg font-bold text-lg md:text-xl shadow-lg shadow-slate-100">
            <img src={featuresicon4} alt="Engage Prospects" className="w-10 h-10" />
            Engage Prospects
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-3/4 relative mt-5 lg:mt-0 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <img src={Featurebanner1} alt="Feature Banner 1" className="w-full rounded-lg" />
          <img
            src={Featurebanner2}
            alt="Feature Banner 2"
            className="absolute top-3/4 -translate-y-1/2 right-0 w-2/3 h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
