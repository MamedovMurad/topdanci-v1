import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( <footer className=" bg-primaryColor h-[240px] py-8">
        <div className="container mx-auto">
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
    </footer> );
}
 
export default Footer;