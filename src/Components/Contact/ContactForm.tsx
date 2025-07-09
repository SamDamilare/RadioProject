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

import { useState } from "react";
// import supabase from "../supabase/supabase"; // この行がエラーの原因でした。

// 実際のSupabaseクライアントをここにインポートするか、
// プロジェクト内の正しいパスに設定してください。
// 例: import supabase from "../../lib/supabaseClient";
const supabase = {
  from: (tableName) => ({
    insert: async (data) => {
      console.log(
        `Supabase (Mock): Inserting into ${tableName} with data:`,
        data
      );
      // ここで実際のSupabaseの挿入ロジックを呼び出す
      // 例: const { error } = await actualSupabase.from(tableName).insert(data);
      // return { error };
      return { error: null }; // エラーなしをシミュレート
    },
    select: async () => {
      console.log(`Supabase (Mock): Selecting from ${tableName}`);
      return { data: [], error: null }; // 空のデータをシミュレート
    },
    eq: () => ({ select: async () => ({ data: [], error: null }) }), // モックの拡張
    order: () => ({ select: async () => ({ data: [], error: null }) }), // モックの拡張
  }),
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await supabase.from("ContactForm").insert([formData]);

    if (error) {
      setError("Something went wrong. Please try again.");
      console.error("Supabase insert error:", error); // デバッグのためにエラーをログに記録
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

    setLoading(false);
  };

  return (
    <div
      className="p-8 md:p-16 mx-auto max-w-4xl rounded-3xl my-8" /* レスポンシブ対応のためにパディングと最大幅を調整 */
      style={{ background: "white" }}
    >
      <form className="m-4 md:m-8">
        {" "}
        {/* レスポンシブ対応のためにマージンを調整 */}
        {/* 最初の行 */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {" "}
          {/* モバイルでのスタッキングのためにflex-colとgapを追加 */}
          <div className="w-full md:w-1/2">
            {" "}
            {/* レスポンシブ対応のために幅を調整 */}
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john david"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            {" "}
            {/* レスポンシブ対応のために幅を調整 */}
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@yourmail.com"
              required
            />
          </div>
        </div>
        {/* 2番目の行 */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-8 mb-8">
          {" "}
          {/* モバイルでのスタッキングのためにflex-colとgapを追加 */}
          <div className="w-full md:w-1/2">
            {" "}
            {/* レスポンシブ対応のために幅を調整 */}
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company *
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your company name here"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            {" "}
            {/* レスポンシブ対応のために幅を調整 */}
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="how can we help?"
              required
            />
          </div>
        </div>
        {/* 3番目の行 */}
        <div className="mt-8 mb-8">
          {" "}
          {/* 下マージンを追加 */}
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Hello there, I would like to talk about how to..."
            required
          ></textarea>
        </div>
        {/* オプション: 成功/エラーメッセージ */}
        {success && (
          <p className="text-green-600 mt-4 text-center">
            Message sent successfully!
          </p>
        )}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full md:w-[65%] h-[50px] rounded-md mt-12 text-white" /* レスポンシブ対応のために幅を調整 */
            style={{ background: "#22185f" }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
