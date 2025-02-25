import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DetailBigImage({
  images,
  current,
}: {
  images: { src: string }[];
  current: number;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(current);
  const mainSwiperRef = useRef<any>(null);

  // Sync Swiper to the current index from the prop
  useEffect(() => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.slideTo(current);
    }
  }, [current]);

  return (
    <div className="relative w-full">
      {/* Main Swiper */}
      <Swiper
        ref={mainSwiperRef}
        spaceBetween={10}
        navigation={false} // Custom Navigation Arrows
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.src}>
            <div className="relative h-[65vh] flex justify-center items-center">
              <Image
                alt="slider image"
                src={item.src}
                fill
              objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows (Absolute Position) */}
      <button
        onClick={() => mainSwiperRef.current?.swiper.slidePrev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-white/80 text-[#e51c23] rounded-full shadow-md hover:bg-white transition z-10"
      >
        ❮
      </button>

      <button
        onClick={() => mainSwiperRef.current?.swiper.slideNext()}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-white/80 text-[#e51c23] rounded-full shadow-md hover:bg-white transition z-10"
      >
        ❯
      </button>

      {/* Thumbnails Swiper */}
      <div className="relative md:max-w-[40%] mx-auto mt-2 ">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={item.src}
              onClick={() => mainSwiperRef.current.swiper.slideTo(index)}
            >
              <div
                className={`relative md:h-28 md:w-28 w-16 h-16 cursor-pointer rounded-lg overflow-hidden m-2 transition-all ${
                  activeIndex === index
                    ? "border-2 border-[#e51c23] scale-105"
                    : "border-transparent"
                }`}
              >
                <Image
                  alt="slider image"
                  src={item.src}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
