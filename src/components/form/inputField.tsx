import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
    type?: "number" | "text" | "email";
    id: string;
    label: string;
    required?: boolean;
    control: any;
    text?: string;
    labelSize?: string;
    inputSize?: string;
    wrapperSize?: string;
    placeHolder?: string;
    name: string;  // Ensuring 'name' is required
    isDisabled?: boolean;
}

const InputField: FunctionComponent<InputFieldProps> = ({
    type = "text",
    id,
    wrapperSize,
    isDisabled,
    label,
    required,
    control,
    text,
    labelSize,
    inputSize,
    placeHolder,
    name
}) => {
    return (
        <div className={"flex justify-between items-center lg:mb-7 mb-4 " + (wrapperSize || "")}>
            <label htmlFor={id} className={"font-medium lg:text-xl text-sm " + (labelSize || "w-1/3")}>
                <p>
                    {label} {required && <sup className="inline-block ml-1 text-primaryColor">*</sup>}
                </p>
                {text && <p className="lg:text-xs text-[8px] leading-3 lg:leading-none font-light text-[#7E7E7E]">{text}</p>}
            </label>

            <div className="w-2/3">
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: required ? "This field is required" : false,
                        pattern: 
                            type === "email"
                                ? {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format",
                                }
                                : undefined,
                        min: type === "number" ? { value: 0, message: "Value must be positive" } : undefined,
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <input
                                className={
                                    "outline-none border rounded lg:h-[50px] h-[30px] disabled:bg-slate-400 text-[10px] lg:text-lg pl-2 " +
                                    (inputSize || "w-full") +
                                    (error ? " border-red-500" : " border-gray-300")
                                }
                                placeholder={placeHolder}
                                type={type}
                                id={id}
                                {...field}
                                disabled={isDisabled}
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
            </div>
        </div>
    );
};

export default InputField;
