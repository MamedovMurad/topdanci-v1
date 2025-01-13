"use client"
import { FunctionComponent, useState } from "react";
import Search from "../search";
import CategoryCard from "../Card/categoryCard";

interface BannerProps {
    isOpen?: boolean
}

const Banner: FunctionComponent<BannerProps> = ({ isOpen = true }) => {
    const [isActive, setisActive] = useState(isOpen);
    function handleBanner() {
        if (isOpen) {
            return
        }
        setisActive(!isActive)
    }
    return (<div onClick={handleBanner} className={" cursor-pointer  bg-no-repeat bg-center bg-cover rounded-[20px] "+ (isActive?"h-[487px]":"h-20")} style={{ backgroundImage: "url('banner.png')" }}>
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
    </div>);
}

export default Banner;