import Submenu from "@/components/submenu";
import { FunctionComponent } from "react";

interface PaymentsPageProps {

}

const PaymentsPage: FunctionComponent<PaymentsPageProps> = () => {
    const columns = [
        { name: "Elan" }, { name: "Elanın Adı" },
        { name: "Xidmət" }, { name: "Məbləğ" },
        {name:"Mənbə"},{name:"Tarix / Saat"}
    ]
    return (
    <section className=" mb-20">  <Submenu activeElem="payments" />
    <div className=" bg-[#E8E9F2] rounded-[20px] pb-5 mt-5">
        <header className="px-7 ">
            <ul className=" flex items-center justify-between  border-b border-[#000000]">
                {
                    columns.map((item)=>(
                        <li key={item.name} className=" p-4">
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </header>
        <div>
            <ul>
                <li className=" even:bg-[#FCFCFF] px-7 ">
                    <ul className=" py-[10px] flex items-center justify-between w-full ">
                        <li>#42973758</li>
                        <li>Nar nömrə –...</li>
                        <li>İrəli çək 9 dəfə</li>
                        <li>1,40 AZN</li>
                        <li>Bank kartı</li>
                        <li>21.11.2024 11:02</li>
                    </ul>
                </li>
                <li className=" even:bg-[#FCFCFF] px-7 ">
                    <ul className=" py-[10px] flex items-center justify-between w-full ">
                        <li>#42973758</li>
                        <li>Nar nömrə –...</li>
                        <li>İrəli çək 9 dəfə</li>
                        <li>1,40 AZN</li>
                        <li>Bank kartı</li>
                        <li>21.11.2024 11:02</li>
                    </ul>
                </li>
                <li className=" even:bg-[#FCFCFF] px-7 ">
                    <ul className=" py-[10px] flex items-center justify-between w-full ">
                        <li>#42973758</li>
                        <li>Nar nömrə –...</li>
                        <li>İrəli çək 9 dəfə</li>
                        <li>1,40 AZN</li>
                        <li>Bank kartı</li>
                        <li>21.11.2024 11:02</li>
                    </ul>
                </li>
                <li className=" even:bg-[#FCFCFF] px-7 ">
                    <ul className=" py-[10px] flex items-center justify-between w-full ">
                        <li>#42973758</li>
                        <li>Nar nömrə –...</li>
                        <li>İrəli çək 9 dəfə</li>
                        <li>1,40 AZN</li>
                        <li>Bank kartı</li>
                        <li>21.11.2024 11:02</li>
                    </ul>
                </li>
                <li className=" even:bg-[#FCFCFF] px-7 ">
                    <ul className=" py-[10px] flex items-center justify-between w-full ">
                        <li>#42973758</li>
                        <li>Nar nömrə –...</li>
                        <li>İrəli çək 9 dəfə</li>
                        <li>1,40 AZN</li>
                        <li>Bank kartı</li>
                        <li>21.11.2024 11:02</li>
                    </ul>
                </li>
          
            </ul>
        </div>
    </div>
    </section>);
}

export default PaymentsPage;