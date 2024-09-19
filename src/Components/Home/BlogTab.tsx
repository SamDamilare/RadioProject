import { Card, Image } from "antd";
import { blogTabData } from "../utilities/data";
import { LuArrowUpRight } from "react-icons/lu";

const BlogTab = () => {
  return (
    <div
      style={{
        marginRight: "80px",
        marginLeft: "80px",
        marginBottom: "80px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "10px", fontWeight: 700, color: "#583FBC" }}>
          BLOG
        </h4>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#181945",
            marginTop: "25x",
            marginBottom: "25px",
          }}
        >
          Stay updated with our latest news
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "70px",
        }}
      >
        {blogTabData().map((item, index) => (
          <Card hoverable style={{ width: "320px", fontFamily: "Poppins" }}>
            <Image key={index} src={item.image} preview={false} width="270px" />
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#0072CA",
                marginTop: "10px",
              }}
            >
              Trending News
            </h4>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: "10px",
                }}
              >
                <div style={{ width: "250px" }}>
                  <h4 style={{ fontWeight: 800, fontSize: "20px" }}>
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>

                <LuArrowUpRight fontSize="25px" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogTab;
