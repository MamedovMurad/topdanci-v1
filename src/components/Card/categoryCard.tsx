import { CategorySVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CategoryCardProps {
    
}
 
const CategoryCard: FunctionComponent<CategoryCardProps> = () => {
    return ( <div className=" p-1">
        <Link href={''}>
            <div className=" bg-white rounded-[14px] p-3">
                <span><CategorySVG/></span>
            </div>
            <p className=" text-sm font-bold text-center text-white mt-2">Geyim</p>
        </Link>
    </div> );
}
 
export default CategoryCard;