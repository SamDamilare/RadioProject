// const BlogDetails = () => {
//   return (
//     <div className="mr-[80px] ml-[80px] mt-14">
//       <div>
//         <img src="https://res.cloudinary.com/dktrwqio1/image/upload/v1726051303/NYRadio/Rectangle_563_slmutl.png" />
//       </div>
//       <div className="mr-[80px] ml-[80px] mt-14">
//         <h1 className="text-4xl font-semibold">Finibus Bonorum et Malorum</h1>
//         <div className="flex gap-[60px]">
//           <p className="font-bold">Written by John Doe</p>
//           <p>Monday May 20</p>
//         </div>
//         <p className="mt-8 text-sm">
//           Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
//           in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
//           voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
//           ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
//           dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//           aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
//           qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
//           dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
//           quia non numquam eius modi tempora incidunt ut labore et dolore magnam
//           aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
//           exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
//           ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
//           ea voluptate velit esse quam nihil molestiae consequatur, vel illum
//           qui dolorem eum fugiat quo voluptas nulla pariatur?"
//         </p>
//         <p className="mt-8 font-bold italic">
//           Section 1.10.33 of "de Finibus Bonorum et Malorum"
//         </p>
//         <p className="mt-4 text-sm">
//           "At vero eos et accusamus et iusto odio dignissimos ducimus qui
//           blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
//           et quas molestias excepturi sint occaecati cupiditate non provident,
//           similique sunt in culpa qui officia deserunt mollitia animi, id est
//           laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
//           distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
//           cumque nihil impedit quo minus id quod maxime placeat facere possimus,
//           omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
//           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//           eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
//           Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
//           voluptatibus maiores alias consequatur aut perferendis doloribus
//           asperiores repellat."
//         </p>
//         <p className="font-bold text-2xl mt-8">Section</p>
//         <p className="text-sm mt-4">
//           At vero eos et accusamus et iusto odio dignissimos ducimus qui
//           blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
//           et quas molestias excepturi sint occaecati cupiditate non provident,
//           similique sunt in culpa qui officia deserunt mollitia animi, id est
//           laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
//           distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
//           cumque nihil impedit quo minus id quod maxime placeat facere possimus,
//           omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
//           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//           eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
//           Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
//           voluptatibus maiores alias consequatur aut perferendis doloribus
//           asperiores repellat."
//           <br />
//           <br />
//           At vero eos et accusamus et iusto odio dignissimos ducimus qui
//           blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
//           et quas molestias excepturi sint occaecati cupiditate non provident,
//           similique sunt in culpa qui officia deserunt mollitia animi, id est
//           laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
//           distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
//           cumque nihil impedit quo minus id quod maxime placeat facere possimus,
//           omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
//           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//           eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
//           Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
//           voluptatibus maiores alias consequatur aut perferendis doloribus
//           asperiores repellat.
//           <br />
//           <br />" At vero eos et accusamus et iusto odio dignissimos ducimus qui
//           blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
//           et quas molestias excepturi sint occaecati cupiditate non provident,
//           similique sunt in culpa qui officia deserunt mollitia animi, id est
//           laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
//           distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
//           cumque nihil impedit quo minus id quod maxime placeat facere possimus,
//           omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
//           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//           eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
//           Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
//           voluptatibus maiores alias consequatur aut perferendis doloribus
//           asperiores repellat."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

"use client";

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { LuArrowUpRight } from "react-icons/lu";
// import { FaRegCalendar, FaUser } from "react-icons/fa";

// import { type BlogPost, getBlogPostById } from "../utilities/data";
// import Footer from "../Navigation/Footer";
// import Navbar from "../Navigation/Navbar";

// const BlogDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate API call
//     const fetchBlogPost = () => {
//       if (id) {
//         const post = getBlogPostById(id);
//         setBlogPost(post || null);
//       }
//       setLoading(false);
//     };

//     fetchBlogPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   if (!blogPost) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
//         <button
//           onClick={() => navigate("/blog")}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Go back to blog
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         {/* Header with back button */}
//         <div className="bg-white shadow-sm">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <button
//               onClick={() => navigate("/blog")}
//               className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <LuArrowUpRight className="w-5 h-5 mr-2" />
//               Back to Blog
//             </button>
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Hero image */}
//           <div className="mb-8">
//             <img
//               src={blogPost.image || "/placeholder.svg"}
//               alt={blogPost.title}
//               className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Article content */}
//           <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               {blogPost.title}
//             </h1>

//             {/* Meta information */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-6 border-b border-gray-200">
//               <div className="flex items-center text-gray-600">
//                 <FaUser className="w-4 h-4 mr-2" />
//                 <span className="font-semibold">
//                   Written by {blogPost.author}
//                 </span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <FaRegCalendar className="w-4 h-4 mr-2" />
//                 <span>{blogPost.date}</span>
//               </div>
//             </div>

//             {/* Article content */}
//             <div className="prose prose-lg max-w-none">
//               <div
//                 dangerouslySetInnerHTML={{ __html: blogPost.content }}
//                 className="space-y-6 text-gray-700 leading-relaxed [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-3"
//               />
//             </div>
//           </article>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetails;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { LuArrowUpRight } from "react-icons/lu";
// import { FaRegCalendar, FaUser } from "react-icons/fa";
// import supabase from "../supabase/supabase";
// import Footer from "../Navigation/Footer";
// import Navbar from "../Navigation/Navbar";
// import BlogCommentSection from "./CommentSection";

// interface BlogPost {
//   blog_id: string;
//   title: string;
//   content: string;
//   images: string;
//   created_at: string;
//   tags: string[];
//   status: string;
//   uid: string;
// }

