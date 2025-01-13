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
        <ul className=" border-b-4 rounded border-[#E8E9F2] m-0  w-fit flex items-center ">
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 px-7 "+((activeElem==="profile")&&'border-b-4 rounded border-primaryColor')}>
                <span><UserSVG color={activeElem==="profile"?"#E61C23":"#9EA0AD"}/></span> <Link href={'#'} className={"  text-sm font-normal "+(activeElem==="profile"? "text-primaryColor":"text-[#9EA0AD]") }>Profil</Link></li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 px-7 "+((activeElem==="products")&&'border-b-4 rounded border-primaryColor')}>
                <span><ListSVG color={activeElem==="products"?"#E61C23":undefined}/></span> <Link href={'#'} className={"text-sm font-normal "+(activeElem==='products'?"text-primaryColor":"text-[#9EA0AD]")}>Elanlar</Link>
            </li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 px-7"+((activeElem==="payments")&&'border-b-4 rounded border-primaryColor')}><span><PaymentSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Ödənişlər</Link></li>
            <li className={" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 px-7"+((activeElem==="limits")&&'border-b-4 rounded border-primaryColor')}><span><TimeBigSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Elan limiti</Link></li>
        </ul>
    </div>);
}

export default Submenu;