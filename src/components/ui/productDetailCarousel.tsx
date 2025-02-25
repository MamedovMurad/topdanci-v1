"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles

import { Swiper as SwiperCore } from "swiper";
import { Navigation } from "swiper/modules";
import { DownArrowSVG } from "@/svg/allSvgs";
import ModalMantine from "../modal";
import ShowImage from "../modal/showImage";



export default function ImageCarousel({ images }: {
    images: {
        "src": string,
        "alt": string
    }[]
}) {
    console.log(images,'images1');
    
    const [isopen, setisopen] = useState<number|null>(null)
    const [active, setactive] = useState(0)
    // Install Swiper modules
    SwiperCore.use([Navigation]);
    const [currentImage, setCurrentImage] = useState(images?.[0]);
    const swiperRef = useRef<any>(null);
    useEffect(() => {
        if (swiperRef.current) {
            // Initialize Swiper
            const swiper = swiperRef.current.swiper;

            // Ensure navigation works after component is mounted
            swiper.navigation.update();
        }
    }, []);

    return (
        <>
            <div className="w-full bg-[#E8E9F2] py-5 px-5 rounded-[10px]">
                <div className="flex h-[360px] relative gap-x-6">
                    {/* Small carousel */}
                    <div className="  flex flex-col h-full justify-center items-center py-1 w-28 myCarousell">
                        <div className=" relative flex items-center justify-center ">
                            <Swiper
                                direction="vertical" // Vertical swiper
                                slidesPerView={3} // Number of slides visible
                                onSlideChange={({ activeIndex }) => {setCurrentImage(images[activeIndex]), setactive(activeIndex)}}
                                navigation={{
                                    nextEl: ".swiper-button-next", // Next button
                                    prevEl: ".swiper-button-prev", // Prev button
                                }}
                                className="swiper-container h-[280px] overflow-hidden"
                                spaceBetween={5}
                                ref={swiperRef} // Add ref to Swiper
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index} onClick={() => {setCurrentImage(image); setactive(index)}}
                                        className={currentImage === image ? "opacity-100" : "opacity-50"} >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${image.alt}`}
                                            className="cursor-pointer w-20 h-20 rounded-md hover:scale-105 transition-transform duration-300"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Arrows */}
                            <div className="swiper-button-prev absolute z-10 after:hidden -top-8 cursor-pointer">
                                <span className=" rotate-180 inline-block">  <DownArrowSVG color="#E51C23" /></span>
                            </div>
                            <div className="swiper-button-next absolute z-10 after:hidden -bottom-6 cursor-pointer">
                                <span className=" ">  <DownArrowSVG color="#E51C23" /></span>
                            </div>
                        </div>
                    </div>




                    {/* Large image display */}
                    <div className="mb-8 w-full flex justify-center">
                        <img
                        onClick={()=>setisopen(active)}
                            src={currentImage.src}
                            alt={currentImage.alt}
                            className="object-cover shadow-lg w-full h-[343px] rounded-lg"
                        />
                    </div>


                </div>
            </div>
            <ModalMantine size="100%"  isOpen={isopen!==null} closeModal={()=>setisopen(null)} modalBody={<ShowImage images={images} current={isopen||0}/>}/>
        </>

    );
}
