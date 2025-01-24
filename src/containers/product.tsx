"use client"
import ProductCard from "@/components/Card/productCard";
import { FunctionComponent } from "react";

 interface ProductsContainerProps {
     status?: 'expired' | 'pending' | 'active' | 'unpublished'
}

const ProductsContainer: FunctionComponent<ProductsContainerProps> = ({status}) => {
    const classname="grid  gap-x-5 gap-y-5 md:grid-cols-4 grid-cols-2 md:bg-none bg-[#EDEEF2] rounded-[20px] p-5 md:p-0"
    return (<div className={classname}>
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
        <ProductCard status={status} />
    </div>);
}

export default ProductsContainer;