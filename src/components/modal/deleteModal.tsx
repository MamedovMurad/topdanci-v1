"use client"
import { FunctionComponent, useState } from "react";

interface PaymentModalProps {
callBack:()=>void;
closeModal:()=>void
}

const DeleteModal: FunctionComponent<PaymentModalProps> = ({callBack,closeModal}) => {
   
    return (<div className=" w-full h-full rounded-[20px] bg-[#E8E9F2] p-8">
        <div>
            <header>Elanı sil?</header>
            <div className=" p-5 bg-slate-300 mt-2 ">
                <p>Elan "Müddəti başa çatmış" bölməsinə düşəcək.</p>
            </div>

           <div className=" flex justify-end items-center mt-4 gap-x-4 ">
                    <button className=" border-sky-600 border rounded py-2 px-4" onClick={closeModal}>İmtina</button>
                    <button onClick={()=>callBack()} className=" border-sky-600 border rounded py-2 px-4 text-white font-medium bg-sky-600">Sil</button>

           </div>
        </div>
    </div>);
}

export default DeleteModal;