
"use client"
import ProductsContainer from "@/containers/product";
import { getUserRejectedProducts } from "@/helper/api/products";
import { FunctionComponent, useEffect, useState } from "react";
import Empty from "../_components/empty";

interface UnpublishedOnesPageProps {
    
}
 
const UnpublishedOnesPage: FunctionComponent<UnpublishedOnesPageProps> = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      getUserRejectedProducts().then((data)=>{
        setproducts(data.data.data)
        
      })
    }, []);
    return ( <div className=" px-5 lg:px-0">
   {
    products?.length>0?  <ProductsContainer status="unpublished" list={products}/> :
    <Empty text="Hazırda unpublished elanınız yoxdur"  />
   }
    </div> );
}
 
export default UnpublishedOnesPage;