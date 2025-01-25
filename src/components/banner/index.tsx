"use client"
import { FunctionComponent, useState } from "react";
import Search from "../search";
import CategoryCard from "../Card/categoryCard";
import MobiileSearch from "../search/mobileSearch";
import MobileSlideHeader from "../ui/mobileSlideHeader";
import MobileSingleSlider from "../ui/mobileSingleSlider";

interface BannerProps {
    isOpen?: boolean
}

const Banner: FunctionComponent<BannerProps> = ({ isOpen = true }) => {
    const [isActive, setisActive] = useState(isOpen);
    function handleBanner(e:any) {
        e.stopPropagation()
        if (isOpen) {
            return
        }
        setisActive(!isActive)
    }
    return (
    <>
     <div onClick={handleBanner} className={" hidden lg:block cursor-pointer  bg-no-repeat bg-center bg-cover rounded-[20px] "+ (isActive?"h-[487px]":"h-20")} style={{ backgroundImage: "url('banner.png')" }}>
        <div  className={" flex flex-col items-center  w-[740px] mx-auto "+(isActive?"pt-20":"py-4")}>
            <Search />
            {
                isActive && <div className=" mt-16" >
                    <div className="flex justify-center items-center gap-7 flex-wrap ">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
            }
        </div>
    </div>


    {/* mobile */}

    <div className="lg:hidden">
            <MobiileSearch/>
            <div className=" ">
                <MobileSingleSlider/>
            </div>
            <div className=" px-5 mt-5">
                <MobileSlideHeader/>
            </div>
            </div>
    
    </>
   );
}

export default Banner;