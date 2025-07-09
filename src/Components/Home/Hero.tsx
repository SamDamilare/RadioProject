// import { Image, Carousel } from "antd";

// const heroData = [
//   {
//     image:
//       "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928671/NYRadio/3dd2cc8c2204dac5d8cf9710fce77a31_ifvvy3.png",
//     title: "New York's Best Music Variety!",
//     text: "2 hours of talk about past, present and the future of Music",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928157/NYRadio/155adf14fbdae41a5a4cfda02c2b041f_1_wdpy1h.png",
//     title: "No 1  Family Radio in USA!",
//     text: "Sessions on family, love and relationships",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928303/NYRadio/3341639c4a69f3f20f11ee89bcbb010f_hfnphi.png",
//     title: "Unending rave with favourite Artists",
//     text: "We can’t stop dancing and singing amazing songs",
//   },
// ];

// const Hero = () => {
//   return (
//     <div>
//       <div style={{ width: "full", height: "80vh" }}>
//         <Carousel autoplay effect="fade">
//           {heroData.map((item, idx) => (
//             <div>
//               <Image
//                 src={item.image}
//                 width="100vw"
//                 style={{ objectFit: "cover" }}
//                 height="80vh"
//                 key={idx}
//                 preview={false}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "100vw",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   color: "#fff",
//                   fontFamily: "Poppins",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 <h2
//                   style={{
//                     fontSize: "60px",
//                     fontWeight: "700",
//                   }}
//                 >
//                   {item.title}
//                 </h2>
//                 <p style={{ fontSize: "1rem" }}>{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { Image, Carousel } from "antd";

const heroData = [
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928671/NYRadio/3dd2cc8c2204dac5d8cf9710fce77a31_ifvvy3.png",
    title: "New York's Best Music Variety!",
    text: "2 hours of talk about past, present, and the future of Music",
  },
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928157/NYRadio/155adf14fbdae41a5a4cfda02c2b041f_1_wdpy1h.png",
    title: "No 1 Family Radio in USA!",
    text: "Sessions on family, love, and relationships",
  },
  {
    image:
      "https://res.cloudinary.com/dktrwqio1/image/upload/v1724928303/NYRadio/3341639c4a69f3f20f11ee89bcbb010f_hfnphi.png",
    title: "Unending rave with favorite Artists",
    text: "We can’t stop dancing and singing amazing songs",
  },
];

const Hero = () => {
  return (
    <div style={{ width: "100%", height: "80vh", position: "relative" }}>
      <Carousel autoplay effect="fade">
        {heroData.map((item, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <Image
              src={item.image}
              width="100vw"
              style={{ objectFit: "cover" }}
              height="80vh"
              preview={false}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontFamily: "Poppins",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <h2
                style={{
                  fontSize: "60px",
                  fontWeight: "700",
                  margin: "0",
                }}
              >
                {item.title}
              </h2>
              <p style={{ fontSize: "1rem", margin: "10px 0" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 1024px) { /* Tablets */
            .ant-carousel h2 {
              font-size: 40px;
            }
            .ant-carousel p {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 768px) { /* Mobile */
            .ant-carousel h2 {
              font-size: 30px;
            }
            .ant-carousel p {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
