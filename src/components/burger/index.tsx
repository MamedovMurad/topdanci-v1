"use client"
import { Burger, BurgerExitIcon, CancelIcon } from "@/svg/allSvgs";
import Link from "next/link";
import { useState } from "react";

interface IBurgerUIProps {
}

const BurgerUI: React.FunctionComponent<IBurgerUIProps> = (props) => {
const [isopen, setisopen] = useState(false)
    return (
        <div >
            <div className=" cursor-pointer " onClick={()=>setisopen(!isopen)}>
                <Burger />
            </div>

            {
                isopen&&            <div className=" p-5 bg-[#FFFFFF] fixed top-0 left-0 h-full w-[70%] z-[200]">
             <button onClick={()=>setisopen(!isopen)}>   <BurgerExitIcon /></button>
                    <ul className=" py-10">
                        <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"/whole-sales"}>Topdançılar</Link></li>
                        <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"/products"}>Bütün  elanlar</Link></li>
    
                        <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"/products?advert_type=1"}>Alıcılar</Link></li>
    
                        <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"/products?advert_type=0"}>Satıcılar</Link></li>
                        <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"#"}>Əlaqə</Link></li>
    
                        {/* <li className="mb-5" ><Link className=" font-medium text-base text-primaryColor" href={"/whole-sales"}>Satıcılar</Link></li> */}
    
    
                    </ul>
                </div>
            }
        </div>
    );
};

export default BurgerUI;
