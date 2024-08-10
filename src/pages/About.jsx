import React from "react";
import aboutImg from "../assets/about-image.png";
import Button from "../components/Button";
import photo2 from "../assets/background2.png";
import point from "../assets/icons/point1.png";
import point1 from "../assets/icons/point.png";

const About = () => {
  return (
    <div className='bg-[#00D1FF] h-auto flex flex-col xl:flex-row gap-5 justify-center pb-10'>
      <div>
        <img className='w-[400px] xl:w-[700px] md:mx-auto' src={aboutImg} alt='' />
      </div>
      <div className='flex flex-col lg:flex-row xl:flex-col gap-5'>
        <div className='flex md:w-[700px] flex-col gap-5 mx-5'>
          <h1 id="tentang-program" className='text-white font-bold text-[32px]'>Tentang Program</h1>
          <p className='text-white text-[16px] md:w-[500px] text-justify'>
            Bergabunglah dalam "Explore Thailand bersama Detiktravel"! Kompetisi
            ini terbuka bagi pembaca Detiktravel yang ingin menikmati perjalanan
            ke Thailand. Kunjungi destinasi menakjubkan seperti pantai Pak Bia
            Island dan destinasi lain di Phuket, Thailand. Jadi bagian dari
            perjalanan kami dan menangkan hadiah jalan-jalan yang tak
            terlupakan!
          </p>
          <Button title='Daftar Sekarang' />
        </div>
        <div className='flex flex-col gap-5 mx-5'>
          <h1 className='text-white font-bold text-[32px]'>Mekanisme</h1>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <img src={point} alt='' />
              <div className='flex flex-col'>
                <h1 className='text-white font-bold text-[32px]'>
                  Isi Formulir
                </h1>
                <p className='text-yellow-300 font-bold'>1 - 31 Mei 2023</p>
                <p className='text-white'>
                  Lengkapi formulir pendaftaran dengan data sebenarnya
                </p>
              </div>
            </div>
            <div className='flex gap-5'>
              <img src={point} alt='' />
              <div className='flex flex-col'>
                <h1 className='text-white font-bold text-[32px]'>Penjurian</h1>
                <p className='text-yellow-300 font-bold'>1 - 7 Juni 2023</p>
                <p className='text-white'>
                  Ikuti rangkain penjurian online/offline
                </p>
              </div>
            </div>
            <div className='flex gap-5'>
              <img className="w-[40px] h-[40px]" src={point1} alt='' />
              <div className='flex flex-col'>
                <h1 className='text-white font-bold text-[32px]'>
                  Pengumuman Pemenang
                </h1>
                <p className='text-yellow-300 font-bold'>11 Juni 2023</p>
                <p className='text-white'>
                  Ikuti rangkain penjurian online/offline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
