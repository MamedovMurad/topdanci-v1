"use client"
import InputField from "@/components/form/inputField";
import Submenu from "@/components/submenu";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

interface DashboardProps {

}

const Profile: FunctionComponent<DashboardProps> = () => {
    const { control } = useForm()
    return (<div className=" mb-16">
        <Submenu />

        <div className=" bg-[#E8E9F2] rounded-[20px] flex justify-center items-center py-20 mt-[30px]">
            <div className=" w-1/2">
                <form action="">
                    <InputField id="fdsf" label="Adınız" required control={control} />
                    <InputField id="fdssdff" label="E-mail" required control={control} />
                    <InputField id="fdghfsf" label="Mobil nömrə" required control={control} />

                  <div className="flex justify-center items-center mt-3">
                  <button className=" text-white text-xl font-bold bg-primaryColor w-[170px] h-10 rounded-[10px] flex justify-center items-center">Yadda saxla</button>
                  </div>
                </form>
            </div>

        </div>
    </div>);
}

export default Profile;