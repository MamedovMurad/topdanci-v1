"use client"
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCheckWindow } from "@/hooks/checksizeWindow";
// Import Swiper styles
import 'swiper/css';
interface CategoriesProps {

}

const Categories: FunctionComponent<CategoriesProps> = () => {

    const pathname = usePathname();
    console.log(pathname);

    const array = [
        { item: 'Aktiv', count: '0', url: '/dashboard/my-products' },
        { item: 'Müddəti bitmiş', count: '2', url: '/dashboard/my-products/expired-list' },
        { item: 'Dərc olunmamış', count: '0', url: '/dashboard/my-products/unpublished-ones' },
        { item: 'Gözləmədə olan', count: '0', url: '/dashboard/my-products/pendings' }
    ]


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
    <SwiperSlide key={item.item} style={{ width:'fit-content'}}>
      <li
        className={
          "cursor-pointer text-sm font-bold w-min " +
          (item.url == pathname ? "text-primaryColor" : "text-[#9EA0AD]")
        }
        key={item.item}
      >
        <Link href={item.url} className="text-nowrap">
          {item.item}
        </Link>
      </li>
    </SwiperSlide>
  ))}
</Swiper>


        </ul>
    </div>);
}

export default Categories;



