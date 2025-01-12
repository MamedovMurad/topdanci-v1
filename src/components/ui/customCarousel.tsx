"use client";
import { RightArrowSVG } from "@/svg/allSvgs";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative cursor-pointer overflow-hidden bg-[#F0F0F0] transition-all duration-500 p-1 rounded-2xl border border-[#9EA0AD] ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: isHovered ? "absolute" : "relative",
                width: isHovered ? "100%" : "100%",
                left: isHovered ? "0" : "20px",
                transform: isHovered ? "translateX(0)" : "translateX(20px)",
            }}
        >
            <Swiper
                spaceBetween={20}
                slidesPerView={isHovered ? 4.05 : 2.4} 
                className="transition-all duration-300 ease-in-out"
            >
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[210px] h-[210px]">
                        <Image alt="l" src={"/slider1.png"} layout="fill" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={`absolute right-12 top-24  ${isHovered?'z-0 hidden ':'z-10 block '}`}><RightArrowSVG/></div>
        </div>
    );
};

export default SwiperCarousel;
