import { FilterIconSvg, SearchSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";

interface MobiileSearchProps {
    
}
 
const MobiileSearch: FunctionComponent<MobiileSearchProps> = () => {
    return (   
        <div className="flex gap-x-3 px-5">
            <div className=" flex w-full relative "><input className=" rounded-[10px] px-5  w-full bg-[#F0F0F0] h-10" type="text" placeholder="Topdan məhsul axtarışı " /> 
            <button className=" absolute right-0 bg-[#E8E9F2] w-10 h-10 rounded-[10px] flex items-center justify-center"><SearchSVG color="#9EA0AD" /></button></div>
       
                <button className=" flex-none w-10 h-10 flex justify-center items-center rounded-[10px] bg-[#E8E9F2] ">
                    <FilterIconSvg/>
                </button>
           
        </div>
 );
}
 
export default MobiileSearch;