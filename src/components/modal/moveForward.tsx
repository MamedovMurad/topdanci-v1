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
    const { control, watch, handleSubmit, reset } = useForm({
        defaultValues: {
            price_id: null,
            payment_type: "1",  //1-balance . 2-online-card
        },
    });

    async function fetchPrice() {
        api.get("prices-info").then((data) => {
            setdata(data)
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
                    return notifications.show({
                        color: 'blue',
                        title: 'Notification with custom styles',
                        message: data.message,

                    })
                }

                return router.push(data?.payment_url)
            }).catch((error: any) => {
                console.log(error);
                
                return notifications.show({
                    color: 'red',
                    title: 'Sistemdə xəta baş verdi!',
                    message: error.message,

                })
            })
            return

        } else {
            api.post("move-forward", { ...params, advert_id: id }).then((data) => {

                if (!data.payment_url) {
                    closeModal && closeModal()
                    return notifications.show({
                        color: 'blue',
                        title: 'Notification with custom styles',
                        message: data.message,

                    })
                }

                return router.push(data?.payment_url)
            }).catch((error: any) => {
                return notifications.show({
                    color: 'red',
                    title: 'Sistemdə xəta baş verdi!',
                    message: error.message,

                })
            })
            return
        }
    }


    return (<div className=" w-full h-full rounded-lg bg-[#E8E9F2] p-8">
        <div className=" flex">
            <h3 className=" text-sm font-semibold text-[#444]/70">{title}</h3>
        </div>

        <div>
            <p className=" text-sm text-[#444]/70">{text}</p>
        </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <p className=" text-center text-[#333]/80 my-3 ">Xidmətin müddəti</p>
            <hr className=" h-[2px] bg-black/30" />
            <ul className=" flex gap-y-4 flex-col mt-5 px-5 mb-5">
                {
                    type === "forward" ?
                        data?.move_forvard_price_info?.map((item: any) => (
                            <li className=" flex  w-full" key={item.id}>
                                <CustomRadio className=" w-full justify-between" label={item.description} id={item.id + "premium"} value={item.id} required control={control} name="price_id" />
                            </li>
                        ))
                        :
                        data?.premium_price_info?.map((item: any) => (
                            <li className=" flex  w-full" key={item.id}>
                                <CustomRadio className=" w-full justify-between" label={item.description} id={item.id + "premium"} value={item.id} required control={control} name="price_id" />
                            </li>
                        ))
                }

            </ul>
            <p className=" text-center text-[#333]/80 my-3 ">Ödəniş üsulu</p>
            <hr className=" h-[2px] bg-black/30" />
            <ul className=" flex gap-y-4 flex-col mt-3 px-5">

                <li className=" flex  w-full" >
                    <CustomRadio className=" w-full justify-between" label={"Balance"} id={"type__balance"} value={"1"} checked required control={control} name="payment_type" />
                </li>

                <li className=" flex  w-full" >
                    <CustomRadio className=" w-full justify-between" label={"Bank kartı"} id={"type__balance"} value={"2"} required control={control} name="payment_type" />
                </li>


            </ul>
            <div className="flex justify-center items-center mt-5">
                <button className=" bg-primaryColor rounded-lg px-20 text-white font-semibold py-2 ">Ödə</button>
            </div>
        </form>
    </div>);
}

export default MoveForwardModal;