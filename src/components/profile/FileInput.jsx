import React, { useState } from "react";

const FileInput = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="file" className="text-l font-bold m-1">
        Add Image
      </label>
      {preview && <img src={preview} alt="Preview" className="w-[40%] m-2" />}
      <input
        type="file"
        name="file"
        id="file"
        className="p-2 text-neutral-800 outline-none rounded-xl w-[70%] m-2"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
