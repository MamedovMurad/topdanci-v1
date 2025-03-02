"use client"
import { ListSVG, PaymentSVG, TimeBigSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SubmenuProps {
    activeElem:string
}

const Submenu: FunctionComponent<SubmenuProps> = ({activeElem}) => {
    console.log(activeElem);
    

    return (<div >
        <ul className=" w-full px-5 lg:px-0 lg:border-b-4 lg:rounded   border-[#E8E9F2] m-0  lg:w-fit flex items-center  justify-between lg:justify-normal ">
            <li className={"  lg:flex hidden cursor-pointer lg:translate-y-1  items-center gap-x-2 p-5 px-7 "+((activeElem==="profile")&&'lg:border-b-4 rounded bg-primaryColor lg:bg-transparent  lg:border-primaryColor')}>
                <span><UserSVG color={activeElem==="profile"?"#E61C23":"#9EA0AD"}/></span> 
                <Link href={'/dashboard'} className={"  text-sm font-normal "+
                    (activeElem==="profile"? "text-primaryColor":"text-[#9EA0AD]") }>Profil</Link>
                    </li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 lg:p-5 p-1 px-7   "+((activeElem==="products")?'lg:border-b-4 bg-primaryColor lg:bg-transparent  rounded border-primaryColor':"bg-[#EDEEF2] lg:bg-transparent")}>
                <span className=" hidden lg:block"><ListSVG color={activeElem==="products"?"#E61C23":undefined}/></span> <Link href={'/dashboard/my-products'} className={"text-sm font-normal "+(activeElem==='products'?"lg:text-primaryColor text-white":"text-[#9EA0AD] ")}>Elanlar</Link>
            </li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 lg:p-5 p-1 px-7  "+((activeElem==="payments")?'lg:border-b-4 rounded border-primaryColor   bg-primaryColor lg:bg-transparent':'bg-[#EDEEF2] lg:bg-transparent rounded lg:rounded-none')}>
                <span className=" hidden lg:block"><PaymentSVG color={activeElem==="payments"?"#E61C23":undefined}/></span> <Link href={'/dashboard/payments'} className={"text-sm font-normal "+(activeElem==='payments'?"lg:text-primaryColor text-white":"text-[#9EA0AD] ") }>Ödənişlər</Link></li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 lg:p-5 p-1 px-7 "+((activeElem==="limits")?'lg:border-b-4 rounded border-primaryColor   bg-primaryColor lg:bg-transparent':'text-[#9EA0AD] bg-[#EDEEF2] lg:bg-transparent rounded lg:rounded-none')}><span className=" hidden lg:block"><TimeBigSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Elan limiti</Link></li>
        </ul>
    </div>);
}

export default Submenu;