"use client"
import { GoolgeSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <>
          <main className=" lg:flex hidden   justify-center h-[100svh] w-full bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/Group.png')" }}>
            <form action="" className=" mt-20 py-11 px-[92px] w-[550px] h-[510px] bg-[rgba(242, 242, 242, 0.8)]  border-[2px] border-white rounded-[20px]" style={{
                backdropFilter: "blur(9px)"
            }}>
                <h1 className=" text-3xl font-bold">Kabinetə Giriş</h1>
                <div>
                    <input type="text" placeholder="İstifadəçi adi" className=" mt-3 text-base pl-4 h-14 w-full outline-none border-none rounded-[10px] bg-white" />
                    <input type="password" placeholder="Şifrə" className=" mt-3 text-base pl-4 h-14 w-full outline-none border-none rounded-[10px] bg-white" />

                    <button className=" flex mt-3 justify-center items-center rounded-[10px] bg-primaryColor text-white font-bold text-2xl w-full h-[50px]">Daxil ol</button>
                    <p className=" mt-3 text-base text-center">və ya</p>

                    <div className=" flex gap-x-5 items-center mt-3">
                        <button className=" w-[95px] h-[63px] rounded-[10px] bg-[#181D32] flex justify-center items-center">
                            <GoolgeSVG/>
                        </button>
                        <button className=" w-[248px] h-[63px] rounded-[10px] bg-[#181D32] text-xl text-white font-bold">Telefon nömrəsi ilə</button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <button className=" outline-none border-none text-base ">Qeydiyyatdan keç</button>
                        <button className=" outline-none border-none text-base">Parolu unutmusunuz?</button>
                    </div>
                </div>
            </form>
        </main>
{/* mobile */}
        <main className=" lg:hidden   justify-center w-full bg-no-repeat bg-center bg-contain" >
          <div className="px-5">
          <form action="" className=" mt-0  bg-[#E8E9F2] px-14 py-7  w-full h-[355px]   border-[2px] border-white rounded-[20px]" >
                <h1 className=" text-xl font-bold">Kabinetə Giriş</h1>
                <div>
                    <input type="text" placeholder="İstifadəçi adi" className=" mt-3 text-base pl-4 h-10 w-full outline-none border-none rounded-[10px] bg-white" />
                    <input type="password" placeholder="Şifrə" className=" mt-3 text-base pl-4 h-10 w-full outline-none border-none rounded-[10px] bg-white" />

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