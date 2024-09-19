import React from "react";
import { Image, Carousel } from "antd";

const heroData = [
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928671/NYRadio/3dd2cc8c2204dac5d8cf9710fce77a31_ifvvy3.png",
    title: "New York's Best Music Variety!",
    text: "2 hours of talk about past, present and the future of Music",
  },
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928157/NYRadio/155adf14fbdae41a5a4cfda02c2b041f_1_wdpy1h.png",
    title: "No 1  Family Radio in USA!",
    text: "Sessions on family, love and relationships",
  },
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928303/NYRadio/3341639c4a69f3f20f11ee89bcbb010f_hfnphi.png",
    title: "Unending rave with favourite Artists",
    text: "We can’t stop dancing and singing amazing songs",
  },
];

const Hero = () => {
  return (
    <div>
      <div style={{ width: "full", height: "80vh" }}>
        <Carousel autoplay effect="fade">
          {heroData.map((item, idx) => (
            <div>
              <Image
                src={item.image}
                width="100vw"
                style={{ objectFit: "cover" }}
                height="80vh"
                key={idx}
                preview={false}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontFamily: "Poppins",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "60px",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </h2>
                <p style={{ fontSize: "1rem" }}>{item.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
