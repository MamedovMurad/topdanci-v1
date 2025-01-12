import { ListSVG, PaymentSVG, TimeBigSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SubmenuProps {

}

const Submenu: FunctionComponent<SubmenuProps> = () => {
    return (<div >
        <ul className=" border-b-4 rounded border-[#E8E9F2] m-0  w-fit flex items-center ">
            <li className=" cursor-pointer translate-y-1 flex m-0 items-center gap-x-2 p-5 h-full border-b-4 rounded border-primaryColor"><span><UserSVG/></span> <Link href={'#'} className=" text-primaryColor text-sm font-normal">Profil</Link></li>
            <li className=" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 "><span><ListSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Elanlar</Link></li>
            <li className=" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 "><span><PaymentSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Ödənişlər</Link></li>
            <li className=" cursor-pointer translate-y-1 flex items-center gap-x-2 p-5 "><span><TimeBigSVG/></span> <Link href={'#'} className=" text-[#9EA0AD] text-sm font-normal">Elan limiti</Link></li>
        </ul>
    </div>);
}

export default Submenu;