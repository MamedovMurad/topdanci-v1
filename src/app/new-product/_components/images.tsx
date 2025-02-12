import { CancelIcon } from "@/svg/allSvgs";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ImagesProps {
    images:string[];
    removeItem:(id:string)=>void
}
 
const Images: FunctionComponent<ImagesProps> = ({images,removeItem}) => {
    return ( <div className="flex flex-wrap items-center gap-2">
        {
            images.map((item)=>(
                <div className=" relative">
                        <div key={item} className=" w-24 h-24 relative rounded overflow-hidden">
                <Image alt="newimage" src={item} fill objectFit="cover" />
               
            </div>
            <span onClick={()=>removeItem(item)} className=" cursor-pointer absolute -top-5 right-0 z-10 rounded-full bg-primaryColor inline-block p-1 "><CancelIcon/></span>
                </div>
            ))
        }
      
    </div> );
}
 
export default Images;