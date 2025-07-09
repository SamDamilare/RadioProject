// import { useState } from "react";
// import { Card, Image } from "antd";
// import { blogTabData, blogTab2Data } from "../utilities/data";
// import { LuArrowUpRight } from "react-icons/lu";

// const BlogTab = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="mx-20 my-20">
//       <div className="flex flex-col items-center">
//         <h4 className="text-xs font-bold text-[#583FBC]">BLOG</h4>
//         <h2 className="text-3xl font-bold text-[#181945] mt-6 mb-6">
//           Stay updated with our latest news
//         </h2>
//       </div>
//       <div className="flex gap-16">
//         {blogTabData().map((item, index) => (
//           <Card
//             key={index}
//             hoverable
//             style={{ width: "400px", fontFamily: "Poppins" }}
//           >
//             <Image src={item.image} preview={false} width="300px" />
//             <h4 className="text-xs font-bold text-[#0072CA] mt-2">
//               Trending News
//             </h4>
//             <div className="mt-2 flex items-start justify-start">
//               <div style={{ width: "250px" }}>
//                 <h4 className="text-xl font-extrabold">{item.title}</h4>
//                 <p>{item.text}</p>
//               </div>
//               <LuArrowUpRight className="text-xl" />
//             </div>
//           </Card>
//         ))}
//       </div>

//       {isExpanded && (
//         <div className="mt-8 flex gap-16">
//           {blogTab2Data().map((item, index) => (
//             <Card
//               key={index}
//               hoverable
//               style={{ width: "400px", fontFamily: "Poppins" }}
//             >
//               <Image src={item.image} preview={false} width="300px" />
//               <h4 className="text-xs font-bold text-[#0072CA] mt-2">
//                 Trending News
//               </h4>
//               <div className="mt-2 flex items-start justify-start">
//                 <div style={{ width: "250px" }}>
//                   <h4 className="text-xl font-extrabold">{item.title}</h4>
//                   <p>{item.text}</p>
//                 </div>
//                 <LuArrowUpRight className="text-xl" />
//               </div>
//             </Card>
//           ))}
//         </div>
//       )}
//       <div className="flex justify-center items-center mt-8">
//         <button
//           className="bg-white p-4 rounded-md hover:shadow-md text-blue-900"
//           onClick={toggleExpansion}
//         >
//           {isExpanded ? "Show Less" : "Read More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogTab;

// import { useState } from "react";
// import { Card, Image } from "antd";
// import { blogTabData, blogTab2Data } from "../utilities/data";
// import { LuArrowUpRight } from "react-icons/lu";

// const BlogTab = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => setIsExpanded(!isExpanded);

//   const blogData = blogTabData();
//   const blogData2 = blogTab2Data();

//   return (
//     <div className="mx-auto my-20 max-w-7xl px-6">
//       {/* Heading */}
//       <div className="flex flex-col items-center text-center">
//         <h4 className="text-xs font-bold text-[#583FBC]">BLOG</h4>
//         <h2 className="text-3xl font-bold text-[#181945] mt-4 mb-6">
//           Stay updated with our latest news
//         </h2>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
//         {blogData.map((item, index) => (
//           <Card
//             key={index}
//             hoverable
//             className="max-w-xs mx-auto"
//             style={{ fontFamily: "Poppins" }}
//           >
//             <Image src={item.image} preview={false} className="w-full" />
//             <h4 className="text-xs font-bold text-[#0072CA] mt-2">
//               Trending News
//             </h4>
//             <div className="mt-2 flex items-start">
//               <div className="flex-1">
//                 <h4 className="text-xl font-extrabold">{item.title}</h4>
//                 <p className="text-sm">{item.text}</p>
//               </div>
//               <LuArrowUpRight className="text-xl" />
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Expanded Blog Grid */}
//       {isExpanded && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-8">
//           {blogData2.map((item, index) => (
//             <Card
//               key={index}
//               hoverable
//               className="max-w-xs mx-auto"
//               style={{ fontFamily: "Poppins" }}
//             >
//               <Image src={item.image} preview={false} className="w-full" />
//               <h4 className="text-xs font-bold text-[#0072CA] mt-2">
//                 Trending News
//               </h4>
//               <div className="mt-2 flex items-start">
//                 <div className="flex-1">
//                   <h4 className="text-xl font-extrabold">{item.title}</h4>
//                   <p className="text-sm">{item.text}</p>
//                 </div>
//                 <LuArrowUpRight className="text-xl" />
//               </div>
//             </Card>
//           ))}
//         </div>
//       )}

