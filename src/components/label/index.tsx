import { FunctionComponent } from "react";

interface LabelHeaderProps {
    title?:string
}
 
const LabelHeader: FunctionComponent<LabelHeaderProps> = ({title="Topdançılar"}) => {
    return (   <div className="h-10 md:h-[67px] bg-primaryColor bg-opacity-0 md:mb-10 mb-5 px-5 md:px-0">
        <div className="container mx-auto h-full">
            <h1 className=" text-base md:text-3xl font-extrabold text-white pt-[7px] md:pt-[14px]">{title}</h1>
        </div>
    </div> );
}
 
export default LabelHeader;