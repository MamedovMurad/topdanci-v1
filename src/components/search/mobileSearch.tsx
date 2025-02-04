import { FilterIconSvg, SearchSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

interface MobiileSearchProps {
    searchVal?:string
}
 
const MobiileSearch: FunctionComponent<MobiileSearchProps> = ({searchVal}) => {
const [searchValue, setsearchVal] = useState(searchVal||"");

    return (   
        <div className="flex gap-x-3 px-5">
            <div className=" flex w-full relative ">
                <input onChange={(e)=>setsearchVal(e.target.value)} className=" rounded-[10px] px-5  w-full bg-[#F0F0F0] h-10" type="text" placeholder="Topdan məhsul axtarışı " /> 
            <Link href={`/products?search-text=${searchValue||""}`} className=" absolute right-0 bg-[#E8E9F2] w-10 h-10 rounded-[10px] flex items-center justify-center"><SearchSVG color="#9EA0AD" /></Link></div>
       
                <button className=" flex-none w-10 h-10 flex justify-center items-center rounded-[10px] bg-[#E8E9F2] ">
                    <FilterIconSvg/>
                </button>
           
        </div>
 );
}
 
export default MobiileSearch;