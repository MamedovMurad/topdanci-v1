import { KingSvg } from "@/svg/allSvgs";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ProductCardProps {

}

const ProductCard: FunctionComponent<ProductCardProps> = () => {
    return (<Link href={'/products/example-item'} className=" w-full h-[324px]  block overflow-hidden bg-[#F0F0F0] rounded-2xl">
        <div className=" relative h-[217px] rounded-2xl overflow-hidden">
           <span className=" absolute top-0 left-0 z-10">
           <KingSvg/>
           </span>
           <label htmlFor="" className=" bg-buttonColor w-[51px] h-[18px] rounded z-10 absolute bottom-2 right-2 text-xs text-center font-bold">
           Satıcı
           </label>
            <Image src={'/product.png'} alt="l" className=" w-full h-full object-cover" layout='fill' />
        </div>
        <div className="  flex items-end  p-[10px] h-24 mt-2 ">
            <div>
                <p className=" font-bold text-base ">520 AZN</p>
                <p className=" text-sm  ">Samsung televizorlarını topdan alıram</p> 

                <div>
                    <div className="flex items-center gap-x-1 mt-3 ">
                        <p className=" text-[10px] text-[#808080]">Minimum sifariş</p>
                        <p className="text-[10px]">|</p>
                        <p className="  text-primaryColor text-xs font-medium">100 Ədəd</p>
                    </div>
                </div>
            </div>
            <div className=" text-[8px] text-[#808080] w-1/3">
                <p>Bakı</p>
                <p>Bu gün, 18:50</p>
            </div>
        </div>
    </Link>);
}

export default ProductCard;