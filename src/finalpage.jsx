import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import Slider from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Finalpage = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.users);
  const [image, setimage] = useState("");
  // console.log(selector);

  useEffect(() => {
    const change = async () => {
      // console.log(selector);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selector),
      });
      const data = await response.json();
      // const response2 = await fetch(`/api/getdetails/${selector.username}`);
      // const data2 = await response2.json();
      setimage(selector.image);
      // console.log(data);
    };
    change();
  }, []);
  return (
    <div className="flex flex-col justify-between font-sans w-full h-full">
      <div className="flex justify-between items-center px-5 py-3.5 w-full self-start border-b-gray-200 border-b-[1px]">
        <Slider />
        <div className="flex items-center text-md max-sm:hidden font-semibold text-gray-400 space-x-8">
          <p className="text-left text-black font-[Forte] text-3xl self-start">
            dribble
          </p>
          <p className="hover:cursor-pointer hover:text-black">Inspiration</p>
          <p className="hover:cursor-pointer hover:text-black">Find Work</p>
          <p className="hover:cursor-pointer hover:text-black">Learn Design</p>
          <p className="hover:cursor-pointer hover:text-black">Go Pro</p>
          <p className="hover:cursor-pointer hover:text-black">Hire Designer</p>
        </div>
        <div className="flex items-center space-x-5 max-sm:space-x-3">
          <div className="bg-gray-100 py-1.5 px-3 rounded-xl">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#919397" }}
            />
            <input
              type="text"
              className="outline-none px-2 bg-gray-100 w-[6rem]"
              placeholder="Search"
            />
          </div>
          <div className="w-[2rem] h-[2rem] rounded-full bg-gray-200 overflow-hidden">
            <img src={image} alt="img" />
          </div>
          <button className="px-4 py-1.5 bg-pink-500 font-semibold text-white rounded-xl">
            Upload
          </button>
        </div>
      </div>
      <div className="self-center text-md font-semibold text-gray-400 w-[50%] max-sm:w-full max-sm:px-5 space-y-4 my-[4rem]">
        <p className="text-[2.5rem] text-black font-bold">
          Please verify your email...
        </p>
        <FontAwesomeIcon
          icon={faEnvelopeCircleCheck}
          size="10x"
          style={{ color: "#bdbcbd" }}
        />
        <p>
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="text-black font-bold">account1234@gmail.design.com</p>
        <p>Click the confirmation link in that email to begin using Dribble.</p>
        <p>
          Didn't receive the email? Check Spam folder, it may have been caught
          by a filter. If you still doesn't see it, you can{" "}
          <span className="text-pink-500 font-bold">
            resend the confirmation email
          </span>
          .
        </p>
        <p>
          Wrong email address?{" "}
          <span
            onClick={() => navigate("/change")}
            className="text-pink-500 font-bold hover:cursor-pointer"
          >
            Change it
          </span>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Finalpage;
