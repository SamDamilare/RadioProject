// import { BiSolidPhoneCall } from "react-icons/bi";

// const ContactDetails = () => {
//   return (
//     <div className="mt-16">
//       <h1 className="text-center text-4xl font-semibold my-8">
//         Get in touch today!
//       </h1>
//       <div className="flex text-sm mr-[200px] ml-[200px] justify-between">
//         <div
//           className="flex items-center p-8 w-[450px] justify-between rounded-3xl h-[100px]"
//           style={{ background: "white" }}
//         >
//           <div className="flex items-center gap-2 ">
//             <div className="p-3 rounded-xl" style={{ background: "#9570fe" }}>
//               <img
//                 width="30px"
//                 src="https://res.cloudinary.com/dktrwqio1/image/upload/v1726417445/NYRadio/email_3_fks708.png"
//               />
//             </div>
//             <p className="font-semibold">Mail Us</p>
//           </div>
//           <p>sassup@gmail.com</p>
//         </div>
//         <div
//           className="flex items-center p-8 w-[450px] justify-between rounded-3xl h-[100px]"
//           style={{ background: "white" }}
//         >
//           <div className="flex items-center gap-2 ">
//             <div className="p-3 rounded-xl" style={{ background: "#f563d2" }}>
//               <BiSolidPhoneCall fontSize={"30px"} color="white" />
//             </div>
//             <p className="font-semibold">Mail Us</p>
//           </div>
//           <p>+001 6547 6589</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;

"use client";

import { BiSolidPhoneCall } from "react-icons/bi";

const ContactDetails = () => {
  return (
    <div className="mt-8 md:mt-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold my-6 md:my-8">
        Get in touch today!
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Email Contact Card */}
        <div className="flex items-center justify-between p-4 md:p-6 lg:p-8 w-full md:w-1/2 rounded-2xl md:rounded-3xl h-auto md:h-[100px] bg-white shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div
              className="p-2 md:p-3 rounded-xl flex-shrink-0"
              style={{ background: "#9570fe" }}
            >
              <img
                width="24"
                height="24"
                className="md:w-[30px] md:h-[30px]"
                src="https://res.cloudinary.com/dktrwqio1/image/upload/v1726417445/NYRadio/email_3_fks708.png"
                alt="Email icon"
              />
            </div>
            <p className="font-semibold text-sm md:text-base">Mail Us</p>
          </div>
          <p className="text-xs md:text-sm lg:text-base text-gray-700 ml-2">
            sassup@gmail.com
          </p>
        </div>

        {/* Phone Contact Card */}
        <div className="flex items-center justify-between p-4 md:p-6 lg:p-8 w-full md:w-1/2 rounded-2xl md:rounded-3xl h-auto md:h-[100px] bg-white shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div
              className="p-2 md:p-3 rounded-xl flex-shrink-0"
              style={{ background: "#f563d2" }}
            >
              <BiSolidPhoneCall className="text-xl md:text-[30px] text-white" />
            </div>
            <p className="font-semibold text-sm md:text-base">Call Us</p>
          </div>
          <p className="text-xs md:text-sm lg:text-base text-gray-700 ml-2">
            +001 6547 6589
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
