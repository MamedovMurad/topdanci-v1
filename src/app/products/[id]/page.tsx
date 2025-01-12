import ImageCarousel from "@/components/ui/productDetailCarousel";
import ProductsContainer from "@/containers/product";
import { HeardSVG, PhoneSVG, UserSVG } from "@/svg/allSvgs";
import { FunctionComponent } from "react";

interface ProductDetailPageProps {

}

const ProductDetailPage: FunctionComponent<ProductDetailPageProps> = () => {
    return (
        <main className=" pt-9">
            <section>
                <div className="container mx-auto">
                    <div className="flex gap-x-5 items-center justify-between h-max">
                        <div className=" w-7/12 h-max">
                            <ImageCarousel /></div>
                        <div className=" w-5/12 flex flex-col justify-between items-center gap-y-5 h-full">
                            <div>
                                <div className=" rounded-[10px] bg-[#F1F3F7] py-5 px-7">
                                    <div className="flex items-center gap-x-5">
                                        <button className=" flex justify-center items-center w-[74px] h-5 rounded-md bg-primaryColor text-white">Alıcı</button>
                                        <span><HeardSVG /></span>
                                    </div>
                                    <h3 className=" font-medium text-2xl mt-5">Samsung televizorlarını topdan alıram</h3>
                                    <div className="mt-5 flex items-center ">
                                        <div className=" pr-2 text-[#808080] text-sm font-medium border-r border-[#808080]">
                                            <p>Minumum sifariş</p>
                                            <p>Qiymət</p>
                                        </div>
                                        <div className="pl-2 text-sm font-medium">
                                            <p className=" text-primaryColor">5 Ədəd</p>
                                            <p className=" text-[#2B2A2A]">Razılaşma yolu ilə</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full bg-[#F1F3F7] rounded-[10px] py-5 px-6 flex  justify-between items-center ">
                                <div>
                                    <div className=" flex  items-center text-base font-medium gap-x-3">
                                        <span><UserSVG color="#808080" /></span>
                                        <span>Fəqan</span>
                                    </div>
                                    <div className=" flex items-center text-base font-medium gap-x-3 mt-5">
                                        <span><PhoneSVG /></span>
                                        <span>055 973 63 13</span>
                                    </div>
                                </div>
                                <div>
                                    <p className=" text-sm font-normal text-[#808080]">Elanın nömrəsi:35537250 </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">Baxışların sayı: 75   </p>
                                    <p className=" text-sm font-normal text-[#808080] mt-2">Yeniləndi: Bugün, 09:55 </p>
                                </div>
                            </div>
                            {/* buttons */}
                            <div className=" flex justify-center gap-x-5 items-center w-full">
                                <button className=" w-full gap-x-5 flex h-[38px] justify-center items-center rounded-[10px] bg-[#FFCC23]">
                                    <span className=" font-medium text-base">Elanı irəli çək</span> <span className=" text-sm font-extrabold">1 AZN</span>
                                </button>
                                <button className=" w-full flex h-[38px] text-white gap-x-5 justify-center items-center rounded-[10px] bg-primaryColor">
                                    <span className=" font-medium text-base">Premium et</span> <span className=" text-sm font-extrabold">5 AZN</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" mt-7 mb-10">
                <div className="container mx-auto">
                    <div className="flex gap-x-14">
                        <div className=" w-8/12">
                            <h4 className=" font-medium text-base">Ətraflı</h4>
                            <p className=" font-normal text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum imperdiet, efficitur lorem et, accumsan leo.
                                Vestibulum elementum tortor vel placerat fermentum. Donec auctor tincidunt nisl quis euismod. Sed in venenatis neque.
                                Maecenas auctor ultrices lectus eu placerat. Maecenas pharetra quam vitae dapibus consectetur. Nulla quam ipsum, tristique quis elementum in, blandit eget
                                lacus. Fusce scelerisque venenatis mauris sit amet consectetur. Phasellus sit amet semper </p>
                        </div>
                        <div className=" w-4/12">
                            <div className=" bg-[#F1F3F7] flex justify-between p-5 rounded-[10px]">
                                <div>
                                    <p className=" text-[#808080] text-sm font-normal">Şəhər</p>
                                    <p className=" text-[#808080] text-sm font-normal mt-2">Diaqonal</p>
                                    <p className=" text-[#808080] text-sm font-normal mt-2">Malın növü</p>
                                    <p className=" text-[#808080] text-sm font-normal mt-2">Smart?</p>
                                    <p className=" text-[#808080] text-sm font-normal mt-2">Marka</p>
                                </div>
                                <div className=" text-sm min-w-28">
                                    <p>Bakı</p>
                                    <p className=" mt-2">82 sm (32")</p>
                                    <p className=" mt-2">Televizorlar</p>
                                    <p className=" mt-2">Bəli</p>
                                    <p className=" mt-2">Shivaki</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto mb-12 ">
                    <h3 className=" font-medium text-base">Bənzər elanlar</h3>
                   
                    <ProductsContainer />
             
                  
                </div>
            </section>
        </main>);
}

export default ProductDetailPage;