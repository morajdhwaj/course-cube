import Image from "next/image";
import React from "react";

const Information = () => {
  return (
    <div className=" ">
      <div className=" mt-40 flex flex-col gap-5 items-center justify-center ">
        <h2 className="text-5xl max-w-[110vh] text-center font-bold leading-20 ">
          We help Creators and Educators Host, Market and Sell Their Courses
          Securely
        </h2>
      </div>
      <div className=" flex items-center justify-center my-20">
        <button className=" bg-[#064e3b] text-white py-5 px-10 text-xl rounded-xl font-bold">
          HOW IT WORK
        </button>
      </div>
      <div className=" mt-40 flex flex-col gap-5 items-center justify-center ">
        <div className="text-5xl max-w-[110vh] text-center font-bold leading-20 ">
          <div className="flex w-full text-start flex-col sm:flex-row gap-10 p-5  lg:p-0">
            <h3 className="sm:w-[50%] text-4xl ">
              Create end-to-end learning experience
            </h3>
            <h5 className="sm:w-[50%] text-xl font-normal">
              Engage your learners with media and interactive course content.
              Include quizzes and certificates to motivate learners.
            </h5>
          </div>
          <div className="my-20 mx-5 lg:mx-0 flex items-center justify-center">
            <Image
              alt="logo"
              src="/assets/info.png"
              width={700}
              height={700}
              className="lg:w-[110vh] lg:h-[80vh]"
            />
          </div>
        </div>
      </div>
      <div className=" mt-20 flex flex-col gap-5 items-center justify-center ">
        <div className="text-5xl max-w-[110vh] text-center font-bold leading-20 ">
          <div className="flex w-full text-start flex-col sm:flex-row gap-10 p-5  lg:p-0">
            <h3 className="sm:w-[50%] text-4xl ">
              Generate, Nurture and Qualify
            </h3>
            <h5 className="sm:w-[50%] text-xl font-normal">
              Capture leads with ready to use landing pages, nurture them with
              automated workflows and qualify which students based on engagement
            </h5>
          </div>
          <div className="my-20 mx-5 lg:mx-0 flex items-center justify-center">
            <Image
              alt="logo"
              src="/assets/info2.jpeg"
              width={700}
              height={700}
              className="sm:w-[110vh] sm:h-[80vh] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
