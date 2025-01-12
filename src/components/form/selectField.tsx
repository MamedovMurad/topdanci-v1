import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    type?: "number" | "text" | "email";
    id: string;
    label: string;
    required: boolean;
    control: any;
    text?: string
}

const SelectField: FunctionComponent<InputFieldProps> = ({ type = "text", id, label, required, control, text }) => {
    return (<div className=" flex justify-between items-center mb-7">
        <label htmlFor={id} className=" font-medium text-xl w-1/3">
            <p>{label}   {required && <sup className=" inline-block ml-1 text-primaryColor ">*</sup>}</p>
            {
                text && <p className=" text-xs font-light text-[#7E7E7E]">{text}</p>
            }

          
            </label>
        <Controller
            name="input"
            control={control}
            render={({ field }) => (

            <select className=" outline-none border-none rounded h-[50px] w-2/3 text-lg pl-2" {...field}>
                <option value=""></option>
            </select>

            )}
        />

    </div>);
}

export default SelectField;