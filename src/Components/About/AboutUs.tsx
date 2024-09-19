const AboutUs = () => {
  return (
    <div className="container  flex justify-center">
      <div className="grid grid-cols-2 gap-[200px] place-items-center  ml-[80px] mt-[60px]">
        <div className="w-[500px]">
          <p className="bg-blue-100 p-2 w-[82px] text-blue-500 rounded-md text-sm">
            About us
          </p>
          <h1 className="lg:text-5xl mt-2 font-semibold text-gray-800">
            World Class Trending Platform
          </h1>
          <p className="mt-4 text-xs w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown.
          </p>{" "}
          <p className="mt-4 text-xs w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown.
          </p>
        </div>
        <div className="w-[550px] mr-[80px]">
          <img src="https://res.cloudinary.com/dktrwqio1/image/upload/v1725455367/NYRadio/pexels-fauxels-3184657_1_1_zk3w9j.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// import React from "react";
// import { Typography, Image } from "antd";

// const { Title, Text } = Typography;

// const AboutUs = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         marginLeft: "80px",
//         marginRight: "80px",
//         justifyContent: "space-between",
//         marginTop: "80px",
//       }}
//     >
//       <div style={{ width: "500px" }}>
//         <Title>About us</Title>
//         <Title>World Class Trending Platform</Title>
//         <Text>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry’s standard dummy text ever
//           since the 1500s, when an unknown.
//         </Text>
//         <Text>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry’s standard dummy text ever
//           since the 1500s, when an unknown.
//         </Text>
//       </div>
//       <div>
//         <Image
//           preview={false}
//           width="500px"
//           src="https://res.cloudinary.com/dktrwqio1/image/upload/v1725455367/NYRadio/pexels-fauxels-3184657_1_1_zk3w9j.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