// const BlogDetails = () => {
//   const { blog_id } = useParams<{ blog_id: string }>();
//   const navigate = useNavigate();
//   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       if (!blog_id) return;

//       const { data, error } = await supabase
//         .from("Blogz")
//         .select("*")
//         .eq("id", blog_id)
//         .single();

//       if (error) {
//         console.error("Error fetching blog post:", error);
//         setBlogPost(null);
//       } else {
//         setBlogPost(data);
//       }

//       setLoading(false);
//     };

//     fetchBlogPost();
//   }, [blog_id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   if (!blogPost) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
//         <button
//           onClick={() => navigate("/blog")}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Go back to blog
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-white shadow-sm">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <button
//               onClick={() => navigate("/blog")}
//               className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <LuArrowUpRight className="w-5 h-5 mr-2" />
//               Back to Blog
//             </button>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="mb-8">
//             <img
//               src={blogPost.images || "/placeholder.svg"}
//               alt={blogPost.title}
//               className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               {blogPost.title}
//             </h1>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-6 border-b border-gray-200">
//               <div className="flex items-center text-gray-600">
//                 <FaUser className="w-4 h-4 mr-2" />
//                 <span className="font-semibold">Written by {blogPost.uid}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <FaRegCalendar className="w-4 h-4 mr-2" />
//                 <span>
//                   {new Date(blogPost.created_at).toLocaleDateString()}
//                 </span>
//               </div>
//             </div>

//             <div className="prose prose-lg max-w-none">
//               <div
//                 dangerouslySetInnerHTML={{ __html: blogPost.content }}
//                 className="space-y-6 text-gray-700 leading-relaxed [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-3"
//               />
//             </div>
//             <BlogCommentSection />
//           </article>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetails;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { LuArrowUpRight } from "react-icons/lu";
// import { FaRegCalendar, FaUser } from "react-icons/fa";
// import supabase from "../supabase/supabase";
// import Footer from "../Navigation/Footer";
// import Navbar from "../Navigation/Navbar";
// import BlogCommentSection from "./CommentSection";

// interface BlogPost {
//   blog_id: string;
//   title: string;
//   content: string;
//   images: string;
//   created_at: string;
//   tags: string[];
//   status: string;
//   uid: string;
// }

// const BlogDetails = () => {
//   const { blog_id } = useParams<{ blog_id: string }>();
//   const navigate = useNavigate();
//   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       if (!blog_id) return;

//       const { data, error } = await supabase
//         .from("Blogz")
//         .select("*")
//         .eq("blog_id", blog_id)
//         .single();

//       if (error) {
//         console.error("Error fetching blog post:", error);
//         setBlogPost(null);
//       } else {
//         setBlogPost(data);
//       }

//       setLoading(false);
//     };

//     fetchBlogPost();
//   }, [blog_id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   if (!blogPost) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
//         <button
//           onClick={() => navigate("/blog")}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Go back to blog
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-white shadow-sm">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <button
//               onClick={() => navigate("/blog")}
//               className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <LuArrowUpRight className="w-5 h-5 mr-2" />
//               Back to Blog
//             </button>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="mb-8">
//             <img
//               src={blogPost.images || "/placeholder.svg"}
//               alt={blogPost.title}
//               className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               {blogPost.title}
//             </h1>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-6 border-b border-gray-200">
//               <div className="flex items-center text-gray-600">
//                 <FaUser className="w-4 h-4 mr-2" />
//                 <span className="font-semibold">Written by {blogPost.uid}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <FaRegCalendar className="w-4 h-4 mr-2" />
//                 <span>
//                   {new Date(blogPost.created_at).toLocaleDateString()}
//                 </span>
//               </div>
//             </div>

//             <div className="prose prose-lg max-w-none">
//               <div
//                 dangerouslySetInnerHTML={{ __html: blogPost.content }}
//                 className="space-y-6 text-gray-700 leading-relaxed [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-3"
//               />
//             </div>

//             {/* Comment section */}
//             <BlogCommentSection blogId={blog_id!} />
//           </article>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetails;

"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaRegCalendar, FaUser } from "react-icons/fa";
import supabase from "../supabase/supabase";
import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";
import BlogCommentSection from "./CommentSection";

interface BlogPost {
  blog_id: string;
  title: string;
  content: string;
  images: string;
  created_at: string;
  tags: string;
  uid: string;
}

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Try different possible parameter names
  const blog_id = params.blog_id || params.id || params.blogId;

  console.log("All URL params:", params);
  console.log("Extracted blog_id:", blog_id);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!blog_id) {
        console.log("No blog_id provided. Available params:", params);
        setLoading(false);
        return;
      }

      console.log("Fetching blog post with ID:", blog_id);

      const { data, error } = await supabase
        .from("Blogz")
        .select("*")
        .eq("blog_id", blog_id)
        .single();

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Error fetching blog post:", error);
        setBlogPost(null);
      } else {
        console.log("Blog post data:", data);
        setBlogPost(data);
      }
      setLoading(false);
    };

    fetchBlogPost();
  }, [blog_id, params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading blog post...</div>
      </div>
    );
  }

  if (!blog_id) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Invalid blog URL</h1>
        <p className="mb-4">No blog ID found in URL parameters</p>
        <button
          onClick={() => navigate("/blog")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go back to blog
        </button>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go back to blog
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LuArrowUpRight className="w-5 h-5 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <img
              src={blogPost.images || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center text-gray-600">
                <FaUser className="w-4 h-4 mr-2" />
                <span className="font-semibold">Written by {blogPost.uid}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <FaRegCalendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(blogPost.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="space-y-6 text-gray-700 leading-relaxed [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:mt-6 [&>h3]:mb-3"
              />
            </div>

            {/* Comment section */}
            <BlogCommentSection blogId={blog_id} />
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
