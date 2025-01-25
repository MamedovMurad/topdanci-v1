import { HeardIconSVG, HeardSVG, HomeIconSVG, MarketIcon, PlusIconSvg, UserIconSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( <footer className=" lg:bg-primaryColor lg:h-[240px] lg:py-8 mt-24 lg:mt-0">
        <div className="container mx-auto hidden lg:block">
            <div >
                <ul className="flex justify-between items-center">
                    <li>
                        <p className=" font-bold text-base text-white">Topdanci.az</p>
                        <ul>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Layihə haqqında</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Qaydalar</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>İstifadəçi razılaşması</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Ən çox soruşulan suallar</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Dəstək</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Məxfilik siyasəti</Link></li>
                        </ul>
                    </li>

                    <li>
                        <p className=" font-bold text-base text-white">Reklam</p>
                        <ul>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Saytda reklam</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Ödənişli xidmətlər</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Paketlər</Link></li>

                        </ul>
                    </li>

                    <li>
                        <p className=" font-bold text-base text-white">Özəl kateqoriyalar</p>
                        <ul>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>İnşaat</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Elektironika</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Geyim</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Kənd təsərüfatı</Link></li>
                         
                        </ul>
                    </li>

                    <li>
                        <p className=" font-bold text-base text-white">Əlaqə</p>
                        <ul>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>İnşaat</Link></li>
                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Elektironika</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Geyim</Link></li>

                            <li className=" text-sm text-white font-normal mt-2"><Link href={''}>Kənd təsərüfatı</Link></li>
                         
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="lg:hidden fixed bottom-0 z-30 h-20 bg-white w-full flex flex-col items-center justify-center">
                <ul className="flex  px-5 justify-between items-center ">
                <li className=" text-center">
                            <Link href={''}>
                                <button className=" flex justify-center items-center rounded-[20px] w-16 h-8 "><HomeIconSVG color="#404040"/></button>
                              <span className=" font-medium text-[11px]">Home</span>
                            </Link>
                        </li>
                        <li className=" text-center">
                            <Link href={''}>
                                <button className=" bg-[#FFCC23]  flex justify-center items-center rounded-[20px] w-16 h-8 "><MarketIcon color="white" /></button>
                              <span className=" font-medium text-[11px]">Topdançılar</span>
                            </Link>
                        </li>
                        <li className=" text-center">
                            <Link href={''}>
                                <button className="  flex justify-center items-center rounded-[20px] w-16 h-8 "><PlusIconSvg/></button>
                              <span className=" font-medium text-[11px]">Yeni Elan</span>
                            </Link>
                        </li>
                        <li className=" text-center">
                            <Link href={''}>
                                <button className="  flex justify-center items-center rounded-[20px] w-16 h-8 "><HeardIconSVG/></button>
                              <span className=" font-medium text-[11px]">Seçilənlər</span>
                            </Link>
                        </li>
                        <li className=" text-center">
                            <Link href={''}>
                                <button className="  flex justify-center items-center rounded-[20px] w-16 h-8 "><UserIconSVG/></button>
                              <span className=" font-medium text-[11px]">Hesab</span>
                            </Link>
                        </li>
                </ul>
        </div>
    </footer> );
}
 
export default Footer;