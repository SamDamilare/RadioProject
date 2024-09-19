import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const BlogNav = () => {
  return (
    <div className="mr-[80px] ml-[80px] mt-16">
      <div className="mr-[80px] ml-[80px] flex align-center justify-center gap-[36px] m-auto">
        <button
          type="button"
          className="inline-block rounded px-8 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#22185f" }}
        >
          <FiFacebook color="white" fontSize={"24px"} />
        </button>
        <button
          type="button"
          className="inline-block rounded px-8 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          <FaXTwitter color="white" fontSize={"24px"} />
        </button>
        <button
          type="button"
          className="inline-block rounded px-8 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#007bff" }}
        >
          <SlSocialLinkedin color="white" fontSize={"24px"} />
        </button>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="flex items-center  px-6 py-1.5"
          style={{
            backgroundColor: "#e8def7",
            border: "1px hsl (269, 100,2) solid",
          }}
        >
          <MdNavigateBefore /> Older
        </button>
        <button
          type="button"
          className="flex items-center px-6 py-1.5"
          style={{ backgroundColor: "#e8def7" }}
        >
          Newer <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default BlogNav;
