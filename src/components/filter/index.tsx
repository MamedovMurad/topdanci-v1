import { FilterSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";

interface FilterProps {
    
}
 
const Filter: FunctionComponent<FilterProps> = () => {
    return ( <div className=" flex gap-x-5  items-center">
        <div><FilterSVG/></div>
        <ul className=" flex items-center gap-x-5 font-medium text-base text-[#0000004D]">
            <li className=" text-primaryColor ">HAMISI</li>
            <li className=" cursor-pointer">ALIŞ</li>
            <li className=" cursor-pointer">SATIŞ</li>
        </ul>
    </div> );
}
 
export default Filter;