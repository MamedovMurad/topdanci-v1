import { Controller } from "react-hook-form";

const CheckboxField = ({
    label,
    name,
    value = "", // Default value if none is provided
    control,
    id,
    reverse = true,
    required = true,
}: {
    value?: string;
    required?: boolean;
    label: any;
    name?: string;
    control: any;
    id: string;
    reverse?: boolean;
}) => {
    return (
        <label className={"flex items-center cursor-pointer " + (reverse ? "flex-row-reverse" : "")}>
            <Controller
                name={name || ""}
                control={control}
                render={({ field }) => (
                    <input
                        type="checkbox"
                        className="hidden peer"
                        id={id}
                        {...field}
                        checked={field.value === value} // Checkbox is checked if the field value matches
                        onChange={(e) => field.onChange(e.target.checked ? value : "")} // Set value or empty string
                    />
                )}
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
            {label}
          {
            required&&  <sup className="text-primaryColor">*</sup>
          }
          </span>
        </label>
    );
};

export default CheckboxField;
