"use client"
import axios from "axios";
import { api } from "@/helper/api";
import { otpSend } from "@/helper/api/auth";
import { GoolgeSVG } from "@/svg/allSvgs";
import { FunctionComponent, useState } from "react";
import SendOtp from "./_components/sendOtp";
import LoginPage from "./_components/login";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
 const [secondPage, setsecondPage] = useState<null|string>(null);

    return (
        <>
            <main className=" lg:flex hidden   justify-center h-[100svh] w-full bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/Group.png')" }}>
           {
            secondPage?<LoginPage phone={secondPage}/>:<SendOtp callBack={setsecondPage}/>
           }   
            </main>



            {/* mobile */}
            <main className=" lg:hidden   justify-center w-full bg-no-repeat bg-center bg-contain" >
                <div className="px-5">
                    <form action="" className=" mt-0  bg-[#E8E9F2] px-14 py-7  w-full h-[355px]   border-[2px] border-white rounded-[20px]" >
                        <h1 className=" text-xl font-bold">Kabinetə Giriş</h1>
                        <div>
                            <input type="tel" placeholder="İstifadəçi adi" className=" mt-3 text-base pl-4 h-10 w-full outline-none border-none rounded-[10px] bg-white" />
                            {/* <input type="password" placeholder="Şifrə" className=" mt-3 text-base pl-4 h-10 w-full outline-none border-none rounded-[10px] bg-white" /> */}

                            <button className=" flex mt-3 justify-center items-center rounded-[10px] bg-primaryColor text-white font-bold text-sm w-full h-[32px]">Daxil ol</button>
                            <p className=" mt-3 text-base text-center">və ya</p>

                            <div className=" flex gap-x-2 items-center mt-3">
                                <button className=" flex-none w-[60px] h-[40px] rounded-[10px] bg-[#181D32] flex justify-center items-center">
                                    <GoolgeSVG size="23.5" />
                                </button>
                                <button className=" w-full  h-[40px] rounded-[10px] bg-[#181D32] text-sm text-white font-bold">Telefon nömrəsi ilə</button>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <button className=" outline-none border-none text-[10px] ">Qeydiyyatdan keç</button>
                                <button className=" outline-none border-none text-[10px]">Parolu unutmusunuz?</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div style={{ backgroundImage: "url('/loginmobile.png')" }} className="h-[350px] bg-center">

                </div>
            </main>
        </>
    );
}

export default Login;