//       {/* Toggle Button */}
//       <div className="flex justify-center items-center mt-8">
//         <button
//           className="bg-white p-4 rounded-md hover:shadow-md text-blue-900"
//           onClick={toggleExpansion}
//         >
//           {isExpanded ? "Show Less" : "Read More"}
//         </button>
//       </div>

//       {/* Responsive Styles */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .grid-cols-3 { grid-template-columns: 1fr !important; }
//             .grid-cols-2 { grid-template-columns: 1fr !important; }
//             .max-w-xs { max-width: 100% !important; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default BlogTab;

// import { useState, useEffect } from "react"; // Import useEffect
// import { Link } from "react-router-dom";
// import { Card, Image } from "antd";
// import { LuArrowUpRight } from "react-icons/lu";

// const generateMockBlogData = () => {
//   const basePosts = [
//     {
//       id: "future-tech",
//       image:
//         "https://via.placeholder.com/300x200/90EE90/000000?text=Blog+Image+1",
//       title: "The Future of Tech Innovation",
//       text: "Exploring breakthroughs in AI and sustainable technology for a better tomorrow.",
//     },
//     {
//       id: "sustainable-practices",
//       image:
//         "https://via.placeholder.com/300x200/ADD8E6/000000?text=Blog+Image+2",
//       title: "Sustainable Living Practices",
//       text: "Simple steps to reduce your carbon footprint and live more eco-consciously.",
//     },
//     {
//       id: "remote-work",
//       image:
//         "https://via.placeholder.com/300x200/DDA0DD/000000?text=Blog+Image+3",
//       title: "Mastering Remote Work",
//       text: "Tips and tricks for staying productive and connected in a distributed team.",
//     },
//   ];
//   const extendedPosts = [
//     {
//       id: "healthy-life",
//       image:
//         "https://via.placeholder.com/300x200/FFB6C1/000000?text=Blog+Image+4",
//       title: "Healthy Eating for a Busy Life",
//       text: "Quick and nutritious recipes that fit into any hectic schedule.",
//     },
//     {
//       id: "digital-storytelling",
//       image:
//         "https://via.placeholder.com/300x200/B0E0E6/000000?text=Blog+Image+5",
//       title: "The Art of Digital Storytelling",
//       text: "Crafting compelling narratives in the age of social media and multimedia.",
//     },
//     {
//       id: "financial-planning",
//       image:
//         "https://via.placeholder.com/300x200/E6E6FA/000000?text=Blog+Image+6",
//       title: "Financial Planning for Young Professionals",
//       text: "Essential advice for building a strong financial foundation early on.",
//     },
//     {
//       id: "blockchain-tech",
//       image:
//         "https://via.placeholder.com/300x200/FFD700/000000?text=Blog+Image+7",
//       title: "Understanding Blockchain Technology",
//       text: "A beginner's guide to the decentralized ledger and its applications.",
//     },
//     {
//       id: "mindfulness",
//       image:
//         "https://via.placeholder.com/300x200/87CEFA/000000?text=Blog+Image+8",
//       title: "Mindfulness for Daily Stress Relief",
//       text: "Simple meditation techniques to bring calm and focus to your day.",
//     },
//     {
//       id: "impact-of-ai",
//       image:
//         "https://via.placeholder.com/300x200/F08080/000000?text=Blog+Image+9",
//       title: "The Impact of AI on Education",
//       text: "How artificial intelligence is transforming learning and teaching environments.",
//     },
//   ];
//   return [...basePosts, ...extendedPosts];
// };
// // --- End Mock Data Simulation ---

// const BlogTab = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [allBlogPosts, setAllBlogPosts] = useState([]); // State to hold all blog posts

