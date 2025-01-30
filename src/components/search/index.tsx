"use client"
import { FunctionComponent, useEffect, useState } from "react";
import Dropdown from "../ui/dropDown";
import { SearchSVG } from "@/svg/allSvgs";
import { getCities } from "@/helper/api/cammon";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {

    const [cities, setcities] = useState([]);
    useEffect(() => {
        getCities().then((data)=>setcities(data.data))
    }, []);
    return (<div  className=" w-full" onClick={(e:any)=>e.stopPropagation()}>
        <form action="">
            <div className="flex  w-full h-[50px] rounded-xl bg-white ">
                <input  type="text" name="" id="" placeholder="Topdan məhsul axtarışı"
                    className=" h-full rounded-xl border-none placeholder:text-[#C8C8C8] placeholder:text-sm w-full over outline-none pl-7
                            text-sm "/>
                <Dropdown options={cities?.map((item:any)=>({label:item.name, value:item.id}))} onSelect={() => ''} />
              <div>
              <button className=" bg-buttonColor w-[58px]  h-full flex justify-center items-center rounded-xl">
                        <SearchSVG/>
                    </button>
              </div>

            </div>

        </form>
    </div>);
}

export default Search;