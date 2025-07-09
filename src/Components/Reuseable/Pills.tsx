// const Pills = () => {
//   return (
//     <div className=" flex justify-center my-6">
//       {" "}
//       <span className="inline-flex items-center rounded-2xl w-[80px] mx-3 h-[30px] my-2  bg-[#f5f5f5] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//         <p className="m-auto">Label</p>
//       </span>
//       <span className="inline-flex items-center rounded-2xl w-[80px] mx-3 h-[30px] my-2  bg-[#f5f5f5] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//         <p className="m-auto">Label</p>
//       </span>
//       <span className="inline-flex items-center rounded-2xl w-[80px] mx-3 h-[30px] my-2  bg-[#f5f5f5] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//         <p className="m-auto">Label</p>
//       </span>
//       <span className="inline-flex items-center rounded-2xl w-[80px] mx-3 h-[30px] my-2  bg-[#f5f5f5] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//         <p className="m-auto">Label</p>
//       </span>
//       <span className="inline-flex items-center rounded-2xl w-[80px] mx-3 h-[30px] my-2  bg-[#f5f5f5] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//         <p className="m-auto">Label</p>
//       </span>
//     </div>
//   );
// };

// export default Pills;

// import { useState } from "react";
// import NewsFilterBar from "./NewsFilterBar"; // Adjust path
// import NewsCard from "./NewsCard"; // Example, create this component

// const NewsSection = ({ newsData }) => {
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   // Example filter logic (replace with your actual filtering)
//   const filteredNews =
//     selectedFilter === "All"
//       ? newsData
//       : newsData.filter((news) => news.category === selectedFilter);

//   const filters = ["All", "Trending", "Tech", "Sports"]; // Example filters

//   return (
//     <div>
//       <NewsFilterBar filters={filters} onFilterChange={handleFilterChange} />
//       <div className="grid grid-cols-3 gap-4">
//         {filteredNews.map((news) => (
//           <NewsCard key={news.id} news={news} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsSection;

"use client";

import { useState } from "react";
import { cn } from "../../../src/lib/utils";

// Categories from the Figma design
const categories = [
  { id: "politics", name: "Politics" },
  { id: "business", name: "Business" },
  { id: "music", name: "Music" },
  { id: "entertainment", name: "Entertainment" },
  { id: "movies", name: "Movies" },
  { id: "nigeria", name: "Nigeria" },
  { id: "label", name: "Label" }, // There are multiple "Label" items in the design
];

interface Pills {
  onCategoryChange?: (category: string) => void;
  className?: string;
}

export default function Pills({ onCategoryChange, className }: Pills) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div
      className={cn("w-[full] overflow-x-auto py-4 no-scrollbar", className)}
    >
      <div className="flex justify-center space-x-2 min-w-max px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <button
          onClick={() => handleCategoryClick("all")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
            activeCategory === "all"
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          )}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
