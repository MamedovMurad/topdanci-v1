"use client"; // Enables client-side interactivity
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { addFavorite, deleteFav } from "@/helper/api/products";
import { HeardSVG } from "@/svg/allSvgs";

const ProductRefreshButton = ({ loading, id, isFav, callBack, className="cursor-pointer ",color }: { loading: boolean, id: number, isFav: boolean, callBack?: any, className?:string , color?:string }) => {
    const router = useRouter();

    const refreshData = (e?:any) => {
        if (isFav) {
            return deleteFav(id).then(() => {
         
                callBack && callBack()
            })
        }
        addFavorite(id).then(() => {
   
            callBack && callBack()
        })
    };

    return (


        loading ? <span className=" text-xs">loading...</span> :
            <span onClick={refreshData} className={className}>
                <HeardSVG color={(color&&!isFav)?"white":undefined} fill={isFav ? "#E51C23" : undefined} /></span>


    );
};

export default ProductRefreshButton;
