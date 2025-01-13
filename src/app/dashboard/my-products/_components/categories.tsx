"use client"
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { usePathname } from 'next/navigation'
interface CategoriesProps {

}

const Categories: FunctionComponent<CategoriesProps> = () => {
  
    const pathname = usePathname();
    console.log(pathname);
    
    const array = [
        { item: 'Aktiv', count: '0', url:'/dashboard/my-products'},
        { item: 'Müddəti bitmiş', count: '2', url:'/dashboard/my-products/expired-list' },
        { item: 'Dərc olunmamış', count: '0',url:'/dashboard/my-products/unpublished-ones' },
        { item: 'Gözləmədə olan', count: '0',url:'/dashboard/my-products/pendings' }
    ]


    return (<div>
        <ul className=" flex items-center bg-[#E8E9F2] rounded-[20px] gap-x-3 w-fit p-6">
     {array.map((item)=>(
        <li  className={" cursor-pointer text-sm font-bold "+(item.url==pathname?'  text-primaryColor':'text-[#9EA0AD]')} key={item.item}>
          <Link href={item.url}>  {item.item}({item.count})</Link>
            </li>
     ))}
        </ul>
    </div>);
}

export default Categories;