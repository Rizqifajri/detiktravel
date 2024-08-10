import React, { useState } from "react";
import photo1 from "../assets/background1.png";
import photo2 from "../assets/background2.png";
import photo3 from "../assets/background3.png";
import title from "../assets/Title.png";
import Button from "../components/Button";
import Carousels from "../components/Carousels";

const Home = () => {
  const [background, setBackground] = useState(photo1);

  const handleImageClick = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-[#00D1FF] via-transparent to-transparent' />
      <div className='relative flex flex-col lg:flex-row justify-between items-end h-full gap-5 p-10'>
        <div className='flex flex-col gap-5'>
          <img className='mt-56' src={title} alt='Title' />
          <Button title='Tentang program' />
        </div>
        <Carousels onImageClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Home;
