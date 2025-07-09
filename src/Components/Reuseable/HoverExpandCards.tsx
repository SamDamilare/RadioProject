// import { useState } from "react";
// import "./styles.css"; // Import custom CSS for backface fix

// const cards = [
//   {
//     title: "Morning Show",
//     time: "8:00 AM",
//     host: "John Doe",
//     details: "A fun talk show with celebrity guests.",
//   },
//   {
//     title: "News Hour",
//     time: "12:00 PM",
//     host: "Jane Smith",
//     details: "Latest updates on global events.",
//   },
//   {
//     title: "Cooking Corner",
//     time: "3:00 PM",
//     host: "Chef Alex",
//     details: "Delicious recipes and live cooking.",
//   },
//   {
//     title: "Tech Talk",
//     time: "6:00 PM",
//     host: "Michael Lee",
//     details: "Exploring the latest in technology.",
//   },
// ];

// const HoverExpandFlipCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="flex gap-4 justify-center items-center p-10">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`relative h-40 transition-all duration-500 transform-style-3d rounded-lg shadow-lg cursor-pointer group ${
//             hoveredIndex === index ? "w-64" : "w-32"
//           }`}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           style={{ perspective: "1000px" }} // Adds 3D depth
//         >
//           {/* Card Inner Wrapper */}
//           <div className="card-inner">
//             {/* Front Face (White) */}
//             <div className="card-front">
//               <h2 className="text-xl">{card.title}</h2>
//               <p className="text-sm">{card.time}</p>
//             </div>

//             {/* Back Face (Black) */}
//             <div className="card-back">
//               <h2 className="text-lg">{card.host}</h2>
//               <p className="text-sm px-2 text-center">{card.details}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HoverExpandFlipCards;

// import { useState } from "react";

// const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

// const HoverExpandCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // ✅ Fix

//   return (
//     <div className="flex gap-2 justify-center items-center p-10">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`h-40 transition-all duration-300 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer ${
//             hoveredIndex === index
//               ? "w-80 bg-black text-white"
//               : "w-40 bg-white text-black"
//           }`}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           {card}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HoverExpandCards;

import React, { useState } from "react";

const cards = [
  { front: "Monday", back: "00:00 AM" },
  { front: "Tuesday", back: "00:00 AM" },
  { front: "Wednesday", back: "00:00 AM" },
  { front: "Thursday", back: "00:00 AM" },
  { front: "Friday", back: "00:00 AM" },
  { front: "Saturday", back: "00:00 AM" },
];

const HoverExpandCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="flex gap-2 justify-center items-center p-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            h-40 transition-all duration-300 rounded-lg shadow-lg 
            perspective-1000 cursor-pointer
            ${hoveredIndex === index ? "w-80" : "w-40"}
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleFlip(index)}
        >
          <div
            className={`
              relative h-full transform-style-3d 
              ${flippedIndex === index ? "rotate-y-180" : ""}
            `}
          >
            <div
              className={`
                absolute inset-0 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold backface-hidden
                ${
                  hoveredIndex === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }
              `}
            >
              {card.front}
            </div>
            <div
              className={`
                absolute inset-0 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold backface-hidden rotate-y-180
                ${
                  hoveredIndex === index
                    ? "bg-gray-800 text-white" // Change back color on hover
                    : "bg-gray-200 text-gray-800"
                }
              `}
            >
              {card.back}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverExpandCards;
