import React from "react";
import Linkedn from "../assets/icons/linkedinn.png";
import Twitter from "../assets/icons/twitter.png";
import Youtube from "../assets/icons/youtube.png";
import Instagram from "../assets/icons/instagramm.png";

const Icons = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-white">Connect with us : </p>
      <ul className='flex gap-5 '>
        <li>
          {" "}
          <img src={Linkedn} className='w-10' alt='' />
        </li>
        <li>
          {" "}
          <img src={Twitter} className='w-10' alt='' />
        </li>
        <li>
          {" "}
          <img src={Youtube} className='w-10' alt='' />
        </li>
        <li>
          {" "}
          <img src={Instagram} className='w-10' alt='' />
        </li>
      </ul>
    </div>
  );
};

export default Icons;
