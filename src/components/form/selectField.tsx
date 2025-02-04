import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface SelectFieldProps {
    id: string;
    label: string;
    required?: boolean;
    control: any;
    text?: string;
    name: string;
    options?: { label: string; value: string }[];
}

const SelectField: FunctionComponent<SelectFieldProps> = ({
    id,
    name,
    label,
    required,
    control,
    text,
    options,
}) => {
    return (
        <div className="flex justify-between items-center lg:mb-7 mb-4">
            <label htmlFor={id} className="font-medium lg:text-xl text-sm w-1/3">
                <p>
                    {label} {required && <sup className="inline-block ml-1 text-primaryColor">*</sup>}
                </p>
                {text && <p className="text-xs font-light text-[#7E7E7E]">{text}</p>}
            </label>

            <div className="w-2/3">
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: required ? "This field is required" : false,
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <select
                                className={
                                    "outline-none border rounded lg:h-[50px] h-[30px] w-full text-lg pl-2 " +
                                    (error ? "border-red-500" : "border-gray-300")
                                }
                                {...field}
                            >
                                <option value="">{'Seçin'}</option>
                                {options?.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>

                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                        </>
                    )}
                />
            </div>
        </div>
    );
};

export default SelectField;
