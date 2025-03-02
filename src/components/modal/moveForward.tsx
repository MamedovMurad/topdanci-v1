"use client"
import { FunctionComponent, useEffect, useState } from "react";
import CheckboxField from "../form/checkbox";
import { useForm } from "react-hook-form";
import CustomRadio from "../form/radio";
import { api } from "@/helper/api";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import swal from "sweetalert";
interface PaymentModalProps {
    callBack?: () => void;
    closeModal?: () => void;
    type?: "forward" | "premium";
    id: number
}

const MoveForwardModal: FunctionComponent<PaymentModalProps> = ({ callBack, closeModal, type, id }) => {
    const title = type === "premium" ? "VIP et" : "Elanı irəli çək"
    const text = type === "premium" ? "Elan bütün digər elanlardan yuxarıda axtarış nəticələri səhifələrinin VIP bölməsində təsadüfi qaydada göstəriləcək." : 'Elan bütün və axtarış nəticələrinin içində birinci yerə qalxacaq.'
    const [data, setdata] = useState<any>(null)
    const { control, watch, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            price_id: null,
            payment_type: "1",  //1-balance . 2-online-card
        },
    });

    async function fetchPrice() {
        api.get("prices-info").then((data) => {
            setdata(data)

            if (type==="forward") {
                return  setValue("price_id",data?.move_forvard_price_info?.[1].id)
             }
             return setValue("price_id",data?.premium_price_info?.[1].id)
        })
    }

    useEffect(() => {
        fetchPrice()

     
    }, [])
    const router = useRouter()

    function onSubmit(params: any) {
        if (type === "premium") {
            api.post("make-it-premium", { ...params, advert_id: id }).then((data) => {

                if (!data.payment_url) {
                    closeModal && closeModal()

                    swal({
                        title:'Success',
                        text: data.message,
                        icon: "success",
                      });
                    return 
                }

                return router.push(data?.payment_url)
            }).catch((error: any) => {
                console.log(error);
                
                return swal({
                 
                    title: 'Sistemdə xəta baş verdi!',
                    text: error.message,
                    icon: "error",

                })
            })
            return

        } else {
            api.post("move-forward", { ...params, advert_id: id }).then((data) => {

                if (!data.payment_url) {
                    closeModal && closeModal()
                    return         swal({
                        title:'Success',
                        text: data.message,
                        icon: "success",
                      });
                }

                return router.push(data?.payment_url)
            }).catch((error: any) => {
                return swal({
                 
                    title: 'Sistemdə xəta baş verdi!',
                    text: error.message,
                    icon: "error",

                })
            })
            return
        }
    }


    return (<div className=" w-full h-full rounded-lg bg-[#E8E9F2] p-8">
        <div className=" flex">
            <h3 className=" text-2xl font-semibold text-[#444]/70">{title}</h3>
        </div>

        <div>
            <p className=" text-base text-[#444]/70">{text}</p>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <p className=" text-center text-[#333]/80 my-3 text-xl font-medium ">Xidmətin müddəti</p>
            <hr className=" h-[2px] bg-black/30" />
            <ul className=" flex gap-y-4 flex-col mt-5 px-5 mb-5">
                {
                    type === "forward" ?
                        data?.move_forvard_price_info?.map((item: any,index:number) => (
                            <li className=" flex  w-full" key={item.id}>
                                <CustomRadio checked={index===1} className=" w-full justify-between" label={item.description} id={item.id + "premium"} value={item.id}  control={control} name="price_id" />
                            </li>
                        ))
                        :
                        data?.premium_price_info?.map((item: any,index:number) => (
                            <li className=" flex  w-full" key={item.id}>
                                <CustomRadio checked={index===1}  className=" w-full justify-between" label={item.description} id={item.id + "premium"} value={item.id}  control={control} name="price_id" />
                            </li>
                        ))
                }

            </ul>
            <p className=" text-center text-[#333]/80 my-3 font-medium text-xl ">Ödəniş üsulu</p>
            <hr className=" h-[2px] bg-black/30" />
            <ul className=" flex gap-y-4 flex-col mt-3 px-5">

                <li className=" flex  w-full" >
                    <CustomRadio className=" w-full justify-between" label={`Şəxsi hesab (${JSON.parse(localStorage.getItem("user")+"").balance} AZN) `} id={"type__balance"} value={"1"} checked  control={control} name="payment_type" />
                </li>

                <li className=" flex  w-full" >
                    <CustomRadio className=" w-full justify-between" label={"Kartla ödə"} id={"type__balance"} value={"2"}  control={control} name="payment_type" />
                </li>


            </ul>
            <div className="flex justify-center items-center mt-5">
                <button className=" bg-primaryColor rounded-lg px-20 text-white font-semibold py-2 ">Ödəniş et</button>
            </div>

            <p className=" text-center text-gray-600 text-sm font-medium mt-3">"Ödəniş et" düyməsini sıxmaqla siz Topdanchi.az-ın İstifadəçi razılaşmasını və Ofertanı qəbul etdiyinizi təsdiqləmiş olursunuz</p>
        </form>
    </div>);
}

export default MoveForwardModal;