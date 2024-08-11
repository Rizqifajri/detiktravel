import React from "react";
import logo from "../assets/logo.png";
import CardNews from "../components/CardNews";
import background from "../assets/background1.png";

const News = () => {
  return (
    <div className='relative h-auto py-24' style={{ backgroundColor: "#FFFF", backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
      <div className='absolute inset-0 bg-white opacity-85'></div>
      <div className='relative flex flex-col justify-center items-center'>
        <CardNews />
      </div>
    </div>
  );
};

export default News;
