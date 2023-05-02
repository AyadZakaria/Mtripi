import React from "react";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import AuthUser from "../../auth/AuthUser";
import { user } from "../../assets";
// import Swal from "sweetalert2";
import styles from "../../style";

const Profile = () => {
  const { http } = AuthUser();
  const [activeLink, setActiveLink] = useState("Edit");
  const [userdetail, setUserdetail] = useState();
  const [fName, setFName] = useState("");
  const [id, setid] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
      setid(res.data.id);
      setFName(res.data.fName);
      setLName(res.data.lName);
      setPhone(res.data.phone);
      setInstagram(res.data.instagram);
      setPassword(res.data.password);
      setEmail(res.data.email);
    });
  };
  const [dateTime, setDateTime] = useState(new Date());
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const submitForm = () => {
    http
      .put(`/user/${id}`, {
        email: email,
        password: password,
        fName: fName,
        lName: lName,
        instagram: instagram,
        phone: phone,
        description: description,
      })
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <div className={`${styles.containerHeight} bg-[#0F1014] h-screen p-3 `}>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="text-dimWhite text-center h-[20vh] w-9/12 m-auto rounded-lg pt-[6vh]  bg-slate-800 ">
        <p>{dateTime.toLocaleDateString("en-US", options)}</p>
        <h2 className="text-3xl">
          Welcome back, {userdetail && `${userdetail.fName}`}
        </h2>
      </div>
      <div className="text-dimWhite w-1/2  mt-10 m-auto">
        <div className="w-[10%] m-auto">
          <img src={user} alt="Avatar" className="w-[100%] " />
        </div>

        <div className="mt-6">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="fName"
                id="fName"
                class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                required
              />
              <label
                for="fName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lName"
                id="lName"
                class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                required
              />
              <label
                for="lName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                for="phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="instagram"
                id="instagram"
                class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <label
                for="instagram"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Instagram (@username)
              </label>
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              id="description"
              class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(e) => setdescription(e.target.value)}
            />
            <label
              for="description"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              description
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="block py-2.5 px-0 w-full text-sm text-dimWhite bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <button
            type="button"
            onClick={submitForm}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
