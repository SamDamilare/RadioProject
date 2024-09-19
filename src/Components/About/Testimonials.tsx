import React from "react";
import { testimonyData } from "../utilities/data";

const Testimonials = () => {
  return (
    <div className="bg-white width-[100%] mt-8">
      <div className="text-center m-auto p-[80px] w-[500px]">
        <h1 className="text-3xl font-bold">
          Here’s What Our Customers Have Said
        </h1>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mr-[80px] ml-[80px] border-md">
        {testimonyData().map((item, index) => (
          <div
            className="flex flex-col items-center text-center pb-10"
            key={index}
          >
            <div
              className="rounded-lg hover:shadow-lg p-8"
              style={{
                width: "350px",
                borderRadius: "20px",
              }}
            >
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg m-auto"
                src={item.image}
                alt=""
              />
              <h5 className="mb-1 text-xl text-md text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <h5 className="mb-1 text-sm font-medium text-blue-600 dark:text-white">
                {item.title}
              </h5>
              <p className="my-4 text-xs">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
