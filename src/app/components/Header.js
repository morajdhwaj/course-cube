import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="m-10 mb-60">
      <div className="flex items-center gap-5 ml-10 ">
        <Image
          alt="logo"
          src="/assets/course-cube-logo.jpeg"
          width={50}
          height={50}
          className="rounded-full h-16  w-16 sm:h-24 sm:w-24"
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-[#23AE7F]">
          Course Qube
        </h1>
      </div>
      <div className=" mt-40 flex flex-col gap-5 items-center justify-center ">
        <h2 className="text-4xl sm:text-6xl max-w-[110vh] text-center font-bold leading-20 ">
          Sell Courses Securely From Your Website & Branded Apps
        </h2>
        <h4 className="text-xl font-semibold text-center">
          Start Your Academy Online. Earn
          <span className="text-[#23AE7F]"> 10X Revenue</span>
        </h4>
      </div>
      <div className=" flex items-center justify-center my-20">
        <button className=" bg-[#23AE7F] text-white py-5 px-10 text-xl rounded-xl font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
