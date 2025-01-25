import { FunctionComponent } from "react";

interface LabelHeaderProps {
    title?:string
}
 
const LabelHeader: FunctionComponent<LabelHeaderProps> = ({title="Topdançılar"}) => {
    return (   <div className="h-10 lg:h-[67px] bg-primaryColor bg-opacity-0 lg:mb-10 mb-5 px-5 lg:px-0">
        <div className="container mx-auto h-full">
            <h1 className=" text-base lg:text-3xl font-extrabold text-white pt-[7px] lg:pt-[14px]">{title}</h1>
        </div>
    </div> );
}
 
export default LabelHeader;