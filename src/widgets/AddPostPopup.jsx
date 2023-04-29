import React from "react";
import { upload } from "../assets";

const AddPost = () => {
  return (
    <div className="text-dimWhite justify-around flex m-2 flex-col w-full h-1/2 items-center">
      <div className="text-center m-3">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
        <p className="mt-2 text-sm text-gray-400">
          Lorem ipsum is placeholder text.
        </p>
      </div>
      <form
        className="flex justify-between items-center w-[90vh] m-1"
        action="#"
        method="POST"
      >
        <div className="grid grid-cols-1 w-[40vh] space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Merzouga..."
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Description
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Merzouga..."
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Spent Budget
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Merzouga..."
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Trip Start Date
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Merzouga..."
          />
        </div>
        <div className="w-[40vh] text-center ">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Picture
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                <div className="flex flex-auto  mx-auto -mt-1">
                  <img
                    className="has-mask h-36 object-center"
                    src={upload}
                    alt="freepik image"
                  />
                </div>
                <p className="pointer-none text-gray-500 ">
                  <span className="text-sm">Drag and drop</span>
                  <br /> or{" "}
                  <a href="" id="" className="text-blue-600 hover:underline">
                    image
                  </a>{" "}
                  from your computer
                </p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: png, jpg, jpge</span>
          </p>
          <div>
            <button type="submit" className="primaryBtn">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
