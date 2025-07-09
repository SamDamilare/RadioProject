// import { radioData } from "../utilities/data";

// const ScheduleTabs = () => {
//   return (
//     <div className="mx-[80px]">
//       <div>
//         <img src="https://res.cloudinary.com/dktrwqio1/image/upload/v1751915263/NYRadio/3d-music-related-scene_1_wpdhot.jpg" />
//       </div>
//       {radioData.map((item) => (
//         <div
//           key={item.index}
//           className="my-16 flex justify-between items-center rounded-lg border-black-5"
//         >
//           <div className="w-[500px]">
//             <img src={item.image} alt="" />
//           </div>
//           <div className="w-[500px]">
//             <h4 className="text-2xl font-bold">{item.content}</h4>
//             <p>{item.description}</p>
//             <h6>{item.time}</h6>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScheduleTabs;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { radioData } from "../utilities/data";

const ScheduleTabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // Determine which posts to display based on isExpanded state
  const displayedPrograms = isExpanded ? radioData : radioData.slice(0, 3);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mx-auto px-4 md:px-8 max-w-6xl">
      <div className="mb-12">
        <img
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1751915263/NYRadio/3d-music-related-scene_1_wpdhot.jpg"
          alt="Radio Background"
          className="w-full object-cover rounded-lg shadow-lg h-[300px]"
        />
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedPrograms.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
            >
              <div className="cursor-pointer" onClick={() => toggleCard(index)}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.content}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {item.content}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600">
                    {item.time}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {expandedCards.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {displayedPrograms.map((item, index) => (
          <motion.div
            key={index}
            className={`my-16 flex flex-col md:flex-row items-center rounded-lg border border-gray-200 shadow-md p-6 gap-8
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
          `}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="w-full md:w-1/2 flex-shrink-0"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.content}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 p-4 text-center md:text-left"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {item.content}
              </h4>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {item.description}
              </p>
              <h6 className="text-lg font-semibold text-blue-600">
                {item.time}
              </h6>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {radioData.length > 3 && (
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-white border border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 hover:shadow-md text-blue-900 font-medium transition-all duration-200"
            onClick={toggleExpansion}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ScheduleTabs;
