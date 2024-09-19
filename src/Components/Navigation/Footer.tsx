import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#272727] items-center py-6 mt-16"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="my-4 mt-4">
        <img
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1726754874/NYRadio/monero-_xmr_czapgv.svg"
          alt=""
        />
      </div>
      <div className="flex gap-6 mt-2">
        <div className=" text-[#4d4d4d] hover:text-[#1690ff] bg-[#1a1a1a] p-2 rounded-[50%] hover:bg-[#1a2632] ">
          <RiInstagramFill fontSize={"20px"} />
        </div>
        <div className=" text-[#4d4d4d] hover:text-[#1690ff] bg-[#1a1a1a] p-2 rounded-[50%] hover:bg-[#1a2632] ">
          <FaXTwitter fontSize={"20px"} />
        </div>
        <div className=" text-[#4d4d4d] hover:text-[#1690ff] bg-[#1a1a1a] p-2 rounded-[50%] hover:bg-[#1a2632] ">
          <FaFacebookF fontSize={"20px"} />
        </div>
      </div>
      <div className="mt-6">
        <p className=" w-[400px] text-center text-[#BABABA] font-md">
          Lorem ipsum dolor sit amet consectetur. In ac dolor Accumsan tempus in
          diam.
        </p>
      </div>
      <div className="flex mt-6 gap-8 text-[#BABABA]">
        <button className="hover:text-[#1690ff]">Home</button>
        <button className="hover:text-[#1690ff]">About Us</button>
        <button className="hover:text-[#1690ff]">Faetures</button>
        <button className="hover:text-[#1690ff]">Press</button>
        <button className="hover:text-[#1690ff]">Pricing</button>
      </div>
    </div>
  );
};

export default Footer;
