"use client"
import ProductsContainer from "@/containers/product";
import { FunctionComponent, useEffect, useState } from "react";
import Empty from "../_components/empty";
import { getUserPendingProducts } from "@/helper/api/products";

interface PendingsPageProps {
    
}
 
const PendingsPage: FunctionComponent<PendingsPageProps> = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      getUserPendingProducts().then((data)=>{
        setproducts(data.data.data)
        
      })
    }, []);
    return ( <div className=" px-5 lg:px-0">
   {
    products?.length>0?  <ProductsContainer status="pending" list={products}/> :
    <Empty text="Hazırda pending elanınız yoxdur"  />
   }
    </div> );
}
 
export default PendingsPage;