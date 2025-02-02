"use client"

import { FunctionComponent, useEffect, useState } from "react";

import Empty from "./_components/empty";
import { getUserActiveProducts } from "@/helper/api/products";
import ProductsContainer from "@/containers/product";


interface MyProductsProps {

}

const MyProducts: FunctionComponent<MyProductsProps> = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
  
    
    getUserActiveProducts().then((data)=>{
      setproducts(data.data.data)
      
    })
  }, []);
  return (
<div className=" px-5 lg:px-0">
  {
    products?.length>0?   <ProductsContainer list={products}/> :<Empty text="Hazırda aktiv elanınız yoxdur" button />
  }

</div>);
}

export default MyProducts;