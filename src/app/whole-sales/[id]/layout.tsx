import { EmptySVG, LocationSvg, PhoneSVG } from "@/svg/allSvgs";
import Image from "next/image";
import NavLinkProduct from "./_components/navlink";
import { FunctionComponent, ReactNode } from "react";

interface LayoutWholeSalesProps {
    children: ReactNode;
    params: any;
}

const LayoutWholeSales: FunctionComponent<LayoutWholeSalesProps> = async ({ params, children }) => {
    // Await the params if required
    const { id } = await params;  // Assuming params.id is the dynamic part of your URL

    return (
        <main>
            <section
                className="h-[500px] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/topdanic_banner.png')" }}
            ></section>

            <section className="-translate-y-12">
                <div className="container mx-auto">
                    <div className="flex gap-x-7 bg-[#F0F0F0] overflow-hidden rounded-2xl p-1 pt-6">
                        <div>
                            <div className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden">
                                <Image alt="logo" src={"/topdanci.png"} layout="fill" />
                            </div>
                        </div>
                        <div className="text-black">
                            <h2 className="font-bold text-xl">EFOR MMC</h2>
                            <p className="text-sm mt-2">
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </p>
                            <div className="text-xs font-normal text-primaryColor mt-2">
                                <span>Hər gün /8:00-19:00</span>
                            </div>
                            <div>
                                <button className="mt-1 flex w-[70px] bg-primaryColor h-[18px] items-center justify-center text-xs text-white rounded">52 Elan</button>
                            </div>
                        </div>
                        <div>
                            <div className="w-[400px] flex justify-center items-center text-black">
                                <div>
                                    <div>
                                        <p className="font-medium text-[#808080] text-sm">Pərakəndə satış mümkündür</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="w-full flex gap-x-4 items-center">
                                            <span>Bəli</span> <EmptySVG />
                                        </div>
                                        <div className="w-full flex gap-x-4 items-center">
                                            <span>Xeyr</span> <EmptySVG />
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <div className="flex items-center gap-x-3">
                                            <PhoneSVG color="#E51C23" />
                                            <span>055 973 63 13</span>
                                        </div>
                                        <div className="flex items-center gap-x-3 mt-4">
                                            <LocationSvg color="#E51C23" />
                                            <span>Bakı şəh.Mikayıl Rəfili 39</span>
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
