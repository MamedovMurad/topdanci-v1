import { FunctionComponent } from "react";

interface PaymentsProps {
    
}
 
const Payments: FunctionComponent<PaymentsProps> = () => {
    return ( <div>
        <div className="flex w-[360px] h-[90px] items-center justify-center gap-x-7 bg-[#E8E9F2] rounded-[20px]">
            <div><p className=" text-xl font-normal text-[#000000B2]">Şəxsi hesab</p> <p className=" text-xl font-medium">100 AZN</p></div>
           <div>
           <button className="text-white font-bold text-xl bg-primaryColor rounded-[10px] flex justify-center items-center w-[170px] h-[45px]">Artır</button>
           </div>
        </div>
    </div> );
}
 
export default Payments;