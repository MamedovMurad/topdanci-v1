'use client'
import { LogoSVG, PlusSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className=" h-24">
            <div className=" flex justify-between mx-12 h-full items-center backdrop-blur">
                <div>
                    <LogoSVG/>
                </div>
                <div>
                    <ul className=" flex gap-x-12">
                        <li><Link href={''} className=" text-primaryColor text-base font-medium">Topdançılar</Link></li>
                        <li><Link href={''} className=" text-primaryColor text-base font-medium">Bütün  elanlar</Link></li>
                        <li><Link href={''} className=" text-primaryColor text-base font-medium">Alıcılar</Link></li>
                        <li><Link href={''} className=" text-primaryColor text-base font-medium">Satıcılar</Link></li>
                       
                    </ul>
                </div>

                <div>
                   <div className="flex items-center gap-x-9">
                    <div>
                       <Link href={''} className=" flex gap-x-2 items-center"> <UserSVG/>
                       <span className=" text-primaryColor  text-sm font-medium">Səməd</span></Link>
                    </div>
                    <button className=" h-[50px] bg-[#FDBB11] text-white flex gap-x-1 items-center justify-center rounded-[14px] w-[170px]">
                        <PlusSVG/>
                        <span>YENİ ELAN</span>
                    </button>
                   </div>
                </div>

            </div>
        </header>);
}

export default Header;