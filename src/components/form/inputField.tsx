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
    placeHolder?:string;
}

const InputField: FunctionComponent<InputFieldProps> = ({ type = "text", id,wrapperSize, label, required, control, text, labelSize, inputSize,placeHolder }) => {
    return (<div className={" flex justify-between items-center md:mb-7 mb-4 "+wrapperSize }>
        <label htmlFor={id} className={" font-medium md:text-xl text-sm  " + (labelSize || "w-1/3")}>
            <p>{label}   {required && <sup className=" inline-block ml-1 text-primaryColor ">*</sup>}</p>
            {
                text && <p className=" md:text-xs text-[8px] leading-3 md:leading-none font-light text-[#7E7E7E]">{text}</p>
            }


        </label>
        <Controller
            name="input"
            control={control}
            render={({ field }) => (

                <input className={" outline-none border-none rounded md:h-[50px] h-[30px]  text-[10px] md:text-lg pl-2 " + (inputSize || "w-2/3")}
                   placeholder={placeHolder} type={type} id={id} {...field} />

            )}
        />

    </div>);
}

export default InputField;