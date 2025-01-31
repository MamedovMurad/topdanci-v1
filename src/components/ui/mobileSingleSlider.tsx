"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

export default ({images}:{images:{
  "src": string,
  "alt": string
}[]}) => {
  return (
    <Swiper

    modules={[ Pagination,]}
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      {
        images?.map((item,index)=>(
          <SwiperSlide key={index}>
          <div className='h-[180px] relative mt-5'>
              <Image alt={item.alt} src={item.src} fill/>
          </div>
          </SwiperSlide>
        ))
      }
  
     
   

   
    </Swiper>
  );
};