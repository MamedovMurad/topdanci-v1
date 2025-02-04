import { getWholeSalerDetail } from "@/helper/api/wholeSalers";
import { FunctionComponent, ReactNode } from "react";

interface AboutWholeSaleProps {
    params: any;
}

const AboutWholeSale: FunctionComponent<AboutWholeSaleProps> = async ({params}) => {
    const { id } = await params;  // Assuming params.id is the dynamic part of your URL
    const {data}= await getWholeSalerDetail(52);
    
    console.log(data);
    
    
    
        if (!data) {
            return null
        }

    return (<div className=" mt-8 lg:px px-5">
        <div className="lg:px-[95px] lg:py-14 py-4 px-7 bg-[#F0F0F0] lg:rounded-[20px] rounded">
            <h2 className=" font-bold lg:text-4xl text-xs">{data.title}</h2>
            <div>
                <p className=" lg:text-sm  text-[6px] font-medium lg:mt-10 mt-3">{data.summary}<br />
                    <br />
                  {data.description_text}</p>
            </div>

            <div className="mt-10">
            <iframe className=" w-full lg:h-[598px] h-[188px]" height="598" src={data.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div>);
}

export default AboutWholeSale;