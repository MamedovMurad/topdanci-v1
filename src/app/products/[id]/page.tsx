
import Banner from "@/components/banner";
import ProductRefreshButton from "@/components/heard";
import MobileSingleSlider from "@/components/ui/mobileSingleSlider";
import ImageCarousel from "@/components/ui/productDetailCarousel";
import { HeardContainer } from "@/containers/heardContainer";
import ProductsContainer from "@/containers/product";
import { getProductDetail } from "@/helper/api/products";
import { HeardSVG, PhoneSVG, UserSVG } from "@/svg/allSvgs";
import { IAdvert } from "@/types/Model";
import { FunctionComponent } from "react";
import ButtonsDetailPage from "./_components/Buttons";

interface ProductDetailPageProps {
    params: any
}

const ProductDetailPage: FunctionComponent<ProductDetailPageProps> = async ({ params }) => {
    const { id } = await params;  // Assuming params.id is the dynamic part of your URL
    const { data ,similar_adverts}: { data: IAdvert,similar_adverts:IAdvert[] } = await getProductDetail(id);

    




    if (!data) {
        return null
    }
    return (
        <main className=" ">
            <section>
                <Banner isOpen={false}/>
                <div className="container mx-auto mt-2">
                    <div className="lg:flex gap-x-5 items-center justify-between h-max">
                        <div className=" w-7/12 h-max hidden lg:block">
                            <ImageCarousel images={data.images} /></div>
                        {/* mobile */}
                        <div className=" block lg:hidden mb-5">
                            <MobileSingleSlider images={data.images}  />
                        </div>
                        <div className=" px-5 lg:px-0 lg:w-5/12 lg:flex flex-col justify-between items-center gap-y-5 h-full">
                            <div className=" w-full">
                                <div className=" rounded-[10px] bg-[#F1F3F7] py-5 lg:px-7 px-5">
                                    <div className="flex items-center gap-x-5">
                                        <button className={" flex justify-center items-center w-[74px] h-5 rounded-md   capitalize " +
                                            (data.advert_type === "seller" ? "bg-primaryColor text-white"
                                            : "bg-buttonColor")}>
                                            {data.advert_type}</button>
                                            <HeardContainer id={data.id}/>
                                    
                                    </div>
                                    <h3 className=" font-medium lg:text-2xl text-xl lg:mt-5 mt-2">{data.title}</h3>
                                    <div className="lg:mt-5 mt-2 flex items-center ">
                                        <div className=" pr-2 text-[#808080] text-sm font-medium border-r border-[#808080]">
                                            <p>Minumum sifariş</p>
                                            <p>Qiymət</p>
                                        </div>
                                        <div className="pl-2 text-sm font-medium">
                                            <p className=" text-primaryColor">{data.min_order}</p>
                                            <p className=" text-[#2B2A2A]">{data?.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" hidden  w-full bg-[#F1F3F7] rounded-[10px] py-5 px-6 lg:flex  justify-between items-center ">
                                <div>
                                    <div className=" flex  items-center text-base font-medium gap-x-3">
                                        <span><UserSVG color="#808080" /></span>
                                        <span>{data.user_name}</span>
                                    </div>
                                    <div className=" flex items-center text-base font-medium gap-x-3 mt-5">
                                        <span><PhoneSVG /></span>
                                        <span>{data.user_tel}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className=" text-sm font-normal text-[#808080]">Elanın nömrəsi:{data.id} </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">Baxışların sayı: {data.views_count}   </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">{data.date} </p>
                                </div>
                            </div>
                            {/* buttons */}
           <ButtonsDetailPage id={data.id}/>
                            {/* mobile */}

                            <div className=" block lg:hidden ">
                                <div className=" bg-[#F1F3F7] flex justify-between p-5 rounded-[10px]">
                                    <div>
                                        <p className=" text-[#808080] text-sm font-normal">Şəhər</p>
                                        <p className=" text-[#808080] text-sm font-normal mt-2">Malın növü</p>
                                        <p className=" text-[#808080] text-sm font-normal mt-2">Pərakəndə satış</p>

                                    </div>
                                    <div className=" text-sm min-w-28">
                                        <p>{data.city}</p>
                                        <p className=" mt-2">{data.category.name}</p>
                                      
                                        <p className=" mt-2">Bəli</p>
                                    
                                    </div>
                                </div>
                            </div>
                            {/* mobile */}
                            <div className=" lg:hidden mt-3  w-full bg-[#F1F3F7] rounded-[10px] py-5 px-6 flex  justify-between items-center ">
                                <div>
                                    <div className=" flex  items-center text-sm font-medium gap-x-3">
                                        <span><UserSVG size="16" color="#808080" /></span>
                                        <span>{data.user_name}</span>
                                    </div>
                                    <div className=" flex items-center text-sm font-medium gap-x-3 mt-5">
                                        <span><PhoneSVG size="16" /></span>
                                        <span>{data.user_tel}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className=" text-sm font-normal text-[#808080]">Elanın nömrəsi:{data.id} </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">Baxışların sayı: {data.views_count}   </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">{data.date} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" mt-7 lg:mb-10 mb-5 px-5 lg:px-0">
                <div className="container mx-auto">
                    <div className="lg:flex gap-x-14">
                        <div className=" lg:w-8/12">
                            <h4 className=" font-medium text-base">Ətraflı</h4>
                            <p className=" font-normal text-sm mt-2">{data.detail_info}</p>
                        </div>
                        <div className=" hidden lg:block w-4/12">
                            <div className=" bg-[#F1F3F7] flex justify-between p-5 rounded-[10px]">
                                <div>
                                    <p className=" text-[#808080] text-sm font-normal">Şəhər</p>

                                    <p className=" text-[#808080] text-sm font-normal mt-2">Malın növü</p>
                                    <p className=" text-[#808080] text-sm font-normal mt-2">Pərakəndə satış</p>

                                </div>
                                <div className=" text-sm min-w-28">
                                    <p>{data.city}</p>
                                    <p className=" mt-2">{data.category.name}</p>
                              
                                    <p className=" mt-2">Bəli</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto mb-12 ">
                    <h3 className=" font-medium text-base hidden lg:block lg:mb-2">Bənzər elanlar</h3>

                     <ProductsContainer list={similar_adverts} /> 


                </div>
            </section>
        </main>);
}

export default ProductDetailPage;