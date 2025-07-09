// const ContactForm = () => {
//   return (
//     <div
//       className="p-16 mx-[180px] rounded-3xl my-8"
//       style={{ background: "white" }}
//     >
//       <form className="m-8">
//         {/* first row */}
//         <div className="flex justify-between">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Full Name *
//             </label>
//             <input
//               type="string"
//               id="fullName"
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="john david"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Your Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="example@yourmail.com"
//               required
//             />
//           </div>
//         </div>
//         {/* second row */}
//         <div className="flex justify-between mt-8">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Company *
//             </label>
//             <input
//               type="string"
//               id="company"
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="your company name here"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               Subject *
//             </label>
//             <input
//               type="string"
//               id="subject"
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="how can we help?"
//               required
//             />
//           </div>
//         </div>

//         {/* Third Row */}
//         <div className="mt-8">
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Message *
//           </label>
//           <textarea
//             id="message"
//             rows={8}
//             className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Hello there, I would like to talk about how to..."
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="button"
//             className="w-[65%] h-[50px] rounded-md mt-12 "
//             style={{ background: "#22185f", color: "white" }}
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

// import { useState } from "react";
// import supabase from "../supabase/supabase";

// const supabase = {
//   from: (tableName) => ({
//     insert: async (data) => {
//       console.log(
//         `Supabase (Mock): Inserting into ${tableName} with data:`,
//         data
//       );

//       return { error: null }; // エラーなしをシミュレート
//     },
//     select: async () => {
//       console.log(`Supabase (Mock): Selecting from ${tableName}`);
//       return { data: [], error: null }; // 空のデータをシミュレート
//     },
//     eq: () => ({ select: async () => ({ data: [], error: null }) }), // モックの拡張
//     order: () => ({ select: async () => ({ data: [], error: null }) }), // モックの拡張
//   }),
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     company: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     const { error } = await supabase.from("ContactForm").insert([formData]);

//     if (error) {
//       setError("Something went wrong. Please try again.");
//       console.error("Supabase insert error:", error);
//     } else {
//       setSuccess(true);
//       setFormData({
//         full_name: "",
//         email: "",
//         company: "",
//         subject: "",
//         message: "",
//       });
//     }

//     setLoading(false);
//   };

//   return (
//     <div
//       className="p-8 md:p-16 mx-auto max-w-4xl rounded-3xl my-8"
//       style={{ background: "white" }}
//     >
//       <form className="m-4 md:m-8">
//         {" "}

//         <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
//           {" "}

//           <div className="w-full md:w-1/2">
//             {" "}

//             <label
//               htmlFor="full_name"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Full Name *
//             </label>
//             <input
//               type="text"
//               id="full_name"
//               value={formData.full_name}
//               onChange={handleChange}
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="john david"
//               required
//             />
//           </div>
//           <div className="w-full md:w-1/2">
//             {" "}

//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Your Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="example@yourmail.com"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between gap-8 mt-8 mb-8">
//           {" "}

//           <div className="w-full md:w-1/2">
//             {" "}

//             <label
//               htmlFor="company"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Company *
//             </label>
//             <input
//               type="text"
//               id="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="your company name here"
//               required
//             />
//           </div>
//           <div className="w-full md:w-1/2">
//             {" "}

//             <label
//               htmlFor="subject"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Subject *
//             </label>
//             <input
//               type="text"
//               id="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="how can we help?"
//               required
//             />
//           </div>
//         </div>
//         {/* 3番目の行 */}
//         <div className="mt-8 mb-8">
//           {" "}
//           {/* 下マージンを追加 */}
//           <label
//             htmlFor="message"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Message *
//           </label>
//           <textarea
//             id="message"
//             rows={8}
//             value={formData.message}
//             onChange={handleChange}
//             className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Hello there, I would like to talk about how to..."
//             required
//           ></textarea>
//         </div>
//         {/* オプション: 成功/エラーメッセージ */}
//         {success && (
//           <p className="text-green-600 mt-4 text-center">
//             Message sent successfully!
//           </p>
//         )}
//         {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
//         <div className="flex justify-center">
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full md:w-[65%] h-[50px] rounded-md mt-12 text-white"
//             style={{ background: "#22185f" }}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";

import type React from "react";

import { useState, type ChangeEvent } from "react";

// Mock Supabase for development - replace with real import when ready
const mockSupabase = {
  from: (tableName: string) => ({
    insert: async (data: any) => {
      console.log(
        `Supabase (Mock): Inserting into ${tableName} with data:`,
        data
      );
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { error: null };
    },
    select: async () => {
      console.log(`Supabase (Mock): Selecting from ${tableName}`);
      return { data: [], error: null };
    },
    eq: () => ({ select: async () => ({ data: [], error: null }) }),
    order: () => ({ select: async () => ({ data: [], error: null }) }),
  }),
};

interface FormData {
  full_name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const { error } = await mockSupabase
        .from("ContactForm")
        .insert([formData]);

      if (error) {
        setError("Something went wrong. Please try again.");
        console.error("Supabase insert error:", error);
      } else {
        setSuccess(true);
        setFormData({
          full_name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Network error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-16 mx-auto max-w-4xl rounded-2xl md:rounded-3xl my-4 md:my-8 bg-white shadow-lg">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 text-sm md:text-base">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row - Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-4 transition-colors"
              placeholder="John David"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-4 transition-colors"
              placeholder="example@yourmail.com"
              required
            />
          </div>
        </div>

        {/* Second Row - Company and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company *
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-4 transition-colors"
              placeholder="Your company name here"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-4 transition-colors"
              placeholder="How can we help?"
              required
            />
          </div>
        </div>

        {/* Third Row - Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="block p-3 md:p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="Hello there, I would like to talk about how to..."
            required
          />
        </div>

        {/* Status Messages */}
        {success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium">
              ✅ Message sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-center font-medium">❌ {error}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-2/3 lg:w-1/2 h-12 md:h-14 bg-[#22185f] hover:bg-[#1a1449] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
