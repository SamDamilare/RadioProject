import { Card } from "antd"; // Assuming you're using Ant Design
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { podcastData } from "../utilities/data";
import "../styles/compStyles.css";

export default function Podcast() {
  const responsive = {
    superLargeDesktop: {
      // Adjust breakpoint values as needed (consider max-width)
      breakpoint: { max: 3000, min: 1440 }, // Adjust min for larger screens
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 }, // Adjust max for consistency
      items: 4.5,
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
    <div
      style={{
        marginTop: "50px",
        // background: "red",
        marginLeft: "80px",
        marginRight: 0,
        minHeight: "50vh",
        paddingBottom: "20px",
      }}
    >
      <h1 style={{ fontSize: "22px", fontWeight: 600 }}>Podcast</h1>
      <Carousel
        responsive={responsive}
        className="carousel-item"
        draggable={true}
        infinite
      >
        {podcastData().map((item, index) => (
          <Card
            hoverable
            key={index}
            style={{
              width: "270px",
              height: "260px",
              marginTop: "20px",
              cursor: "pointer",
              fontFamily: "Poppins",
            }} // Added margins for spacing
            cover={<img alt="example" src={item.image} />}
          >
            {/* <Image
              style={{ objectFit: "cover", padding: 0 }}
              src={item.image}
              preview={false}
            />{" "} */}
            {/* Added width, height, and objectFit */}
            <div style={{ paddingBottom: "15px", textAlign: "left" }}>
              <h4 style={{ fontWeight: "500" }}>{item.title}</h4>
              <p style={{ fontSize: "12px" }}>{item.text}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
