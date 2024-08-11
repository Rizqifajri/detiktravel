import React from "react";
import article from "../assets/thumbnail/artikel-1.png";
import thumbnail from "../assets/thumbnail/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail/thumbnail3.png";
import logo from "../assets/logo.png";

const CardNews = () => {
  return (
    <div>
      <div id='berita' className='flex items-center gap-5 my-5 mx-5'>
        <img className='w-52 ' src={logo} alt='' />
        <h1 className='text-orange-400 font-bold text-[40px]'>Update</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-5 justify-between mx-5'>
        <div className='relative overflow-hidden rounded-xl cursor-pointer lg:w-[700px]'>
          <img
            className='object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105'
            src={article}
            alt=''
          />
          <div className='absolute bottom-0 left-0 right-0 bg-[#00D1FF] p-5 z-20'>
            <h1 className='font-bold text-white text-[20px]'>
              Warga Thailand Pakai Boneka Doraemon untuk Ritual Pemanggil Hujan
            </h1>
            <p className='text-white '>3 Jam yang lalu</p>
          </div>
        </div>

        <div className='flex flex-col cursor-pointer'>
          <div className='flex w-full gap-5 h-auto'>
            <div className='relative w-40 h-32 overflow-hidden rounded-lg'>
              <img
                className='object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 '
                src={thumbnail}
                alt=''
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-[14px]'>
                Thailand Ngarep Cuan Banyak Dari Turis China dan Jepang
              </h1>
              <p>1 Jam yang lalu</p>
            </div>
          </div>
          <div className='flex w-full gap-5 h-auto my-5'>
            <div className='relative w-40 h-32 overflow-hidden rounded-lg'>
              <img
                className='object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105'
                src={thumbnail2}
                alt=''
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-[14px]'>
                Thailand Ngarep Cuan Banyak Dari Turis China dan Jepang
              </h1>
              <p>1 Jam yang lalu</p>
            </div>
          </div>
          <div className='flex w-full gap-5 h-auto my-5'>
            <div className='relative w-40 h-32 overflow-hidden rounded-lg'>
              <img
                className='object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105'
                src={thumbnail3}
                alt=''
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-[14px]'>
                Thailand Ngarep Cuan Banyak Dari Turis China dan Jepang
              </h1>
              <p>1 Jam yang lalu</p>
            </div>
          </div>
          <button className='text-white bg-[#00D1FF] px-5 py-5 rounded-md font-semibold '>
            Lihat Lainnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
