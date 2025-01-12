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
    return (            <div className="flex items-center gap-x-5 mt-14">
        <Link
            href={url1}
            className={`w-[170px] h-[36px] rounded-lg flex justify-center items-center text-xl font-medium ${
                currentPath === url1 ? "bg-primaryColor text-white" : "bg-[#F0F0F0] text-black"
            }`}
        >
            Elanlar 
        </Link>
        <Link
            href={url2}
            className={`w-[170px] h-[36px] rounded-lg flex justify-center items-center text-xl font-medium ${
                currentPath === url2 ? "bg-primaryColor text-white" : "bg-[#F0F0F0] text-black"
            }`}
        >
            Haqqında
        </Link>
    </div>  );
}
 
export default NavLinkProduct;