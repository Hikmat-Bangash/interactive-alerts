"use client";
import React, { useState } from 'react'
import { Tabs } from '@/constant/contents';
import logo from "../../public/assets/logo.svg"
import searchbar from "../../public/assets/searchIcon.svg";
import notification from "../../public/assets/Notification.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [activeTab, setactiveTab] = useState(1);
  const navigate: any = useRouter();

  const HandleLink = (tabLink : string, tab: number) => {
    setactiveTab(tab)
    navigate.push(tabLink);
}

  return (
    <div className="container w-full flex justify-center items-center h-[99px]  bg-[#00150F] border-b border-opacity-50 border-white">
      <div className="w-full flex justify-between items-center mx-[4rem] ">
        {/* Tabs section */}
        <div className="tabs text-[1rem] ">
          <ul className="no-underline flex justify-center items-center gap-[2rem]">
            {/* logo */}
            <li>
              <Image src={logo} width={32} height={32} alt="logo" />
            </li>
            {Tabs.map((tab, index) => (
              <li onClick={()=>HandleLink(tab.link, tab.index)} className={`hover:text-[#00D094] cursor-pointer ${tab.index == activeTab && "text-[#00D094]"}`} key={index}>
                <p>{tab.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* search bar */}
        <div className="searchbar flex gap-2 px-5 py-2 justify-center items-center w-[15.18rem] h-[2.6rem] rounded-md bg-[#FFFFFF80] shadow-md">
          <Image src={searchbar} width={15} height={15} alt="searchIcon" />
          <input
            type="text"
            placeholder="Search stocks..."
            className="text-[0.78rem] outline-none w-full bg-transparent placeholder:text-gray-300"
          />
        </div>

        {/* right side search, notification, auth section  */}
        <div className="RightSection text-[1rem] flex gap-6">
          <Image
            src={notification}
            width={30}
            height={30}
            className="object-cover"
            alt="searchIcon"
          />
          {/* auth buttons */}
          <button className="w-[7rem] h-[2.6rem] border border-[#00D094] rounded-md p-auto">
            Log In
          </button>

          <button className="w-[7rem] h-[2.6rem] bg-[#00D094] border border-[#00D094] rounded-md p-auto">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar