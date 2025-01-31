import { KingSvg } from "@/svg/allSvgs";
import { IAdvert } from "@/types/Model";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ProductCardProps {
    status?: 'expired' | 'pending' | 'active' | 'unpublished';
    item?:IAdvert
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ status,item }) => {
    return (
        <Link href={'/products/example-item'} className={" w-full   block overflow-hidden lg:bg-[#F0F0F0] bg-white lg:rounded-2xl rounded-[10px] "+(status?"":"lg:h-[324px] h-[238px]")}>
            <div className=" relative lg:h-[217px] h-[135px] lg:rounded-2xl rounded-[10px] overflow-hidden">
                {
                    item?.is_premium&&    <span className=" absolute top-0 left-0 z-10">
                    <KingSvg color={item?.advert_type==="seller"?"#F2173C":undefined} />
                </span>
                }
            
                <label htmlFor="" className={"  w-[51px] h-[18px] rounded z-10 absolute bottom-2 right-2 text-xs text-center font-bold " + (item?.advert_type=="seller" ? " bg-primaryColor text-white":" bg-buttonColor") }>
                    {item?.advert_type}
                </label>
                {
                    status==="unpublished"&&<div className=" absolute w-full h-full z-20 bg-[#6F000299] flex items-center justify-center">
                        <p className=" text-xs font-bold text-white">Elan yoxlamadan keçmədi <br />
                        və dərc olunmayacaq.</p>
                    </div>
                }
                {
                     status==="pending"&&<div className=" absolute w-full h-full z-20 bg-[#A6A6A699] flex items-center justify-center">
                     <p className=" text-xs font-bold ">Yoxlama davam edir</p>
                 </div> 
                }
                <Image src={item?.image.src||"/"} alt={item?.image.alt||''} className=" w-full h-full object-cover" layout='fill' />
            </div>
            <div className="  lg:flex items-end  justify-between lg:p-[10px] px-[6px] h-24 lg:mt-2  mt-[2px]">
                <div>
                    <p className=" font-bold lg:text-base text-sm ">{item?.price}</p>
                    <p className=" lg:text-sm text-xs font-bold lg:font-normal  ">{item?.title}</p>

                    <div>
                        <div className="flex items-center gap-x-1 lg:mt-3 mt-[6px]">
                            <p className=" lg:text-[10px] text-[6px] text-[#808080]">Minimum sifariş</p>
                            <p className="lg:text-[10px] text-[6px]">|</p>
                            <p className="  text-primaryColor text-xs font-medium">{item?.min_order}</p>
                        </div>
                    </div>
                </div>
                <div className=" text-[8px] text-[#808080] w-1/3 text-right">
                    <p>{item?.city}</p>
                    <p>{item?.date}</p>
                </div>


            </div>

            {
    status==="expired"&&<div className=" w-full p-[10px]">
        <button className=" w-full h-[35px] font-semibold text-base bg-[#D9D9D9] rounded-[10px] flex justify-center items-center ">Bərpa et</button>
    </div>
}
        </Link>);
}

export default ProductCard;