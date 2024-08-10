import React from "react";
import photo1 from "../assets/background1.png";
import photo2 from "../assets/background2.png";
import photo3 from "../assets/background3.png";
import title from "../assets/title.png";
import Button from "../components/Button";
import Carousels from "../components/Carousels";

const Home = () => {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${photo1})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-[#00D1FF] via-transparent to-transparent' />
      <div className='relative flex flex-col lg:flex-row justify-between items-end h-full gap-5 p-10'>
        <div className='flex flex-col gap-5'>
          <div className="">
            <img className="my-24" src={title} alt='Title' />
            <Button title='Tentang program' />
          </div>
        </div>
        <Carousels />
      </div>
    </div>
  );
};

export default Home;
