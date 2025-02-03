"use client"
import CheckboxField from "@/components/form/checkbox";
import FileUpload from "@/components/form/fileUpload";
import InputField from "@/components/form/inputField";
import CustomRadio from "@/components/form/radio";
import SelectField from "@/components/form/selectField";
import CustomTextArea from "@/components/form/textarea";
import LabelHeader from "@/components/label";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UsersRules from "./_components/usersRules";
import { getcategories } from "@/helper/api/categories";
import { getCities, getUnits } from "@/helper/api/cammon";
import { api } from "@/helper/api";
import LoginPage from "../login/_components/login";
import { notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
interface NewProductPageProps {

}

const NewProductPage: FunctionComponent<NewProductPageProps> = () => {
    const [cat, setcat] = useState([]);
    const [cities, setcities] = useState([]);
    const [units, setunits] = useState([]);
    const [files, setFiles] = useState([]);
    const [formValue, setformValue] = useState<null | any>(null);
    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            min_order_count: null,
            wholesale_price: null,
            tel: null,
            images: [
                "https://api.artelie.az/storage/images/adverts/1680766402-20be2f43-189c-4cfc-b14e-1ab83ed7c971.jpg"
            ]
        },
    });

    console.log({ cat });

    function onSubmit(a: any) {

        api.post('otp', { tel: a?.tel }).then((data) => {
            if (data.msg) {
                
                setformValue(a)
            }else{
                return    notifications.show({
                    color: 'red',
                    title: 'Notification with custom styles',
                    message: 'It is red',
                  
                  })
            }
        })
        // api.post('advert-store',a)

    }

    function insertAdvert(){
        
        api.post('advert-store',formValue).then((data)=>{
            notifications.show({
                title: 'Default notification',
                message: 'Do not forget to star Mantine on GitHub! 🌟',
              })
        }).catch((err:any)=>{
            notifications.show({
                color: 'red',
                title: 'Notification with custom styles',
                message: 'It is red',
              
              })
        })
    }
    useEffect(() => {
        getcategories().then((data) => {
            setcat(data.data?.map((item: { id: number, name: string }) => ({ label: item.name, value: item.id })))
        })
        getCities().then((data) => {
            setcities(data.data?.map((item: { id: number, name: string }) => ({ label: item.name, value: item.id })))
        })
        getUnits().then((data) => {
            setunits(data.data?.map((item: { id: number, name: string }) => ({ label: item.name, value: item.id })))
        })
    }, []);

    const [min_order_count, wholesale_price] = watch(["min_order_count", "wholesale_price"])
    return (


        <>

            {
                formValue ? <main className=" lg:flex hidden   justify-center h-[100svh] w-full bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/Group.png')" }}>
                    <LoginPage phone={formValue.tel} callBack={insertAdvert}/>
                </main> : <main>
                    <LabelHeader title="Yeni elan" />
                    <section>
                        <div className="mx-auto container">

                            <form action="" onSubmit={handleSubmit(onSubmit)} >
                                <div className="  bg-[#E8E9F2] rounded-[20px] lg:py-14 lg:px-32 px-5 py-5">
                                    <div className="lg:w-9/12 w-full">
                                        <div className=" border-b-2 rounded-sm border-white">
                                            <InputField control={control} id="name" label="Adınız" name="name_surname" required />
                                            <InputField control={control} id="email" label="E-mail" required name="email" />
                                            <InputField control={control} id="phone" label="Mobil nömrə" name="tel"
                                                text="Bu nömrəyə SMS-kod göndəriləcək" required />
                                        </div>
                                        <div className="  lg:mt-14 mt-4">
                                            <InputField control={control} id="Elan-adi" label="Elan adı" name="advert_title" required />
                                        </div>
                                        <div className=" flex gap-x-3 lg:mt-14 mt-4">
                                            <CustomRadio value="0" control={control} id="isSeller" label="Alıcı" name="advert_type" />
                                            <CustomRadio value="1" control={control} id="isSeller" label="Satıcı " name="advert_type" />
                                        </div>
                                        <div className="mt-7">
                                            <SelectField control={control} id="Kateqoriya" label="Kateqoriya" name="category_id" options={cat} required />
                                            <SelectField control={control} id="city" label="Şəhər" name="city_id" options={cities} required />
                                            <InputField control={control} id="Qiymət" label="Qiymət" name="retail_price" required={false} />
                                        </div>



                                        <div className=" flex  justify-between lg:mt-14 mt-5 ">
                                            <InputField wrapperSize="lg:w-[54%] w-[57%]" isDisabled={min_order_count === "0"} placeHolder="100 ədəd" name="min_order_count" labelSize=" w-full" inputSize="lg:w-[135px] w-[75px]" control={control} id="354fgfd" label="Minimum sifariş " required />
                                            <div className=" mb-7 flex items-center">
                                                <CheckboxField control={control} id="354l" label="Razılaşma yolu ilə " value="0" name="min_order_count" />
                                            </div>
                                        </div>

                                        <div className=" flex  justify-between lg:mt-7 mt-4 ">
                                            <InputField labelSize=" w-full" isDisabled={wholesale_price === "0"} name="wholesale_price" wrapperSize="lg:w-[54%] w-[57%]" placeHolder="Qiymət" inputSize="lg:w-[135px] w-[75px]" control={control} id="354fgfftd" label="Topdan qiymət  " text="AZN (1 ədəd) " required />
                                            <div className=" mb-7 flex items-center">
                                                <CheckboxField control={control} id="354llll" label="Razılaşma yolu ilə " value="0" name="wholesale_price" />
                                            </div>
                                        </div>

                                        <div className="  lg:mt-7 mt-4 ">
                                            <SelectField required options={units}
                                                name="unit_id" label="Ölçü vahidi"
                                                id="354fgfgdgffdfdg" control={control} />


                                        </div>

                                        <div className=" flex  justify-between lg:mt-7 mt-4 ">

                                            <div className=" mb-7 flex items-center w-full justify-between">
                                                <div> <span className="mr-2 text-gray-700 font-medium lg:ext-xl text-sm">
                                                    Pərakəndə satış mümkündür
                                                    <sup className=" text-primaryColor">*</sup></span>
                                                </div>
                                                <div>
                                                    <div className="flex gap-x-8">
                                                        <CustomRadio value="0" control={control} id="354l" name="retail_sales" label="Bəli" />
                                                        <CustomRadio value="1" control={control} id="354l" name="retail_sales" label="Xeyr" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" flex  justify-between lg:mt-7 mt-4 ">
                                            <CustomTextArea control={control} id="fdsafds" label="Məzmun" />
                                        </div>

                                        <div className=" flex  justify-between lg:mt-7 mt-4 ">
                                            <FileUpload control={control} id="fdsafsdfdsfdss"
                                                name="dfasdfas"
                                                label="Şəkil" callBack={setFiles} required />
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-8 lg:px-0 px-5">
                                    <CheckboxField required={false} control={control} id="35sdfdfadsfa4l" reverse={false}
                                        label={<span className=" font-light text-sm">Siz Topdançı.az-ın <a href="" className=" underline" target="_blank">İstifadəçi razılaşması</a> ilə razı olduğunuzu təsdiq edirsiniz.</span>} />
                                </div>
                                <div className=" flex justify-center items-center mt-7 mb-7">
                                    <button className=" rounded-[10px] text-white bg-primaryColor flex justify-center items-center w-[170px] h-10 text-xl font-bold">Davam et</button>
                                </div>
                            </form>
                            <UsersRules />


                        </div>
                    </section>
                </main>
            }
        </>

    );
}

export default NewProductPage;