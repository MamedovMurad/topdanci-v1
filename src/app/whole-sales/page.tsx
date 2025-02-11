"use client"
import TopdanciCard from "@/components/Card/topdanciCard";
import LabelHeader from "@/components/label";
import { getWholeSalers } from "@/helper/api/wholeSalers";
import { FunctionComponent, useEffect, useState } from "react";

interface TopdancilarProps {

}



const Topdancilar: FunctionComponent<TopdancilarProps> = () => {
    const [wholeSalers, setwholeSalers] = useState([]);
    useEffect(() => {
        getWholeSalers().then((data)=>(
            setwholeSalers(data.data.data)
        ))
    }, []);
    return (<main>
      <LabelHeader/>

        <section>
            <div className="container mx-auto lg:px-0 px-5">
                {
                    wholeSalers?.map((item:any)=>(
                        <TopdanciCard key={item?.id} {...item}/>
                    ))
                }
       
        
            </div>
        </section>

    </main>);
}

export default Topdancilar;