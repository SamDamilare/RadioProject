import React from "react";
import { Image, Card } from "antd"; // Assuming you're using Ant Design
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { showData } from "../utilities/data";
import "../styles/compStyles.css";

export default function Shows() {
  const responsive = {
    superLargeDesktop: {
      // Adjust breakpoint values as needed (consider max-width)
      breakpoint: { max: 3000, min: 1440 }, // Adjust min for larger screens
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 }, // Adjust max for consistency
      items: 5.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 }, // Adjust max and min for tablets
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 }, // Adjust max for mobile
      items: 1,
    },
  };

  return (
    <div style={{ marginTop: "50px", marginLeft: "80px", marginRight: 0 }}>
      <h1 style={{ fontSize: "22px", fontWeight: 600 }}>Shows</h1>
      <Carousel
        responsive={responsive}
        className="carousel-item"
        draggable={true}
        infinite
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {showData().map((item, index) => (
          <Card
            key={index}
            style={{
              width: "220px",
              height: "250px",
              fontFamily: "Poppins",

              marginTop: "20px",
            }} // Added margins for spacing
          >
            <Image
              width="170px"
              height="110px"
              src={item.image}
              preview={false}
            />{" "}
            {/* Added width, height, and objectFit */}
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              <h4 style={{ fontWeight: "500" }}>{item.title}</h4>
              <p style={{ fontSize: "12px" }}>{item.text}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
