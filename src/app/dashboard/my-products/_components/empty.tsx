import { PlusSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";

interface EmptyProps {
    text:string;
    button?:boolean;
}
 
const Empty: FunctionComponent<EmptyProps> = ({text,button}) => {
    return ( 
    
        <div className=" bg-[#E8E9F2] rounded-[20px] flex justify-center flex-col items-center h-[436px]">
            <p className=" font-semibold text-xl text-[#9EA0AD]">{text}</p>

            {
                button&&<div className=" mt-8">
                    <button className=" w-[170px] h-[50px] font-bold text-base text-white rounded-xl flex justify-center  items-center bg-[#FDBB11]">
                        <span><PlusSVG/></span>
                        <span>YENİ ELAN</span>
                    </button>
                </div>
            }
        </div>);
}
 
export default Empty;