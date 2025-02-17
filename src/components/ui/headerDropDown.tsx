"use client"
import { DownArrowSVG, UserSVG } from "@/svg/allSvgs";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {

  onSelect: ({label,value}:{label:string,value:string}) => void;
  defValue?:string;
  className?:string;
  Icon?:any;
  color?:string
}

const DropdownHeader: React.FC<DropdownProps> = ({  onSelect,defValue,Icon=DownArrowSVG,className,color="text-gray-700 hover:bg-blue-100 hover:text-blue-700" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dışarıya tıklama ile dropdown'ı kapatma işlevi
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Dışarıya tıklanırsa dropdown kapanır
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Mouse ile tıklama
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Temizleme
    };
  }, []);

  const handleSelect = (option: {label:string,value:string}) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={"w-max flex items-center gap-x-1 h-full text-sm font-medium rounded-md focus:outline-none "+
          (className||"px-4 py-2 ")}
      >
        <div>
                            <Link href={'#'} className=" flex gap-x-2 items-center cursor-pointer"> <UserSVG />
                                <span className=" text-primaryColor  text-sm font-medium">{defValue}</span></Link>
                        </div>
        <span>
   
        </span>
      </button>

      {isOpen && (
        <div className=" absolute top-12 left-5 bg-primaryColor px-6 py-3  rounded-b-[20px]">
          <ul className="w-[154px]">
            <li className=" text-white font-medium text-base py-2"> <Link href={'/dashboard'}>Şəxsi hesab</Link></li>
            <li className=" text-white font-medium text-base py-2"> <Link href={'/dashboard'}>Şəxsi hesabı artır</Link></li>
            <li className=" text-white font-medium text-base py-2"> <Link href={'/favorites'}>Seçilmişlər</Link></li>
            <li onClick={()=>{localStorage.removeItem('user'); localStorage.removeItem('agent'); location.reload()}} className=" text-white font-medium text-base py-2"> <Link href={''}>Çıxış</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownHeader;
