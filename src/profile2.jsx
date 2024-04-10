import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "./assets/pic1.svg";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/user";

const Profile2 = () => {
  const [interests, setFormData] = useState([]);
  const navigate = useNavigate();
  const dispatach = useDispatch();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const handleClick = (ref, ref2, ref3) => {
    if (ref.current.className.endsWith("bg-pink-500")) {
      ref.current.className = ref.current.className.replace("bg-pink-500", "");
      ref.current.className = ref.current.className.replace(
        "border-pink-500",
        "border-gray-400"
      );
      ref2.current.className += " hidden";
      ref3.current.className = ref3.current.className.replace(
        "border-pink-500",
        "border-gray-200"
      );
      // console.log(ref.current.className);
      return;
    }
    ref3.current.className = ref3.current.className.replace(
      "border-gray-200",
      "border-pink-500"
    );
    ref.current.className += " bg-pink-500";
    ref2.current.className = ref2.current.className.replace("hidden", "");
    ref.current.className = ref.current.className.replace(
      "border-gray-400",
      "border-pink-500"
    );
  };
  const toggleStringElements = (element) => {
    if (interests.includes(element)) {
      setFormData(interests.filter((item) => item !== element)); // Remove the element if it exists
    } else {
      setFormData([...interests, element]); // Add the element if it doesn't exist
    }
    // console.log(interests);
  };

  const handleClick2 = async () => {
    if (interests.length > 0) {
      dispatach(addUser({ interests: interests }));
      // console.log(selector);
      navigate("/verify");
    }
  };
  return (
    <div className="flex flex-col items-stretch w-full h-full px-10 py-6 font-sans">
      <div className="flex space-x-10 max-sm:mb-5 max-sm:w-full max-sm:justify-between">
        <p className="text-pink-500 text-left font-[Forte] max-sm:mb-5 text-[1.8rem] self-start">
          dribble
        </p>
        <div
          className="px-5 max-sm:px-7 flex items-center bg-gray-100 rounded-xl hover:cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <div className="w-2 h-2 border-b-2 border-l-2 border-gray-500 rotate-45"></div>
        </div>
      </div>
      <p className="text-[2.5rem] font-bold mb-3">
        What brings you to Dribble?
      </p>
      <p className="text-md font-semibold text-gray-500">
        Select the options that best describe you. Don't worry you can explore
        other options later.
      </p>
      <div className="flex max-sm:flex-wrap max-sm:h-auto max-sm:w-full max-sm:justify-center max-sm:space-x-0 max-sm:space-y-5 self-center space-x-5 mt-[5rem]">
        <div
          ref={ref7}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[10rem] mx-auto">
              <img src={pic} />
            </div>
            <p className="text-md font-bold mb-6">
              I'm a designer looking to share my work
            </p>
            <p
              ref={ref4}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              With over seven million shots from a vast community of designers,
              Dribble is leading source of design and inspiration.
            </p>
            <div>
              <button
                ref={ref}
                onClick={() => {
                  handleClick(ref, ref4, ref7);
                  toggleStringElements("share");
                }}
                className="w-5 h-5 rounded-full border-[1px] border-gray-400"
              >
                <div className="w-1.5 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1 mx-auto"></div>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ref8}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[10rem] mx-auto">
              <img src={pic2} />
            </div>
            <p className="text-md font-bold mb-6">
              I'm looking to hire a <br /> designer
            </p>
            <p
              ref={ref5}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              With over seven million shots from a vast community of designers,
              Dribble is leading source of design and inspiration.
            </p>
            <div>
              <button
                ref={ref2}
                onClick={() => {
                  handleClick(ref2, ref5, ref8);
                  toggleStringElements("hiring");
                }}
                className="w-5 h-5 rounded-full border-[1px] border-gray-400"
              >
                <div className="w-1.5 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1 mx-auto"></div>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={ref9}
          className="flex flex-col items-center justify-end w-[18rem] h-[16rem] rounded-xl border-2 border-gray-200 px-5"
        >
          <div className="space-y-2 mb-5">
            <div className="w-[12rem] mx-auto">
              <img src={pic3} />
            </div>
            <p className="text-md font-bold mb-6">
              I'm looking for design inspiration
            </p>
            <p
              ref={ref6}
              className="text-sm font-semibold text-gray-400 hidden"
            >
              With over seven million shots from a vast community of designers,
              Dribble is leading source of design and inspiration.
            </p>
            <div>
              <button
                ref={ref3}
                onClick={() => {
                  handleClick(ref3, ref6, ref9);
                  toggleStringElements("inspiration");
                }}
                className="w-5 h-5 rounded-full border-[1px] border-gray-400"
              >
                <div className="w-1.5 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1 mx-auto"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <p className="text-md font-bold mb-5">
          Anything else? You can choose multiple
        </p>
        <button
          onClick={handleClick2}
          className={`px-20 py-2  ${
            interests.length === 0 ? "bg-pink-300" : "bg-pink-500"
          } font-semibold text-white rounded-xl mb-2`}
        >
          Finish
        </button>
        <p className="text-xs font-bold text-gray-400 max-sm:mb-5">
          or Press RETURN
        </p>
      </div>
    </div>
  );
};

export default Profile2;
