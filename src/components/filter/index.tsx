import { FilterSVG } from "@/svg/allSvgs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


import { FunctionComponent, Suspense } from "react";

interface FilterProps {
    defval?: { label: string, value: string };
    searchVal?: string | null;
    category?: string | null
}

export const  Filter: FunctionComponent<FilterProps> = ({ searchVal, defval,category }) => {
    const searchParams = useSearchParams();
    const type = searchParams.get("advert_type");
    const list = [{ type: "", name: "HAMISI", },
    { name: "ALIŞ", type: "1" },
    { name: "SATIŞ", type: "0" }
    ]
    return (<div className=" flex gap-x-5  items-center">
        <div><FilterSVG /></div>
        <ul className=" flex items-center gap-x-5 font-medium text-base text-[#0000004D] uppercase">
            {
                list?.map((item) => (
                    <li key={item.name} className={(item.type === type ? "text-primaryColor " : " cursor-pointer ")+((!type&&item.type=="")?"text-primaryColor  ":" ")} >
                        <Link href={`/products?advert_type=${item.type}&search-text=${searchVal || ""}&city=${defval?.value || ""}&city-name=${defval?.label || ""}&category=${category||""}`}>{item.name}</Link></li>

                ))
            }
        </ul>
    </div>);
}




export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Filter />
    </Suspense>
  );
}