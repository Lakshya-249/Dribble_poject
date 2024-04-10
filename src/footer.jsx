import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full text-md font-md text-gray-600 px-[5rem] max-sm:px-[2rem] font-sans max-sm:text-center bg-gray-50 text-left">
      <div className="flex max-sm:flex-wrap space-x-5 py-[4rem] max-sm:space-x-0 max-sm:space-y-10 justify-between max-sm:justify-center border-b-gray-300 border-b-[1px]">
        <div className="space-y-5 w-[20%] max-sm:w-full">
          <p className="text-pink-500 font-[Forte] text-4xl">dribble</p>
          <p>
            Dribble is the worlds leading community for creaters to share,grow,
            and get hired
          </p>
          <div className="flex space-x-4 max-sm:justify-center">
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">For Designers</p>
          <p>Go Pro!</p>
          <p>Explore Design Work</p>
          <p>Design Blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Weekly Warm-Up</p>
          <p>Refer a friend</p>
          <p>Code of Conduct</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Hire Designers</p>
          <p>Post a Job Opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
          <p className="text-black font-bold mt-3">Brands</p>
          <p>Advertise with us</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Terms of Service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Directories</p>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers for hire</p>
          <p>Tags</p>
          <p>Places</p>
          <p className="text-black font-bold mt-3">Design assets</p>
          <p>Dribble Marketplace</p>
          <p>Creative Market</p>
          <p>Fontspring</p>
          <p>Font squirrel</p>
        </div>
        <div className="space-y-2">
          <p className="text-black font-bold">Design Resources</p>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry Trends</p>
        </div>
      </div>
      <div className="w-full flex justify-between text-gray-400 text-sm font-semibold py-5 max-sm:space-x-4">
        <p>&#169; 2023 Dribble. All rights reserved.</p>
        <div className="flex items-center space-x-2">
          <p>
            <span className="text-black font-bold">20,501,853</span> shots
            dribbled
          </p>
          <FontAwesomeIcon
            icon={faDribbble}
            size="xl"
            style={{ color: "#ee5ddb" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
