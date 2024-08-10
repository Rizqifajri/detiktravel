import React from "react";
import logoOnFooter from "../assets/LogoOnFooter.png";
import Icons from "./Icons";


const Footer = () => {
  return (
    <footer className='bg-[#00D1FF] w-full'>
      <div className="flex flex-col p-10 gap-[30px]">
        <img className="w-[300px]" src={logoOnFooter} alt='logo' />
        <div className="flex flex-col md:flex-row justify-between">
          <p className='text-white text-[16px] md:w-[950px] text-justify'>
          Bergabunglah dalam "Explore Thailand bersama Detiktravel"! Kompetisi
          ini terbuka bagi pembaca Detiktravel yang ingin menikmati perjalanan
          ke Thailand. Kunjungi destinasi menakjubkan seperti pantai Pak Bia
          Island dan destinasi lain di Phuket, Thailand. Jadi bagian dari
          perjalanan kami dan menangkan hadiah jalan-jalan yang tak terlupakan!
        </p>
        <Icons/>
        </div>
        <div className="w-full h-[0.5px] bg-white">
        </div>
        <p className='text-white text-[12px]'>
          © 2024 PT. Detik Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
