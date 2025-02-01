"use client"
import InputField from "@/components/form/inputField";
import Submenu from "@/components/submenu";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { redirect } from 'next/navigation'
import { useCheckWindow } from "@/hooks/checksizeWindow";
import { useRouter } from 'next/navigation';
import { getUser } from "@/helper/api/auth";
interface DashboardProps {

}

const Profile: FunctionComponent<DashboardProps> = () => {
    const { control ,setValue} = useForm()
    const router = useRouter();
    useEffect(() => {
getUser().then((data)=>{
    console.log(data.data);
    setValue('name',data.data.name)
    setValue('email',data.data.email)
    setValue('tel',data.data.tel)
    
})
        if (useCheckWindow()) {
            router.push("/dashboard/my-products")
        }
    }, [router]);
    return (<div className=" mb-16">
        <Submenu activeElem="profile" />

        <div className=" bg-[#E8E9F2] rounded-[20px] flex justify-center items-center py-20 mt-[30px]">
            <div className=" w-1/2">
                <form action="">
                    <InputField id="fdsf" label="Adınız" name="name"  required control={control} />
                    <InputField id="fdssdff" label="E-mail" name="mail" required control={control} />
                    <InputField id="fdghfsf" label="Mobil nömrə" name="tel"  required control={control} />

                  <div className="flex justify-center items-center mt-3">
                  <button className=" text-white text-xl font-bold bg-primaryColor w-[170px] h-10 rounded-[10px] flex justify-center items-center">Yadda saxla</button>
                  </div>
                </form>
            </div>

        </div>
    </div>);
}

export default Profile;