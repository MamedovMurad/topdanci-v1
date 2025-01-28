import { PlusSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface EmptyProps {
    text:string;
    button?:boolean;
}
 
const Empty: FunctionComponent<EmptyProps> = ({text,button}) => {
    return ( 
    
        <div className=" bg-[#E8E9F2] rounded-[20px] flex justify-center flex-col items-center lg:h-[436px] h-[228px]">
            <p className=" font-semibold lg:text-xl text-base text-[#9EA0AD]">{text}</p>

            {
                button&&<div className=" mt-8">
                    <Link href={'/new-product'} className=" w-[170px] h-[50px] font-bold text-base text-white rounded-xl flex justify-center  items-center bg-[#FDBB11]">
                        <span><PlusSVG/></span>
                        <span>YENİ ELAN</span>
                    </Link>
                </div>
            }
        </div>);
}
 
export default Empty;