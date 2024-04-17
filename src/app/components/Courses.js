import Image from "next/image";
import React from "react";

const Courses = () => {
  return (
    <div>
      <div className=" sm:mt-20 flex flex-col gap-5 items-center justify-center ">
        <div className=" mt-40 flex flex-col gap-5 items-center justify-center ">
          <div className="text-5xl max-w-[110vh] gap-20 flex flex-col md:flex-row font-bold leading-20 m-5 lg:m-0 ">
            <div className=" md:w-[50%]">
              <Image
                alt="logo"
                src="/assets/course1.png"
                width={700}
                height={700}
                className="md:w-[100vh] md:h-[50vh] border rounded-xl"
              />
            </div>
            <div className="md:w-[50%] flex flex-col   gap-10">
              <h3 className=" text-4xl  ">Monetize Your Course Content</h3>
              <h5 className=" text-xl font-normal">
                Create courses with videos, live classes, PDFs, SCORM /TINCAN &
                quizzes. Provide your students seamless access & sell courses
                securely.
              </h5>
            </div>
          </div>
        </div>
        <div className="text-5xl mt-10 max-w-[110vh] gap-20 flex flex-col md:flex-row font-bold leading-20 mx-5 lg:mx-0 ">
          <div className="md:w-[50%] flex flex-col gap-10">
            <h3 className=" text-4xl ">Secure Your Courses With Encryption</h3>
            <h5 className=" text-xl font-normal">
              Your course content like videos & PDFs are encrypted with industry
              standard DRM encryption. Thus, preventing your course content from
              piracy. You can further secure with watermarking, OTP
            </h5>
          </div>
          <div className="md:w-[50%]">
            <Image
              alt="logo"
              src="/assets/course1.png"
              width={700}
              height={700}
              className="md:w-[100vh] md:h-[50vh] border rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className=" mt-40 flex flex-col gap-5 items-center justify-center ">
        <div className="text-5xl max-w-[110vh] gap-20 flex flex-col md:flex-row font-bold leading-20 m-5 lg:m-0">
          <div className="md:w-[50%] flex items-center justify-center">
            <Image
              alt="logo"
              src="/assets/app.png"
              width={200}
              height={700}
              className="md:w-[35vh] md:h-[50vh] border rounded-xl"
            />
          </div>
          <div className="md:w-[50%] flex flex-col   gap-10">
            <h3 className=" text-4xl ">Get Your Own Branded Apps</h3>
            <h5 className=" text-xl font-normal">
              Get Fully Branded Android & iOS Apps In Your Own Developer
              Account. Apps provided are native apps with more advanced
              features.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
