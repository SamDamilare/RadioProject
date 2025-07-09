// import { testimonyData } from "../utilities/data";

// const Testimonials = () => {
//   return (
//     <div className="bg-white width-[100%] mt-8">
//       <div className="text-center m-auto p-[80px] w-[500px]">
//         <h1 className="text-3xl font-bold">
//           Here’s What Our Customers Have Said
//         </h1>
//         <p className="text-sm">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry’s standard dummy{" "}
//         </p>
//       </div>
//       <div className="grid grid-cols-3 gap-4 mr-[80px] ml-[80px] border-md">
//         {testimonyData().map((item, index) => (
//           <div
//             className="flex flex-col items-center text-center pb-10"
//             key={index}
//           >
//             <div
//               className="rounded-lg hover:shadow-lg p-8"
//               style={{
//                 width: "350px",
//                 borderRadius: "20px",
//               }}
//             >
//               <img
//                 className="w-24 h-24 mb-3 rounded-full shadow-lg m-auto"
//                 src={item.image}
//                 alt=""
//               />
//               <h5 className="mb-1 text-xl text-md text-gray-900 dark:text-white">
//                 {item.name}
//               </h5>
//               <h5 className="mb-1 text-sm font-medium text-blue-600 dark:text-white">
//                 {item.title}
//               </h5>
//               <p className="my-4 text-xs">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import { testimonyData } from "../utilities/data";

const Testimonials = () => {
  return (
    <div className="bg-white w-full mt-8 px-6">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto py-12">
        <h1 className="text-3xl font-bold">
          Here’s What Our Customers Have Said
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonyData().map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              className="w-20 h-20 mb-4 rounded-full shadow-md mx-auto"
              src={item.image}
              alt={item.name}
            />
            <h5 className="text-lg font-semibold text-gray-900">{item.name}</h5>
            <h6 className="text-sm font-medium text-blue-600">{item.title}</h6>
            <p className="text-sm text-gray-600 mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
