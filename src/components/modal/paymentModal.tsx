"use client"
import { api } from "@/helper/api";
import { notifications } from "@mantine/notifications";
import { FunctionComponent, useState } from "react";

interface PaymentModalProps {

}

const PaymentModal: FunctionComponent<PaymentModalProps> = () => {
    const [value, setvalue] = useState(10);

    async function handleSubmit(e:any) {
        e.preventDefault()
        api.post('user/add-balance',{amaunt:value}).then((data)=>data).catch((error)=>{
             notifications.show({
                                    color: 'red',
                                    title: 'Sistemdə xəta baş verdi!',
                                    message: 'xəta baş verdi!',
                                  
                                  })
        })
    }
    return (<div className=" w-full h-full rounded-[20px] bg-[#E8E9F2] p-8">
        <div>
            <header>Artırılacaq məbləğ, AZN</header>

            <form action="" onSubmit={handleSubmit} className=" mt-5">
                <div className=" rounded-[14px] bg-white h-11 w-[360px] flex justify-center items-center">
                    <p className=" text-primaryColor font-medium text-xl">{value}</p>
                </div>
                <div className=" mt-5">
                    <ul className=" flex w-full justify-between items-center">
                        {[10, 20, 30, 50, 100,150,200].map((item) => (
                            <li onClick={()=>setvalue(item)} key={item} className={" text-xl font-medium cursor-pointer py-[7px] px-[26px] rounded-[10px] border  " + (value == item ? " text-primaryColor border-primaryColor" 
                                : "text-[#9EA0AD] border-[#9EA0AD]")}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-center mt-12 ">
                    <button type="submit" className=" flex justify-center items-center bg-primaryColor  text-white font-bold text-xl h-11 w-[244px] rounded-[10px]">Artır</button>
                </div>
                <p className=" text-center  text-xs font-normal text-[#999999] mt-4">“Ödə” düyməsini sıxdıqdan sonra siz Topdanchi.az-ın <br />
                istifadəçi razılaşmasını və ödəniş şərtlərini qəbul etmiş olursunuz</p>
            </form>
        </div>
    </div>);
}

export default PaymentModal;