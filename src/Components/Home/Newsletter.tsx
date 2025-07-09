// import { Input } from "antd";

// const { Search } = Input;

// const Newsletter = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "350px",
//         margin: "auto",
//         textAlign: "center",
//         marginTop: "60px",
//       }}
//     >
//       <h3 style={{ fontSize: "30px", fontWeight: 600, lineHeight: "40px" }}>
//         Stay up to date with our Newsletter
//       </h3>
//       <p style={{ fontSize: "12px" }}>
//         Lorem ipsum dolor sit amet consectetur. In ac dolor Accumsan tempus in
//         diam ipsum nibh velit.{" "}
//       </p>
//       <Search
//         placeholder="input search text"
//         allowClear
//         enterButton="Get Started"
//         size="large"
//         style={{ marginTop: "20px" }}
//       />
//     </div>
//   );
// };

// export default Newsletter;

import { Input } from "antd";

const { Search } = Input;

const Newsletter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90%", // Responsive width
        maxWidth: "350px", // Maximum width
        margin: "60px auto", // Responsive margin
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: 600, lineHeight: "32px" }}>
        Stay up to date with our Newsletter
      </h3>
      <p style={{ fontSize: "12px", padding: "0 10px" }}>
        Lorem ipsum dolor sit amet consectetur. In ac dolor Accumsan tempus in
        diam ipsum nibh velit.
      </p>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Get Started"
        size="large"
        style={{ marginTop: "20px", width: "100%" }} // Responsive search width
      />
    </div>
  );
};

export default Newsletter;
