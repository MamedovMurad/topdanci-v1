"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface NavLinkProductProps {
    url1:string,
    url2:string
}
 
const NavLinkProduct: FunctionComponent<NavLinkProductProps> = ({url1, url2}) => {
    const currentPath = usePathname();
    return (            <div className="flex items-center md:gap-x-5 gap-x-3 md:mt-14 px-5 md:px-0">
        <Link
            href={url1}
            className={`md:w-[170px] md:h-[36px] h-5 w-[88px] md:rounded-lg rounded flex justify-center items-center md:text-xl text-[10px] font-medium ${
                currentPath === url1 ? "bg-primaryColor text-white" : "bg-[#F0F0F0] text-black"
            }`}
        >
            Elanlar 
        </Link>
        <Link
            href={url2}
            className={`md:w-[170px] md:h-[36px] h-5 w-[88px] md:rounded-lg rounded flex justify-center items-center md:text-xl text-[10px] font-medium ${
                currentPath === url2 ? "bg-primaryColor text-white" : "bg-[#F0F0F0] text-black"
            }`}
        >
            Haqqında
        </Link>
    </div>  );
}
 
export default NavLinkProduct;