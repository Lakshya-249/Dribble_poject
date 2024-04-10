import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./features/user";

const Profile = () => {
  const [location, setlocation] = useState("");
  const [preview, setpreview] = useState("");
  // console.log(preview);
  const setdata = (e) => {
    setlocation(e.target.value);
  };
  const dispatach = useDispatch();
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    prieviewFile(file);
  };

  const prieviewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setpreview(reader.result);
    };
  };
  const handleClick = () => {
    if (location.trim() !== "") {
      dispatach(addUser({ location: location, image: preview }));
      navigate("/profile2");
    }
  };
  return (
    <div className="flex flex-col items-stretch w-full h-full px-10 py-6 font-sans">
      <p className="text-pink-500 text-left font-[Forte] max-sm:mb-5 text-[1.8rem] self-start">
        dribble
      </p>
      <div className="w-[50%] self-center text-left text-pretty max-sm:w-full">
        <p className="text-[2.5rem] font-black mb-3">
          Welcome! Let's create your profile
        </p>
        <p className="text-md font-semibold text-gray-500 mb-8">
          Let others get to Know you better! You can do these later
        </p>
        <p className="text-xl font-bold mb-6">Add an avatar</p>
        <div className="flex space-x-10 mb-[3rem] max-sm:flex-wrap max-sm:space-x-0">
          <div className="flex justify-center items-center w-[10rem] h-[10rem] overflow-hidden border-gray-300 rounded-full border-dashed border-2">
            {preview ? (
              <img src={preview} alt="image" className="w-[50rem]" />
            ) : (
              <FontAwesomeIcon
                icon={faCamera}
                size="lg"
                style={{ color: "#bfbfbf" }}
              />
            )}
          </div>
          <div className="mt-5 max-sm:mt-8 space-y-7">
            <label
              htmlFor="photo"
              className="font-bold text-sm border-gray-150 rounded-xl border-2 px-5 py-2 hover:cursor-pointer"
            >
              Choose image
            </label>
            <input
              type="file"
              onChange={(e) => handleFileInputChange(e)}
              name="photo"
              id="photo"
              className="hidden"
            />
            <p className="text-md font-semibold text-gray-500">
              &nbsp;&gt; Or choose one of our defaults
            </p>
          </div>
        </div>
        <p className="text-xl font-bold mb-5">Add your location</p>
        <input
          type="text"
          className="w-full outline-none border-b-2 border-gray-200 py-2 placeholder:font-semibold mb-10"
          placeholder="Enter location"
          onChange={(e) => setdata(e)}
        />
        <button
          onClick={handleClick}
          className={`px-20 py-2  ${
            location.trim() !== "" ? "bg-pink-500" : "bg-pink-300"
          } font-semibold text-white rounded-xl mb-7`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Profile;
