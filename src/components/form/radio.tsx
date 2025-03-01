import { Controller } from "react-hook-form";

interface CustomRadioProps {
  label: string;
  control: any;
  id: string;
  name: string;
  value: string|number;
  required?: boolean;
  checked?:boolean;
  className?:string
}

const CustomRadio = ({ label, control, id, name, value, required,checked=false,className="" }: CustomRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? "This field is required" : false,
      }}
      render={({ field, fieldState: { error } }) => (
        <div className={"flex flex-col "+className}>
          <label className={"flex items-center cursor-pointer flex-row-reverse "+className}>
            <input
            
              type="radio"
              className="hidden peer"
              id={id}
              {...field}
              value={value}
              checked={field.value === value}
              onChange={() => field.onChange(value)}
            />

            <div className="lg:w-6 lg:h-6 h-[14px] w-[14px] flex items-center justify-center border-2 border-primaryColor rounded-sm peer-checked:bg-primaryColor">
              {/* SVG Checkmark */}
              <svg
                className="lg:w-6 lg:h-6 h-[14px] w-[14px] text-[#E8E9F2] opacity-100 transition-opacity duration-200 ease-in-out peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="mr-2 text-gray-700 font-medium text-xl">
              {label} {required && <sup className="text-primaryColor">*</sup>}
            </span>
          </label>

          {/* Error Message */}
          {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomRadio;
