import { ErrorIcon, SuccesIcon } from '@/svg/allSvgs'
import React from 'react'

type Props = {}

export default function ErrorPayment({}: Props) {
  return (
    <div className=' flex justify-center items-center'>

            <div className=' bg-[#E8E9F2] rounded-[20px] h-[600px] w-7/12 flex justify-center items-center my-24 shadow-lg flex-col' >
              <span className=' p-2 rounded-full bg-[#E61C23]'>  <ErrorIcon/></span>
                <p className=' text-[#808080] mt-7 text-xl'>Xəta baş verdi! </p>
            </div>

    </div>
  )
}