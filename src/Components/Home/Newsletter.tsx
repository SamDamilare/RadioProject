import { Input } from "antd";

const { Search } = Input;

const Newsletter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
        margin: "auto",
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      <h3 style={{ fontSize: "30px", fontWeight: 600, lineHeight: "40px" }}>
        Stay up to date with our Newsletter
      </h3>
      <p style={{ fontSize: "12px" }}>
        Lorem ipsum dolor sit amet consectetur. In ac dolor Accumsan tempus in
        diam ipsum nibh velit.{" "}
      </p>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Get Started"
        size="large"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Newsletter;
