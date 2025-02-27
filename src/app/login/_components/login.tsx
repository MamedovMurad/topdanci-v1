import { api } from "@/helper/api";
import { login } from "@/helper/api/auth";
import { formatPhoneNumber } from "@/hooks/phoneFormatter";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";

interface LoginPageProps {
    phone:string|null,
    callBack?:any
}
 
const LoginPage: FunctionComponent<LoginPageProps> = ({phone,callBack}) => {
       const [otp, setotp] = useState("");
       const router =  useRouter()
       const handleChange = (e:any) => {
        if (e.target.value.length <= 4) {
            setotp(e.target.value);
        }
      };


      const handleSubmit = async (e: any) => {
        e.preventDefault();
     
        try {
          const response = await axios.post(
            "https://api.topdanchi.az/api/v1/login",
            { tel: phone , otp_code:otp},
          
            {
               
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
           
              },
            }
          );
      
          if (response.data) {
           if (typeof window !="undefined") {
            localStorage.setItem('agent',response.data.token)
            localStorage.setItem('user',JSON.stringify(response.data.user))
            api.setHeader("Authorization","Bearer " + localStorage.getItem("agent"))
            callBack&&callBack()
          if (!callBack) {
            await router.push('/')
          }
           }
          }
        //   console.log("Response:", response.data);
        } catch (error) {
         
        }
      };

    return ( <form action="" onSubmit={handleSubmit}  className="  mt-20 lg:py-11 lg:px-[92px] lg:bg-[#f2f2f2a0]  lg:w-[550px] lg:h-[510px] bg-[rgba(242, 242, 242, 0.8)]  lg:border-[2px] border-white rounded-[20px]" style={{
        backdropFilter: "blur(17px)"
    }}>
         <h1 className=" lg:text-3xl text-2xl font-bold">Nömrənin təsdiqlənməsi</h1>
         <p className=" mt-5 text-[#111] lg:text-base text-sm">{ formatPhoneNumber(phone||"")+""} nömrəsinə SMS-kod göndərildi</p>

         <div className=" relative">
                <input value={otp} onChange={handleChange} type="number" name="otp_code" 
                    className="  mt-3 text-base pl-4 h-14 text-[#00000080] w-full outline-none border-none rounded-[10px] bg-white" />

            </div> 

            <button className=" flex mt-5 justify-center items-center rounded-[10px] bg-primaryColor text-white font-bold text-2xl w-full h-[50px]">Təstiqlə</button>
            <div className=" flex justify-center mt-5">
               <Link href={'/'} className=" rounded-[10px] h-[50px] w-[170px] bg-white flex justify-center items-center">Ləğv et</Link>
            </div>
           
    </form> );
}
 
export default LoginPage;