"use client"
import { FunctionComponent, useEffect, useState } from "react";
import Search from "../search";
import CategoryCard from "../Card/categoryCard";
import MobiileSearch from "../search/mobileSearch";
import MobileSlideHeader from "../ui/mobileSlideHeader";
import MobileSingleSlider from "../ui/mobileSingleSlider";
import { getcategories } from "@/helper/api/categories";

interface BannerProps {
    isOpen?: boolean,
    defval?:{label:string,value:string};
    searchVal?:string|null
}

const Banner: FunctionComponent<BannerProps> = ({ isOpen = true,defval,searchVal }) => {
   
    const [isActive, setisActive] = useState(isOpen);
    const [categories, setcategories] = useState([]);
    function handleBanner(e:any) {
        e.stopPropagation()
        if (isOpen) {
            return
        }
        setisActive(!isActive)
    }

    useEffect(() => {
        getcategories().then((data)=>(
            setcategories(data.data)
        ))
    }, []);

    console.log(categories,'categories');
    
    return (
    <>
     <div onClick={handleBanner} className={" hidden lg:block cursor-pointer  bg-no-repeat bg-center bg-cover rounded-[20px] "+ (isActive?"h-[487px]":"h-20")} style={{ backgroundImage: "url('banner.png')" }}>
        <div  className={" flex flex-col items-center  w-[740px] mx-auto "+(isActive?"pt-20":"py-4")}>
            <Search defValue={defval} searchVal={searchVal} />
            {
                isActive && <div className=" mt-16" >
                    <div className="flex justify-center items-center gap-7 flex-wrap ">
                        {
                            categories?.map((item:any)=>(
                                <CategoryCard {...item} key={item?.id}/>
                            ))
                        }

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
                <MobileSlideHeader data={categories}/>
            </div>
            </div>
    
    </>
   );
}

export default Banner;