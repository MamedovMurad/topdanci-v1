"use client"
import ProductCard from "@/components/Card/productCard";
import { IAdvert } from "@/types/Model";
import { FunctionComponent } from "react";

 interface ProductsContainerProps {
     status?: 'expired' | 'pending' | 'active' | 'unpublished';
     list?:IAdvert[]
}

const ProductsContainer: FunctionComponent<ProductsContainerProps> = ({status,list}) => {
    const classname="grid  gap-x-5 gap-y-5 lg:grid-cols-4 grid-cols-2 lg:bg-transparent bg-[#EDEEF2] rounded-[20px] p-5 lg:p-0"
    return (<div className={classname}>
        {
            list?.map((item)=>(
                <ProductCard key={item.id} status={status} item={item} />
            ))
        }
   

    </div>);
}

export default ProductsContainer;