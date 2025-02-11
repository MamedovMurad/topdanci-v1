import { EmptySVG, LocationSvg, PhoneSVG, TickIcon } from "@/svg/allSvgs";
import Image from "next/image";
import NavLinkProduct from "./_components/navlink";
import { FunctionComponent, ReactNode } from "react";
import { getWholeSalerDetail } from "@/helper/api/wholeSalers";
import { formatPhoneNumber } from "@/hooks/phoneFormatter";

interface LayoutWholeSalesProps {
    children: ReactNode;
    params: any;
}

const LayoutWholeSales: FunctionComponent<LayoutWholeSalesProps> = async ({ params, children }) => {
    // Await the params if required
    const { id } = await params;  // Assuming params.id is the dynamic part of your URL
const {data}= await getWholeSalerDetail(id);

console.log(data);



    if (!data) {
        return null
    }
    
    return (
        <main>
            <section
                className="lg:h-[500px] h-[173px] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${data.cover_photo})` }}
            ></section>

            <section className="lg:-translate-y-12">
                <div className="container mx-auto">
                    <div className="lg:flex gap-x-7 lg:bg-[#F0F0F0] lg:overflow-hidden rounded-2xl p-1 pt-6">
                        <div className=" lg:block flex gap-x-7 lg:gap-x-0 px-5 lg:px-0">
                            <div className="relative lg:-translate-y-0 -translate-y-14  lg:w-[220px] lg:h-[220px] w-[120px] h-[120px] rounded-2xl overflow-hidden">
                                <Image alt="logo" src={data.logo} layout="fill" objectFit="cover"/>
                            </div>
                            <div className="lg:hidden flex  flex-col  ">
                                        <div className="flex items-center gap-x-3">
                                            <PhoneSVG color="#E51C23" />
                                            <span className=" text-[10px]">{formatPhoneNumber(data.tel)}</span>
                                        </div>
                                        <div className="flex items-center gap-x-3 mt-4">
                                            <LocationSvg color="#E51C23" />
                                            <span className=" text-[10px]">{data.address}</span>
                                        </div>
                             </div>
                        </div>
                        <div className="text-black lg:px-0 px-5 lg:-translate-y-0 -translate-y-10">
                            <h2 className="font-bold text-xl">{data.title}</h2>
                            <p className="text-sm mt-2">
                                {data.description_text}
                          </p>
                            <div className="text-xs font-normal text-primaryColor mt-2">
                                <span>{data.work_date}</span>
                            </div>
                            <div>
                                <button className="lg:mt-1 mt-2 flex w-[70px] bg-primaryColor h-[18px] items-center justify-center text-xs text-white rounded">{data.adverts_count} Elan</button>
                            </div>
                        </div>
                        <div className=" lg:block hidden">
                            <div className="w-[400px] flex justify-center items-center text-black">
                                <div>
                                    <div>
                                        <p className="font-medium text-[#808080] text-sm">Pərakəndə satış mümkündür</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="w-full flex gap-x-4 items-center">
                                            <span>Bəli</span> {data.retail_sales===1?<TickIcon/>:<EmptySVG />}
                                        </div>
                                        <div className="w-full flex gap-x-4 items-center">
                                            <span>Xeyr</span> {data.retail_sales===0?<TickIcon/>:<EmptySVG />}
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <div className="flex items-center gap-x-3">
                                            <PhoneSVG color="#E51C23" />
                                            <span>{formatPhoneNumber(data.tel)}</span>
                                        </div>
                                        <div className="flex items-center gap-x-3 mt-4">
                                            <LocationSvg color="#E51C23" />
                                            <span>{data.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Ensure that params.id is correctly passed to the link */}
                    <NavLinkProduct url1={`/whole-sales/${id}`} url2={`/whole-sales/${id}/info`} />
                    {children}
                </div>
            </section>
        </main>
    );
};

export default LayoutWholeSales;
