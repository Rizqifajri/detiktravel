// Carousels.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import photo1 from "../assets/background1.png";
import photo2 from "../assets/background2.png";
import photo3 from "../assets/background3.png";

const Carousels = ({ onImageClick }) => {
  const swiperRef = useRef(null)

  const handleImageClick = (photo) => {
    onImageClick(photo);
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  return (
    <div className='w-[700px]'>
      <Swiper 
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        <SwiperSlide className="w-">
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo1}
            alt='photo1'
            onClick={() => handleImageClick(photo1)}
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo2}
            alt='photo2'
            onClick={() => handleImageClick(photo2)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo3}
            alt='photo3'
            onClick={() => handleImageClick(photo3)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo1}
            alt='photo3'
            onClick={() => handleImageClick(photo1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo2}
            alt='photo3'
            onClick={() => handleImageClick(photo2)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[200px] h-[300px] object-cover rounded-xl shadow-lg cursor-pointer"
            src={photo3}
            alt='photo3'
            onClick={() => (photo3)}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousels;
