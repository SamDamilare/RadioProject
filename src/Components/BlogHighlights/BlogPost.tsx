import React from "react";

const BlogPost = () => {
  return (
    <div className="flex justify-center">
      <div
        className="mt-16 mr-[200px] ml-[200px] text-left p-6 rounded-xl"
        style={{ background: "white", width: "750px" }}
      >
        <h1 className="text-lg font-semibold mt-2">Post a Comment</h1>
        <p className="text-sm italic ">0 Comment</p>
        <p className="text-sm">Label</p>
        <textarea
          className="border-2 rounded-md w-[700px] mt-4 p-2"
          name=""
          id=""
          rows="3"
          placeholder="Value"
        ></textarea>
        <div>
          <button
            className="mt-4 italic px-6 py-1.5 rounded-sm"
            style={{ background: "#22185f", color: "white" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
