import {React, useState} from "react";
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
  const [destination, setDestination ] = useState("");
  const [image, setImage] = useState();
  const [userid, setuserid] = useState(user.id);
  
  const submitForm = () => {
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("budget", budget);
    formdata.append("image_path",image);
    formdata.append("destination",destination);
    formdata.append("start_date",startDate);
    formdata.append("user_id",userid);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  

    axios.post(
      'http://localhost:8000/api/addpost',formdata,config
      );
      console.log(userid)
    
    

  // http.post('/addpost', { title:title, description: description, budget: budget , start_date:startDate , destination:destination, image_path:image}).then((res) => {
  //      navigate('/profile')
  //    });
 };


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
      >
     
        <div className="grid grid-cols-1 w-[40vh] space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="text"
            name="title"
            placeholder="Merzouga..."
            onChange={e => setTitle(e.target.value)}
                  required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Description
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="text"
            name="description"
            placeholder="Merzouga..."
            onChange={e => setDescription(e.target.value)}
                  required
          />
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Spent Budget
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
            type="number"
            name="budget"
            placeholder="Merzouga..."
            onChange={e => setBudget(e.target.value)}
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
            onChange={e => setStartDate(e.target.value)}
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
            onChange={e => setDestination(e.target.value)}
                  required
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
                  <input type="file" name="image_path" onChange={e => setImage(e.target.files[0])}
                  required  className="text-black"/>
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
