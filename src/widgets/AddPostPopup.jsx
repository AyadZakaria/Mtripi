import React from "react";
import FileInput from './FileInput'

const AddPost = () => {
  return (
    <div className="text-dimWhite w-1/2 m-auto">
      <form className="flex flex-col items-center">
        <FileInput label="Select A Picture" />
        <label className="text-l font-bold m-1" htmlFor="desc">
          {" "}
          Place Description{" "}
        </label>
        <input
          className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
          type="text"
          name="desc"
          id="desc"
          placeholder="Merzouga Moroccan Desert ... "
        />
        <button className="primaryBtn"> Share Destination</button>
      </form>
    </div>
  );
};

export default AddPost;