//   // Simulate fetching data from backend on component mount
//   useEffect(() => {
//     // In a real app:
//     // supabase.from('blog_posts').select('*').then(({ data, error }) => {
//     //   if (data) setAllBlogPosts(data);
//     //   if (error) console.error(error);
//     // });
//     setAllBlogPosts(generateMockBlogData()); // Using mock data for now
//   }, []);

//   const toggleExpansion = () => setIsExpanded(!isExpanded);

//   // Determine which posts to display
//   const displayedPosts = isExpanded ? allBlogPosts : allBlogPosts.slice(0, 3);

//   return (
//     <div className="mx-auto my-20 max-w-7xl px-6">
//       {/* Heading */}
//       <div className="flex flex-col items-center text-center">
//         <h4 className="text-xs font-bold text-[#583FBC]">BLOG</h4>
//         <h2 className="text-3xl font-bold text-[#181945] mt-4 mb-6">
//           Stay updated with our latest news
//         </h2>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
//         {displayedPosts.map((item, index) => (
//           <Card
//             key={index}
//             hoverable
//             className="max-w-xs mx-auto"
//             style={{ fontFamily: "Poppins" }}
//           >
//             <Link to={item.id}>
//               <Image src={item.image} preview={false} className="w-full" />
//               <h4 className="text-xs font-bold text-[#0072CA] mt-2">
//                 Trending News
//               </h4>
//               <div className="mt-2 flex items-start">
//                 <div className="flex-1">
//                   <h4 className="text-xl font-extrabold">{item.title}</h4>
//                   <p className="text-sm">{item.text}</p>
//                 </div>
//                 <LuArrowUpRight className="text-xl" />
//               </div>
//             </Link>
//           </Card>
//         ))}
//       </div>

//       {/* Toggle Button - Only show if there are more than 3 posts */}
//       {allBlogPosts.length > 3 && (
//         <div className="flex justify-center items-center mt-8">
//           <button
//             className="bg-white p-4 rounded-md hover:shadow-md text-blue-900"
//             onClick={toggleExpansion}
//           >
//             {isExpanded ? "Show Less" : "Read More"}
//           </button>
//         </div>
//       )}

//       {/* Responsive Styles (can be moved to a CSS file) */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .grid-cols-3 { grid-template-columns: 1fr !important; }
//             .grid-cols-2 { grid-template-columns: 1fr !important; }
//             .max-w-xs { max-width: 100% !important; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default BlogTab;

// "use client";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { LuArrowUpRight } from "react-icons/lu";
// import { type BlogPost, getAllBlogPosts } from "../utilities/data";

// const BlogTab = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>([]);

//   // Simulate fetching data from backend on component mount
//   useEffect(() => {
//     // In a real app:
//     // supabase.from('blog_posts').select('*').then(({ data, error }) => {
//     //   if (data) setAllBlogPosts(data);
//     //   if (error) console.error(error);
//     // });
//     setAllBlogPosts(getAllBlogPosts()); // Using shared data
//   }, []);

//   const toggleExpansion = () => setIsExpanded(!isExpanded);

//   // Determine which posts to display
//   const displayedPosts = isExpanded ? allBlogPosts : allBlogPosts.slice(0, 3);

//   return (
//     <div className="mx-auto my-20 max-w-7xl px-6">
//       {/* Heading */}
//       <div className="flex flex-col items-center text-center">
//         <h4 className="text-xs font-bold text-[#583FBC] tracking-wider">
//           BLOG
//         </h4>
//         <h2 className="text-3xl font-bold text-[#181945] mt-4 mb-6">
//           Stay updated with our latest news
//         </h2>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {displayedPosts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm mx-auto"
//           >
//             <Link to={`/blog/${item.id}`} className="block">
//               <div className="relative">
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-4">
//                 <h4 className="text-xs font-bold text-[#0072CA] mb-2 tracking-wider">
//                   TRENDING NEWS
//                 </h4>
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1 pr-2">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {item.text}
//                     </p>
//                   </div>
//                   <LuArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Toggle Button - Only show if there are more than 3 posts */}
//       {allBlogPosts.length > 3 && (
//         <div className="flex justify-center items-center mt-8">
//           <button
//             className="bg-white border border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 hover:shadow-md text-blue-900 font-medium transition-all duration-200"
//             onClick={toggleExpansion}
//           >
//             {isExpanded ? "Show Less" : "Read More"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogTab;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { LuArrowUpRight } from "react-icons/lu";
// import supabase from "../supabase/supabase";

