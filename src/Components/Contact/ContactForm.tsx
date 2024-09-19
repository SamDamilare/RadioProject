import React from "react";

const ContactForm = () => {
  return (
    <div
      className="p-16 mx-[180px] rounded-3xl my-8"
      style={{ background: "white" }}
    >
      <form className="m-8">
        {/* first row */}
        <div className="flex justify-between">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name *
            </label>
            <input
              type="string"
              id="fullName"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john david"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@yourmail.com"
              required
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex justify-between mt-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Company *
            </label>
            <input
              type="string"
              id="company"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your company name here"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Subject *
            </label>
            <input
              type="string"
              id="subject"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="how can we help?"
              required
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="mt-8">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows="8"
            class="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Hello there, I would like to talk about how to..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-[65%] h-[50px] rounded-md mt-12 "
            style={{ background: "#22185f", color: "white" }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
