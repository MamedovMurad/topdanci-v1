import { GoolgeSVG } from "@/svg/allSvgs";
import axios from "axios";
import { FunctionComponent, useState } from "react";

interface SendOtpProps {
    callBack:(e:any)=>void
}

const SendOtp: FunctionComponent<SendOtpProps> = ({callBack}) => {
    const [phone, setphone] = useState("994");
    const handlePost = async (e: any) => {
        e.preventDefault();
      
        try {
          const response = await axios.post(
            "https://api.topdanchi.az/api/v1/otp",
            { tel: phone },
          
            {
               
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
           
              },
            }
          );
      
          if (response.data) {
            callBack(phone)
          }
        //   console.log("Response:", response.data);
        } catch (error) {
         
        }
      };



      const handleChange = (e:any) => {
        if (e.target.value.length <= 12) {
          setphone(e.target.value);
        }
      };
    return (<form action="" onSubmit={handlePost} className=" mt-20 lg:py-11 lg:px-[92px] lg:w-[550px] lg:h-[510px] lg:bg-[#f2f2f2a0]   lg:border-[2px] border-white rounded-[20px]" style={{
        backdropFilter: "blur(9px)"
    }}>
        <div className=" h-full w-full flex flex-col justify-center">

        <h1 className=" lg:text-3xl text-2xl font-bold">Kabinetə Giriş</h1>
        <div>
            <div className=" relative">
                <input type="tel" name="phone" placeholder="+994" value={phone} onChange={handleChange}
                    className="  mt-3 text-base pl-4 h-14 text-[#00000080] w-full outline-none border-none rounded-[10px] bg-white" />

            </div>                    {/* <input type="password" placeholder="Şifrə" className=" mt-3 text-base pl-4 h-14 w-full outline-none border-none rounded-[10px] bg-white" /> */}

            <button className=" flex mt-3 justify-center items-center rounded-[10px] bg-primaryColor text-white font-bold text-2xl w-full h-[50px]">Daxil ol</button>
            {/* <p className=" mt-3 text-base text-center">və ya</p>

            <div className=" flex gap-x-5 items-center mt-3">
                <button className=" w-[95px] h-[63px] rounded-[10px] bg-[#181D32] flex justify-center items-center">
                    <GoolgeSVG />
                </button>
                <button className=" w-[248px] h-[63px] rounded-[10px] bg-[#181D32] text-xl text-white font-bold">Telefon nömrəsi ilə</button>
            </div>
            <div className="flex items-center justify-between mt-3">
                <button className=" outline-none border-none text-base ">Qeydiyyatdan keç</button>
                <button className=" outline-none border-none text-base">Parolu unutmusunuz?</button>
            </div> */}
        </div>

        </div>
    
    </form>);
}

export default SendOtp;