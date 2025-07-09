// "use client";

// import type React from "react";

// import { useState } from "react";
// import { FaCommentDots, FaPaperPlane } from "react-icons/fa";

// interface Comment {
//   id: number;
//   name: string;
//   comment: string;
//   timestamp: Date;
// }

// export default function BlogCommentSection() {
//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       comment:
//         "Great article! This really helped me understand the concept better. Thanks for sharing your insights.",
//       timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
//     },
//     {
//       id: 2,
//       name: "Mike Chen",
//       comment:
//         "I've been struggling with this topic for weeks. Your explanation is so clear and easy to follow!",
//       timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       comment:
//         "Would love to see more content like this. Do you have any recommendations for further reading?",
//       timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
//     },
//   ]);

//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (name.trim() && comment.trim()) {
//       const newComment: Comment = {
//         id: Date.now(),
//         name: name.trim(),
//         comment: comment.trim(),
//         timestamp: new Date(),
//       };

//       setComments([newComment, ...comments]);
//       setName("");
//       setComment("");
//     }
//   };

//   const formatTimeAgo = (timestamp: Date) => {
//     const now = new Date();
//     const diffInMinutes = Math.floor(
//       (now.getTime() - timestamp.getTime()) / (1000 * 60)
//     );

//     if (diffInMinutes < 1) return "Just now";
//     if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

//     const diffInHours = Math.floor(diffInMinutes / 60);
//     if (diffInHours < 24) return `${diffInHours}h ago`;

//     const diffInDays = Math.floor(diffInHours / 24);
//     if (diffInDays < 7) return `${diffInDays}d ago`;

