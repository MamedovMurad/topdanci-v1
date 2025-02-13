"use client"
import ProductCard from "@/components/Card/productCard";
import ProductCardSkeleton from "@/components/Card/productCardSkeleton";
import { IAdvert } from "@/types/Model";
import { FunctionComponent } from "react";

 interface ProductsContainerProps {
     status?: 'expired' | 'pending' | 'active' | 'unpublished';
     list?:IAdvert[];
     callBack?:(data:any)=>void;
     loading?:boolean;
     
}

const ProductsContainer: FunctionComponent<ProductsContainerProps> = ({status,list,callBack,loading}) => {
    const classname="grid  gap-x-5 gap-y-5 lg:grid-cols-4 grid-cols-2 lg:bg-transparent bg-[#EDEEF2] rounded-[20px] p-5 lg:p-0"
    return (<div className={classname}>
        {
            loading?[1,2,3,4,5,6,7,8,9,12].map(item=>(
                <ProductCardSkeleton key={item}/>
            )):
            list?.map((item)=>(
                <ProductCard key={item.id} status={status} item={item} callBack={callBack} />
            ))
        }
   

    </div>);
}

export default ProductsContainer;