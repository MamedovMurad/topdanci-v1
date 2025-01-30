import { CategorySVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CategoryCardProps {
    icon:string;
    id:number;
    name:string;
    slug:string
}
 
const CategoryCard: FunctionComponent<CategoryCardProps> = ({icon,id,name,slug}) => {
    return ( <div className=" p-1">
        <Link href={''}>
            <div className=" flex justify-center items-center ">
                <span  className="bg-white rounded-[14px] p-3 inline-block" dangerouslySetInnerHTML={{__html:icon}}
                ></span>
            </div>
            <p className=" text-sm font-bold text-center text-white mt-2">{name}</p>
        </Link>
    </div> );
}
 
export default CategoryCard;