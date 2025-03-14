
"use client"
import { FunctionComponent, useEffect, useState } from "react";
import ModalMantine from "../modal";
import PaymentModal from "../modal/paymentModal";
import { usePathname } from "next/navigation";
import { getUser } from "@/helper/api/auth";

interface PaymentsProps {

}

const Payments: FunctionComponent<PaymentsProps> = () => {
    const [balance, setbalance] = useState("0");
    const pathname = usePathname()


    function changeBalance() {


        if (typeof window !== "undefined" && localStorage.getItem('user') !== null) {
            setbalance(JSON.parse(localStorage.getItem('user') + "").balance)
        }
    }
    useEffect(() => {

        changeBalance()
    }, [pathname]);

    const [isOpen, setisOpen] = useState(false);
    return (<div className=" mt-8 lg:mt-0 w-full lg:w-fit">
        <div className="flex lg:w-[360px] lg:h-[90px] h-[60px] items-center justify-center gap-x-7 lg:bg-[#E8E9F2] rounded-[20px]">
            <div className=" px-5 py-2 lg:px-0 lg:py-0 rounded-[10px] lg:rounded-none bg-[#E8E9F2] lg:bg-transparent w-full lg:w-fit"><p className=" lg:text-xl text-base font-normal text-[#000000B2]">Şəxsi hesab</p> <p className=" lg:text-xl text-base font-medium">{balance} AZN</p></div>
            <div >
                <button onClick={() => setisOpen(!isOpen)} className="text-white font-bold text-xl bg-primaryColor rounded-[10px] flex justify-center items-center lg:w-[170px] w-[130px] lg:h-[45px] h-[60px]">Artır</button>
            </div>
        </div>
        <ModalMantine modalBody={<PaymentModal closeModal={() => setisOpen(false)} />} isOpen={isOpen} closeModal={() => setisOpen(false)} />
    </div>);
}

export default Payments;