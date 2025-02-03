import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    type?: "number" | "text" | "email";
    id: string;
    label: string;
    required: boolean;
    control: any;
    text?: string;
    name?:string;
    options?:{label:string,value:string}[]
}

const SelectField: FunctionComponent<InputFieldProps> = ({ type = "text", id,name, label, required, control, text,options }) => {
    return (<div className=" flex justify-between items-center lg:mb-7 mb-4">
        <label htmlFor={id} className=" font-medium lg:text-xl text-sm w-1/3">
            <p>{label}   {required && <sup className=" inline-block ml-1 text-primaryColor ">*</sup>}</p>
            {
                text && <p className=" text-xs font-light text-[#7E7E7E]">{text}</p>
            }

          
            </label>
        <Controller
            name={name||""}
            control={control}
            render={({ field }) => (

            <select className=" outline-none border-none rounded lg:h-[50px] h-[30px] w-2/3 text-lg pl-2" {...field}>
                <option value="">{label}</option>
                {
                    options?.map((item)=>(
                        
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                }
             
            </select>

            )}
        />

    </div>);
}

export default SelectField;