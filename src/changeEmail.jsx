import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useSelector } from "react-redux";

function ChangeEmail() {
  const selector = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    if (email.trim() === "") return;
    const response = await fetch("/api/emailUpdate", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newEmail: email,
        username: selector.username,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      navigate("/verify");
    }
  };

  return (
    <div className="flex flex-col justify-between items-stretch w-full h-full py-6 font-sans">
      <p className="text-pink-500 text-left font-[Forte] px-10 max-sm:mb-5 text-[1.8rem] self-start">
        dribble
      </p>
      <div className="w-[50%] self-center text-left text-pretty max-sm:w-full my-10 px-10">
        <p className="text-[2.5rem] font-black mb-3">Change email...</p>
        <input
          type="text"
          className="w-full outline-none border-b-2 border-gray-200 py-2 placeholder:font-semibold mb-10"
          placeholder="Enter New Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleClick}
          className={`px-20 py-2  ${
            email.trim() !== "" ? "bg-pink-500" : "bg-pink-300"
          } font-semibold text-white rounded-xl mb-7`}
        >
          Change email
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ChangeEmail;
