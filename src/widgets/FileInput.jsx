import React, { useState } from "react";

const FileInput = ({ label }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onChange(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onChange(null);
  };

  return (
    <div className="text-center flex flex-col justify-around p-2 m-2">
      <label className="font-bold">{label}</label>
      {file && (
        <div className="relative">
          <img
            src={URL.createObjectURL(file)}
            alt="file preview"
            className="w-24 h-24object-cover rounded-md border border-gray-300 m-2"
          />
          <button
            className="absolute top-0 right-0 w-6 h-6 rounded-full bg-green-500 text-white flex justify-center items-center"
            onClick={handleRemoveFile}
          >
            X
          </button>
        </div>
      )}
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;
