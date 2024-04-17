import React from "react";
import Header from "./components/Header";
import Information from "./components/Information";
import Courses from "./components/Courses";
import ContactFrom from "./components/ContactFrom";

const page = () => {
  return (
    <div className="">
      <Header />
      <Information />
      <Courses />
      <ContactFrom />
    </div>
  );
};

export default page;
