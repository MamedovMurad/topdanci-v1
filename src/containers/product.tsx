"use client"
import ProductCard from "@/components/Card/productCard";
import { FunctionComponent } from "react";

// interface ProductsContainerProps {
   
// }

const ProductsContainer: FunctionComponent = () => {
    const classname="grid  gap-x-5 gap-y-5 grid-cols-4"
    return (<div className={classname}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>);
}

export default ProductsContainer;