import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface CustomTextAreaProps {
    label:string;
    id:string;
    control:any
}
 
const CustomTextArea: FunctionComponent<CustomTextAreaProps> = ({label,id, control}) => {
    return ( <div className=" w-full">
        <div className="flex items-center justify-between">
            <label htmlFor="" className="font-medium text-xl w-1/3 ">{label}</label>

            <Controller
            name={id}
            control={control}
            render={({ field }) => (
           <div className="w-2/3 "> <textarea  id={id} {...field} className=" outline-none h-[153px] text-lg pl-2 w-full rounded-[10px]"></textarea>
           <p>{(3000-(field.value?.length||0))} simvol qalıb</p></div>
            )}/>
        </div>
    </div> );
}
 
export default CustomTextArea;