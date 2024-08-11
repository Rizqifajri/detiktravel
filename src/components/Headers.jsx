import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import iconCategory from "../assets/Category.png";
import cancelCategory from "../assets/cancel.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    navigate("/registrasi");
  };

  return (
    <div className='fixed left-0 right-0 mx-12 z-50 my-5 max-w-full bg-white/50 rounded-full'>
      <nav className='flex flex-col md:flex-row justify-between items-center rounded-full md:p-6 md:backdrop-blur-xl bg-blur w-full h-auto'>
        <div className='flex justify-between items-center w-full backdrop-blur rounded-full'>
          <img src={logo} alt='Logo' className='w-20 md:w-52 mx-5' />
          <div className='md:hidden cursor-pointer z-50' onClick={toggleMenu}>
            <img
              src={isOpen ? cancelCategory : iconCategory}
              className='w-28'
              alt='Menu Icon'
            />
          </div>
        </div>
        <ul
          className={`font-semibold backdrop-blur w-full bg-blur flex flex-col justify-center items-center text-center gap-8 transition-transform duration-300 ease-in-out p-2 ${
            isOpen ? "flex" : "hidden"
          } md:flex md:flex-row md:items-center md:p-0`}
        >
          <li className='text-[16px] cursor-pointer hover:font-bold p-2 hover:bg-gray-200 rounded-full transition-all'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[16px] cursor-pointer hover:font-bold hover:bg-gray-200 rounded-full p-2 transition-all'>
            <Link
              to='tentang-program'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Tentang Program
            </Link>
          </li>
          <li className='text-[16px] cursor-pointer hover:font-bold p-2 hover:bg-gray-200 rounded-full transition-all'>
            <Link
              to='berita'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Berita
            </Link>
          </li>
          <Button onClick={handleClick} title='Registrasi' />
        </ul>
      </nav>
    </div>
  );
};

export default Headers;
