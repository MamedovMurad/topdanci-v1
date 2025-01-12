import { FunctionComponent } from "react";

interface LabelHeaderProps {
    title?:string
}
 
const LabelHeader: FunctionComponent<LabelHeaderProps> = ({title="Topdançılar"}) => {
    return (   <div className=" h-[67px] bg-primaryColor bg-opacity-0 mb-10">
        <div className="container mx-auto h-full">
            <h1 className=" text-3xl font-extrabold text-white pt-[14px]">{title}</h1>
        </div>
    </div> );
}
 
export default LabelHeader;