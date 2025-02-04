"use client"
import { FunctionComponent, useState } from "react";

interface PaymentModalProps {
    callBack?: () => void;
    closeModal?: () => void;
    title?: string;
    text?: string;
}

const DeleteModal: FunctionComponent<PaymentModalProps> = ({ callBack, closeModal, title = "Elanı sil?", text = 'Elan "Müddəti başa çatmış" bölməsinə düşəcək.' }) => {

    return (<div className=" w-full h-full rounded-[20px] bg-[#E8E9F2] p-8">
        <div>
            <header>{title}</header>
            <div className=" p-5 bg-slate-300 mt-2 ">
                <p>{text}</p>
            </div>

            {
                callBack && <div className=" flex justify-end items-center mt-4 gap-x-4 ">
                    <button className="  border-primaryColor border rounded py-2 px-4" onClick={closeModal}>İmtina</button>
                    <button onClick={() => callBack()} className=" border-primaryColor border rounded py-2 px-4 text-white font-medium  bg-primaryColor">Sil</button>

                </div>
            }
        </div>
    </div>);
}

export default DeleteModal;