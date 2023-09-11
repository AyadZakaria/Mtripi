import React, { useState, useEffect, useRef } from "react";
import AddPost from "../../widgets/AddPostPopup";
import Navbar from "../Navbar";
const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

  const handleAddPostClick = () => {
    setIsPopupOpen(true);
  };

  const handleHidePostClick = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-gray-100 p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {isPopupOpen ? (
        <div
          ref={popupRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-50 shadow-lg"
        >
          <button
            className="absolute top-2 right-2"
            onClick={handleHidePostClick}
          >
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
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddPostClick}
        >
          Add Post
        </button>
      )}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-40"></div>
      )}
    </div>
  );
};

export default Profile;
