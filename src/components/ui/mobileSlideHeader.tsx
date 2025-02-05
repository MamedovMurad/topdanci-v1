// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { KatalogSVG, OtherProductsSVG } from '@/svg/allSvgs';
import Link from 'next/link';

export default ({data}: any) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4.7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        data?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <Link href={'/products?category='+item.id}  dangerouslySetInnerHTML={{__html:item?.icon}} className='  w-[55px] h-[55px] bg-[#E8E9F2] rounded-lg flex justify-center items-center'>
             
            </Link>
          </SwiperSlide>

        ))
      }
    </Swiper>
  );
};