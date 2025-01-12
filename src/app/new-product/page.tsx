"use client"
import CheckboxField from "@/components/form/checkbox";
import FileUpload from "@/components/form/fileUpload";
import InputField from "@/components/form/inputField";
import CustomRadio from "@/components/form/radio";
import SelectField from "@/components/form/selectField";
import CustomTextArea from "@/components/form/textarea";
import LabelHeader from "@/components/label";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import UsersRules from "./_components/usersRules";

interface NewProductPageProps {

}

const NewProductPage: FunctionComponent<NewProductPageProps> = () => {
    const { control, watch } = useForm({
        defaultValues: {
            checkbox: false,
            name: '',
        },
    });

    return (<main>
        <LabelHeader title="Yeni elan" />
        <section>
            <div className="mx-auto container">

                <form action="" >
                    <div className="  bg-[#E8E9F2] rounded-[20px] py-14 px-32">
                        <div className="w-9/12">
                            <div className=" border-b-2 rounded-sm border-white">
                                <InputField control={control} id="name" label="Adınız" required />
                                <InputField control={control} id="email" label="E-mail" required />
                                <InputField control={control} id="phone" label="Mobil nömrə"
                                    text="Bu nömrəyə SMS-kod göndəriləcək" required />
                            </div>
                            <div className=" flex gap-x-3 mt-14">
                                <CheckboxField control={control} id="354" label="Alıcı" />
                                <CheckboxField control={control} id="354l" label="Satıcı " />
                            </div>
                            <div className="mt-7">
                                <SelectField control={control} id="Kateqoriya" label="Kateqoriya" required />
                                <SelectField control={control} id="city" label="Şəhər" required />
                                <InputField control={control} id="Qiymət" label="Qiymət" required />
                            </div>
                            <div className=" flex  justify-between mt-14 ">
                                <InputField wrapperSize="w-[54%]" labelSize=" w-full" inputSize="w-[135px]" control={control} id="354fgfd" label="Minimum sifariş " required />
                                <div className=" mb-7 flex items-center">
                                    <CheckboxField control={control} id="354l" label="Razılaşma yolu ilə " />
                                </div>
                            </div>

                            <div className=" flex  justify-between mt-7 ">
                                <InputField labelSize=" w-full" wrapperSize="w-[54%]" inputSize="w-[135px]" control={control} id="354fgfftd" label="Topdan qiymət  " text="AZN (1 ədəd) " required />
                                <div className=" mb-7 flex items-center">
                                    <CheckboxField control={control} id="354l" label="Razılaşma yolu ilə " />
                                </div>
                            </div>

                            <div className=" flex  justify-between mt-7 ">
                                <InputField labelSize=" w-full" wrapperSize="w-[54%]" inputSize="w-[135px]" control={control} id="354fgfdfdg" label="Ölçü vahidi " required />

                            </div>

                            <div className=" flex  justify-between mt-7 ">

                                <div className=" mb-7 flex items-center w-full justify-between">
                                    <div> <span className="mr-2 text-gray-700 font-medium text-xl">
                                        Pərakəndə satış mümkündür
                                        <sup className=" text-primaryColor">*</sup></span>
                                    </div>
                                    <div>
                                        <div className="flex gap-x-8">
                                            <CustomRadio control={control} id="354l" label="Bəli" />
                                            <CustomRadio control={control} id="354l" label="Xeyr" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex  justify-between mt-7 ">
                                <CustomTextArea control={control} id="fdsafds" label="Məzmun" />
                            </div>

                            <div className=" flex  justify-between mt-7 ">
                                <FileUpload control={control} id="fdsafsdfdsfdss" name="dfasdfas" label="Şəkil" required />
                            </div>
                        </div>
                    </div>
                    <div className=" mt-8">
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
    </main>);
}

export default NewProductPage;