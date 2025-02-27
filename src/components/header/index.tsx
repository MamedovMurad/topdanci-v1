'use client'
import { Burger, DropdownSVGIcon, LogoSVG, PlusSVG, RedHeart, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Dropdown from "../ui/dropDown";
import { usePathname } from "next/navigation";
import BurgerUI from "../burger";
import DropdownHeader from "../ui/headerDropDown";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const [userName, setuserName] = useState("Daxil ol");
    const pathname = usePathname()


    function changeUserName() {


        if (typeof window !== "undefined" && localStorage.getItem('user') !== null) {
            setuserName(JSON.parse(localStorage.getItem("user") || "").name || "")
        }
    }
    useEffect(() => {

        changeUserName()
    }, [pathname]);

    function handleClick(option: { label: string, value: string }) {
        localStorage.setItem('lang', option.value)
        location.reload()
    }
    return (
        <header className=" lg:h-24 h-16">
            <div className=" hidden lg:flex justify-between mx-12 h-full items-center backdrop-blur">
                <div>
                    <Link href={'/'}> <LogoSVG /></Link>
                </div>
                <div>
                    <ul className=" flex gap-x-12">
                        <li><Link href={'/whole-sales'} className=" text-primaryColor text-base font-medium">Topdançılar</Link></li>
                        <li><Link href={'/products'} className=" text-primaryColor text-base font-medium">Bütün  elanlar</Link></li>
                        <li><Link href={'/products?advert_type=1'} className=" text-primaryColor text-base font-medium">Alıcılar</Link></li>
                        <li><Link href={'/products?advert_type=0'} className=" text-primaryColor text-base font-medium">Satıcılar</Link></li>

                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-x-9">
                        <div>
                            <Link href={"favorites"}><RedHeart/></Link>
                        </div>
                        <Dropdown className=" text-primaryColor border border-primaryColor rounded px-2 py-0"
                            options={[
                                { label: 'AZ', value: 'az' },
                                { label: "EN", value: 'en' },
                                { label: "RU", value: 'ru' }]}
                            onSelect={handleClick}
                            Icon={DropdownSVGIcon}
                            defValue={

                                (typeof window !== "undefined" && localStorage.getItem('lang')) ?
                                    {
                                        label: localStorage.getItem('lang')?.toUpperCase() + "",
                                        value: localStorage.getItem('lang') + ""
                                    }
                                    : { label: 'AZ', value: 'az' }
                            } />
                        <div>
                            {
                                (typeof window !== "undefined" && localStorage.getItem('user')) ?
                                    <DropdownHeader onSelect={() => ''} defValue={userName} /> : <div>
                                        <Link href={'/dashboard'} className=" flex gap-x-2 items-center cursor-pointer"> <UserSVG />
                                            <span className=" text-primaryColor  text-sm font-medium">{userName}</span></Link>
                                    </div>
                            }
                        </div>



                        <Link href={'/new-product'} className=" h-[50px] bg-[#FDBB11] text-white flex gap-x-1 items-center justify-center rounded-[14px] w-[170px]">
                            <PlusSVG />
                            <span>YENİ ELAN</span>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex lg:hidden px-5 justify-between items-center pt-3">
                <BurgerUI />

                <div>
                    <Link href={'/'}> <LogoSVG width="117" height="20" /></Link>
                </div>
                <div>
                    <Link href={'/new-product'} className=" h-10 w-[90px] bg-primaryColor rounded-[10px] flex justify-center items-center">
                        <PlusSVG />
                    </Link>
                </div>
            </div>
        </header>);
}

export default Header;