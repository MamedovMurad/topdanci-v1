import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    type?: "number" | "text" | "email";
    id: string;
    label: string;
    required: boolean;
    control: any;
    text?: string;
    labelSize?: string;
    inputSize?: string;
    wrapperSize?:string;
}

const InputField: FunctionComponent<InputFieldProps> = ({ type = "text", id,wrapperSize, label, required, control, text, labelSize, inputSize }) => {
    return (<div className={" flex justify-between items-center mb-7 "+wrapperSize }>
        <label htmlFor={id} className={" font-medium text-xl  " + (labelSize || "w-1/3")}>
            <p>{label}   {required && <sup className=" inline-block ml-1 text-primaryColor ">*</sup>}</p>
            {
                text && <p className=" text-xs font-light text-[#7E7E7E]">{text}</p>
            }


        </label>
        <Controller
            name="input"
            control={control}
            render={({ field }) => (

                <input className={" outline-none border-none rounded h-[50px]  text-lg pl-2 " + (inputSize || "w-2/3")}
                    type={type} id={id} {...field} />

            )}
        />

    </div>);
}

export default InputField;