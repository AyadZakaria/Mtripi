import React from "react";
import FileInput from './FileInput'
import { React, useState } from "react";
import { upload } from "../assets";
import { useNavigate } from "react-router";
import AuthUser from "../auth/AuthUser";
import axios from "axios";

const AddPost = () => {
  const { http, token, user } = AuthUser();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState();
  const [startDate, setStartDate] = useState();
  const [destination, setDestination] = useState("");
  const [img, setImage] = useState();

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
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post("http://localhost:8000/api/addpost", formdata, config);
    console.log(userid);
    setTimeout(() => {
      window.location.reload(true);
    }, 2000);

    // http.post('/addpost', { title:title, description: description, budget: budget , start_date:startDate , destination:destination, image_path:image}).then((res) => {
    //      navigate('/profile')
    //    });
  };

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
    <div className="text-dimWhite justify-around flex m-2 flex-col w-full h-1/2 items-center">
      <div className="text-center m-3">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
        <p className="mt-2 text-sm text-gray-400">
          Lorem ipsum is placeholder text.
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
              <h1 className="text-green-500 w-[30%] top-2/4 absolute">
                Click <span className="text-blue-500 underline">Here</span> To
                Browse a Picture from Your Computer
              </h1>
              <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                <div className="flex flex-auto  mx-auto -mt-1">
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
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
