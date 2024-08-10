import React from "react";
import logo from "../assets/logo.png";
import CardNews from "../components/CardNews";

const News = () => {
  return (
    <div className='h-auto pb-10 mx-5'>
      <div className='flex flex-col justify-center items-center'>
        <div id='berita' className='flex items-center gap-5 my-5'>
          <img className='w-52 ' src={logo} alt='' />
          <h1 className='text-orange-400 font-bold text-[25px]'>Update</h1>
        </div>
        <CardNews />
      </div>
    </div>
  );
};

export default News;
