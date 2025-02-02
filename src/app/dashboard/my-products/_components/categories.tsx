"use client"
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCheckWindow } from "@/hooks/checksizeWindow";
// Import Swiper styles
import 'swiper/css';
interface CategoriesProps {

}

const Categories: FunctionComponent<CategoriesProps> = () => {
  const [counts, setcounts] = useState({ active_count: 0, expired_count: 0, pending_count: 0, rejected_count: 0 });
  const pathname = usePathname();
  console.log(pathname);

  const array = [
    { item: 'Aktiv', count: counts.active_count, url: '/dashboard/my-products' },
    { item: 'Müddəti bitmiş', count: counts.expired_count, url: '/dashboard/my-products/expired-list' },
    { item: 'Dərc olunmamış', count: counts.rejected_count, url: '/dashboard/my-products/unpublished-ones' },
    { item: 'Gözləmədə olan', count: counts.pending_count, url: '/dashboard/my-products/pendings' }
  ]


  console.log(array,'array');
  
  
      function changeUser(){
     
          
          if (typeof window!=="undefined"&&localStorage.getItem('user')!==null) {
            setcounts(JSON.parse(localStorage.getItem("user")||"")||"")
             }
      }
      useEffect(() => {
    
          changeUser()
      }, [pathname]);

  return (<div>
    <ul className=" px-5 lg:px-6 lg:flex items-center lg:bg-[#E8E9F2] lg:rounded-[20px] lg:gap-x-3 lg:w-fit lg:p-6">
      {/* {array.map((item) => (
                <li className={" cursor-pointer text-sm font-bold " + (item.url == pathname ? '  text-primaryColor' : 'text-[#9EA0AD]')} key={item.item}>
                    <Link href={item.url}>  {item.item}({item.count})</Link>
                </li>
            ))} */}

      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      // Apply fit-content to Swiper container

      >
        {array.map((item) => (
          <SwiperSlide key={item.item} style={{ width: 'fit-content' }}>
            <li
              className={
                "cursor-pointer text-sm font-bold w-min " +
                (item.url == pathname ? "text-primaryColor" : "text-[#9EA0AD]")
              }
              key={item.item}
            >
              <Link href={item.url} className="text-nowrap">
                {item.item}
                ({item.count})
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>


    </ul>
  </div>);
}

export default Categories;



