"use client"
import { FunctionComponent, useEffect, useState } from "react";
import Dropdown from "../ui/dropDown";
import { SearchSVG } from "@/svg/allSvgs";
import { getCities } from "@/helper/api/cammon";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchProps {
defValue?:{label:string,value:string};
searchVal?:string|null;
category?:string|null;
}

const Search: FunctionComponent<SearchProps> = ({defValue,searchVal,category}) => {
    const router = useRouter(); 
const [searchValue, setsearchVal] = useState(searchVal||"");
const [city, setcity] = useState<{label:string,value:string}|null>(defValue||null);
    const [cities, setcities] = useState([]);
    useEffect(() => {
        getCities().then((data)=>setcities(data.data))
    }, []);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault(); 
        router.push(`/products?search-text=${searchValue||""}&city=${city?.value||""}&city-name=${city?.label||""}&category=${category}`);
    }
    return (<div  className=" w-full" onClick={(e:any)=>e.stopPropagation()}>
        <form action="" onSubmit={handleSubmit}>
            <div className="flex  w-full h-[50px] rounded-xl bg-white ">
                <input value={searchValue} onChange={(e)=>setsearchVal(e.target.value)}  type="text" name="" id="" placeholder="Topdan məhsul axtarışı"
                    className=" h-full rounded-xl border-none placeholder:text-[#C8C8C8] placeholder:text-sm w-full over outline-none pl-7
                            text-sm "/>
                <Dropdown defValue={city||undefined} options={cities?.map((item:any)=>({label:item.name, value:item.id}))} onSelect={(e) => setcity(e)} />
              <div>
              <Link href={`/products?search-text=${searchValue||""}&city=${city?.value||""}&city-name=${city?.label||""}&category=${category}`} className=" bg-buttonColor w-[58px]  h-full flex justify-center items-center rounded-xl">
                        <SearchSVG/>
                    </Link>
              </div>

            </div>

        </form>
    </div>);
}

export default Search;