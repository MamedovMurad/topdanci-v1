"use client"
import { FunctionComponent, useState } from "react";

interface CategoriesProps {

}

const Categories: FunctionComponent<CategoriesProps> = () => {
    const [activeItem, setactiveItem] = useState("Aktiv");
    const array = [
        { item: 'Aktiv', count: '0', },
        { item: 'Müddəti bitmiş', count: '2' },
        { item: 'Dərc olunmamış', count: '0' },
        { item: 'Gözləmədə olan', count: '0' }
    ]
    return (<div>
        <ul className=" flex items-center bg-[#E8E9F2] rounded-[20px] gap-x-3 w-fit p-6">
     {array.map((item)=>(
        <li onClick={()=>setactiveItem(item.item)} className={" cursor-pointer text-sm font-bold "+(item.item==activeItem?'  text-primaryColor':'text-[#9EA0AD]')} key={item.item}>{item.item}({item.count})</li>
     ))}
        </ul>
    </div>);
}

export default Categories;