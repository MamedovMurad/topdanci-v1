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
    return ( <div className=" w-fit">
        <Link href={'/products?category='+id}>
            <div className=" flex justify-center items-center ">
                <span  className="bg-white rounded-[14px] p-3 inline-block" dangerouslySetInnerHTML={{__html:icon}}
                ></span>
            </div>
            <p className=" text-sm font-bold text-center text-white mt-2 max-w-20">{name}</p>
        </Link>
    </div> );
}
 
export default CategoryCard;