// type BlogPost = {
//   id: number;
//   created_at: string;
//   uid: string;
//   images: string;
//   title: string;
//   tags: string;
//   content: string;
//   status: string;
// };

// const BlogTab = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       const { data, error } = await supabase
//         .from("newBlogPost")
//         .select("*")
//         .eq("status", "draft") // Change to 'published' if needed
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.error("Error fetching blog posts:", error);
//       } else {
//         setAllBlogPosts(data as BlogPost[]);
//       }

//       setLoading(false);
//     };

//     fetchBlogPosts();
//   }, []);

//   const toggleExpansion = () => setIsExpanded(!isExpanded);
//   const displayedPosts = isExpanded ? allBlogPosts : allBlogPosts.slice(0, 3);

//   const getTextPreview = (html: string, maxLength = 100) => {
//     const stripped = html.replace(/<[^>]+>/g, "");
//     return stripped.length > maxLength
//       ? stripped.slice(0, maxLength) + "..."
//       : stripped;
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <p className="text-gray-600">Loading blog posts...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto my-20 max-w-7xl px-6">
//       {/* Heading */}
//       <div className="flex flex-col items-center text-center">
//         <h4 className="text-xs font-bold text-[#583FBC] tracking-wider">
//           BLOG
//         </h4>
//         <h2 className="text-3xl font-bold text-[#181945] mt-4 mb-6">
//           Stay updated with our latest news
//         </h2>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {displayedPosts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm mx-auto"
//           >
//             <Link to={`/blog/${item.id}`} className="block">
//               <div className="relative">
//                 <img
//                   src={item.images || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-4">
//                 <h4 className="text-xs font-bold text-[#0072CA] mb-2 tracking-wider">
//                   TRENDING NEWS
//                 </h4>
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1 pr-2">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {getTextPreview(item.content)}
//                     </p>
//                   </div>
//                   <LuArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Toggle Button */}
//       {allBlogPosts.length > 3 && (
//         <div className="flex justify-center items-center mt-8">
//           <button
//             className="bg-white border border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 hover:shadow-md text-blue-900 font-medium transition-all duration-200"
//             onClick={toggleExpansion}
//           >
//             {isExpanded ? "Show Less" : "Read More"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogTab;

import { useState, useEffect } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import supabase from "../supabase/supabase";

type BlogPost = {
  blog_id: string;
  created_at: string;
  uid: string;
  images: string;
  title: string;
  tags: string;
  content: string;
};

const BlogTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase
        .from("Blogz")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
      } else {
        setAllBlogPosts(data as BlogPost[]);
      }
      setLoading(false);
    };

    fetchBlogPosts();
  }, []);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const displayedPosts = isExpanded ? allBlogPosts : allBlogPosts.slice(0, 3);

  const getTextPreview = (html: string, maxLength = 100) => {
    const stripped = html.replace(/<[^>]+>/g, "");
    return stripped.length > maxLength
      ? stripped.slice(0, maxLength) + "..."
      : stripped;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto my-20 max-w-7xl px-6">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h4 className="text-xs font-bold text-[#583FBC] tracking-wider">
          BLOG
        </h4>
        <h2 className="text-3xl font-bold text-[#181945] mt-4 mb-6">
          Stay updated with our latest news
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map((item) => (
          <div
            key={item.blog_id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm mx-auto"
          >
            <a href={`/blog/${item.blog_id}`} className="block">
              <div className="relative">
                <img
                  src={item.images || "/placeholder.svg?height=192&width=384"}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xs font-bold text-[#0072CA] mb-2 tracking-wider">
                  TRENDING NEWS
                </h4>
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {getTextPreview(item.content)}
                    </p>
                  </div>
                  <LuArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {allBlogPosts.length > 3 && (
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-white border border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 hover:shadow-md text-blue-900 font-medium transition-all duration-200"
            onClick={toggleExpansion}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogTab;
