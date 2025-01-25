import { PhotoIconSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface FileUploadProps {
  label: string;
  id: string;
  name: string;
  control: any;
  required?: boolean;
}

const FileUpload: FunctionComponent<FileUploadProps> = ({ label, id, name, required, control }) => {
  return (
    <div className="flex justify-between items-center mb-7 w-full">
      <label htmlFor={id} className="font-medium text-xl w-1/3">
        <p>
          {label} {required && <sup className="inline-block ml-1 text-primaryColor">*</sup>}
        </p>
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <div className="bg-white outline-none border-none rounded lg:h-[50px] text-[30px] pl-2 w-2/3">
            <input
              type="file"
              multiple
              id={id}
              className="hidden"
              onChange={(e) => field.onChange(e.target.files)} // Set files in RHF
            />
            <label htmlFor={id} className=" w-full flex justify-center items-center gap-x-2  lg:h-[50px] h-[30px] lg:text-lg text-sm font-medium cursor-pointer">
              {(field.value?.length)?(field.value?.length)+ " Fayl seçilib": (<><PhotoIconSVG/> Şəkil əlavə et</>)}
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default FileUpload;
