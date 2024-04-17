import Image from "next/image";
import React from "react";

const ContactFrom = () => {
  return (
    <div>
      <div className=" mt-40 mx-5 md:mx-0 flex flex-col gap-5 items-center justify-center  ">
        <div className=" max-w-[110vh]  flex font-bold border rounded-xl overflow-hidden w-full  ">
          <div>
            <section className="bg-white w-full mx-auto flex sm:flex-row flex-col-reverse ">
              <div className="sm:py-8  sm:w-1/2 lg:py-16 px-4 mx-auto  pt-5 md:pt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                  Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 text-center text-gray-500 sm:text-xl">
                  Want to send feedback about a beta feature? Need details about
                  our Business plan? Let us know.
                </p>
                <form className="space-y-8">
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Mobile No
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="mobile no"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="email"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave some message here..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r rounded-lg from-[#a7f3d0] to-[#7aeac5] py-3 px-14 xl:text-xl text-black  "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
