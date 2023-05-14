import { React, useState } from "react";
import { upload } from "../assets";
import { useNavigate } from "react-router";
import AuthUser from "../auth/AuthUser";
import axios from "axios";

const EditPostPopup = (props) => {
  const { http, token, user } = AuthUser();
  const navigate = useNavigate();
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);
  const [budget, setBudget] = useState(props.post.budget);
  const [startDate, setStartDate] = useState(props.post.start_date);
  const [destination, setDestination] = useState(props.post.destination);
  const [img, setImage] = useState();

  let postId = props.post.id;
  const handleImgChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const [userid, setuserid] = useState(user.id);

  const submitForm = () => {
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("budget", budget);
    formdata.append("image_path", img);
    formdata.append("destination", destination);
    formdata.append("start_date", startDate);
    formdata.append("user_id", userid);
    const config = {
      headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data" },
    };
    axios.patch(`http://localhost:8000/api/editpost/${postId}`, formdata, config);
    
  };

  return (
    <div className="text-dimWhite justify-around flex m-2 flex-col w-full h-1/2 items-center">
      <div className="text-center m-3">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">Edit Post</h2>
        <p className="mt-2 text-sm text-gray-400">
          Modifiy Your Post Easier Than Ever
        </p>
      </div>
      <form className="flex justify-between items-center w-[90vh] m-1">
        <div className="grid grid-cols-1 w-[40vh] space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Title
            
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="text"
            name="title"
            placeholder="Merzouga..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Description
          </label>
          <textarea
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="text"
            name="description"
            placeholder="it Was a realy Nice trip..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Spent Budget ($)
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="number"
            name="budget"
            placeholder="10.99 $"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Trip Start Date
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="date"
            name="start_date"
            placeholder="Merzouga..."
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            destination
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="text"
            name="destination"
            placeholder="Merzouga..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="w-[40vh] text-center ">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Picture
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-xl border-2 w-full h-60 p-10 group text-center">
              <h1 className=" w-[30%] top-2/4 absolute">
                Click <span className="text-green-300 underline">Here</span> To
                Browse a new Picture from Your Computer
              </h1>
              <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                <div className="flex flex-auto  mx-auto -mt-1">
                  {img == null && (
                    <img
                      src={`${meta.env.IMAGES_PATH}/posts/${props.post.image_path}`}
                      alt="Your "
                    />
                  )}
                  <div className="relative">
                    {img && (
                      <div className="relative bac">
                        <img
                          src={URL.createObjectURL(img)}
                          alt="file preview"
                          className="w-[100%]  object-cover rounded-md border border-gray-300 m-2"
                        />
                        <button
                          className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center"
                          onClick={handleRemoveImage}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <input
                type="file"
                name="image_path"
                className="hidden"
                onChange={handleImgChange}
              />
            </label>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: png, jpg, jpge</span>
          </p>
          <div>
            <button type="button" className="primaryBtn" onClick={submitForm}>
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPostPopup;
