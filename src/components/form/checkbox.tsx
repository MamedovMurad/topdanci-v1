import { Controller } from "react-hook-form";

const CheckboxField = ({label, control,id,reverse=true, required=true}:{required?:boolean,label:any, control:any, id:string,reverse?:boolean}) => {
    return (
        <label className={"flex items-center cursor-pointer "+(reverse&& "flex-row-reverse ")}>
                    <Controller
            name={id}
            control={control}
            render={({ field }) => (

                <input type="checkbox" className="hidden peer" id={id} {...field}  />

            )}
        />
           
            <div className="w-6 h-6 flex items-center  justify-center border-2 border-primaryColor rounded-sm peer-checked:bg-primaryColor">
                {/* SVG Checkmark */} 
                <svg
                    className=" text-[#E8E9F2] opacity-100 transition-opacity duration-200 ease-in-out peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <span className={" text-gray-700 font-medium text-xl "+(reverse?"mr-2":"ml-2")}> {label}
                {required&& <sup className=" text-primaryColor">*</sup>}
               
                
                </span>
        </label>
    );
};

export default CheckboxField;
