import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface CustomTextAreaProps {
    label:string;
    id:string;
    control:any
}
 
const CustomTextArea: FunctionComponent<CustomTextAreaProps> = ({label,id, control}) => {
    return ( <div className=" w-full">
        <div className="flex lg:items-center justify-between">
            <label htmlFor="" className="font-medium lg:text-xl text-sm w-1/3 ">{label}</label>

            <Controller
            name={id}
            control={control}
            render={({ field }) => (
           <div className="w-2/3 "> <textarea  id={id} {...field} className=" outline-none lg:h-[153px] h-[90px] text-lg pl-2 w-full rounded-[10px]"></textarea>
           <p className=" lg:text-base text-[10px] text-[#00000080]">{(3000-(field.value?.length||0))} simvol qalıb</p></div>
            )}/>
        </div>
    </div> );
}
 
export default CustomTextArea;