'use client'
import { Burger, LogoSVG, PlusSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className=" h-24">
            <div className=" hidden lg:flex justify-between mx-12 h-full items-center backdrop-blur">
                <div>
                   <Link href={'/'}> <LogoSVG/></Link>
                </div>
                <div>
                    <ul className=" flex gap-x-12">
                        <li><Link href={'/whole-sales'} className=" text-primaryColor text-base font-medium">Topdançılar</Link></li>
                        <li><Link href={'/products'} className=" text-primaryColor text-base font-medium">Bütün  elanlar</Link></li>
                        <li><Link href={'/products'} className=" text-primaryColor text-base font-medium">Alıcılar</Link></li>
                        <li><Link href={'/products'} className=" text-primaryColor text-base font-medium">Satıcılar</Link></li>
                       
                    </ul>
                </div>

                <div>
                   <div className="flex items-center gap-x-9">
                    <div>
                       <Link href={'/dashboard'}  className=" flex gap-x-2 items-center cursor-pointer"> <UserSVG/>
                       <span className=" text-primaryColor  text-sm font-medium">Səməd</span></Link>
                    </div>
                    <Link href={'/new-product'} className=" h-[50px] bg-[#FDBB11] text-white flex gap-x-1 items-center justify-center rounded-[14px] w-[170px]">
                        <PlusSVG/>
                        <span>YENİ ELAN</span>
                    </Link>
                   </div>
                </div>

            </div>

            <div className="flex lg:hidden px-5 justify-between items-center pt-3">
                <div>
                    <Burger />
                </div>
            <div>
                   <Link href={'/'}> <LogoSVG width="117" height="20"/></Link>
                </div>
                <div>
                    <button className=" h-10 w-[90px] bg-primaryColor rounded-[10px] flex justify-center items-center">
                        <PlusSVG/>
                    </button>
                </div>
            </div>
        </header>);
}

export default Header;