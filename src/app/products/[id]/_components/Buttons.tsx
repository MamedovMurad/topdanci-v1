
"use client"
import ModalMantine from '@/components/modal'
import MoveForwardModal from '@/components/modal/moveForward'
import React, { useState } from 'react'


type Props = {
    id:number
}

export default function ButtonsDetailPage({id }: Props) {
    const [isopen, setisopen] = useState<"forward"|"premium" | null>(null)




    return (
        <>


            <div className=" my-3 lg:my-0 flex justify-center gap-x-5 items-center w-full">
                <button onClick={() => setisopen("forward")} className=" w-full gap-x-5 flex h-[38px] justify-center items-center rounded-[10px] bg-[#FFCC23]">
                    <span className=" font-medium lg:text-base text-xs">Elanı irəli çək</span> <span className=" lg:text-sm font-extrabold text-[10px]">1 AZN</span>
                </button>
                <button onClick={() => setisopen("premium")}  className=" w-full flex h-[38px] text-white gap-x-5 justify-center items-center rounded-[10px] bg-primaryColor">
                    <span className=" font-medium lg:text-base text-xs">Premium et</span> <span className=" lg:text-sm text-[10px] font-extrabold">5 AZN</span>
                </button>
            </div>


            <ModalMantine
                size='500px'
                isOpen={!!isopen} closeModal={() => setisopen(null)}
                modalBody={<MoveForwardModal id={id} type={isopen||undefined} closeModal={() => setisopen(null)}
                />} />

        </>)
}