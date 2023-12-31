import React, { useEffect, useRef, useState } from "react";
import AddPost from "./AddPostPopup";

const Popupbtn = (props) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutsidePopup = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsidePopup);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    };
  }, [popupRef]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <button
        className=" bg-green-400  hover:bg-green-600 text-sm text-white font-medium py-1 px-2 rounded"
        onClick={handlePopupClick}
      >
        {props.label}
      </button>

      {isPopupOpen && (
        <div
          ref={popupRef}
          className="fixed p-5 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 shadow-lg"
        >
          <button className="absolute top-2 right-2" onClick={handlePopupClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <AddPost />
        </div>
      )}
    </div>
  );
};

export default Popupbtn;
