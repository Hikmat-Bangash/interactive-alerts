import React from "react";
import { HeroSectionContent } from "@/constant/contents";
import HeroPic from "../../../public/assets/HomePage/hero.avif.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[38.5rem] flex justify-center items-center bg-[#00150F]">
      <div className="wrapper w-[80%] flex justify-center items-center gap-4">
        {/* left section */}
        <div className="Left w-[49rem] flex flex-col gap-6 ">
          <h1 className="text-[2.7rem] font-bold break-words">
            {HeroSectionContent.heading}
          </h1>
          <p className="text-[#FFFFFF80] text-[1rem]">
            {HeroSectionContent.des}
          </p>
          {/* buttons */}
          <div className="btns flex gap-5">
            <button className="w-[11rem] h-[3rem] bg-[#00D094] border border-[#00D094] rounded-md p-auto">
              Go to Dashboard
            </button>
            <button className="w-[11rem] h-[3rem] border border-[#00D094] rounded-md p-auto">
              Learn more
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="heropic w-[40rem] h-[27rem]">
          <Image
            src={HeroPic}
            className="object-cover w-full h-full"
            alt="heropic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