//     return timestamp.toLocaleDateString();
//   };

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((word) => word[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-8">
//       {/* Comment Form */}

//       {/* Comments Section */}
//       <div className="space-y-4">
//         <div className="flex items-center gap-2">
//           <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
//           <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
//             {comments.length}
//           </span>
//         </div>

//         {comments.length === 0 ? (
//           <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//             <div className="py-12 text-center">
//               <FaCommentDots className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500">
//                 No comments yet. Be the first to share your thoughts!
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//             <div className="p-4 border-b border-gray-200">
//               <p className="text-sm text-gray-600">Recent Comments</p>
//             </div>
//             <div className="h-48 overflow-y-auto p-4 space-y-4">
//               {comments.map((comment, index) => (
//                 <div
//                   key={comment.id}
//                   className={`${
//                     index !== comments.length - 1
//                       ? "border-b border-gray-100 pb-4"
//                       : ""
//                   }`}
//                 >
//                   <div className="flex gap-3">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                       <span className="text-blue-600 font-medium text-xs">
//                         {getInitials(comment.name)}
//                       </span>
//                     </div>

//                     <div className="flex-1 space-y-1">
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <h3 className="font-medium text-gray-900 text-sm">
//                           {comment.name}
//                         </h3>
//                         <span className="text-xs text-gray-500">
//                           {formatTimeAgo(comment.timestamp)}
//                         </span>
//                       </div>

//                       <p className="text-gray-700 text-sm leading-relaxed">
//                         {comment.comment}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <div className="flex items-center gap-2">
//             <FaCommentDots className="w-5 h-5 text-blue-600" />
//             <h2 className="text-xl font-semibold text-gray-900">
//               Leave a Comment
//             </h2>
//           </div>
//         </div>
//         <div className="p-6">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="comment"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Comment
//               </label>
//               <textarea
//                 id="comment"
//                 placeholder="Share your thoughts..."
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 rows={5}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={!name.trim() || !comment.trim()}
//               className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               <FaPaperPlane className="w-4 h-4 mr-2" />
//               Post Comment
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import supabase from "../supabase/supabase"; // Adjust this path as needed
// import { FaCommentDots, FaPaperPlane } from "react-icons/fa";

// interface Comment {
//   id: number;
//   name: string;
//   comment: string;
//   created_at: string;
//   blog_id: string; // Ensure this matches your column type, likely uuid
// }

// interface BlogCommentSectionProps {
//   blog_id: string; // This should be the UUID of the blog post
// }

// export default function BlogCommentSection({
//   blog_id,
// }: BlogCommentSectionProps) {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState<string | null>(null); // For user feedback

//   useEffect(() => {
//     // Only fetch comments if blogId is provided and valid (e.g., not an empty string)
//     if (blog_id) {
//       fetchComments();

//       // Optional: Realtime subscription for new comments
//       // const subscription = supabase
//       //   .from(`commentSectionForm:blog_id=eq.${blogId}`)
//       //   .on('INSERT', payload => {
//       //     // Add new comment to the top of the list
//       //     setComments(prevComments => [payload.new as Comment, ...prevComments]);
//       //   })
//       //   .subscribe();

//       // // Clean up subscription on unmount
//       // return () => {
//       //   supabase.removeSubscription(subscription);
//       // };
//     } else {
//       console.warn("BlogCommentSection mounted without a valid blog_id.");
//       setStatusMessage(
//         "Blog ID is missing, comments cannot be loaded or posted."
//       );
//     }
//   }, [blog_id]);

//   const fetchComments = async () => {
//     setLoading(true);
//     setStatusMessage(null); // Clear previous status messages
//     try {
//       const { data, error } = await supabase
//         .from("commentSectionForm") // <-- VERIFY THIS TABLE NAME EXACTLY
//         .select("*")
//         .eq("blog_id", blog_id)
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.error("Error fetching comments:", error.message);
//         setStatusMessage("Failed to load comments: " + error.message);
//       } else {
//         setComments(data || []);
//         if (data && data.length === 0) {
//           setStatusMessage("No comments yet. Be the first to comment!");
//         } else {
//           setStatusMessage(null); // Clear message if comments are loaded
//         }
//       }
//     } catch (err: any) {
//       console.error("Caught error during comment fetch:", err.message);
//       setStatusMessage("An unexpected error occurred while fetching comments.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatusMessage(null); // Clear previous status messages

//     const trimmedName = name.trim();
//     const trimmedComment = comment.trim();

//     if (!trimmedName || !trimmedComment) {
//       setStatusMessage("Name and comment cannot be empty.");
//       return;
//     }
//     if (!blog_id) {
//       setStatusMessage("Missing blog ID. Cannot submit comment.");
//       console.error("Missing blogId. Cannot submit comment.");
//       return;
//     }

//     setLoading(true); // Indicate submission is in progress
//     try {
//       console.log(
//         "Attempting to insert comment with blogId:",
//         blog_id,
//         "name:",
//         trimmedName,
//         "comment:",
//         trimmedComment
//       );

//       const { error } = await supabase.from("commentSectionForm").insert([
//         {
//           blog_id: blog_id, // <-- VERIFY THIS COLUMN NAME EXACTLY
//           name: trimmedName, // <-- VERIFY THIS COLUMN NAME EXACTLY
//           comment: trimmedComment, // <-- VERIFY THIS COLUMN NAME EXACTLY
//           // created_at is typically handled by a default value in Supabase,
//           // so you don't usually include it here unless you have a specific need.
//         },
//       ]);

//       if (error) {
//         console.error("Supabase Insert failed:", error.message, error.details);
//         // Provide more specific error messages for RLS or constraint violations
//         if (error.code === "42501") {
//           // PostgreSQL error code for insufficient privilege (RLS)
//           setStatusMessage(
//             "Permission denied. You might not have access to post comments. Check RLS policies."
//           );
//         } else {
//           setStatusMessage("Failed to post comment: " + error.message);
//         }
//       } else {
//         console.log("Comment submitted successfully.");
//         setName("");
//         setComment("");
//         setStatusMessage("Comment posted successfully!");
//         fetchComments(); // Refresh comments to show the new one
//       }
//     } catch (err: any) {
//       console.error("Caught error during comment submission:", err.message);
//       setStatusMessage("An unexpected error occurred while submitting.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   const formatTimeAgo = (timestamp: string) => {
//     const date = new Date(timestamp);
//     const now = new Date();
//     const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

//     if (diffSeconds < 60) return "Just now";
//     const diffMinutes = Math.floor(diffSeconds / 60);
//     if (diffMinutes < 60) return `${diffMinutes}m ago`;
//     const diffHours = Math.floor(diffMinutes / 60);
//     if (diffHours < 24) return `${diffHours}h ago`;
//     const diffDays = Math.floor(diffHours / 24);
//     if (diffDays < 7) return `${diffDays}d ago`;

//     // Fallback for older comments or custom date formatting
//     return date.toLocaleDateString();
//   };

//   const getInitials = (name: string) => {
//     if (!name) return ""; // Handle empty name
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-8">
//       {/* Comments Section */}
//       <div className="space-y-4">
//         <div className="flex items-center gap-2">
//           <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
//           <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
//             {comments.length}
//           </span>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//           <div className="p-4 border-b border-gray-200">
//             <p className="text-sm text-gray-600">Recent Comments</p>
//           </div>

//           <div className="h-48 overflow-y-auto p-4 space-y-4">
//             {loading && comments.length === 0 ? ( // Show loading only if no comments yet
//               <p className="text-sm text-gray-500">Loading comments...</p>
//             ) : comments.length === 0 ? (
//               <div className="text-gray-500 text-sm">
//                 {statusMessage || "No comments yet. Be the first to comment!"}
//               </div> // Show status message if no comments
//             ) : (
//               comments.map((c) => (
//                 <div
//                   key={c.id}
//                   className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
//                 >
//                   {" "}
//                   {/* last: classes for cleaner look */}
//                   <div className="flex gap-3">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                       <span className="text-blue-600 font-medium text-xs">
//                         {getInitials(c.name)}
//                       </span>
//                     </div>
//                     <div className="flex-1 space-y-1">
//                       <div className="flex items-center gap-2">
//                         <h3 className="font-medium text-gray-900 text-sm">
//                           {c.name}
//                         </h3>
//                         <span className="text-xs text-gray-500">
//                           {formatTimeAgo(c.created_at)}
//                         </span>
//                       </div>
//                       <p className="text-gray-700 text-sm">{c.comment}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Comment Form */}
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
//           <FaCommentDots className="w-5 h-5 text-blue-600" />
//           <h2 className="text-xl font-semibold text-gray-900">
//             Leave a Comment
//           </h2>
//         </div>
//         <div className="p-6">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="commenterName"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Name
//               </label>
//               <input
//                 id="commenterName"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 required
//                 disabled={loading}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="commentText"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Your Comment
//               </label>
//               <textarea
//                 id="commentText"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your comment..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-blue-500 focus:border-blue-500"
//                 rows={4}
//                 required
//                 disabled={loading}
//               />
//             </div>
//             {statusMessage && (
//               <p
//                 className={`text-sm ${
//                   statusMessage.includes("success")
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {statusMessage}
//               </p>
//             )}
//             <button
//               type="submit"
//               className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md transition-colors ${
//                 loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//               }`}
//               disabled={loading}
//             >
//               <FaPaperPlane className="w-4 h-4 mr-2" />
//               {loading ? "Posting..." : "Post Comment"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import type React from "react";
import { useEffect, useState, useCallback } from "react";
import supabase from "../supabase/supabase";
import { MessageCircle, Send } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  comment: string;
  created_at: string;
  blog_id: string;
}

interface BlogCommentSectionProps {
  blogId: string; // Ensure camelCase prop matches usage
}

export default function BlogCommentSection({
  blogId,
}: BlogCommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    setLoading(true);
    setStatusMessage(null);

    try {
      const { data, error } = await supabase
        .from("commentSectionForm")
        .select("*")
        .eq("blog_id", blogId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch error:", error.message);
        setStatusMessage("Could not load comments.");
      } else {
        setComments(data || []);
      }
    } catch (err: any) {
      console.error("Unexpected fetch error:", err.message);
      setStatusMessage("Something went wrong while loading comments.");
    } finally {
      setLoading(false);
    }
  }, [blogId]);

  useEffect(() => {
    if (blogId) fetchComments();
  }, [blogId, fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setStatusMessage("Name and comment fields cannot be empty.");
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    const { error } = await supabase.from("commentSectionForm").insert([
      {
        blog_id: blogId,
        name: name.trim(),
        comment: comment.trim(),
      },
    ]);

    if (error) {
      console.error("Insert error:", error.message);
      setStatusMessage("Failed to post comment.");
    } else {
      setName("");
      setComment("");
      setStatusMessage("Comment posted successfully!");
      fetchComments(); // Refresh comments
    }

    setLoading(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSeconds < 60) return "Just now";

    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Comment Display */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
            {comments.length}
          </span>
        </div>

        <div className="bg-white border rounded shadow-sm">
          <div className="p-4 border-b">
            <p className="text-sm text-gray-600">Recent Comments</p>
          </div>
          <div className="h-48 overflow-y-auto p-4 space-y-4">
            {loading && comments.length === 0 ? (
              <p className="text-sm text-gray-500">Loading comments...</p>
            ) : comments.length === 0 ? (
              <p className="text-sm text-gray-500">
                {statusMessage || "No comments yet. Be the first to comment!"}
              </p>
            ) : (
              comments.map((c) => (
                <div
                  key={c.id}
                  className="border-b border-gray-100 pb-4 last:border-none"
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                      {getInitials(c.name)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm text-gray-800">
                          {c.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {formatTimeAgo(c.created_at)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{c.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Comment Form */}
      <section className="bg-white border rounded shadow-sm">
        <div className="px-6 py-4 border-b flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Leave a Comment
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Write your comment..."
              required
              disabled={loading}
            />
          </div>
          {statusMessage && (
            <p
              className={`text-sm ${
                statusMessage.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
          <button
            type="submit"
            className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </section>
    </div>
  );
}
