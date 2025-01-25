// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { KatalogSVG, OtherProductsSVG } from '@/svg/allSvgs';

export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4.7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><KatalogSVG/></div></SwiperSlide>
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><OtherProductsSVG/></div></SwiperSlide>
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><KatalogSVG/></div></SwiperSlide>
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><OtherProductsSVG/></div></SwiperSlide>
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><KatalogSVG/></div></SwiperSlide>
      <SwiperSlide><div className=' w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'><OtherProductsSVG/></div></SwiperSlide>
    </Swiper>
  );
};