import { KingSvg } from "@/svg/allSvgs";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ProductCardProps {
    status?: 'expired' | 'pending' | 'active' | 'unpublished'
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ status }) => {
    return (
        <Link href={'/products/example-item'} className={" w-full   block overflow-hidden lg:bg-[#F0F0F0] bg-white lg:rounded-2xl rounded-[10px] "+(status?"":"lg:h-[324px] h-[238px]")}>
            <div className=" relative lg:h-[217px] h-[135px] lg:rounded-2xl rounded-[10px] overflow-hidden">
                <span className=" absolute top-0 left-0 z-10">
                    <KingSvg />
                </span>
                <label htmlFor="" className=" bg-buttonColor w-[51px] h-[18px] rounded z-10 absolute bottom-2 right-2 text-xs text-center font-bold">
                    Satıcı
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
                <Image src={'/product.png'} alt="l" className=" w-full h-full object-cover" layout='fill' />
            </div>
            <div className="  lg:flex items-end  lg:p-[10px] px-[6px] h-24 lg:mt-2  mt-[2px]">
                <div>
                    <p className=" font-bold lg:text-base text-sm ">520 AZN</p>
                    <p className=" lg:text-sm text-xs font-bold lg:font-normal  ">Samsung televizorlarını topdan alıram</p>

                    <div>
                        <div className="flex items-center gap-x-1 lg:mt-3 mt-[6px]">
                            <p className=" lg:text-[10px] text-[6px] text-[#808080]">Minimum sifariş</p>
                            <p className="lg:text-[10px] text-[6px]">|</p>
                            <p className="  text-primaryColor text-xs font-medium">100 Ədəd</p>
                        </div>
                    </div>
                </div>
                <div className=" text-[8px] text-[#808080] w-1/3">
                    <p>Bakı</p>
                    <p>Bu gün, 18:50</p>
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