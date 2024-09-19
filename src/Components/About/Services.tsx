import React from "react";
import { serviceData } from "../utilities/data";

const Services = () => {
  return (
    <div className="ml-[80px] mr-[80px] mt-[80px]">
      <div className="container text-center m-auto" style={{ width: "400px" }}>
        <h1 className="font-bold text-2xl">Our Services</h1>
        <p className="text-xs mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy{" "}
        </p>
      </div>
      <div className="container flex grid-row-3 gap-11 mt-16">
        {serviceData.first.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg justify-between text-center hover:shadow-lg"
          >
            <div className="card w-[365px] h-[300px] p-6 ">
              <img src={item.image} width="50px" className="m-auto mt-10" />
              <h1 className="font-bold mt-10">{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container flex justify-center items-center grid-row-3 gap-11 mt-11">
        {serviceData.second.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg justify-between text-center hover:shadow-lg"
          >
            <div className="card w-[365px] h-[300px] p-4 ">
              <img src={item.image} width="50px" className="m-auto mt-10" />
              <h1 className="font-bold mt-10">{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
