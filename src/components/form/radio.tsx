import { Controller } from "react-hook-form";

const CustomRadio = ({label, control,id}:{label:string, control:any, id:string}) => {
    return (
        <label className="flex items-center cursor-pointer flex-row-reverse">
                    <Controller
            name={id}
            control={control}
            render={({ field }) => (

                <input type="radio" className="hidden peer" id={id} {...field} />

            )}
        />
           
            <div className="md:w-6 md:h-6 h-[14px] w-[14px] flex items-center  justify-center border-2 border-primaryColor rounded-sm peer-checked:bg-primaryColor">
                {/* SVG Checkmark */}
                <svg
                    className="md:w-6 md:h-6 h-[14px] w-[14px]  text-[#E8E9F2] opacity-100 transition-opacity duration-200 ease-in-out peer-checked:opacity-100"
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
            <span className="mr-2 text-gray-700 font-medium text-xl"> {label}<sup className=" text-primaryColor">*</sup></span>
        </label>
    );
};

export default CustomRadio;
