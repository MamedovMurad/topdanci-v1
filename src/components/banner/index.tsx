"use client"
import { FunctionComponent } from "react";
import Search from "../search";
import CategoryCard from "../Card/categoryCard";

interface BannerProps {
    
}
 
const Banner: FunctionComponent<BannerProps> = () => {
    return ( <div className=" h-[487px] bg-no-repeat bg-center bg-cover rounded-[20px]" style={{backgroundImage: "url('banner.png')"}}>
        <div className=" flex flex-col items-center pt-20 w-[740px] mx-auto ">
            <Search/>
            <div className=" mt-16" >
                <div className="flex justify-center items-center gap-7 flex-wrap ">
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Banner;