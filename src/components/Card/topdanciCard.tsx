import { PhoneSVG } from "@/svg/allSvgs";
import Image from "next/image";
import { FunctionComponent } from "react";
import SwiperCarousel from "../ui/customCarousel";

interface TopdanciCardProps {
title:string;
summary:string;
tel:string;
logo:string;
adverts_count:string;
}

const TopdanciCard: FunctionComponent<TopdanciCardProps> = ({title,adverts_count,summary,logo,tel}) => {
    return (<div>
        <div className="flex  bg-[#F0F0F0] mb-5 p-1 lg:gap-x-7 gap-x-3 overflow-hidden w-full rounded-[14px] lg:rounded-2xl ">
            <div className=" lg:w-1/4 ">
                <div >
                    <div>
                        <div className="relative lg:w-[220px] lg:h-[220px] h-[160px] w-[160px] rounded-2xl overflow-hidden">
                            <Image src={logo} className=" h-full w-full object-cover" layout="fill" alt="l" />
                        </div>
                    </div>

                </div>
            </div>

            <div className=" lg:w-full lg:flex gap-x-7 relative overflow-hidden ">
                <div className=" w-full text-black ">
                    <h3 className=" font-bold lg:text-xl text-base">{title}</h3>
                    <p className=" lg:text-sm text-[10px] font-normal lg:mt-2">{summary}</p>

                    <div className="flex mt-2 gap-x-2 items-center">
                        <span><PhoneSVG /></span>
                        <span className="lg:text-sm text-[10px] font-normal">{tel}</span>
                    </div>
                    <p className=" text-primaryColor font-normal text-[10px] lg:text-sm mt-2">{adverts_count} Elan</p>
                </div>
          
                    <div className=" w-7/12 lg:block hidden">
                    <SwiperCarousel />
                    </div>
              

            </div>
        </div>
    </div>);
}

export default TopdanciCard;