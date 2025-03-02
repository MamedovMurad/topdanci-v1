
"use client"
import Submenu from "@/components/submenu";
import PaginationUI from "@/components/ui/pagination";
import { getPaymentHistory } from "@/helper/api/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import swal from "sweetalert";
interface PaymentsPageProps {

}

const PaymentsPage: FunctionComponent<PaymentsPageProps> = () => {

    const [data, setdata] = useState({ data: [], pagination: { total: 0, perPage: 0 } })

    const searchParams = useSearchParams();

    const page = searchParams.get("page");

    const columns = [
        { name: "Elan", width: "w-20" }, { name: "Elanın Adı", width: "flex-1" },
        { name: "Xidmət", width: "flex-1" }, { name: "Məbləğ", width: "w-20" },
        { name: "Mənbə", width: "flex-1" }, { name: "Tarix / Saat", width: "flex-1" }
    ]

    //    {
    //     "id": "#2",
    //     "advert_name": "Vel sed.",
    //     "advert_id": 4770,
    //     "service": "3 dəfə (8 saatdan bir)-1,00 AZN",
    //     "amount": "1 Azn",
    //     "payment_type": "Balansdan istifadə",
    //     "date": "09.11.2023 00:09"
    // },
    useEffect(() => {
        getPaymentHistory(page || "").then((data) => {
            setdata(data.data)
        }).catch(()=>{
             swal({
                 
                title: 'Sistemdə xəta baş verdi!',
                text: 'Sistemdə xəta baş verdi!',
                icon: "error",

            })
        })
    }, [page])



    return (
        <section className=" mb-20">  <Submenu activeElem="payments" />
            <div className=" bg-[#E8E9F2] rounded-[20px] pb-5 mt-5 overflow-x-scroll ">
                <div className="min-w-[900px] lg:overflow-x-visible">
                    <header className="px-7 ">
                        <ul className=" flex items-center gap-x-3 border-b border-[#000000]">
                            {
                                columns.map((item) => (
                                    <li key={item.name} className={" p-4 " + (item.width)}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </header>
                    <div className="">
                        <ul>
                            {
                                data?.data?.map((item: any) => (
                                    <li key={item.id} className=" even:bg-[#FCFCFF] px-7 ">
                                        <ul className=" py-[10px] flex items-center gap-x-3 w-full ">
                                            <li className={columns[0].width + " px-4"}>{item.id}</li>
                                            <li className={columns[1].width + " px-4"}><Link className=" text-blue-500 underline" href={"/products/"+item.advert_id}>{item.advert_name}</Link></li>
                                            <li className={columns[2].width + " px-4"}>{item.service}</li>
                                            <li className={columns[3].width + " px-4"}>{item.amount}</li>
                                            <li className={columns[4].width + " px-4"}>{item.payment_type}</li>
                                            <li className={columns[5].width + " px-4"}>{item.date}</li>
                                        </ul>
                                    </li>
                                ))
                            }



                        </ul>


                    </div>
                </div>

            </div>
            <div className="mt-5 mb-3">
                <PaginationUI
                    isAuth
                    pageCount={data.pagination?.total / data?.pagination?.perPage}

                />
            </div>
        </section>);
}




export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <PaymentsPage />
        </Suspense>
    );
}